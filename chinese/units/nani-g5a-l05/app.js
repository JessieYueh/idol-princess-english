'use strict';
const $=id=>document.getElementById(id),KEY='chinese-nani-g5a-l05-v2';
const defaults=[{"word": "駛", "wrong": "使", "meaning": "把「行＿」補完整。", "kind": "char"}, {"word": "陡", "wrong": "徒", "meaning": "把「＿峭」補完整。", "kind": "char"}, {"word": "峭", "wrong": "俏", "meaning": "把「陡＿」補完整。", "kind": "char"}, {"word": "蕾", "wrong": "雷", "meaning": "把「花＿」補完整。", "kind": "char"}, {"word": "崖", "wrong": "涯", "meaning": "把「斷＿」補完整。", "kind": "char"}, {"word": "躍", "wrong": "耀", "meaning": "把「跳＿」補完整。", "kind": "char"}, {"word": "凹", "wrong": "凸", "meaning": "把「＿凸不平」補完整。", "kind": "char"}, {"word": "凸", "wrong": "凹", "meaning": "把「凹＿不平」補完整。", "kind": "char"}, {"word": "坑", "wrong": "抗", "meaning": "把「＿洞」補完整。", "kind": "char"}, {"word": "斧", "wrong": "釜", "meaning": "把「鬼＿神工」補完整。", "kind": "char"}, {"word": "雄", "wrong": "熊", "meaning": "把「氣勢＿偉」補完整。", "kind": "char"}, {"word": "偉", "wrong": "瑋", "meaning": "把「氣勢雄＿」補完整。", "kind": "char"}, {"word": "臨", "wrong": "臣", "meaning": "把「＿海」補完整。", "kind": "char"}, {"word": "縱", "wrong": "從", "meaning": "把「花東＿谷」補完整。", "kind": "char"}, {"word": "稻", "wrong": "滔", "meaning": "把「＿米」補完整。", "kind": "char"}, {"word": "澄", "wrong": "橙", "meaning": "把「黃＿＿」補完整。", "kind": "char"}, {"word": "曳", "wrong": "洩", "meaning": "把「搖＿」補完整。", "kind": "char"}, {"word": "醉", "wrong": "碎", "meaning": "把「＿心」補完整。", "kind": "char"}, {"word": "行駛", "wrong": "行使", "meaning": "車輛在路上前進。", "kind": "vocab"}, {"word": "陡峭", "wrong": "陡俏", "meaning": "坡度很大，接近直立。", "kind": "vocab"}, {"word": "蕾絲", "wrong": "雷絲", "meaning": "有細緻花紋的網狀織物。", "kind": "vocab"}, {"word": "斷崖", "wrong": "斷涯", "meaning": "高而陡直的山崖。", "kind": "vocab"}, {"word": "躍動", "wrong": "耀動", "meaning": "跳動、活動的樣子。", "kind": "vocab"}, {"word": "凹凸不平", "wrong": "凸凹不坪", "meaning": "表面有高有低，不平坦。", "kind": "vocab"}, {"word": "坑洞", "wrong": "抗洞", "meaning": "地面或岩石上凹下去的洞。", "kind": "vocab"}, {"word": "鬼斧神工", "wrong": "鬼釜神工", "meaning": "形容技藝或景物精巧得令人驚嘆。", "kind": "vocab"}, {"word": "氣勢雄偉", "wrong": "氣勢雄瑋", "meaning": "形容氣勢壯盛、宏大。", "kind": "vocab"}, {"word": "臨海", "wrong": "臣海", "meaning": "靠近海邊。", "kind": "vocab"}, {"word": "花東縱谷", "wrong": "花東從谷", "meaning": "位於花蓮、臺東的狹長谷地。", "kind": "vocab"}, {"word": "稻米", "wrong": "滔米", "meaning": "稻穀去殼後得到的米。", "kind": "vocab"}, {"word": "黃澄澄", "wrong": "黃橙橙", "meaning": "形容金黃而明亮的樣子。", "kind": "vocab"}, {"word": "搖曳", "wrong": "搖洩", "meaning": "輕輕搖動、擺動。", "kind": "vocab"}, {"word": "醉心", "wrong": "碎心", "meaning": "深深喜愛或著迷。", "kind": "vocab"}];
let data={title:'南一五上｜第五課 漫遊花東',words:defaults,done:{},ink:{},theme:'princess'},wi=0,mode='char',qids=[],active=null,stroke=null,redo=[],qi=0,answers=[],missed=false,locked=false;
try{const current=localStorage.getItem(KEY),saved=JSON.parse(current||localStorage.getItem('chinese-nani-g5a-l05-v1'));if(saved&&Array.isArray(saved.words)&&saved.words.length&&saved.words.every(w=>typeof w.word==='string'&&w.word.length&&w.word.length<=6&&typeof w.wrong==='string'&&typeof w.meaning==='string')){data={...data,...saved};if(!current)for(let i=0;i<data.words.length;i++)if(data.words[i].kind==='char')delete data.done[i]}}catch(e){}
let glyphs=null;
let fontReady=false,fontLoadVersion=0,checked=false,reference=null,loadVersion=0;
function save(){try{localStorage.setItem(KEY,JSON.stringify(data));$('writeStatus').textContent='筆跡已保存在此瀏覽器。'}catch(e){$('writeStatus').textContent='瀏覽器無法保存；請保持本頁開啟。'}}
function indices(){return data.words.map((w,i)=>i).filter(i=>(data.words[i].kind||'vocab')===mode)}
function sync(){document.body.classList.toggle('forest',data.theme==='forest');$('theme').value=data.theme;$('title').textContent=data.title;$('lessonTitle').value=data.title;$('editor').value=data.words.filter(w=>w.kind!=='char').map(w=>[w.word,w.wrong,w.meaning].join(' | ')).join('\n');updateSelector();showWord()}
function updateSelector(){const ids=indices();if(!ids.includes(wi))wi=ids[0];$('wordSelect').replaceChildren(...ids.map(i=>{const o=document.createElement('option');o.value=i;o.textContent=data.words[i].word;if(mode==='char'){const first=indices().find(j=>!data.done[j]);o.disabled=first!==undefined&&i>first}return o}));$('charMode').setAttribute('aria-pressed',String(mode==='char'));$('vocabMode').setAttribute('aria-pressed',String(mode==='vocab'))}
$('charMode').onclick=()=>{mode='char';updateSelector();showWord()};$('vocabMode').onclick=()=>{mode='vocab';updateSelector();showWord()};
function ink(){return data.ink[wi]||(data.ink[wi]=[])}
function progress(){const ids=indices(),count=ids.filter(i=>data.done[i]).length;$('progress').textContent=`${mode==='char'?'生字':'語詞'}練習 ${count} / ${ids.length}`;$('start').disabled=count!==ids.length;$('start').textContent=`② ${mode==='char'?'生字':'語詞'}練完，開始測驗 →`;$('done').disabled=!practiceReady()||active!==null||(mode==='char'&&!checked);$('checkWriting').disabled=!practiceReady()||active!==null||!reference;$('checkWriting').hidden=mode!=='char';$('done').textContent=mode==='char'?'字形通過，下一字 →':(data.done[wi]?'已完成 ✓（可繼續練習）':'已對照範字，完成這一項 ✓')}
const c=$('board'),ctx=c.getContext('2d');
function render(){const r=c.getBoundingClientRect(),dpr=window.devicePixelRatio||1;c.width=Math.round(r.width*dpr);c.height=Math.round(r.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);const W=r.width,H=r.height,n=Array.from(data.words[wi].word).length,cols=n<=2?n:Math.ceil(n/2),rows=Math.ceil(n/cols),size=Math.min(W/cols,H/rows),ox=(W-cols*size)/2,oy=(H-rows*size)/2;ctx.strokeStyle='#e3bbd4';ctx.lineWidth=1;Array.from(data.words[wi].word).forEach((ch,i)=>{const x=ox+(i%cols)*size,y=oy+Math.floor(i/cols)*size;ctx.setLineDash([]);ctx.strokeRect(x,y,size,size);ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(x+size/2,y);ctx.lineTo(x+size/2,y+size);ctx.moveTo(x,y+size/2);ctx.lineTo(x+size,y+size/2);ctx.stroke();if(fontReady&&$('trace').checked){ctx.fillStyle='#d6c9db';ctx.font=`${size*.72}px "MOEKai"`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(ch,x+size/2,y+size*.53)}else if(glyphs&&$('trace').checked&&glyphs.paths[ch]){const fsize=size*.72,scale=fsize/glyphs.units;ctx.save();ctx.fillStyle='#d6c9db';ctx.translate(x+(size-fsize)/2,y+size*.53+(glyphs.ascent+glyphs.descent)/glyphs.units*fsize/2);ctx.scale(scale,-scale);ctx.fill(new Path2D(glyphs.paths[ch]));ctx.restore()}});ctx.setLineDash([]);ctx.strokeStyle='#6336a0';ctx.fillStyle='#6336a0';ctx.lineCap='round';ctx.lineJoin='round';for(const s of [...ink(),...(stroke?[stroke]:[])]){s.forEach((p,i)=>{ctx.lineWidth=2.5+p[2]*2;ctx.beginPath();if(i){const a=s[i-1];ctx.moveTo(a[0]*W,a[1]*H);ctx.lineTo(p[0]*W,p[1]*H);ctx.stroke()}else{ctx.arc(p[0]*W,p[1]*H,ctx.lineWidth/2,0,Math.PI*2);ctx.fill()}})}$('undo').disabled=!ink().length;$('redo').disabled=!redo.length}
function showWord(){checked=false;reference=null;loadVersion++;const ticket=loadVersion;$('checkWriting').disabled=true;$('hintStroke').hidden=mode!=='char';if(mode==='char'){$('writeStatus').textContent='正在載入字形檢查…';fetch('./strokes/'+encodeURIComponent(data.words[wi].word)+'.json').then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>{if(ticket!==loadVersion)return;reference=d;progress();$('writeStatus').textContent='寫完 '+d.medians.length+' 筆後，按「檢查字形」。'}).catch(()=>{if(ticket===loadVersion)$('writeStatus').textContent='字形資料載入失敗，請重新整理；下一字保持鎖定。'})}active=null;stroke=null;redo=[];$('wordSelect').value=wi;$('word').textContent=data.words[wi].word;showFallbackWord();$('meaning').textContent=data.words[wi].meaning;progress();render()}
function point(e){const r=c.getBoundingClientRect();return[(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height,e.pressure||.5]}
c.addEventListener('pointerdown',e=>{if(!practiceReady()||active!==null||($('penOnly').checked&&e.pointerType!=='pen')||(e.pointerType==='mouse'&&e.button!==0))return;e.preventDefault();checked=false;data.done[wi]=false;active=e.pointerId;stroke=[point(e)];progress();updateSelector();c.setPointerCapture(active);render()});
c.addEventListener('pointermove',e=>{if(active!==e.pointerId)return;e.preventDefault();for(const p of (e.getCoalescedEvents?.()||[e]))stroke.push(point(p));render()});
function finish(e){if(active!==e.pointerId)return;checked=false;data.done[wi]=false;ink().push(stroke);stroke=null;active=null;redo=[];save();progress();updateSelector();render()}
for(const evt of ['pointerup','pointercancel','lostpointercapture'])c.addEventListener(evt,finish);
new ResizeObserver(()=>{if(!$('practice').hidden)render()}).observe(c);
$('undo').onclick=()=>{checked=false;data.done[wi]=false;if(ink().length)redo.push(ink().pop());save();progress();updateSelector();render()};$('redo').onclick=()=>{checked=false;data.done[wi]=false;if(redo.length)ink().push(redo.pop());save();progress();updateSelector();render()};$('clear').onclick=()=>{checked=false;redo.push(...ink().reverse());data.ink[wi]=[];data.done[wi]=false;save();progress();updateSelector();render()};$('trace').onchange=render;$('wordSelect').onchange=()=>{const wanted=Number($('wordSelect').value),first=indices().find(i=>!data.done[i]);if(mode==='char'&&first!==undefined&&wanted>first){$('wordSelect').value=wi;return}wi=wanted;showWord()};
$('done').onclick=()=>{if(!practiceReady()||active!==null)return;if(mode==='char'&&!checked){$('writeStatus').textContent='請先通過字形檢查，再繼續下一字。';return}if(!ink().length){$('writeStatus').textContent='先在田字格寫一遍，再完成這一詞喔。';return}data.done[wi]=true;save();updateSelector();const next=indices().find(i=>!data.done[i]);if(next!==undefined)wi=next;showWord()};
$('theme').onchange=()=>{data.theme=$('theme').value;save();document.body.classList.toggle('forest',data.theme==='forest')};
$('apply').onclick=()=>{const lines=$('editor').value.trim().split('\n'),words=lines.map(l=>{const p=l.split('|').map(s=>s.trim());return{word:p[0],wrong:p[1],meaning:p[2],kind:'vocab'}});if(words.length>30||words.some(w=>!w.word||Array.from(w.word).length>6||!w.wrong||w.word===w.wrong||!w.meaning||w.meaning.length>100)||!$('lessonTitle').value.trim()){ $('editStatus').textContent='請填課名與完整三欄，每詞最多 6 字、每課最多 30 詞，正確詞與錯字須不同。';return}data={...data,title:$('lessonTitle').value.trim(),words:[...defaults.filter(w=>w.kind==='char'),...words],done:{},ink:{}};mode='vocab';wi=18;save();sync();panel('practice');$('editStatus').textContent='已套用新課程，舊示範筆跡已重設。'};
function panel(id){for(const p of ['practice','quiz','result'])$(p).hidden=p!==id;if(id==='practice')requestAnimationFrame(render)}
function start(){if(indices().some(i=>!data.done[i]))return;qids=indices();qi=0;answers=[];panel('quiz');question()}
function question(){locked=false;missed=false;$('next').hidden=true;$('feedback').textContent='';$('quizProgress').textContent=`第 ${qi+1} / ${qids.length} 題 · ⭐ ${answers.filter(Boolean).length}`;$('question').textContent=`選出正確的字詞：${data.words[qids[qi]].meaning}`;const w=data.words[qids[qi]];const opts=[w.word,w.wrong];if(Math.random()<.5)opts.reverse();$('options').replaceChildren(...opts.map(v=>{const b=document.createElement('button');b.textContent=v;b.onclick=()=>{if(locked)return;if(v!==w.word){missed=true;b.disabled=true;$('feedback').textContent='差一點點！仔細看看字的部件，再試一次。';return}locked=true;answers.push(!missed);for(const o of $('options').children)o.disabled=true;$('feedback').textContent=`正確：${w.word}。${missed?'重試成功！這一詞再複習一次就更熟了。':'第一次就答對了！'}`;$('next').hidden=false;$('rewardImg').src=qi%2?'../../../images/asset_315fa71af096deba.jpg':'../../../images/asset_7c3d93f72a48abe3.png';$('voice').src=qi%2?'../../../media/asset_7980039ab3fb6d4d.mp3':'../../../media/asset_b2fbc9cc46336d05.mp3';$('reward').showModal();$('voice').play().catch(()=>{});};return b}))}
$('closeReward').onclick=()=>{$('reward').close();$('voice').pause()};$('reward').addEventListener('close',()=>$('voice').pause());
$('next').onclick=()=>{qi++;if(qi<qids.length)question();else{panel('result');$('score').textContent=`首次答對 ${answers.filter(Boolean).length} / ${qids.length} 題；本組字詞都已完成訂正！`;$('review').replaceChildren(...qids.filter((_,i)=>!answers[i]).map(i=>data.words[i]).map(w=>{const p=document.createElement('p');p.textContent=`再複習：${w.word} — ${w.meaning}`;return p}));if(answers.every(Boolean))$('review').textContent='全部首次答對，太棒了！'}};
$('start').onclick=start;$('retry').onclick=()=>{qi=0;answers=[];panel('quiz');question()};$('back').onclick=$('practiceAgain').onclick=()=>panel('practice');sync();
async function loadPracticeFont(){
 const ticket=++fontLoadVersion;
 fontReady=false;document.body.classList.add('font-pending');progress();
 $('reloadFont').disabled=true;
 $('fontStatus').textContent='正在載入教育部標準楷書，載入完成後開放書寫…';
 let timer;
 try{
  if(!document.fonts||typeof FontFace==='undefined')throw Error('Font loading unavailable');
  // A fresh FontFace makes retry possible after a failed download.
  const url='./fonts/moe-kai-5.1.woff2'+(ticket>1?'?retry='+Date.now():'');
  const face=new FontFace('MOEKai','url("'+url+'") format("woff2")');
  await Promise.race([face.load(),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Font loading timeout')),45000)})]);
  if(ticket!==fontLoadVersion)return;
  for(const old of [...document.fonts])if(old.family==='MOEKai')document.fonts.delete(old);
  document.fonts.add(face);
  fontReady=true;document.body.classList.remove('font-pending');$('fontStatus').textContent='教育部標準楷書已載入。';render();
 }catch(e){if(ticket===fontLoadVersion){fontReady=false;document.body.classList.add('font-pending');$('fontStatus').textContent='教育部標準楷書載入失敗，請確認網路後按「重新載入字型」。';}}
 finally{clearTimeout(timer);if(ticket===fontLoadVersion){$('reloadFont').disabled=false;showFallbackWord();progress();render();updateFontStatus();}}
}
$('reloadFont').onclick=()=>{loadPracticeFont();if(!glyphs)loadFallbackGlyphs();};
loadPracticeFont();loadFallbackGlyphs();
$('checkWriting').onclick=()=>{if(!practiceReady()||active!==null)return;const verdict=checkCharacter(ink(),reference);checked=verdict.ok;progress();$('writeStatus').textContent=verdict.message;};
$('hintStroke').onclick=()=>{if(!reference)return;render();const r=c.getBoundingClientRect();ctx.strokeStyle='#2084bc';ctx.fillStyle='#2084bc';ctx.lineWidth=2;ctx.font='14px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';normalizedReference(reference).forEach((s,i)=>{ctx.beginPath();s.forEach((p,j)=>j?ctx.lineTo(p[0]*r.width,p[1]*r.height):ctx.moveTo(p[0]*r.width,p[1]*r.height));ctx.stroke();ctx.fillText(String(i+1),s[0][0]*r.width,s[0][1]*r.height-9)});$('writeStatus').textContent='藍線只作筆畫參考，不必對齊；寫大、寫小都可以，本檢查不評分筆順。'};

function practiceReady(){return fontReady||!!(glyphs&&Array.from(data.words[wi].word).every(ch=>glyphs.paths[ch]));}
function updateFontStatus(){
 if(fontReady)return;
 if(practiceReady())$('fontStatus').textContent=$('reloadFont').disabled?'已顯示教育部標準楷書範字，可以書寫；完整字型在背景載入。':'完整字型未載入，已改用同字型範字顯示，可以正常書寫。';
}
function showFallbackWord(){
 const heading=$('word'),word=data.words[wi].word;
 heading.replaceChildren();heading.setAttribute('aria-label',word);
 const text=document.createElement('span');text.className='fontText';text.textContent=word;heading.appendChild(text);
 if(!glyphs)return;
 for(const ch of Array.from(word)){
  if(!glyphs.paths[ch])continue;
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.classList.add('fallbackGlyph');svg.setAttribute('viewBox',`0 0 ${glyphs.units} ${glyphs.ascent-glyphs.descent}`);svg.setAttribute('aria-hidden','true');
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',glyphs.paths[ch]);path.setAttribute('transform',`translate(0 ${glyphs.ascent}) scale(1 -1)`);svg.appendChild(path);heading.appendChild(svg);
 }
}
async function loadFallbackGlyphs(){
 try{
  const r=await fetch('./fonts/moe-kai-glyphs.json');if(!r.ok)throw Error('Glyph download failed');
  const d=await r.json();if(!d.paths||!Number.isFinite(d.units)||d.units<=0)throw Error('Invalid glyph data');
  glyphs=d;showFallbackWord();progress();render();updateFontStatus();
 }catch(e){if(!fontReady)$('fontStatus').textContent='範字尚未載入，請按「重新載入字型」再試一次。';}
}
