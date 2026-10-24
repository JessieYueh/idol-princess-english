/* Vector strokes: separate touch and pen/mouse streams, no line on pen-up. */
(function(){'use strict';
const copy=x=>x.map(s=>s.slice());
class InkPad {
 constructor(host,key){
  this.host=host;this.key='sf5-ink-v1:'+key;this.strokes=[];this.active=null;this.mode='write';this.listeners=[];
  try{const data=JSON.parse(localStorage.getItem(this.key)||'[]');if(Array.isArray(data)&&data.length<2000&&data.every(s=>Array.isArray(s)&&s.length<30000&&s.every(p=>p===null||p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=0&&p.x<=1&&p.y>=0&&p.y<=1)))this.strokes=data}catch(_){}
  host.className='pad';host.innerHTML='<div class="pad-tools"><button type="button" data-ink="undo">↶ 復原</button><button type="button" data-ink="redo">↷ 重做</button><button type="button" data-ink="clear">清除</button></div><canvas aria-label="手寫作答區"></canvas><p class="pad-help">Apple Pencil · 手指 · 滑鼠</p>';
  this.c=host.querySelector('canvas');this.ctx=this.c.getContext('2d');this.history=[copy(this.strokes)];this.at=0;
  const on=(el,name,fn,opts)=>{el.addEventListener(name,fn,opts);this.listeners.push(()=>el.removeEventListener(name,fn,opts))};
  this.undo=host.querySelector('[data-ink=undo]');this.redo=host.querySelector('[data-ink=redo]');
  on(this.undo,'click',()=>{if(this.active||this.at===0)return;this.strokes=copy(this.history[--this.at]);this.save();this.draw()});
  on(this.redo,'click',()=>{if(this.active||this.at>=this.history.length-1)return;this.strokes=copy(this.history[++this.at]);this.save();this.draw()});
  on(host.querySelector('[data-ink=clear]'),'click',()=>{if(this.active||!this.strokes.length)return;this.strokes=[];this.checkpoint();this.draw()});
  on(this.c,'pointerdown',e=>{if(this.mode==='scroll'||e.pointerType==='touch'||this.active||e.pointerType==='mouse'&&e.button!==0)return;e.preventDefault();this.begin(e.pointerId,e);try{this.c.setPointerCapture(e.pointerId)}catch(_){}},{passive:false});
  on(this.c,'pointermove',e=>{if(!this.active||this.active.id!==e.pointerId)return;e.preventDefault();const samples=e.getCoalescedEvents?.();for(const p of samples?.length?samples:[e])this.append(p);this.draw()},{passive:false});
  const end=e=>{if(this.active?.id===e.pointerId)this.finish()};
  for(const n of ['pointerup','pointercancel','lostpointercapture'])on(this.c,n,end);
  for(const n of ['pointerup','pointercancel'])on(document,n,end);
  const block=e=>{if(e.cancelable)e.preventDefault()};
  on(this.c,'touchstart',e=>{if(this.mode==='scroll')return;block(e);if(this.active)return;const t=e.changedTouches[0];if(t)this.begin('t:'+t.identifier,t)},{passive:false});
  on(this.c,'touchmove',e=>{if(this.mode==='scroll')return;block(e);if(!this.active||typeof this.active.id!=='string')return;const t=Array.from(e.changedTouches).find(t=>'t:'+t.identifier===this.active.id);if(t){this.append(t);this.draw()}},{passive:false});
  on(document,'touchmove',e=>{if(this.active)block(e)},{passive:false});
  for(const n of ['touchend','touchcancel'])on(document,n,e=>{if(this.active&&Array.from(e.changedTouches).some(t=>'t:'+t.identifier===this.active.id))this.finish()},{passive:false});
  for(const n of ['blur','pagehide'])on(window,n,()=>this.finish());
  on(document,'visibilitychange',()=>{if(document.hidden)this.finish()});
  this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(this.c);this.resize();this.buttons();
 }
 setMode(mode){this.finish();this.mode=mode;this.host.classList.toggle('canvas-scroll',mode==='scroll')}
 begin(id,e){const r=this.c.getBoundingClientRect();if(!r.width||!r.height)return;this.active={id,rect:{left:r.left,top:r.top,width:r.width,height:r.height},points:[]};this.append(e);this.draw()}
 append(e){const a=this.active;if(!a)return;const r=a.rect,x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height,last=a.points.at(-1);if(!Number.isFinite(x)||!Number.isFinite(y)||x<0||x>1||y<0||y>1){if(last!==null)a.points.push(null);return}if(!last||Math.hypot(last.x-x,last.y-y)>.0002)a.points.push({x,y})}
 finish(){if(!this.active)return;const points=this.active.points;this.active=null;if(points.some(Boolean)){this.strokes.push(points);this.checkpoint()}this.draw();this.resize()}
 resize(){if(this.active)return;const r=this.c.getBoundingClientRect();if(!r.width)return;const d=Math.min(window.devicePixelRatio||1,3),w=Math.round(r.width*d),h=Math.round(r.height*d);if(this.c.width!==w||this.c.height!==h){this.c.width=w;this.c.height=h;this.draw()}}
 draw(){const c=this.c,x=this.ctx;x.clearRect(0,0,c.width,c.height);x.lineCap='round';x.lineJoin='round';x.lineWidth=3*Math.min(window.devicePixelRatio||1,3);x.strokeStyle=x.fillStyle='#23498b';for(const stroke of [...this.strokes,...(this.active?[this.active.points]:[])]){let last=null;for(const p of stroke){if(!p){last=null;continue}x.beginPath();if(last){x.moveTo(last.x*c.width,last.y*c.height);x.lineTo(p.x*c.width,p.y*c.height);x.stroke()}else{x.arc(p.x*c.width,p.y*c.height,x.lineWidth/2,0,Math.PI*2);x.fill()}last=p}}this.buttons()}
 buttons(){this.undo.disabled=this.at<=0;this.redo.disabled=this.at>=this.history.length-1}
 checkpoint(){this.history=this.history.slice(0,this.at+1);this.history.push(copy(this.strokes));if(this.history.length>60)this.history.shift();this.at=this.history.length-1;this.save()}
 save(){try{localStorage.setItem(this.key,JSON.stringify(this.strokes))}catch(_){}}
 dispose(){this.finish();this.observer.disconnect();this.listeners.forEach(f=>f());this.listeners=[]}
}
window.InkPad=InkPad;
})();
