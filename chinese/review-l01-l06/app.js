'use strict';
const $=id=>document.getElementById(id), lessons=window.REVIEW_LESSONS;
const KEY='idol-chinese-written-review-l01-l06-v1', labels={char:'生字',vocab:'語詞',poly:'多音字注音',shape:'形近字國字'};
let state={lesson:1,items:{}},kind='all',retryIds=null,boards=new Map(),active=null,observer,fingerWriting=true;
try{const v=JSON.parse(localStorage.getItem(KEY));if(v&&v.items&&typeof v.items==='object')state={lesson:Math.min(6,Math.max(1,Number(v.lesson)||1)),items:v.items}}catch(e){}
let database=null;
function persisted(){return{lesson:state.lesson,items:Object.fromEntries(Object.entries(state.items).map(([id,v])=>[id,{strokes:v.strokes,revealed:!!v.revealed,grade:v.grade}]))}}
function save(){const value=persisted();if(database){try{database.transaction('state','readwrite').objectStore('state').put(value,'current');return}catch(e){}}try{localStorage.setItem(KEY,JSON.stringify(value))}catch(e){}}
function initialize(){if(!window.indexedDB){render();return}try{const request=indexedDB.open(KEY,1);request.onupgradeneeded=()=>request.result.createObjectStore('state');request.onerror=()=>render();request.onsuccess=()=>{database=request.result;const read=database.transaction('state').objectStore('state').get('current');read.onsuccess=()=>{const v=read.result;if(v&&v.items){state=v;state.lesson=Math.min(6,Math.max(1,Number(v.lesson)||1));$('lesson').value=state.lesson}render()};read.onerror=()=>render()}}catch(e){render()}}

