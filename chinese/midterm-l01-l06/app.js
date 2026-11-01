'use strict';
const $=id=>document.getElementById(id),sets=window.MIDTERM_SETS,all=sets.flatMap(s=>s.questions.map(q=>({...q,set:s.number,title:s.title}))),mode=document.body.dataset.mode;
const KEY='nani-midterm-photo-mistakes-v1',labels={char:'國字練習',poly:'注音練習',write:'短語／造句'},PAGE=16;
let state={items:{}},kind='all',selected=0,page=0,search='',retryIds=null,boards=new Map(),active=null,observer,fingerWriting=true,wrong=new Set(all.filter(q=>q.seed&&!q.pending).map(q=>q.id)),mistakeSnapshot;
try{const v=JSON.parse(localStorage.getItem(KEY));if(Array.isArray(v))wrong=new Set(v.filter(id=>all.some(q=>q.id===id&&!q.pending)))}catch(e){}
mistakeSnapshot=new Set(wrong);
function save(){try{localStorage.setItem(KEY,JSON.stringify([...wrong]))}catch(e){$('status').textContent='錯題清單目前無法保存，這次仍可繼續練習。'}}
function item(q){return state.items[q.id]||=( {strokes:[],undo:[],redo:[],revealed:false,grade:null,typed:''})}
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e}
function btn(text,fn){const e=el('button',text);e.type='button';e.addEventListener('click',fn);return e}
function list(){return all.filter(q=>(!selected||q.set===selected)&&(kind==='all'||q.kind===kind)&&(!search||(q.prompt+q.title+q.source).includes(search))&&(mode!=='mistakes'||mistakeSnapshot.has(q.id))&&(!retryIds||retryIds.has(q.id)))}
function updateProgress(){const qs=list().filter(q=>!q.pending),good=qs.filter(q=>item(q).grade==='good').length,again=qs.filter(q=>item(q).grade==='again').length;
 $('progress').textContent=mode==='answers'?`共 ${qs.length} 題答案 · 造句為參考答案`:`本組 ${qs.length} 題 · 本輪已核對 ${good+again} 題 · 答對 ${good} 題 · 待加強 ${again} 題 · 錯題清單 ${wrong.size} 題`;
 $('retry').disabled=!again;$('retryBottom').disabled=!again;$('restore').hidden=!retryIds;$('summary').hidden=mode==='answers'||!qs.length||good+again!==qs.length;
 $('summaryText').textContent=again?`本組完成！${good} 題答對，${again} 題待加強，整理好再出發。`:`${good} 題全部完成，獲得知識星辰！`;
}
function syncCard(q){const b=boards.get(q.id);if(!b)return;const v=item(q);b.answer.classList.toggle('closed',!v.revealed);b.body.hidden=!v.revealed;b.grade.hidden=!v.revealed;b.reveal.textContent=v.revealed?'收起答案':'對答案';b.reveal.setAttribute('aria-expanded',String(v.revealed));b.card.classList.toggle('marked-good',v.grade==='good');b.card.classList.toggle('marked-again',v.grade==='again');b.good.setAttribute('aria-pressed',String(v.grade==='good'));b.again.setAttribute('aria-pressed',String(v.grade==='again'));b.undo.disabled=!v.undo.length;b.redo.disabled=!v.redo.length;b.clear.disabled=!v.strokes.length;b.pin.textContent=wrong.has(q.id)?'移出錯題':'加入錯題';b.pin.setAttribute('aria-pressed',String(wrong.has(q.id)))}
function grade(q,value){finish();const v=item(q),old=v.grade;v.grade=old===value?null:value;if(v.grade==='again')wrong.add(q.id);else if(old==='again'&&v.grade===null&&!q.seed)wrong.delete(q.id);save();syncCard(q);updateProgress();if(v.grade==='good'&&old!=='good'){const count=all.filter(p=>item(p).grade==='good').length;if(count%10===0)reward(count)}}
function reward(count){$('rewardText').textContent=`已完成 ${count} 題正確核對，繼續按自己的步調前進。`;$('reward').showModal()}
$('closeReward').onclick=()=>$('reward').close();
function pin(q){finish();if(wrong.has(q.id))wrong.delete(q.id);else wrong.add(q.id);save();syncCard(q);updateProgress();$('status').textContent=wrong.has(q.id)?'已加入錯題清單。':'已移出錯題；本頁仍保留，重新開啟錯題頁後更新。'}
function pagers(total){const pages=Math.max(1,Math.ceil(total/PAGE));page=Math.min(page,pages-1);for(const id of ['pagerTop','pagerBottom']){const wrap=$(id);wrap.replaceChildren();if(mode==='answers')continue;const prev=btn('← 上一頁',()=>{page--;render();$('pagerTop').scrollIntoView({block:'start'})}),next=btn('下一頁 →',()=>{page++;render();$('pagerTop').scrollIntoView({block:'start'})});prev.disabled=page===0;next.disabled=page>=pages-1;wrap.append(prev,el('span',`第 ${page+1} / ${pages} 頁 · 每頁 ${PAGE} 題`),next)}}
function render(){finish();observer?.disconnect();boards.forEach(b=>b.resize.disconnect());boards=new Map();$('questions').replaceChildren();const full=list();pagers(full.length);if(!full.length){$('questions').append(el('p',mode==='mistakes'?'這一組沒有錯題。可回總複習加入，或切換其他課程。':'沒有符合的題目，請調整篩選。','empty'));updateProgress();return}
 if(mode==='answers'){const table=el('table',undefined,'answer-list'),head=el('thead'),tr=el('tr');for(const x of ['題目來源','題目','答案'])tr.append(el('th',x));head.append(tr);const body=el('tbody');for(const q of full){const row=el('tr');row.append(el('td',q.source),el('td',q.prompt));const td=el('td',q.answer);if(q.kind==='write')td.prepend(el('small','參考：'));if(q.note)td.append(el('p',q.note,'answer-note'));row.append(td);body.append(row)}table.append(head,body);$('questions').append(table);updateProgress();return}
 const qs=full.slice(page*PAGE,(page+1)*PAGE);
 for(const q of qs){const v=item(q),card=el('article',undefined,'question'+(q.kind==='write'?' long-answer':'')+(q.pending?' pending':''));card.id='q-'+q.id;const head=el('div',undefined,'qhead');head.append(el('span',q.source),el('span',q.title));card.append(head,el('h2',q.prompt,'qtitle'));
 if(q.pending){card.append(el('p',q.note));$('questions').append(card);continue}
 card.append(el('p',q.kind==='write'?'寫下自己的句子，答案提供一種示範。':'寫出括號中的國字，或指定字的注音。','hint'));
 const work=el('div',undefined,'work'),writing=el('div',undefined,'writing'),canvas=el('canvas',undefined,'board');canvas.setAttribute('aria-label',q.source+'手寫區');canvas.width=1;canvas.height=1;const tools=el('div',undefined,'tools'),undo=btn('↶ 復原',()=>history(q,'undo')),redo=btn('↷ 重做',()=>history(q,'redo')),clearButton=btn('清除',()=>clear(q));tools.append(undo,redo,clearButton);writing.append(canvas,tools);
 const typed=el('details',undefined,'typed');typed.append(el('summary','也可以打字作答'));const input=el('textarea');input.setAttribute('aria-label',q.source+'文字作答');input.placeholder='在這裡輸入答案';input.value=v.typed;input.addEventListener('input',()=>{v.typed=input.value;v.grade=null;syncCard(q);updateProgress()});typed.append(input);writing.append(typed);
 const answer=el('aside',undefined,'answer'),body=el('div',undefined,'answer-body');body.id='a-'+q.id;body.append(el('strong',q.answer));answer.setAttribute('aria-label','正確答案');answer.append(body);work.append(writing,answer);card.append(work);
 const reveal=btn('對答案',()=>{finish();v.revealed=!v.revealed;syncCard(q)});reveal.className='primary';reveal.setAttribute('aria-controls',body.id);card.append(reveal);const assessment=el('div',undefined,'assessment'),good=btn('我答對了 ☆',()=>grade(q,'good')),again=btn('再練一次',()=>grade(q,'again')),pinButton=btn('加入錯題',()=>pin(q));assessment.append(good,again);card.append(assessment,pinButton);if(q.note){const notes=el('details');notes.append(el('summary','核對提醒'),el('p',q.note));card.append(notes)}$('questions').append(card);
 const b={card,canvas,answer,body,grade:assessment,good,again,reveal,undo,redo,clear:clearButton,pin:pinButton,ready:false};boards.set(q.id,b);bind(q,canvas);syncCard(q);b.resize=new ResizeObserver(()=>{if(active?.q.id===q.id)finish();if(b.ready)paint(q)});b.resize.observe(canvas)
 }
 observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){const q=qs.find(p=>p.id===e.target.dataset.id);if(q){boards.get(q.id).ready=true;paint(q)}observer.unobserve(e.target)}},{rootMargin:'350px'});for(const [id,b] of boards){b.canvas.dataset.id=id;observer.observe(b.canvas)}updateProgress()
}
function checkpoint(q,action){const v=item(q);v.undo.push(action);if(v.undo.length>40)v.undo.shift();v.redo=[];v.grade=null}
function history(q,direction){finish();const v=item(q),from=direction==='undo'?v.undo:v.redo,to=direction==='undo'?v.redo:v.undo;if(!from.length)return;const action=from.pop();to.push(action);if(direction==='undo'){if(action.type==='add')v.strokes.pop();else v.strokes=action.strokes}else{if(action.type==='add')v.strokes.push(action.stroke);else v.strokes=[]}v.grade=null;save();paint(q);syncCard(q);updateProgress()}
function clear(q){finish();const v=item(q);if(!v.strokes.length)return;checkpoint(q,{type:'clear',strokes:v.strokes});v.strokes=[];save();paint(q);syncCard(q);updateProgress()}
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
for(const s of sets){const opt=el('option',s.title+`（${s.questions.filter(q=>!q.pending).length}題）`);opt.value=s.number;$('lesson').append(opt)}
$('lesson').onchange=()=>{selected=Number($('lesson').value);page=0;retryIds=null;render()};
$('search').oninput=()=>{search=$('search').value.trim();page=0;render()};
for(const b of document.querySelectorAll('[data-kind]'))b.onclick=()=>{kind=b.dataset.kind;page=0;for(const x of document.querySelectorAll('[data-kind]'))x.setAttribute('aria-pressed',String(x===b));render()};
function revealAll(value){finish();for(const [id]of boards){const q=all.find(p=>p.id===id);item(q).revealed=value;syncCard(q)}}
$('checkAll').onclick=()=>revealAll(true);$('hideAll').onclick=()=>revealAll(false);
function retry(){finish();const ids=new Set(list().filter(q=>item(q).grade==='again').map(q=>q.id));if(!ids.size)return;retryIds=ids;page=0;for(const q of all.filter(q=>ids.has(q.id))){const v=item(q);v.revealed=false;v.grade=null;v.strokes=[];v.undo=[];v.redo=[];v.typed=''}render();$('pagerTop').scrollIntoView({block:'start'})}
$('retry').onclick=retry;$('retryBottom').onclick=retry;$('restore').onclick=()=>{retryIds=null;page=0;render()};$('print').onclick=()=>{if(mode==='answers')window.print();else location.href='answers.html'};
for(const a of document.querySelectorAll('[data-tab]'))if(a.dataset.tab===mode)a.setAttribute('aria-current','page');
$('intro').textContent=mode==='mistakes'?'先練照片中的紅筆訂正，再練自己標記的題目。錯題清單會保留在這台裝置，可隨時加入或移出。':mode==='answers'?'保留照片與原題號，方便一題一題對照。短語與造句的答案不唯一。':'從照片題目出發，複習國字、注音、短語與造句。Apple Pencil、手指、滑鼠都能書寫。';
if(mode==='answers'){for(const id of ['checkAll','hideAll','retry','retryBottom','restore'])$(id).hidden=true;document.querySelector('.writing-mode').hidden=true;$('modeHelp').hidden=true}
window.addEventListener('storage',e=>{if(e.key!==KEY)return;try{const v=JSON.parse(e.newValue);if(Array.isArray(v)){wrong=new Set(v);if(mode==='mistakes')mistakeSnapshot=new Set(wrong);render()}}catch(err){}});
render();
