'use strict';
const $=id=>document.getElementById(id),KEY='chinese-nani-g5a-l02-v2';
const defaults=[{"word": "傅", "wrong": "博", "meaning": "把「師＿」補完整。", "kind": "char", "zhuyin": "ㄈㄨˋ"}, {"word": "釘", "wrong": "訂", "meaning": "把「＿牆」補完整。", "kind": "char", "zhuyin": "ㄉㄧㄥˋ"}, {"word": "延", "wrong": "廷", "meaning": "把「＿長線」補完整。", "kind": "char", "zhuyin": "ㄧㄢˊ"}, {"word": "遞", "wrong": "逮", "meaning": "把「傳＿」補完整。", "kind": "char", "zhuyin": "ㄉㄧˋ"}, {"word": "富", "wrong": "副", "meaning": "把「豐＿」補完整。", "kind": "char", "zhuyin": "ㄈㄨˋ"}, {"word": "穩", "wrong": "隱", "meaning": "把「平＿」補完整。", "kind": "char", "zhuyin": "ㄨㄣˇ"}, {"word": "按", "wrong": "安", "meaning": "把「＿鈕」補完整。", "kind": "char", "zhuyin": "ㄢˋ"}, {"word": "熟", "wrong": "熱", "meaning": "把「＿練」補完整。", "kind": "char", "zhuyin": "ㄕㄡˊ"}, {"word": "確", "wrong": "碓", "meaning": "把「準＿」補完整。", "kind": "char", "zhuyin": "ㄑㄩㄝˋ"}, {"word": "掃", "wrong": "埽", "meaning": "把「＿地」補完整。", "kind": "char", "zhuyin": "ㄙㄠˇ"}, {"word": "務", "wrong": "霧", "meaning": "把「服＿」補完整。", "kind": "char", "zhuyin": "ㄨˋ"}, {"word": "讚", "wrong": "贊", "meaning": "把「＿美」補完整。", "kind": "char", "zhuyin": "ㄗㄢˋ"}, {"word": "碑", "wrong": "卑", "meaning": "把「口＿」補完整。", "kind": "char", "zhuyin": "ㄅㄟ"}, {"word": "績", "wrong": "積", "meaning": "把「業＿」補完整。", "kind": "char", "zhuyin": "ㄐㄧ"}, {"word": "障", "wrong": "章", "meaning": "把「保＿」補完整。", "kind": "char", "zhuyin": "ㄓㄤˋ"}, {"word": "率", "wrong": "律", "meaning": "把「效＿」補完整。", "kind": "char", "zhuyin": "ㄌㄩˋ"}, {"word": "涵", "wrong": "函", "meaning": "把「內＿」補完整。", "kind": "char", "zhuyin": "ㄏㄢˊ"}, {"word": "預", "wrong": "豫", "meaning": "把「＿見」補完整。", "kind": "char", "zhuyin": "ㄩˋ"}, {"word": "師傅", "wrong": "師博", "meaning": "有專門技藝的人。", "zhuyin": "ㄕ ㄈㄨˋ", "kind": "vocab"}, {"word": "延長線", "wrong": "廷長線", "meaning": "延長用電距離的電線。", "zhuyin": "ㄧㄢˊ ㄔㄤˊ ㄒㄧㄢˋ", "kind": "vocab"}, {"word": "豐富", "wrong": "豐副", "meaning": "種類多或內容充足。", "zhuyin": "ㄈㄥ ㄈㄨˋ", "kind": "vocab"}, {"word": "平穩", "wrong": "平隱", "meaning": "平順穩定，不搖晃。", "zhuyin": "ㄆㄧㄥˊ ㄨㄣˇ", "kind": "vocab"}, {"word": "熟練", "wrong": "熟鍊", "meaning": "經常練習，做得很順手。", "zhuyin": "ㄕㄡˊ ㄌㄧㄢˋ", "kind": "vocab"}, {"word": "準確", "wrong": "準碓", "meaning": "正確，沒有差錯。", "zhuyin": "ㄓㄨㄣˇ ㄑㄩㄝˋ", "kind": "vocab"}, {"word": "掃把", "wrong": "埽把", "meaning": "用來掃地的工具。", "zhuyin": "ㄙㄠˋ ㄅㄚˇ", "kind": "vocab"}, {"word": "服務", "wrong": "服霧", "meaning": "為別人提供幫助。", "zhuyin": "ㄈㄨˊ ㄨˋ", "kind": "vocab"}, {"word": "讚美", "wrong": "贊美", "meaning": "稱讚別人的優點。", "zhuyin": "ㄗㄢˋ ㄇㄟˇ", "kind": "vocab"}, {"word": "口碑", "wrong": "口卑", "meaning": "大家口頭流傳的評價。", "zhuyin": "ㄎㄡˇ ㄅㄟ", "kind": "vocab"}, {"word": "業績", "wrong": "業積", "meaning": "工作或經營的成果。", "zhuyin": "ㄧㄝˋ ㄐㄧ", "kind": "vocab"}, {"word": "保障", "wrong": "保章", "meaning": "保護，使人安心。", "zhuyin": "ㄅㄠˇ ㄓㄤˋ", "kind": "vocab"}, {"word": "效率", "wrong": "效律", "meaning": "投入時間與得到成果的關係。", "zhuyin": "ㄒㄧㄠˋ ㄌㄩˋ", "kind": "vocab"}, {"word": "內涵", "wrong": "內函", "meaning": "內在的學識、修養或內容。", "zhuyin": "ㄋㄟˋ ㄏㄢˊ", "kind": "vocab"}, {"word": "預見", "wrong": "豫見", "meaning": "事先想到可能發生的事。", "zhuyin": "ㄩˋ ㄐㄧㄢˋ", "kind": "vocab"}, {"word": "釘牆", "wrong": "訂牆", "meaning": "把釘子打進牆壁，固定物品。", "zhuyin": "ㄉㄧㄥˋ ㄑㄧㄤˊ", "kind": "vocab"}, {"word": "遞工具", "wrong": "第工具", "meaning": "把工作用的器具交給別人。", "zhuyin": "ㄉㄧˋ ㄍㄨㄥ ㄐㄩˋ", "kind": "vocab"}, {"word": "螺絲起子", "wrong": "螺絲啟子", "meaning": "用來轉緊或鬆開螺絲的工具。", "zhuyin": "ㄌㄨㄛˊ ㄙ ㄑㄧˇ ˙ㄗ", "kind": "vocab"}, {"word": "井然有序", "wrong": "井然有敘", "meaning": "整齊有條理，順序清楚。", "zhuyin": "ㄐㄧㄥˇ ㄖㄢˊ ㄧㄡˇ ㄒㄩˋ", "kind": "vocab"}, {"word": "散漫", "wrong": "散慢", "meaning": "做事隨便、不夠認真。", "zhuyin": "ㄙㄢˇ ㄇㄢˋ", "kind": "vocab"}, {"word": "分內事", "wrong": "份內事", "meaning": "自己應該負責、做好的事情。", "zhuyin": "ㄈㄣˋ ㄋㄟˋ ㄕˋ", "kind": "vocab"}, {"word": "嚴謹", "wrong": "嚴僅", "meaning": "做事認真仔細，不馬虎。", "zhuyin": "ㄧㄢˊ ㄐㄧㄣˇ", "kind": "vocab"}];
const lessonPronunciations={};
function pronunciationFor(w){return typeof w.zhuyin==='string'&&w.zhuyin.trim()?w.zhuyin.trim().replace(/\s+/g,' '):(Object.prototype.hasOwnProperty.call(lessonPronunciations,w.word)?lessonPronunciations[w.word]:'')}
function annotatedWord(w){const p=pronunciationFor(w);return w.word+(p?'（'+p+'）':'')}
function showCatalog(){for(const kind of ['char','vocab']){const host=$(kind+'Catalog');host.replaceChildren(...data.words.filter(w=>(w.kind||'vocab')===kind).map(w=>{const item=document.createElement('span');item.className='catalog-item';item.textContent=annotatedWord(w);return item}))}}
let data={title:'南一五上｜第二課 做人做事做長久',words:defaults,done:{},ink:{},theme:'princess'},wi=0,mode='char',qids=[],active=null,stroke=null,redo=[],qi=0,answers=[],missedIds=[],missed=false,locked=false;
try{const current=localStorage.getItem(KEY),saved=JSON.parse(current||localStorage.getItem('chinese-nani-g5a-l02-v1'));if(saved&&Array.isArray(saved.words)&&saved.words.length&&saved.words.every(w=>typeof w.word==='string'&&w.word.length&&w.word.length<=6&&typeof w.wrong==='string'&&typeof w.meaning==='string')){data={...data,...saved};if(!current)for(let i=0;i<data.words.length;i++)if(data.words[i].kind==='char')delete data.done[i]}}catch(e){}
// Supplementary vocabulary migrates without clearing existing handwriting or completion.
const supplementaryWords=["釘牆", "遞工具", "螺絲起子", "井然有序", "散漫", "分內事", "嚴謹"];
for(const w of defaults.filter(w=>supplementaryWords.includes(w.word)))if(!data.words.some(old=>old.word===w.word))data.words.push({...w});
for(const w of data.words)if(w.kind==='char'&&w.word==='釘'&&w.meaning==='把「＿子」補完整。'){w.meaning='把「＿牆」補完整。';w.zhuyin='ㄉㄧㄥˋ';}
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
