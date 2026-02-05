// Loader: dynamically load sketch scripts and instantiate p5 in instance mode
(function(){
  const COUNT = 31;
  const select = document.getElementById('sketch-select');
  const holder = document.getElementById('sketch-holder');
  let currentP5 = null;
  let currentScript = null;

  function sketchPath(n){
    return `sketches/s${String(n).padStart(2,'0')}/sketch.js`;
  }

  for(let i=1;i<=COUNT;i++){
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Sketch ${i}`;
    select.appendChild(opt);
  }

  function clearHolder(){
    holder.innerHTML = '';
    const canvasWrap = document.createElement('div');
    canvasWrap.id = 'sketch-canvas-wrap';
    holder.appendChild(canvasWrap);
    return canvasWrap;
  }

  function loadSketch(n){
    const url = sketchPath(n);
    if(currentP5){ try{ currentP5.remove(); }catch(e){} currentP5 = null; }
    if(currentScript){ currentScript.remove(); currentScript = null; }
    // ensure container
    clearHolder();
    window.createSketch = undefined;
    currentScript = document.createElement('script');
    currentScript.src = url;
    currentScript.onload = function(){
      if(typeof window.createSketch === 'function'){
        const c = document.getElementById('sketch-canvas-wrap');
        currentP5 = new p5(window.createSketch, c);
        // cleanup exported symbol to avoid clashes
        window.createSketch = undefined;
      } else {
        console.error('Sketch did not expose createSketch:', url);
      }
    };
    currentScript.onerror = function(){ console.error('Failed to load', url); };
    document.body.appendChild(currentScript);
  }

  select.addEventListener('change', (e)=>{ loadSketch(Number(e.target.value)); });
  // load first
  select.value = 1;
  loadSketch(1);
})();
