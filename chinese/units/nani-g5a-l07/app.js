'use strict';
const $=id=>document.getElementById(id),KEY='chinese-nani-g5a-l07-v3';
const defaults=[{"word":"設","wrong":"投","meaning":"把「＿計」補完整。","zhuyin":"ㄕㄜˋ","kind":"char"},{"word":"弧","wrong":"狐","meaning":"把「圓＿」補完整。","zhuyin":"ㄏㄨˊ","kind":"char"},{"word":"杆","wrong":"肝","meaning":"把「欄＿」補完整。","zhuyin":"ㄍㄢ","kind":"char"},{"word":"棟","wrong":"凍","meaning":"把「一＿」補完整。","zhuyin":"ㄉㄨㄥˋ","kind":"char"},{"word":"磁","wrong":"滋","meaning":"把「＿磚」補完整。","zhuyin":"ㄘˊ","kind":"char"},{"word":"鱗","wrong":"麟","meaning":"把「＿片」補完整。","zhuyin":"ㄌㄧㄣˊ","kind":"char"},{"word":"薑","wrong":"疆","meaning":"把「＿餅屋」補完整。","zhuyin":"ㄐㄧㄤ","kind":"char"},{"word":"霜","wrong":"雪","meaning":"把「糖＿」補完整。","zhuyin":"ㄕㄨㄤ","kind":"char"},{"word":"爪","wrong":"瓜","meaning":"把「張牙舞＿」補完整。","zhuyin":"ㄓㄠˇ","kind":"char"},{"word":"聖","wrong":"聲","meaning":"把「＿家堂」補完整。","zhuyin":"ㄕㄥˋ","kind":"char"},{"word":"際","wrong":"祭","meaning":"把「天＿」補完整。","zhuyin":"ㄐㄧˋ","kind":"char"},{"word":"瞪","wrong":"燈","meaning":"把「目＿口呆」補完整。","zhuyin":"ㄉㄥˋ","kind":"char"},{"word":"繪","wrong":"會","meaning":"把「彩＿」補完整。","zhuyin":"ㄏㄨㄟˋ","kind":"char"},{"word":"玻","wrong":"波","meaning":"把「＿璃」補完整。","zhuyin":"ㄅㄛ","kind":"char"},{"word":"璃","wrong":"離","meaning":"把「玻＿」補完整。","zhuyin":"ㄌㄧˊ","kind":"char"},{"word":"遺","wrong":"遣","meaning":"把「＿產」補完整。","zhuyin":"ㄧˊ","kind":"char"},{"word":"投","wrong":"設","meaning":"把「＿入」補完整。","zhuyin":"ㄊㄡˊ","kind":"char"},{"word":"堅","wrong":"緊","meaning":"把「＿持」補完整。","zhuyin":"ㄐㄧㄢ","kind":"char"},{"word":"設計","wrong":"投計","meaning":"事先規劃事物的樣式或方法。","zhuyin":"ㄕㄜˋ ㄐㄧˋ","kind":"vocab"},{"word":"圓弧","wrong":"圓狐","meaning":"圓周上的一段曲線。","zhuyin":"ㄩㄢˊ ㄏㄨˊ","kind":"vocab"},{"word":"欄杆","wrong":"欄肝","meaning":"用來阻隔或保護的杆子。","zhuyin":"ㄌㄢˊ ㄍㄢ","kind":"vocab"},{"word":"一棟","wrong":"一凍","meaning":"一座建築物。","zhuyin":"ㄧ ㄉㄨㄥˋ","kind":"vocab"},{"word":"磁磚","wrong":"滋磚","meaning":"鋪在牆面或地面的磚片。","zhuyin":"ㄘˊ ㄓㄨㄢ","kind":"vocab"},{"word":"鱗片","wrong":"麟片","meaning":"魚類等動物身上的片狀構造。","zhuyin":"ㄌㄧㄣˊ ㄆㄧㄢˋ","kind":"vocab"},{"word":"薑餅屋","wrong":"疆餅屋","meaning":"用薑餅做成的房屋造型。","zhuyin":"ㄐㄧㄤ ㄅㄧㄥˇ ㄨ","kind":"vocab"},{"word":"糖霜","wrong":"糖雙","meaning":"用糖製成的甜味裝飾。","zhuyin":"ㄊㄤˊ ㄕㄨㄤ","kind":"vocab"},{"word":"張牙舞爪","wrong":"張牙舞瓜","meaning":"形容凶猛或威嚇的樣子。","zhuyin":"ㄓㄤ ㄧㄚˊ ㄨˇ ㄓㄠˇ","kind":"vocab"},{"word":"聖家堂","wrong":"聲家堂","meaning":"高第設計的著名教堂。","zhuyin":"ㄕㄥˋ ㄐㄧㄚ ㄊㄤˊ","kind":"vocab"},{"word":"天際","wrong":"天祭","meaning":"天空與地面相接的遠處。","zhuyin":"ㄊㄧㄢ ㄐㄧˋ","kind":"vocab"},{"word":"目瞪口呆","wrong":"目燈口呆","meaning":"形容非常驚訝的樣子。","zhuyin":"ㄇㄨˋ ㄉㄥˋ ㄎㄡˇ ㄉㄞ","kind":"vocab"},{"word":"彩繪","wrong":"彩會","meaning":"用色彩描繪圖案。","zhuyin":"ㄘㄞˇ ㄏㄨㄟˋ","kind":"vocab"},{"word":"玻璃","wrong":"波璃","meaning":"透明或半透明的材料。","zhuyin":"ㄅㄛ ㄌㄧˊ","kind":"vocab"},{"word":"彩繪玻璃","wrong":"彩會玻璃","meaning":"帶有彩色圖案的玻璃。","zhuyin":"ㄘㄞˇ ㄏㄨㄟˋ ㄅㄛ ㄌㄧˊ","kind":"vocab"},{"word":"世界文化遺產","wrong":"世界文化遣產","meaning":"具有重要文化價值而受保護的遺產。","zhuyin":"ㄕˋ ㄐㄧㄝˋ ㄨㄣˊ ㄏㄨㄚˋ ㄧˊ ㄔㄢˇ","kind":"vocab"},{"word":"偉大","wrong":"違大","meaning":"成就或價值非常卓越。","zhuyin":"ㄨㄟˇ ㄉㄚˋ","kind":"vocab"},{"word":"投入","wrong":"設入","meaning":"專心參與或付出心力。","zhuyin":"ㄊㄡˊ ㄖㄨˋ","kind":"vocab"},{"word":"堅持","wrong":"緊持","meaning":"不輕易放棄。","zhuyin":"ㄐㄧㄢ ㄔˊ","kind":"vocab"},{"word":"悠遊","wrong":"優遊","meaning":"自在地遊覽或活動。","zhuyin":"ㄧㄡ ㄧㄡˊ","kind":"vocab"},{"word":"巴塞隆納","wrong":"巴賽隆納","meaning":"西班牙的一座城市。","zhuyin":"ㄅㄚ ㄙㄜˋ ㄌㄨㄥˊ ㄋㄚˋ","kind":"vocab"},{"word":"曲線","wrong":"屈線","meaning":"彎曲的線條。","zhuyin":"ㄑㄩ ㄒㄧㄢˋ","kind":"vocab"},{"word":"恐龍骨頭","wrong":"恐龍古頭","meaning":"恐龍身體的骨骼。","zhuyin":"ㄎㄨㄥˇ ㄌㄨㄥˊ ㄍㄨˇ ˙ㄊㄡ","kind":"vocab"},{"word":"奎爾公園","wrong":"奎耳公園","meaning":"高第設計的巴塞隆納公園。","zhuyin":"ㄎㄨㄟˊ ㄦˇ ㄍㄨㄥ ㄩㄢˊ","kind":"vocab"},{"word":"蜥蜴","wrong":"晰蜴","meaning":"一類爬行動物。","zhuyin":"ㄒㄧ ㄧˋ","kind":"vocab"},{"word":"參天","wrong":"餐天","meaning":"高聳到天空。","zhuyin":"ㄘㄢ ㄊㄧㄢ","kind":"vocab"},{"word":"滿目瘡痍","wrong":"滿目創痍","meaning":"眼前到處都是受破壞的景象。","zhuyin":"ㄇㄢˇ ㄇㄨˋ ㄔㄨㄤ ㄧˊ","kind":"vocab"},{"word":"爪子","wrong":"瓜子","meaning":"動物腳上的尖甲。","zhuyin":"ㄓㄨㄚˇ ˙ㄗ","kind":"vocab"},{"word":"狐狸","wrong":"弧狸","meaning":"一種犬科動物。","zhuyin":"ㄏㄨˊ ㄌㄧˊ","kind":"vocab"},{"word":"雕梁畫棟","wrong":"雕梁畫凍","meaning":"形容建築裝飾華麗。","zhuyin":"ㄉㄧㄠ ㄌㄧㄤˊ ㄏㄨㄚˋ ㄉㄨㄥˋ","kind":"vocab"},{"word":"波濤洶湧","wrong":"波濤凶湧","meaning":"形容波浪猛烈翻騰。","zhuyin":"ㄅㄛ ㄊㄠˊ ㄒㄩㄥ ㄩㄥˇ","kind":"vocab"},{"word":"差遣","wrong":"差遺","meaning":"派人去辦事。","zhuyin":"ㄔㄞ ㄑㄧㄢˇ","kind":"vocab"},{"word":"生鏽","wrong":"生繡","meaning":"金屬表面產生鏽斑。","zhuyin":"ㄕㄥ ㄒㄧㄡˋ","kind":"vocab"},{"word":"塗釉","wrong":"塗油","meaning":"在陶瓷表面塗上釉料。","zhuyin":"ㄊㄨˊ ㄧㄡˋ","kind":"vocab"},{"word":"烘焙","wrong":"烘倍","meaning":"用熱力烤製食物。","zhuyin":"ㄏㄨㄥ ㄅㄟˋ","kind":"vocab"},{"word":"垂涎三尺","wrong":"垂延三尺","meaning":"形容非常想吃或得到某物。","zhuyin":"ㄔㄨㄟˊ ㄒㄧㄢˊ ㄙㄢ ㄔˇ","kind":"vocab"},{"word":"竣工","wrong":"俊工","meaning":"工程完成。","zhuyin":"ㄐㄩㄣˋ ㄍㄨㄥ","kind":"vocab"},{"word":"錯愕","wrong":"錯鄂","meaning":"因意外而驚訝。","zhuyin":"ㄘㄨㄛˋ ㄜˋ","kind":"vocab"},{"word":"呆滯","wrong":"呆帶","meaning":"缺乏活力或反應遲鈍。","zhuyin":"ㄉㄞ ㄓˋ","kind":"vocab"},{"word":"載玻璃","wrong":"栽玻璃","meaning":"運送玻璃。","zhuyin":"ㄗㄞˋ ㄅㄛ ㄌㄧˊ","kind":"vocab"},{"word":"敷衍了事","wrong":"敷演了事","meaning":"做事馬虎，只求應付過去。","zhuyin":"ㄈㄨ ㄧㄢˇ ㄌㄧㄠˇ ㄕˋ","kind":"vocab"},{"word":"一幢幢","wrong":"一撞撞","meaning":"形容一座又一座建築。","zhuyin":"ㄧˋ ㄔㄨㄤˊ ㄔㄨㄤˊ","kind":"vocab"},{"word":"斑駁","wrong":"班駁","meaning":"色彩混雜或有剝落痕跡。","zhuyin":"ㄅㄢ ㄅㄛˊ","kind":"vocab"},{"word":"蔓延","wrong":"漫延","meaning":"向四周逐漸擴展。","zhuyin":"ㄇㄢˋ ㄧㄢˊ","kind":"vocab"}];
const lessonPronunciations={};
function pronunciationFor(w){return typeof w.zhuyin==='string'&&w.zhuyin.trim()?w.zhuyin.trim().replace(/\s+/g,' '):(Object.prototype.hasOwnProperty.call(lessonPronunciations,w.word)?lessonPronunciations[w.word]:'')}
function annotatedWord(w){const p=pronunciationFor(w);return w.word+(p?'（'+p+'）':'')}
function showCatalog(){for(const kind of ['char','vocab']){const host=$(kind+'Catalog');host.replaceChildren(...data.words.filter(w=>(w.kind||'vocab')===kind).map(w=>{const item=document.createElement('span');item.className='catalog-item';item.textContent=annotatedWord(w);return item}))}}
let data={title:'南一五上｜第七課 高第的魔法建築',words:defaults,done:{},ink:{},theme:'princess'},wi=0,mode='char',qids=[],active=null,stroke=null,redo=[],qi=0,answers=[],missedIds=[],missed=false,locked=false;
try{const current=localStorage.getItem(KEY),saved=JSON.parse(current||localStorage.getItem('chinese-nani-g5a-l07-v1'));if(saved&&Array.isArray(saved.words)&&saved.words.length&&saved.words.every(w=>typeof w.word==='string'&&w.word.length&&w.word.length<=6&&typeof w.wrong==='string'&&typeof w.meaning==='string')){data={...data,...saved};if(!current)for(let i=0;i<data.words.length;i++)if(data.words[i].kind==='char')delete data.done[i]}}catch(e){}
data.ink={};data.done={};
for(const w of data.words)if(w.word==='一幢幢')w.zhuyin='ㄧˋ ㄔㄨㄤˊ ㄔㄨㄤˊ';
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