function item(q){let v=state.items[q.id];if(!v||!Array.isArray(v.strokes))v=state.items[q.id]={strokes:[],undo:[],redo:[],revealed:false,grade:null};v.undo||=[];v.redo||=[];return v}
function lesson(){return lessons[state.lesson-1]}
function list(){return lesson().questions.filter(q=>(kind==='all'||q.kind===kind)&&(!retryIds||retryIds.has(q.id)))}
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e}
function btn(text,fn){const e=el('button',text);e.type='button';e.addEventListener('click',fn);return e}
function updateProgress(){const qs=lesson().questions, good=qs.filter(q=>item(q).grade==='good').length,again=qs.filter(q=>item(q).grade==='again').length;
 $('progress').textContent=`本課 ${qs.length} 題 · 已核對 ${good+again} 題 · 答對 ${good} 題 · 待加強 ${again} 題${retryIds?' · 待加強練習中':''}`;
 $('retry').disabled=again===0;$('retryBottom').disabled=again===0;$('restore').hidden=!retryIds;
 $('summary').hidden=good+again!==qs.length;
 if(!$('summary').hidden)$('summaryText').textContent=again?`全部核對完成！${good} 題答對，還有 ${again} 題再練一次就更熟。`:`${qs.length} 題全部完成！每一筆努力都值得一顆星。`;
}
function syncCard(q){const b=boards.get(q.id);if(!b)return;const v=item(q);b.answer.classList.toggle('closed',!v.revealed);b.cover.hidden=v.revealed;b.body.hidden=!v.revealed;b.notes.hidden=!v.revealed;b.grade.hidden=!v.revealed;b.reveal.textContent=v.revealed?'收起答案':'對答案';b.reveal.setAttribute('aria-expanded',String(!!v.revealed));b.card.classList.toggle('marked-good',v.grade==='good');b.card.classList.toggle('marked-again',v.grade==='again');b.good.setAttribute('aria-pressed',String(v.grade==='good'));b.again.setAttribute('aria-pressed',String(v.grade==='again'));b.undo.disabled=!v.undo.length;b.redo.disabled=!v.redo.length;b.clear.disabled=!v.strokes.length}
function grade(q,value){const v=item(q),old=v.grade;v.grade=value;save();syncCard(q);updateProgress();if(value==='good'&&old!=='good'){
 const count=lesson().questions.filter(p=>item(p).grade==='good').length;
 if(count%10===0||lesson().questions.every(p=>item(p).grade))reward(count);
}}
function reward(count){$('rewardText').textContent=`這一課已答對 ${count} 題，繼續保持自己的步調！`;$('rewardImg').src=count%20?'../../images/asset_7c3d93f72a48abe3.png':'../../images/asset_315fa71af096deba.jpg';$('voice').src=count%20?'../../media/asset_b2fbc9cc46336d05.mp3':'../../media/asset_7980039ab3fb6d4d.mp3';if(!$('reward').open)$('reward').showModal();$('voice').play().catch(()=>{})}
$('closeReward').onclick=()=>{$('voice').pause();$('reward').close()};$('reward').addEventListener('close',()=>$('voice').pause());
function checkpoint(q,action){const v=item(q);v.undo.push(action);if(v.undo.length>40)v.undo.shift();v.redo=[];v.grade=null}
function history(q,direction){finish();const v=item(q),from=direction==='undo'?v.undo:v.redo,to=direction==='undo'?v.redo:v.undo;if(!from.length)return;const action=from.pop();to.push(action);if(direction==='undo'){if(action.type==='add')v.strokes.pop();else v.strokes=action.strokes}else{if(action.type==='add')v.strokes.push(action.stroke);else v.strokes=[]}v.grade=null;save();paint(q);syncCard(q);updateProgress()}
function clear(q){finish();const v=item(q);if(!v.strokes.length)return;checkpoint(q,{type:'clear',strokes:v.strokes});v.strokes=[];save();paint(q);syncCard(q);updateProgress()}
function render(){finish();if(observer)observer.disconnect();boards.forEach(b=>b.resize.disconnect());boards=new Map();$('questions').replaceChildren();
 const qs=list();if(!qs.length)$('questions').append(el('p','這裡還沒有題目，請切換題型或按「顯示全部題目」。'));
 qs.forEach(q=>{const v=item(q),card=el('article',undefined,'question');card.id='q-'+q.id;const original=lesson().questions.indexOf(q)+1;
 const head=el('div',undefined,'qhead');head.append(el('span',`✦ ${String(original).padStart(2,'0')} / ${lesson().questions.length}`),el('span',labels[q.kind]));card.append(head,el('h2',q.prompt,'qtitle'),el('p',q.hint,'hint'));
 const work=el('div',undefined,'work'),writing=el('div',undefined,'writing'),canvas=el('canvas',undefined,'board');canvas.setAttribute('aria-label',`第 ${original} 題手寫區，可用手指或 Apple Pencil 書寫`);canvas.width=1;canvas.height=1;
 const tools=el('div',undefined,'tools'),undo=btn('↶ 復原',()=>history(q,'undo')),redo=btn('↷ 重做',()=>history(q,'redo')),clearButton=btn('清除',()=>clear(q));tools.append(undo,redo,clearButton);writing.append(canvas,tools);
 const answer=el('aside',undefined,'answer'),cover=el('p','寫完後按「對答案」'),body=el('div',undefined,'answer-body');body.id='a-'+q.id;body.append(el('p','正確答案'),el('strong',q.answer));if(q.reading)body.append(el('p',q.reading));answer.append(cover,body);work.append(writing,answer);card.append(work);
 const reveal=btn('對答案',()=>{finish();v.revealed=!v.revealed;save();syncCard(q)});reveal.className='primary';reveal.setAttribute('aria-controls',body.id);card.append(reveal);
 const notes=el('div',q.explanation,'explanation');if(q.kind==='poly'){const a=el('a',' 查教育部辭典');a.href='https://dict.concised.moe.edu.tw/search.jsp?la=0&powerMode=0&word='+encodeURIComponent(q.dictQuery);a.target='_blank';a.rel='noopener';notes.append(a)}card.append(notes);
 const assessment=el('div',undefined,'assessment'),good=btn('我答對了 ☆',()=>grade(q,'good')),again=btn('再練一次',()=>grade(q,'again'));assessment.append(good,again);card.append(assessment);$('questions').append(card);
 const b={card,canvas,answer,cover,body,notes,grade:assessment,good,again,reveal,undo,redo,clear:clearButton,ready:false};boards.set(q.id,b);bind(q,canvas);syncCard(q);b.resize=new ResizeObserver(()=>{if(active?.q.id===q.id)finish();if(b.ready)paint(q)});b.resize.observe(canvas);
 });
 observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){const q=qs.find(p=>p.id===e.target.dataset.id);if(q){boards.get(q.id).ready=true;paint(q)}observer.unobserve(e.target)}}},{rootMargin:'400px'});
 for(const [id,b]of boards){b.canvas.dataset.id=id;observer.observe(b.canvas)}updateProgress();
}
function paint(q){const b=boards.get(q.id);if(!b||!b.ready)return;const c=b.canvas,r=c.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,1.5);if(r.width<=0||r.height<=0)return;const w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);if(c.width!==w)c.width=w;if(c.height!==h)c.height=h;const ctx=c.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,r.width,r.height);ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#59377d';ctx.fillStyle='#59377d';const strokes=[...item(q).strokes];if(active?.q.id===q.id)strokes.push(active.points);
 for(const s of strokes){let prev=null;for(const p of s){if(!p){prev=null;continue}if(!prev){ctx.beginPath();ctx.arc(p[0]*r.width,p[1]*r.height,1.5,0,Math.PI*2);ctx.fill()}else{ctx.beginPath();ctx.moveTo(prev[0]*r.width,prev[1]*r.height);ctx.lineTo(p[0]*r.width,p[1]*r.height);ctx.stroke()}prev=p}}
}
function point(e){const r=active.rect,x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;if(!Number.isFinite(x)||!Number.isFinite(y)||x<0||x>1||y<0||y>1)return null;return[Math.round(x*10000)/10000,Math.round(y*10000)/10000]}
function append(e){const p=point(e),pts=active.points,last=pts[pts.length-1];if(!p){if(last)pts.push(null)}else if(!last||Math.hypot(p[0]-last[0],p[1]-last[1])>.0003)pts.push(p)}
function begin(q,id,e){if(active)return;const b=boards.get(q.id);b.ready=true;const r=b.canvas.getBoundingClientRect();active={q,id,rect:{left:r.left,top:r.top,width:r.width,height:r.height},points:[]};append(e);paint(q)}
function finish(){if(!active)return;const a=active;active=null;if(a.points.some(Boolean)){checkpoint(a.q,{type:'add',stroke:a.points});item(a.q).strokes.push(a.points);save()}paint(a.q);syncCard(a.q);updateProgress()}
function bind(q,c){c.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.button!==0)return;e.preventDefault();begin(q,e.pointerId,e);try{c.setPointerCapture(e.pointerId)}catch(x){}});
 c.addEventListener('pointermove',e=>{if(active?.id!==e.pointerId||active.q.id!==q.id)return;e.preventDefault();append(e);paint(q)});
 for(const name of ['pointerup','pointercancel','lostpointercapture'])c.addEventListener(name,e=>{if(active?.id===e.pointerId)finish()});
 // iOS fingers use Touch.identifier; Pencil/mouse keep their Pointer Events path.
 c.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;const t=e.changedTouches[0];if(!t||(!fingerWriting&&t.touchType!=='stylus'))return;if(e.cancelable)e.preventDefault();if(!active)begin(q,'touch:'+t.identifier,t)},{passive:false});
 c.addEventListener('touchmove',e=>{if(active&&Array.from(e.changedTouches).some(t=>t.touchType==='stylus')&&e.cancelable)e.preventDefault()},{passive:false});
}
function moveTouch(e){if(typeof active?.id!=='string')return;const t=Array.from(e.changedTouches).find(t=>'touch:'+t.identifier===active.id);if(!t)return;if(e.cancelable)e.preventDefault();append(t);paint(active.q)}
function endTouch(e){if(typeof active?.id!=='string')return;if(Array.from(e.changedTouches).some(t=>'touch:'+t.identifier===active.id))finish()}
document.addEventListener('touchmove',moveTouch,{passive:false});
for(const name of ['touchend','touchcancel'])document.addEventListener(name,endTouch,{passive:true});
function setFingerWriting(value){finish();fingerWriting=value;document.body.classList.toggle('finger-writing',value);$('fingerWrite').setAttribute('aria-pressed',String(value));$('fingerScroll').setAttribute('aria-pressed',String(!value));$('modeHelp').textContent=value?'手指可在格子內書寫；格子外仍可上下滑動。':'手指可上下滑動整頁；要用手指寫字時，切回「手寫」。';}
$('fingerWrite').onclick=()=>setFingerWriting(true);$('fingerScroll').onclick=()=>setFingerWriting(false);
window.addEventListener('pointerup',e=>{if(active?.id===e.pointerId)finish()});window.addEventListener('pointercancel',e=>{if(active?.id===e.pointerId)finish()});window.addEventListener('blur',finish);window.addEventListener('pagehide',()=>{finish();save()});document.addEventListener('visibilitychange',()=>{if(document.hidden)finish()});window.addEventListener('scroll',()=>{if(active)finish()},{passive:true});
lessons.forEach(l=>{const option=el('option',`第${l.number}課｜${l.title}（${l.questions.length}題）`);option.value=l.number;$('lesson').append(option)});$('lesson').value=state.lesson;
$('lesson').onchange=()=>{finish();state.lesson=Number($('lesson').value);retryIds=null;save();render()};
for(const b of document.querySelectorAll('[data-kind]'))b.onclick=()=>{kind=b.dataset.kind;for(const x of document.querySelectorAll('[data-kind]'))x.setAttribute('aria-pressed',String(x===b));render()};
function revealAll(value){finish();for(const q of list()){item(q).revealed=value;syncCard(q)}save()}
$('checkAll').onclick=()=>revealAll(true);$('hideAll').onclick=()=>revealAll(false);
function retry(){finish();retryIds=new Set(lesson().questions.filter(q=>item(q).grade==='again').map(q=>q.id));if(!retryIds.size){retryIds=null;return}kind='all';document.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.kind==='all')));for(const q of lesson().questions.filter(q=>retryIds.has(q.id))){const v=item(q);v.revealed=false;v.grade=null}save();render();$('questions').scrollIntoView({block:'start'})}
$('retry').onclick=retry;$('retryBottom').onclick=retry;$('restore').onclick=()=>{retryIds=null;render()};
$('restart').onclick=()=>{if(!window.confirm('重新挑戰會清除這一課的筆跡與核對紀錄，確定嗎？'))return;finish();for(const q of lesson().questions)delete state.items[q.id];retryIds=null;save();render();$('questions').scrollIntoView({block:'start'})};
initialize();
