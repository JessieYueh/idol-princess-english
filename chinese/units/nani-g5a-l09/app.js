'use strict';
const $=id=>document.getElementById(id),KEY='chinese-nani-g5a-l09-v1';
const defaults=[{"word":"股","wrong":"般","meaning":"把「一＿力量」補完整。","zhuyin":"ㄍㄨˇ","kind":"char"},{"word":"藉","wrong":"籍","meaning":"把「＿由」補完整。","zhuyin":"ㄐㄧㄝˋ","kind":"char"},{"word":"訪","wrong":"放","meaning":"把「探＿」補完整。","zhuyin":"ㄈㄤˇ","kind":"char"},{"word":"購","wrong":"構","meaning":"把「＿票」補完整。","zhuyin":"ㄍㄡˋ","kind":"char"},{"word":"票","wrong":"漂","meaning":"把「車＿」補完整。","zhuyin":"ㄆㄧㄠˋ","kind":"char"},{"word":"售","wrong":"傻","meaning":"把「＿票」補完整。","zhuyin":"ㄕㄡˋ","kind":"char"},{"word":"協","wrong":"脅","meaning":"把「＿助」補完整。","zhuyin":"ㄒㄧㄝˊ","kind":"char"},{"word":"譯","wrong":"驛","meaning":"把「翻＿」補完整。","zhuyin":"ㄧˋ","kind":"char"},{"word":"局","wrong":"居","meaning":"把「鐵路＿」補完整。","zhuyin":"ㄐㄩˊ","kind":"char"},{"word":"亡","wrong":"忘","meaning":"把「死＿」補完整。","zhuyin":"ㄨㄤˊ","kind":"char"},{"word":"款","wrong":"歀","meaning":"把「捐＿」補完整。","zhuyin":"ㄎㄨㄢˇ","kind":"char"},{"word":"挖","wrong":"控","meaning":"把「開＿」補完整。","zhuyin":"ㄨㄚ","kind":"char"},{"word":"賺","wrong":"嫌","meaning":"把「＿錢」補完整。","zhuyin":"ㄓㄨㄢˋ","kind":"char"},{"word":"鄰","wrong":"憐","meaning":"把「＿居」補完整。","zhuyin":"ㄌㄧㄣˊ","kind":"char"},{"word":"幣","wrong":"弊","meaning":"把「加＿」補完整。","zhuyin":"ㄅㄧˋ","kind":"char"},{"word":"夠","wrong":"購","meaning":"把「不＿」補完整。","zhuyin":"ㄍㄡˋ","kind":"char"},{"word":"基","wrong":"其","meaning":"把「＿金會」補完整。","zhuyin":"ㄐㄧ","kind":"char"},{"word":"諸","wrong":"豬","meaning":"把「付＿實行」補完整。","zhuyin":"ㄓㄨ","kind":"char"},{"word":"一股","wrong":"一骨","meaning":"一陣、一種力量。","zhuyin":"ㄧˋ ㄍㄨˇ","kind":"vocab"},{"word":"藉由","wrong":"籍由","meaning":"透過某種方法。","zhuyin":"ㄐㄧㄝˋ ㄧㄡˊ","kind":"vocab"},{"word":"探訪","wrong":"探放","meaning":"前往拜訪、了解情況。","zhuyin":"ㄊㄢˋ ㄈㄤˇ","kind":"vocab"},{"word":"購票","wrong":"構票","meaning":"買票。","zhuyin":"ㄍㄡˋ ㄆㄧㄠˋ","kind":"vocab"},{"word":"車票","wrong":"車漂","meaning":"乘車用的票。","zhuyin":"ㄔㄜ ㄆㄧㄠˋ","kind":"vocab"},{"word":"售票","wrong":"售漂","meaning":"出售車票或門票。","zhuyin":"ㄕㄡˋ ㄆㄧㄠˋ","kind":"vocab"},{"word":"協助","wrong":"脅助","meaning":"幫忙完成事情。","zhuyin":"ㄒㄧㄝˊ ㄓㄨˋ","kind":"vocab"},{"word":"翻譯","wrong":"翻驛","meaning":"將一種語言轉換成另一種語言。","zhuyin":"ㄈㄢ ㄧˋ","kind":"vocab"},{"word":"鐵路局","wrong":"鐵路居","meaning":"管理鐵路事務的機構稱呼。","zhuyin":"ㄊㄧㄝˇ ㄌㄨˋ ㄐㄩˊ","kind":"vocab"},{"word":"死亡","wrong":"死忘","meaning":"生命結束。","zhuyin":"ㄙˇ ㄨㄤˊ","kind":"vocab"},{"word":"捐款","wrong":"捐歀","meaning":"捐出金錢。","zhuyin":"ㄐㄩㄢ ㄎㄨㄢˇ","kind":"vocab"},{"word":"開挖","wrong":"開控","meaning":"開始挖掘。","zhuyin":"ㄎㄞ ㄨㄚ","kind":"vocab"},{"word":"賺錢","wrong":"嫌錢","meaning":"工作或做事取得金錢。","zhuyin":"ㄓㄨㄢˋ ㄑㄧㄢˊ","kind":"vocab"},{"word":"鄰居","wrong":"憐居","meaning":"住在附近的人。","zhuyin":"ㄌㄧㄣˊ ㄐㄩ","kind":"vocab"},{"word":"加幣","wrong":"加弊","meaning":"加拿大的貨幣。","zhuyin":"ㄐㄧㄚ ㄅㄧˋ","kind":"vocab"},{"word":"不夠","wrong":"不購","meaning":"數量不足。","zhuyin":"ㄅㄨˊ ㄍㄡˋ","kind":"vocab"},{"word":"基金會","wrong":"其金會","meaning":"為特定公益目的設立的組織。","zhuyin":"ㄐㄧ ㄐㄧㄣ ㄏㄨㄟˋ","kind":"vocab"},{"word":"付諸實行","wrong":"付豬實行","meaning":"把想法實際做出來。","zhuyin":"ㄈㄨˋ ㄓㄨ ㄕˊ ㄒㄧㄥˊ","kind":"vocab"},{"word":"紀錄片","wrong":"紀碌片","meaning":"記錄真實人物或事件的影片。","zhuyin":"ㄐㄧˋ ㄌㄨˋ ㄆㄧㄢˋ","kind":"vocab"},{"word":"主角","wrong":"主腳","meaning":"故事中的主要人物。","zhuyin":"ㄓㄨˇ ㄐㄩㄝˊ","kind":"vocab"},{"word":"誠如","wrong":"成如","meaning":"正如、就像。","zhuyin":"ㄔㄥˊ ㄖㄨˊ","kind":"vocab"},{"word":"東南亞","wrong":"東難亞","meaning":"亞洲東南部的地區。","zhuyin":"ㄉㄨㄥ ㄋㄢˊ ㄧㄚˋ","kind":"vocab"},{"word":"杯盤狼藉","wrong":"杯盤狼籍","meaning":"吃喝後杯盤雜亂的樣子。","zhuyin":"ㄅㄟ ㄆㄢˊ ㄌㄤˊ ㄐㄧˊ","kind":"vocab"},{"word":"戶籍","wrong":"戶藉","meaning":"人民的戶口登記資料。","zhuyin":"ㄏㄨˋ ㄐㄧˊ","kind":"vocab"},{"word":"弊端","wrong":"幣端","meaning":"制度或事情中的缺點、問題。","zhuyin":"ㄅㄧˋ ㄉㄨㄢ","kind":"vocab"},{"word":"遛狗","wrong":"溜狗","meaning":"帶狗出門走動。","zhuyin":"ㄌㄧㄡˋ ㄍㄡˇ","kind":"vocab"},{"word":"有目共睹","wrong":"有目共賭","meaning":"人人都看得見。","zhuyin":"ㄧㄡˇ ㄇㄨˋ ㄍㄨㄥˋ ㄉㄨˇ","kind":"vocab"},{"word":"懸梁刺股","wrong":"懸梁刺骨","meaning":"形容勤奮苦讀。","zhuyin":"ㄒㄩㄢˊ ㄌㄧㄤˊ ㄘˋ ㄍㄨˇ","kind":"vocab"},{"word":"以鄰為壑","wrong":"以憐為壑","meaning":"把災禍或困難轉嫁給鄰人。","zhuyin":"ㄧˇ ㄌㄧㄣˊ ㄨㄟˊ ㄏㄨㄛˋ","kind":"vocab"},{"word":"汲取","wrong":"級取","meaning":"吸收、取得知識或經驗。","zhuyin":"ㄐㄧˊ ㄑㄩˇ","kind":"vocab"},{"word":"鋤頭","wrong":"除頭","meaning":"用來鬆土、除草的農具。","zhuyin":"ㄔㄨˊ ˙ㄊㄡ","kind":"vocab"}];
const lessonPronunciations={};
function pronunciationFor(w){return typeof w.zhuyin==='string'&&w.zhuyin.trim()?w.zhuyin.trim().replace(/\s+/g,' '):(Object.prototype.hasOwnProperty.call(lessonPronunciations,w.word)?lessonPronunciations[w.word]:'')}
function annotatedWord(w){const p=pronunciationFor(w);return w.word+(p?'（'+p+'）':'')}
function showCatalog(){for(const kind of ['char','vocab']){const host=$(kind+'Catalog');host.replaceChildren(...data.words.filter(w=>(w.kind||'vocab')===kind).map(w=>{const item=document.createElement('span');item.className='catalog-item';item.textContent=annotatedWord(w);return item}))}}
let data={title:'南一五上｜第九課 小小力量將世界照亮',words:defaults,done:{},ink:{},theme:'princess'},wi=0,mode='char',qids=[],active=null,stroke=null,redo=[],qi=0,answers=[],missedIds=[],missed=false,locked=false;
try{const current=localStorage.getItem(KEY),saved=JSON.parse(current||localStorage.getItem('chinese-nani-g5a-l09-v0'));if(saved&&Array.isArray(saved.words)&&saved.words.length&&saved.words.every(w=>typeof w.word==='string'&&w.word.length&&w.word.length<=6&&typeof w.wrong==='string'&&typeof w.meaning==='string')){data={...data,...saved};if(!current)for(let i=0;i<data.words.length;i++)if(data.words[i].kind==='char')delete data.done[i]}}catch(e){}
data.ink={};data.done={};
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
$('apply').onclick=()=>{const lines=$('editor').value.trim().split('\n'),words=lines.map(l=>{const p=l.split('|').map(s=>s.trim());return{word:p[0],wrong:p[1],meaning:p[2],zhuyin:p[3]||'',kind:'vocab'}});if(words.length>80||words.some(w=>!w.word||Array.from(w.word).length>6||!w.wrong||w.word===w.wrong||!w.meaning||w.meaning.length>100||(w.zhuyin&&(!/^[ㄅ-ㄩˊˇˋ˙\s]+$/.test(w.zhuyin)||w.zhuyin.split(/\s+/).length!==Array.from(w.word).length)))||!$('lessonTitle').value.trim()){ $('editStatus').textContent='請填課名與完整三欄，每詞最多 6 字、每課最多 80 詞，正確詞與錯字須不同。注音選填，一字一音、以空格分隔。';return}data={...data,title:$('lessonTitle').value.trim(),words:[...defaults.filter(w=>w.kind==='char'),...words],done:{},ink:{}};mode='vocab';wi=defaults.filter(w=>w.kind==='char').length;save();sync();panel('practice');$('editStatus').textContent='已套用新課程，舊示範筆跡已重設。'};
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
 if(!glyphs||!Array.from(word).every(ch=>glyphs.paths[ch]))return;
 for(const ch of Array.from(word)){
  if(!glyphs.paths[ch])continue;
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.classList.add('fallbackGlyph');svg.setAttribute('viewBox',`0 0 ${glyphs.units} ${glyphs.ascent-glyphs.descent}`);svg.setAttribute('aria-hidden','true');
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',glyphs.paths[ch]);path.setAttribute('transform',`translate(0 ${glyphs.ascent}) scale(1 -1)`);svg.appendChild(path);heading.appendChild(svg);
 }
}
async function loadFallbackGlyphs(){
 try{
  const r=await fetch('../nani-g5a-l06/fonts/moe-kai-glyphs.json');if(!r.ok)throw Error('Glyph download failed');
  const d=await r.json();if(!d.paths||!Number.isFinite(d.units)||d.units<=0)throw Error('Invalid glyph data');
  glyphs=d;showFallbackWord();progress();render();updateFontStatus();
 }catch(e){if(!fontReady)$('fontStatus').textContent='範字尚未載入，請按「重新載入字型」再試一次。';}
}
