'use strict';
// Shared lesson tests. Saved mistakes are independent of practice resets.
(()=>{
 const key='chinese-mistakes-v1:'+location.pathname.replace(/index\.html$/,'').replace(/\/$/,''), byId=id=>document.getElementById(id);
 let records={};try{const value=JSON.parse(localStorage.getItem(key));if(value&&typeof value==='object'&&!Array.isArray(value))records=value}catch(e){}
 const ident=w=>JSON.stringify([w.kind||'vocab',w.word]);
 const message=document.createElement('p');message.setAttribute('role','status');
 function persist(){try{localStorage.setItem(key,JSON.stringify(records));message.textContent=''}catch(e){message.textContent='錯題紀錄無法保存，請確認瀏覽器允許儲存資料。'}}
 function remember(w){const id=ident(w),old=records[id];records[id]={word:w.word,kind:w.kind||'vocab',meaning:w.meaning,wrong:w.wrong,count:(Number(old?.count)||0)+1,last:new Date().toISOString()};persist()}
 const toolbar=document.createElement('div');toolbar.className='row';
 const makeButton=(label,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=fn;return b};
 toolbar.append(makeButton('生字手寫測驗',()=>begin('char')),makeButton('語詞手寫測驗',()=>begin('vocab')),makeButton('形近字選擇測驗',()=>begin('shape')),makeButton('本課錯題紀錄',showRecords));
 byId('practice').prepend(toolbar,message);
 const archive=document.createElement('section');archive.hidden=true;byId('practice').before(archive);
 function showRecords(){panel('practice');archive.hidden=false;archive.replaceChildren();const h=document.createElement('h2');h.textContent='本課錯題紀錄';archive.append(h);const note=document.createElement('p');note.textContent='答對後仍保留，熟練後可自行移除。紀錄保存在此裝置的瀏覽器。';archive.append(note);
  const items=Object.entries(records).filter(([,r])=>r&&typeof r.word==='string');
  archive.append(makeButton('重練本課錯題',()=>{const ids=data.words.map((w,i)=>i).filter(i=>records[ident(data.words[i])]);if(ids.length)begin('mistakes',ids)}));
  if(!items.length){const p=document.createElement('p');p.textContent='目前沒有錯題。';archive.append(p)}
  for(const [id,r] of items){const row=document.createElement('p'),label=document.createElement('span');label.textContent=`${r.word} · ${r.kind==='char'?'生字':'語詞'} · 需複習 ${r.count} 次 `;row.append(label,makeButton('移除這題',()=>{if(confirm('確定已熟練，要移除此題紀錄嗎？')){delete records[id];persist();showRecords()}}));archive.append(row)}
  archive.append(makeButton('返回練習',()=>{archive.hidden=true}));
 }
 let ids=[],pos=0,type='char',correct=0,recorded=false,points=[],drawing=false,revealed=false;
 const area=document.createElement('div');byId('options').after(area);
 function begin(kind,selected){stopWriting();archive.hidden=true;type=kind;ids=selected||data.words.map((w,i)=>i).filter(i=>kind==='shape'?data.words[i].kind==='char':(data.words[i].kind||'vocab')===kind);if(!ids.length)return;pos=0;correct=0;panel('quiz');show()}
 function markWrong(w){if(!recorded){remember(w);recorded=true}}
 function show(){const w=data.words[ids[pos]];recorded=false;revealed=false;points=[];drawing=false;byId('options').replaceChildren();area.replaceChildren();byId('feedback').textContent='';byId('next').hidden=true;byId('quizProgress').textContent=`第 ${pos+1} / ${ids.length} 題`;
  byId('question').textContent=(type==='shape'?'選出正確的字：':'請手寫：')+w.meaning;
  if(type!=='shape'&&(w.kind||'vocab')==='vocab'){
   const reading=pronunciationFor(w);
   byId('question').textContent=reading?'看注音寫語詞：'+reading:'語詞注音尚未設定，請先由家長補上。';
   const hint=document.createElement('p');hint.className='hint';hint.textContent='語意提示：'+w.meaning;area.append(hint);
  }
  if(type==='shape'){
   let locked=false;const choices=[w.word,w.wrong].sort(()=>Math.random()-.5);
   for(const text of choices){const b=makeButton(text,()=>{if(locked)return;if(text!==w.word){markWrong(w);b.disabled=true;byId('feedback').textContent='再看看字的部件，這題已加入錯題紀錄。';return}locked=true;if(!recorded)correct++;byId('feedback').textContent='正確：'+annotatedWord(w);for(const c of byId('options').children)c.disabled=true;byId('next').hidden=false});byId('options').append(b)}return;
  }
  const canvas=document.createElement('canvas');canvas.setAttribute('aria-label','測驗手寫區');canvas.style.cssText='width:100%;max-width:520px;aspect-ratio:1;touch-action:none;display:block;margin:12px auto;background:#fffcfe';canvas.width=520;canvas.height=520;const ctx=canvas.getContext('2d');
  function draw(){ctx.clearRect(0,0,520,520);ctx.strokeStyle='#e3bbd4';ctx.lineWidth=1;const n=Array.from(w.word).length,cols=n<=2?n:Math.ceil(n/2),rows=Math.ceil(n/cols),s=Math.min(520/cols,520/rows);for(let i=0;i<n;i++){const x=(i%cols)*s,y=Math.floor(i/cols)*s;ctx.strokeRect(x,y,s,s);ctx.beginPath();ctx.moveTo(x+s/2,y);ctx.lineTo(x+s/2,y+s);ctx.moveTo(x,y+s/2);ctx.lineTo(x+s,y+s/2);ctx.stroke()}ctx.strokeStyle='#6336a0';ctx.lineWidth=3.5;ctx.lineCap='round';ctx.lineJoin='round';for(const stroke of points)for(let i=1;i<stroke.length;i++){ctx.beginPath();ctx.moveTo(...stroke[i-1]);ctx.lineTo(...stroke[i]);ctx.stroke()}}
  const reveal=makeButton('對答案',()=>{if(!points.some(s=>s.length>1)||drawing)return;revealed=true;answer.textContent='正確答案：'+annotatedWord(w);answer.hidden=false;yes.hidden=no.hidden=false;reveal.disabled=true});reveal.disabled=true;
  let pointer=null,rect=null;
  function point(e){return[(e.clientX-rect.left)/rect.width*520,(e.clientY-rect.top)/rect.height*520]}
  canvas.addEventListener('pointerdown',e=>{if(pointer!==null||revealed||(byId('penOnly').checked&&e.pointerType!=='pen')||(e.pointerType==='mouse'&&e.button!==0))return;e.preventDefault();pointer=e.pointerId;rect=canvas.getBoundingClientRect();drawing=true;points.push([point(e)]);canvas.setPointerCapture(pointer);reveal.disabled=true});
  canvas.addEventListener('pointermove',e=>{if(e.pointerId!==pointer||!drawing)return;e.preventDefault();const p=point(e);if(p.every(v=>v>=0&&v<=520)){points[points.length-1].push(p);draw()}});
  const finish=e=>{if(e.pointerId!==pointer)return;drawing=false;pointer=null;reveal.disabled=!points.some(s=>s.length>1)};
  for(const evt of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(evt,finish);
  for(const evt of ['touchstart','touchmove'])canvas.addEventListener(evt,e=>{if(e.cancelable)e.preventDefault()},{passive:false});
  const answer=document.createElement('p');answer.hidden=true;answer.style.cssText='font-family:MOEKai,serif;font-size:30px';
  let graded=false;
  function grade(ok){if(!revealed||graded)return;graded=true;if(ok){correct++;byId('reward').showModal();byId('rewardImg').src='../../../images/asset_7c3d93f72a48abe3.png';byId('voice').src='../../../media/asset_b2fbc9cc46336d05.mp3';byId('voice').play().catch(()=>{})}else markWrong(w);yes.disabled=no.disabled=true;byId('feedback').textContent=ok?'已標記答對。':'已加入本課錯題紀錄。';byId('next').hidden=false}
  const yes=makeButton('我寫對了',()=>grade(true)),no=makeButton('需要再練習',()=>grade(false));yes.hidden=no.hidden=true;
  const clear=makeButton('清除重寫',()=>{if(revealed)return;points=[];draw();reveal.disabled=true});
  const undone=[];
  const undo=makeButton('復原',()=>{if(!revealed&&!drawing&&points.length){undone.push(points.pop());draw();reveal.disabled=!points.some(s=>s.length>1)}}),redo=makeButton('重做',()=>{if(!revealed&&!drawing&&undone.length){points.push(undone.pop());draw();reveal.disabled=!points.some(s=>s.length>1)}});
  canvas.addEventListener('pointerdown',()=>{if(drawing)undone.length=0});
  const tip=document.createElement('p');tip.className='hint';tip.textContent='寫完按「對答案」，由自己或家長核對後標記；不自動判斷字形。';area.append(canvas,undo,redo,clear,reveal,answer,yes,no,tip);draw();
 }
 byId('next').onclick=()=>{if(++pos<ids.length)show();else{panel('result');area.replaceChildren();byId('score').textContent=`本次答對 ${correct} / ${ids.length} 題`;byId('review').replaceChildren(makeButton('查看本課錯題紀錄',showRecords));if(byId('retryWrong'))byId('retryWrong').hidden=true}};
 byId('retry').onclick=()=>begin(type,ids.slice());
 byId('back').onclick=()=>{drawing=false;panel('practice');area.replaceChildren()};
 start=()=>begin(mode);byId('start').onclick=start;
 const previousProgress=progress;progress=()=>{previousProgress();byId('start').disabled=false;byId('start').textContent='直接開始'+(mode==='char'?'生字':'語詞')+'手寫測驗 →'};progress();
 const requested=new URLSearchParams(location.search).get('quiz');if(['char','vocab','shape'].includes(requested))begin(requested);else if(requested==='mistakes')showRecords();
})();
