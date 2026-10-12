'use strict';
const $=id=>document.getElementById(id),KEY='chinese-nani-g5a-l03-v2';
const defaults=[{"word": "評", "wrong": "坪", "meaning": "把「＿語」補完整。", "kind": "char", "zhuyin": "ㄆㄧㄥˊ"}, {"word": "性", "wrong": "姓", "meaning": "把「索＿」補完整。", "kind": "char", "zhuyin": "ㄒㄧㄥˋ"}, {"word": "似", "wrong": "以", "meaning": "把「＿的」補完整。", "kind": "char", "zhuyin": "ㄙˋ"}, {"word": "卷", "wrong": "券", "meaning": "把「考＿」補完整。", "kind": "char", "zhuyin": "ㄐㄩㄢˋ"}, {"word": "楚", "wrong": "礎", "meaning": "把「清＿」補完整。", "kind": "char", "zhuyin": "ㄔㄨˇ"}, {"word": "綵", "wrong": "彩", "meaning": "把「張燈結＿」補完整。", "kind": "char", "zhuyin": "ㄘㄞˇ"}, {"word": "橡", "wrong": "像", "meaning": "把「＿皮擦」補完整。", "kind": "char", "zhuyin": "ㄒㄧㄤˋ"}, {"word": "塗", "wrong": "途", "meaning": "把「糊里糊＿」補完整。", "kind": "char", "zhuyin": "ㄊㄨˊ"}, {"word": "拼", "wrong": "拚", "meaning": "把「＿音」補完整。", "kind": "char", "zhuyin": "ㄆㄧㄣ"}, {"word": "眉", "wrong": "媚", "meaning": "把「＿清目秀」補完整。", "kind": "char", "zhuyin": "ㄇㄟˊ"}, {"word": "秀", "wrong": "綉", "meaning": "把「眉清目＿」補完整。", "kind": "char", "zhuyin": "ㄒㄧㄡˋ"}, {"word": "妒", "wrong": "杜", "meaning": "把「＿忌」補完整。", "kind": "char", "zhuyin": "ㄉㄨˋ"}, {"word": "忌", "wrong": "記", "meaning": "把「妒＿」補完整。", "kind": "char", "zhuyin": "ㄐㄧˋ"}, {"word": "屏", "wrong": "摒", "meaning": "把「開＿」補完整。", "kind": "char", "zhuyin": "ㄆㄧㄥˊ"}, {"word": "惜", "wrong": "借", "meaning": "把「愛＿」補完整。", "kind": "char", "zhuyin": "ㄒㄧˊ"}, {"word": "慈", "wrong": "磁", "meaning": "把「＿祥」補完整。", "kind": "char", "zhuyin": "ㄘˊ"}, {"word": "慚", "wrong": "漸", "meaning": "把「＿愧」補完整。", "kind": "char", "zhuyin": "ㄘㄢˊ"}, {"word": "愧", "wrong": "鬼", "meaning": "把「慚＿」補完整。", "kind": "char", "zhuyin": "ㄎㄨㄟˋ"}, {"word": "評語", "wrong": "坪語", "meaning": "對表現所做的評論。", "zhuyin": "ㄆㄧㄥˊ ㄩˇ", "kind": "vocab"}, {"word": "索性", "wrong": "索姓", "meaning": "乾脆直接做。", "zhuyin": "ㄙㄨㄛˇ ㄒㄧㄥˋ", "kind": "vocab"}, {"word": "考卷", "wrong": "考券", "meaning": "考試用的題目紙。", "zhuyin": "ㄎㄠˇ ㄐㄩㄢˋ", "kind": "vocab"}, {"word": "清楚", "wrong": "清礎", "meaning": "明白、容易辨認。", "zhuyin": "ㄑㄧㄥ ㄔㄨˇ", "kind": "vocab"}, {"word": "張燈結綵", "wrong": "張燈結彩", "meaning": "掛上燈和彩飾來慶祝。", "zhuyin": "ㄓㄤ ㄉㄥ ㄐㄧㄝˊ ㄘㄞˇ", "kind": "vocab"}, {"word": "橡皮擦", "wrong": "像皮擦", "meaning": "用來擦掉鉛筆字的文具。", "zhuyin": "ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ", "kind": "vocab"}, {"word": "糊里糊塗", "wrong": "糊里糊途", "meaning": "迷迷糊糊，不清楚。", "zhuyin": "ㄏㄨˊ ㄌㄧˇ ㄏㄨˊ ㄊㄨˊ", "kind": "vocab"}, {"word": "拼音", "wrong": "拚音", "meaning": "把語音組合起來。", "zhuyin": "ㄆㄧㄣ ㄧㄣ", "kind": "vocab"}, {"word": "眉清目秀", "wrong": "眉清目綉", "meaning": "形容五官清秀好看。", "zhuyin": "ㄇㄟˊ ㄑㄧㄥ ㄇㄨˋ ㄒㄧㄡˋ", "kind": "vocab"}, {"word": "妒忌", "wrong": "妒記", "meaning": "因別人較好而心裡不舒服。", "zhuyin": "ㄉㄨˋ ㄐㄧˋ", "kind": "vocab"}, {"word": "愛惜", "wrong": "愛借", "meaning": "珍惜並好好保護。", "zhuyin": "ㄞˋ ㄒㄧˊ", "kind": "vocab"}, {"word": "慈祥", "wrong": "慈詳", "meaning": "溫和、親切的樣子。", "zhuyin": "ㄘˊ ㄒㄧㄤˊ", "kind": "vocab"}, {"word": "慚愧", "wrong": "漸愧", "meaning": "因做得不好而不好意思。", "zhuyin": "ㄘㄢˊ ㄎㄨㄟˋ", "kind": "vocab"}, {"word": "似的", "wrong": "以的", "meaning": "像……一樣，用來表示相似。", "zhuyin": "ㄙˋ ˙ㄉㄜ", "kind": "vocab"}, {"word": "面露", "wrong": "面路", "meaning": "臉上顯露出某種表情。", "zhuyin": "ㄇㄧㄢˋ ㄌㄨˋ", "kind": "vocab"}, {"word": "沒精打采", "wrong": "沒精打採", "meaning": "沒有精神，提不起勁。", "zhuyin": "ㄇㄟˊ ㄐㄧㄥ ㄉㄚˇ ㄘㄞˇ", "kind": "vocab"}, {"word": "孔雀", "wrong": "孔鵲", "meaning": "一種鳥，雄鳥可展開美麗的尾羽。", "zhuyin": "ㄎㄨㄥˇ ㄑㄩㄝˋ", "kind": "vocab"}, {"word": "開屏", "wrong": "開摒", "meaning": "孔雀把尾羽展開，像一面扇子。", "zhuyin": "ㄎㄞ ㄆㄧㄥˊ", "kind": "vocab"}, {"word": "尾巴", "wrong": "尾叭", "meaning": "動物身體後端伸出的部分。", "zhuyin": "ㄨㄟˇ ㄅㄚ", "kind": "vocab"}, {"word": "七零八落", "wrong": "七零八洛", "meaning": "散亂、不完整的樣子。", "zhuyin": "ㄑㄧ ㄌㄧㄥˊ ㄅㄚ ㄌㄨㄛˋ", "kind": "vocab"}, {"word": "踢毽子", "wrong": "踢健子", "meaning": "用腳把毽子踢起，讓它不落地。", "zhuyin": "ㄊㄧ ㄐㄧㄢˋ ˙ㄗ", "kind": "vocab"}, {"word": "倘若", "wrong": "淌若", "meaning": "如果、假如。", "zhuyin": "ㄊㄤˇ ㄖㄨㄛˋ", "kind": "vocab"}];
const lessonPronunciations={};
function pronunciationFor(w){return typeof w.zhuyin==='string'&&w.zhuyin.trim()?w.zhuyin.trim().replace(/\s+/g,' '):(Object.prototype.hasOwnProperty.call(lessonPronunciations,w.word)?lessonPronunciations[w.word]:'')}
function annotatedWord(w){const p=pronunciationFor(w);return w.word+(p?'（'+p+'）':'')}
function showCatalog(){for(const kind of ['char','vocab']){const host=$(kind+'Catalog');host.replaceChildren(...data.words.filter(w=>(w.kind||'vocab')===kind).map(w=>{const item=document.createElement('span');item.className='catalog-item';item.textContent=annotatedWord(w);return item}))}}
let data={title:'南一五上｜第三課 孔雀錯了',words:defaults,done:{},ink:{},theme:'princess'},wi=0,mode='char',qids=[],active=null,stroke=null,redo=[],qi=0,answers=[],missedIds=[],missed=false,locked=false;
try{const current=localStorage.getItem(KEY),saved=JSON.parse(current||localStorage.getItem('chinese-nani-g5a-l03-v1'));if(saved&&Array.isArray(saved.words)&&saved.words.length&&saved.words.every(w=>typeof w.word==='string'&&w.word.length&&w.word.length<=6&&typeof w.wrong==='string'&&typeof w.meaning==='string')){data={...data,...saved};if(!current)for(let i=0;i<data.words.length;i++)if(data.words[i].kind==='char')delete data.done[i]}}catch(e){}
const supplementaryWords=["似的", "面露", "沒精打采", "孔雀", "開屏", "尾巴", "七零八落", "踢毽子", "倘若"];
for(const w of defaults.filter(w=>supplementaryWords.includes(w.word)))if(!data.words.some(old=>old.word===w.word))data.words.push({...w});
for(const w of data.words)if(w.kind==='char'){if(w.word==='屏'&&w.meaning==='把「＿風」補完整。')w.meaning='把「開＿」補完整。';if(w.word==='似'&&w.meaning==='把「相＿」補完整。')w.meaning='把「＿的」補完整。';}
let glyphs=null;
let fontReady=false,fontLoadVersion=0;
function save(){try{localStorage.setItem(KEY,JSON.stringify(data));$('writeStatus').textContent=''}catch(e){$('writeStatus').textContent=''}}
function indices(){return data.words.map((w,i)=>i).filter(i=>(data.words[i].kind||'vocab')===mode)}
function sync(){document.body.classList.toggle('forest',data.theme==='forest');$('theme').value=data.theme;$('title').textContent=data.title;$('lessonTitle').value=data.title;$('editor').value=data.words.filter(w=>w.kind!=='char').map(w=>[w.word,w.wrong,w.meaning,pronunciationFor(w)].join(' | ')).join('\n');showCatalog();updateSelector();showWord()}
function updateSelector(){const ids=indices();if(!ids.includes(wi))wi=ids[0];$('wordSelect').replaceChildren(...ids.map(i=>{const o=document.createElement('option');o.value=i;o.textContent=annotatedWord(data.words[i]);if(mode==='char'){const first=indices().find(j=>!data.done[j]);o.disabled=first!==undefined&&i>first}return o}));$('charMode').setAttribute('aria-pressed',String(mode==='char'));$('vocabMode').setAttribute('aria-pressed',String(mode==='vocab'))}
$('charMode').onclick=()=>{mode='char';updateSelector();showWord()};$('vocabMode').onclick=()=>{mode='vocab';updateSelector();showWord()};
function ink(){return data.ink[wi]||(data.ink[wi]=[])}
function progress(){const ids=indices(),count=ids.filter(i=>data.done[i]).length;$('progress').textContent=`${mode==='char'?'生字':'語詞'}練習 ${count} / ${ids.length}`;$('start').disabled=count!==ids.length;$('start').textContent=`② ${mode==='char'?'生字':'語詞'}練完，開始測驗 →`;$('done').disabled=!practiceReady()||active!==null||!ink().length;$('done').textContent=mode==='char'?'已對照範字，完成並下一字 →':'已對照範字，完成並下一詞 →'}
const c=$('board'),ctx=c.getContext('2d');
let strokeRect=null;
function render(){const r=strokeRect||c.getBoundingClientRect(),dpr=window.devicePixelRatio||1,w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);if(c.width!==w)c.width=w;if(c.height!==h)c.height=h;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,r.width,r.height);const W=r.width,H=r.height,n=Array.from(data.words[wi].word).length,cols=n<=2?n:Math.ceil(n/2),rows=Math.ceil(n/cols),size=Math.min(W/cols,H/rows),ox=(W-cols*size)/2,oy=(H-rows*size)/2;ctx.strokeStyle='#e3bbd4';ctx.lineWidth=1;Array.from(data.words[wi].word).forEach((ch,i)=>{const x=ox+(i%cols)*size,y=oy+Math.floor(i/cols)*size;ctx.setLineDash([]);ctx.strokeRect(x,y,size,size);ctx.setLineDash([5,5]);ctx.beginPath();ctx.moveTo(x+size/2,y);ctx.lineTo(x+size/2,y+size);ctx.moveTo(x,y+size/2);ctx.lineTo(x+size,y+size/2);ctx.stroke();if(fontReady&&$('trace').checked){ctx.fillStyle='#d6c9db';ctx.font=`${size*.72}px "MOEKai"`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(ch,x+size/2,y+size*.53)}else if(glyphs&&$('trace').checked&&glyphs.paths[ch]){const fsize=size*.72,scale=fsize/glyphs.units;ctx.save();ctx.fillStyle='#d6c9db';ctx.translate(x+(size-fsize)/2,y+size*.53+(glyphs.ascent+glyphs.descent)/glyphs.units*fsize/2);ctx.scale(scale,-scale);ctx.fill(new Path2D(glyphs.paths[ch]));ctx.restore()}});ctx.setLineDash([]);ctx.strokeStyle='#6336a0';ctx.fillStyle='#6336a0';ctx.lineCap='round';ctx.lineJoin='round';for(const s of [...ink(),...(stroke?[stroke]:[])]){for(let i=1;i<s.length;i++){const p=s[i],a=s[i-1];if(!validInkPoint(p)||!validInkPoint(a))continue;const pressure=Number.isFinite(p[2])?Math.max(0,Math.min(1,p[2])):.5;ctx.lineWidth=2.5+pressure*2;ctx.beginPath();ctx.moveTo(a[0]*W,a[1]*H);ctx.lineTo(p[0]*W,p[1]*H);ctx.stroke()}}$('undo').disabled=!ink().length;$('redo').disabled=!redo.length}
function showWord(){if(active!==null)finish({pointerId:active});unlockWritingScroll();active=null;stroke=null;redo=[];$('wordSelect').value=wi;$('word').textContent=data.words[wi].word;showFallbackWord();$('pronunciation').textContent=pronunciationFor(data.words[wi])||'注音待家長補充';$('meaning').textContent=data.words[wi].meaning;$('writeStatus').textContent='';progress();render()}
function point(e){const r=strokeRect||c.getBoundingClientRect();return[(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height,e.pressure||.5]}
function validInkPoint(p){return Array.isArray(p)&&Number.isFinite(p[0])&&Number.isFinite(p[1])&&p[0]>=0&&p[0]<=1&&p[1]>=0&&p[1]<=1}
function appendInkPoint(e){const p=point(e);if(validInkPoint(p)){const previous=stroke[stroke.length-1];if(!previous||Math.hypot(p[0]-previous[0],p[1]-previous[1])>.0001)stroke.push(p)}else if(stroke[stroke.length-1]!==null)stroke.push(null)}
let scrollLock=null,strokeWord=null;
function lockWritingScroll(){
 if(scrollLock)return;
 // Touch listeners block native scrolling without moving/reflowing the body.
 scrollLock={x:window.scrollX||0,y:window.scrollY||0};
}
function unlockWritingScroll(){
 if(!scrollLock)return;const saved=scrollLock;scrollLock=null;
 window.scrollTo(saved.x,saved.y);
}
function beginStroke(id,p){const r=c.getBoundingClientRect();strokeRect={left:r.left,top:r.top,width:r.width,height:r.height};data.done[wi]=false;strokeWord=wi;active=id;lockWritingScroll();stroke=[];appendInkPoint(p);progress();updateSelector();render()}
c.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||!practiceReady()||active!==null||($('penOnly').checked&&e.pointerType!=='pen')||(e.pointerType==='mouse'&&e.button!==0))return;e.preventDefault();beginStroke(e.pointerId,e);try{c.setPointerCapture(active)}catch(error){}},{passive:false});
c.addEventListener('pointermove',e=>{if(active!==e.pointerId)return;e.preventDefault();const samples=e.getCoalescedEvents?.();for(const p of (samples?.length?samples:[e]))appendInkPoint(p);render()});
function finish(e){if(active===null||active!==e.pointerId)return;data.done[strokeWord]=false;if(stroke.some(validInkPoint))(data.ink[strokeWord]||(data.ink[strokeWord]=[])).push(stroke);stroke=null;strokeRect=null;strokeWord=null;active=null;unlockWritingScroll();redo=[];save();progress();updateSelector();render()}
for(const evt of ['pointerup','pointercancel','lostpointercapture'])c.addEventListener(evt,finish);
// Handle finger writing directly so iOS cannot turn a stroke into a page pan.
const blockTouchScroll=e=>{if(e.cancelable)e.preventDefault()};
const touchPoint=t=>({clientX:t.clientX,clientY:t.clientY,pressure:t.force||.5});
c.addEventListener('touchstart',e=>{
 blockTouchScroll(e);
 if(!practiceReady()||active!==null)return;
 const t=e.changedTouches[0];if(!t||($('penOnly').checked&&t.touchType!=='stylus'))return;
 beginStroke('touch:'+t.identifier,touchPoint(t));
},{passive:false});
c.addEventListener('touchmove',e=>{
 blockTouchScroll(e);if(typeof active!=='string')return;
 const t=Array.from(e.changedTouches).find(t=>'touch:'+t.identifier===active);
 if(t){appendInkPoint(touchPoint(t));render()}
},{passive:false});
document.addEventListener('touchmove',e=>{if(active!==null)blockTouchScroll(e)},{passive:false});
function endTouch(e){
 if(typeof active!=='string')return;
 const t=Array.from(e.changedTouches).find(t=>'touch:'+t.identifier===active);
 if(t)finish({pointerId:active});
}
for(const evt of ['touchend','touchcancel'])document.addEventListener(evt,endTouch,{passive:false});
for(const evt of ['pointerup','pointercancel'])document.addEventListener(evt,finish);
const stopWriting=()=>{if(active!==null)finish({pointerId:active});else unlockWritingScroll()};
window.addEventListener('blur',stopWriting);window.addEventListener('pagehide',stopWriting);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopWriting()});
new ResizeObserver(()=>{if(!$('practice').hidden)render()}).observe(c);
$('undo').onclick=()=>{data.done[wi]=false;if(ink().length)redo.push(ink().pop());save();progress();updateSelector();render()};$('redo').onclick=()=>{data.done[wi]=false;if(redo.length)ink().push(redo.pop());save();progress();updateSelector();render()};$('clear').onclick=()=>{redo.push(...ink().reverse());data.ink[wi]=[];data.done[wi]=false;save();progress();updateSelector();render()};$('trace').onchange=render;$('wordSelect').onchange=()=>{const wanted=Number($('wordSelect').value),first=indices().find(i=>!data.done[i]);if(mode==='char'&&first!==undefined&&wanted>first){$('wordSelect').value=wi;return}wi=wanted;showWord()};
$('done').onclick=()=>{if(!practiceReady()||active!==null)return;if(!ink().length){$('writeStatus').textContent='先在田字格寫一遍，再完成喔。';return}data.done[wi]=true;save();updateSelector();const next=indices().find(i=>!data.done[i]);if(next!==undefined)wi=next;showWord()};
$('theme').onchange=()=>{data.theme=$('theme').value;save();document.body.classList.toggle('forest',data.theme==='forest')};
$('apply').onclick=()=>{const lines=$('editor').value.trim().split('\n'),words=lines.map(l=>{const p=l.split('|').map(s=>s.trim());return{word:p[0],wrong:p[1],meaning:p[2],zhuyin:p[3]||'',kind:'vocab'}});if(words.length>30||words.some(w=>!w.word||Array.from(w.word).length>6||!w.wrong||w.word===w.wrong||!w.meaning||w.meaning.length>100||(w.zhuyin&&(!/^[ㄅ-ㄩˊˇˋ˙\s]+$/.test(w.zhuyin)||w.zhuyin.split(/\s+/).length!==Array.from(w.word).length)))||!$('lessonTitle').value.trim()){ $('editStatus').textContent='請填課名與完整三欄，每詞最多 6 字、每課最多 30 詞，正確詞與錯字須不同。注音選填，一字一音、以空格分隔。';return}data={...data,title:$('lessonTitle').value.trim(),words:[...defaults.filter(w=>w.kind==='char'),...words],done:{},ink:{}};mode='vocab';wi=defaults.filter(w=>w.kind==='char').length;save();sync();panel('practice');$('editStatus').textContent='已套用新課程，舊示範筆跡已重設。'};
function panel(id){for(const p of ['practice','quiz','result'])$(p).hidden=p!==id;if(id==='practice')requestAnimationFrame(render)}
function start(){if(indices().some(i=>!data.done[i]))return;qids=indices();qi=0;answers=[];missedIds=[];panel('quiz');question()}
function question(){locked=false;missed=false;$('next').hidden=true;$('feedback').textContent='';$('quizProgress').textContent=`第 ${qi+1} / ${qids.length} 題 · ⭐ ${answers.filter(Boolean).length}`;$('question').textContent=`選出正確的字詞：${data.words[qids[qi]].meaning}`;const w=data.words[qids[qi]];const opts=[w.word,w.wrong];if(Math.random()<.5)opts.reverse();$('options').replaceChildren(...opts.map(v=>{const b=document.createElement('button');b.textContent=v;b.onclick=()=>{if(locked)return;if(v!==w.word){missed=true;b.disabled=true;$('feedback').textContent='差一點點！仔細看看字的部件，再試一次。';return}locked=true;answers.push(!missed);for(const o of $('options').children)o.disabled=true;$('feedback').textContent=`正確：${annotatedWord(w)}。${missed?'重試成功！這一詞再複習一次就更熟了。':'第一次就答對了！'}`;$('next').hidden=false;$('rewardImg').src=qi%2?'../../../images/asset_315fa71af096deba.jpg':'../../../images/asset_7c3d93f72a48abe3.png';$('voice').src=qi%2?'../../../media/asset_7980039ab3fb6d4d.mp3':'../../../media/asset_b2fbc9cc46336d05.mp3';$('reward').showModal();$('voice').play().catch(()=>{});};return b}))}
$('closeReward').onclick=()=>{$('reward').close();$('voice').pause()};$('reward').addEventListener('close',()=>$('voice').pause());
$('next').onclick=()=>{qi++;if(qi<qids.length)question();else{panel('result');missedIds=qids.filter((_,i)=>!answers[i]);$('retryWrong').hidden=!missedIds.length;$('score').textContent=`首次答對 ${answers.filter(Boolean).length} / ${qids.length} 題；本組字詞都已完成訂正！`;$('review').replaceChildren(...qids.filter((_,i)=>!answers[i]).map(i=>data.words[i]).map(w=>{const p=document.createElement('p');p.textContent=`再複習：${annotatedWord(w)} — ${w.meaning}`;return p}));if(answers.every(Boolean))$('review').textContent='全部首次答對，太棒了！'}};
$('retryWrong').onclick=()=>{qids=missedIds.slice();qi=0;answers=[];missedIds=[];panel('quiz');question()};$('start').onclick=start;$('retry').onclick=()=>{qids=indices();qi=0;answers=[];missedIds=[];panel('quiz');question()};$('back').onclick=$('practiceAgain').onclick=()=>panel('practice');sync();
async function loadPracticeFont(){
 const ticket=++fontLoadVersion;
 fontReady=false;document.body.classList.add('font-pending');progress();
 $('reloadFont').disabled=true;
 $('fontStatus').textContent='正在載入教育部標準楷書，載入完成後開放書寫…';
 let timer;
 try{
  if(!document.fonts||typeof FontFace==='undefined')throw Error('Font loading unavailable');
  // A fresh FontFace makes retry possible after a failed download.
  const url='../nani-g5a-l05/fonts/moe-kai-5.1.woff2'+(ticket>1?'?retry='+Date.now():'');
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
