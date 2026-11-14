'use strict';
const $=id=>document.getElementById(id),KEY='chinese-nani-g5a-l08-v2';
const defaults=[{"word":"鄉","wrong":"響","meaning":"把「家＿」補完整。","zhuyin":"ㄒㄧㄤ","kind":"char"},{"word":"撲","wrong":"僕","meaning":"把「相＿」補完整。","zhuyin":"ㄆㄨ","kind":"char"},{"word":"螺","wrong":"累","meaning":"把「田＿」補完整。","zhuyin":"ㄌㄨㄛˊ","kind":"char"},{"word":"鮭","wrong":"蛙","meaning":"把「＿魚」補完整。","zhuyin":"ㄍㄨㄟ","kind":"char"},{"word":"葵","wrong":"蔡","meaning":"把「山＿」補完整。","zhuyin":"ㄎㄨㄟˊ","kind":"char"},{"word":"稠","wrong":"綢","meaning":"把「濃＿」補完整。","zhuyin":"ㄔㄡˊ","kind":"char"},{"word":"旋","wrong":"旅","meaning":"把「＿律」補完整。","zhuyin":"ㄒㄩㄢˊ","kind":"char"},{"word":"律","wrong":"津","meaning":"把「法＿」補完整。","zhuyin":"ㄌㄩˋ","kind":"char"},{"word":"麥","wrong":"來","meaning":"把「＿餅」補完整。","zhuyin":"ㄇㄞˋ","kind":"char"},{"word":"噓","wrong":"虛","meaning":"把「＿聲」補完整。","zhuyin":"ㄒㄩ","kind":"char"},{"word":"硬","wrong":"便","meaning":"把「堅＿」補完整。","zhuyin":"ㄧㄥˋ","kind":"char"},{"word":"扁","wrong":"偏","meaning":"把「壓＿」補完整。","zhuyin":"ㄅㄧㄢˇ","kind":"char"},{"word":"抗","wrong":"杭","meaning":"把「＿議」補完整。","zhuyin":"ㄎㄤˋ","kind":"char"},{"word":"筋","wrong":"肋","meaning":"把「拉＿」補完整。","zhuyin":"ㄐㄧㄣ","kind":"char"},{"word":"椒","wrong":"叔","meaning":"把「辣＿」補完整。","zhuyin":"ㄐㄧㄠ","kind":"char"},{"word":"蒜","wrong":"算","meaning":"把「大＿」補完整。","zhuyin":"ㄙㄨㄢˋ","kind":"char"},{"word":"漢","wrong":"嘆","meaning":"把「疊羅＿」補完整。","zhuyin":"ㄏㄢˋ","kind":"char"},{"word":"蓋","wrong":"溢","meaning":"把「鍋＿」補完整。","zhuyin":"ㄍㄞˋ","kind":"char"},{"word":"家鄉味","wrong":"家響味","meaning":"故鄉食物的風味。","zhuyin":"ㄐㄧㄚ ㄒㄧㄤ ㄨㄟˋ","kind":"vocab"},{"word":"相撲","wrong":"相僕","meaning":"日本的角力運動。","zhuyin":"ㄒㄧㄤ ㄆㄨ","kind":"vocab"},{"word":"鮭魚子","wrong":"蛙魚子","meaning":"鮭魚的卵。","zhuyin":"ㄍㄨㄟ ㄩˊ ㄗˇ","kind":"vocab"},{"word":"山葵","wrong":"山蔡","meaning":"可磨成辛辣調味料的植物。","zhuyin":"ㄕㄢ ㄎㄨㄟˊ","kind":"vocab"},{"word":"稠稠的","wrong":"綢綢的","meaning":"濃厚而有黏性的樣子。","zhuyin":"ㄔㄡˊ ㄔㄡˊ ˙ㄉㄜ","kind":"vocab"},{"word":"旋律","wrong":"旋津","meaning":"音樂中有順序的音調。","zhuyin":"ㄒㄩㄢˊ ㄌㄩˋ","kind":"vocab"},{"word":"麥餅","wrong":"麥併","meaning":"用麵粉做成的餅。","zhuyin":"ㄇㄞˋ ㄅㄧㄥˇ","kind":"vocab"},{"word":"硬是","wrong":"便是","meaning":"堅持一定要這樣做。","zhuyin":"ㄧㄥˋ ㄕˋ","kind":"vocab"},{"word":"扁扁的","wrong":"偏偏的","meaning":"寬而薄的樣子。","zhuyin":"ㄅㄧㄢˇ ㄅㄧㄢˇ ˙ㄉㄜ","kind":"vocab"},{"word":"抗議","wrong":"杭議","meaning":"表示反對或不滿。","zhuyin":"ㄎㄤˋ ㄧˋ","kind":"vocab"},{"word":"拉筋","wrong":"拉肋","meaning":"伸展肌肉。","zhuyin":"ㄌㄚ ㄐㄧㄣ","kind":"vocab"},{"word":"辣椒","wrong":"辣叔","meaning":"味道辛辣的蔬果。","zhuyin":"ㄌㄚˋ ㄐㄧㄠ","kind":"vocab"},{"word":"大蒜","wrong":"大算","meaning":"常用來調味的辛香植物。","zhuyin":"ㄉㄚˋ ㄙㄨㄢˋ","kind":"vocab"},{"word":"疊羅漢","wrong":"疊羅嘆","meaning":"人一層層疊起來的表演。","zhuyin":"ㄉㄧㄝˊ ㄌㄨㄛˊ ㄏㄢˋ","kind":"vocab"},{"word":"蓋子","wrong":"蓋仔","meaning":"用來蓋住容器的東西。","zhuyin":"ㄍㄞˋ ˙ㄗ","kind":"vocab"},{"word":"田螺","wrong":"田累","meaning":"生活在淡水中的螺類。","zhuyin":"ㄊㄧㄢˊ ㄌㄨㄛˊ","kind":"vocab"},{"word":"律師","wrong":"津師","meaning":"提供法律服務的專業人士。","zhuyin":"ㄌㄩˋ ㄕ","kind":"vocab"},{"word":"噓聲","wrong":"虛聲","meaning":"表示不滿或制止的聲音。","zhuyin":"ㄒㄩ ㄕㄥ","kind":"vocab"},{"word":"硬幣","wrong":"硬弊","meaning":"金屬製成的錢幣。","zhuyin":"ㄧㄥˋ ㄅㄧˋ","kind":"vocab"},{"word":"魚蝦螺貝","wrong":"魚蝦累貝","meaning":"魚、蝦、螺和貝類。","zhuyin":"ㄩˊ ㄒㄧㄚ ㄌㄨㄛˊ ㄅㄟˋ","kind":"vocab"},{"word":"鹹水","wrong":"咸水","meaning":"含有鹽分的水。","zhuyin":"ㄒㄧㄢˊ ㄕㄨㄟˇ","kind":"vocab"},{"word":"濃稠","wrong":"濃綢","meaning":"液體濃厚而不易流動。","zhuyin":"ㄋㄨㄥˊ ㄔㄡˊ","kind":"vocab"},{"word":"瑜伽","wrong":"愉伽","meaning":"結合伸展、呼吸等的練習。","zhuyin":"ㄩˊ ㄐㄧㄚ","kind":"vocab"},{"word":"麵團","wrong":"麵圃","meaning":"麵粉加水揉成的團塊。","zhuyin":"ㄇㄧㄢˋ ㄊㄨㄢˊ","kind":"vocab"},{"word":"窯裡","wrong":"窯理","meaning":"烘烤用的窯的內部。","zhuyin":"ㄧㄠˊ ㄌㄧˇ","kind":"vocab"},{"word":"劈里啪啦","wrong":"劈里拍啦","meaning":"形容連續爆裂或拍打的聲音。","zhuyin":"ㄆㄧ ㄌㄧˇ ㄆㄚ ㄌㄚ","kind":"vocab"},{"word":"呼朋引伴","wrong":"呼朋引拌","meaning":"招呼朋友和同伴。","zhuyin":"ㄏㄨ ㄆㄥˊ ㄧㄣˇ ㄅㄢˋ","kind":"vocab"},{"word":"鹽巴","wrong":"監巴","meaning":"食用的鹽。","zhuyin":"ㄧㄢˊ ㄅㄚ","kind":"vocab"},{"word":"咖哩","wrong":"加哩","meaning":"用多種香料製成的調味料或料理。","zhuyin":"ㄎㄚ ㄌㄧˇ","kind":"vocab"},{"word":"羅勒","wrong":"羅革","meaning":"常用於料理的香草。","zhuyin":"ㄌㄨㄛˊ ㄌㄜˋ","kind":"vocab"},{"word":"醃製","wrong":"淹製","meaning":"用鹽或調味料處理食物。","zhuyin":"ㄧㄢ ㄓˋ","kind":"vocab"},{"word":"旋風","wrong":"旅風","meaning":"快速旋轉的風。","zhuyin":"ㄒㄩㄢˋ ㄈㄥ","kind":"vocab"},{"word":"扁舟","wrong":"篇舟","meaning":"小船。","zhuyin":"ㄆㄧㄢ ㄓㄡ","kind":"vocab"},{"word":"僵硬","wrong":"疆硬","meaning":"不柔軟、不靈活。","zhuyin":"ㄐㄧㄤ ㄧㄥˋ","kind":"vocab"},{"word":"扁擔","wrong":"偏擔","meaning":"挑東西用的長桿。","zhuyin":"ㄅㄧㄢˇ ㄉㄢ","kind":"vocab"},{"word":"裸露","wrong":"棵露","meaning":"沒有遮蓋而露在外面。","zhuyin":"ㄌㄨㄛˇ ㄌㄨˋ","kind":"vocab"},{"word":"衣錦還鄉","wrong":"衣綿還鄉","meaning":"有所成就後光榮回到故鄉。","zhuyin":"ㄧˋ ㄐㄧㄣˇ ㄏㄨㄢˊ ㄒㄧㄤ","kind":"vocab"},{"word":"撲朔迷離","wrong":"僕朔迷離","meaning":"事情複雜，難以看清真相。","zhuyin":"ㄆㄨ ㄕㄨㄛˋ ㄇㄧˊ ㄌㄧˊ","kind":"vocab"},{"word":"欲蓋彌彰","wrong":"欲蓋彌章","meaning":"越想掩飾，反而越明顯。","zhuyin":"ㄩˋ ㄍㄞˋ ㄇㄧˊ ㄓㄤ","kind":"vocab"},{"word":"翱翔","wrong":"皋翔","meaning":"在空中自在飛翔。","zhuyin":"ㄠˊ ㄒㄧㄤˊ","kind":"vocab"},{"word":"不屈不撓","wrong":"不屈不饒","meaning":"遇到困難也不屈服。","zhuyin":"ㄅㄨˋ ㄑㄩ ㄅㄨˋ ㄋㄠˊ","kind":"vocab"},{"word":"僕役","wrong":"撲役","meaning":"受雇服侍他人的人。","zhuyin":"ㄆㄨˊ ㄧˋ","kind":"vocab"},{"word":"地廣人稠","wrong":"地廣人綢","meaning":"地方廣大，人口眾多。","zhuyin":"ㄉㄧˋ ㄍㄨㄤˇ ㄖㄣˊ ㄔㄡˊ","kind":"vocab"},{"word":"天旋地轉","wrong":"天旅地轉","meaning":"形容頭暈眼花。","zhuyin":"ㄊㄧㄢ ㄒㄩㄢˊ ㄉㄧˋ ㄓㄨㄢˋ","kind":"vocab"},{"word":"千篇一律","wrong":"千篇一津","meaning":"形容毫無變化。","zhuyin":"ㄑㄧㄢ ㄆㄧㄢ ㄧ ㄌㄩˋ","kind":"vocab"},{"word":"不辨菽麥","wrong":"不辯菽麥","meaning":"形容缺乏基本常識。","zhuyin":"ㄅㄨˋ ㄅㄧㄢˋ ㄕㄨˊ ㄇㄞˋ","kind":"vocab"},{"word":"噓寒問暖","wrong":"虛寒問暖","meaning":"細心關懷別人。","zhuyin":"ㄒㄩ ㄏㄢˊ ㄨㄣˋ ㄋㄨㄢˇ","kind":"vocab"},{"word":"分庭抗禮","wrong":"分庭杭禮","meaning":"比喻地位或能力相當。","zhuyin":"ㄈㄣ ㄊㄧㄥˊ ㄎㄤˋ ㄌㄧˇ","kind":"vocab"},{"word":"筋疲力竭","wrong":"肋疲力竭","meaning":"形容非常疲累。","zhuyin":"ㄐㄧㄣ ㄆㄧˊ ㄌㄧˋ ㄐㄧㄝˊ","kind":"vocab"},{"word":"雞毛蒜皮","wrong":"雞毛算皮","meaning":"比喻不重要的小事。","zhuyin":"ㄐㄧ ㄇㄠˊ ㄙㄨㄢˋ ㄆㄧˊ","kind":"vocab"},{"word":"楚河漢界","wrong":"楚河嘆界","meaning":"比喻雙方的分界。","zhuyin":"ㄔㄨˇ ㄏㄜˊ ㄏㄢˋ ㄐㄧㄝˋ","kind":"vocab"}];
const lessonPronunciations={};
function pronunciationFor(w){return typeof w.zhuyin==='string'&&w.zhuyin.trim()?w.zhuyin.trim().replace(/\s+/g,' '):(Object.prototype.hasOwnProperty.call(lessonPronunciations,w.word)?lessonPronunciations[w.word]:'')}
function annotatedWord(w){const p=pronunciationFor(w);return w.word+(p?'（'+p+'）':'')}
function showCatalog(){for(const kind of ['char','vocab']){const host=$(kind+'Catalog');host.replaceChildren(...data.words.filter(w=>(w.kind||'vocab')===kind).map(w=>{const item=document.createElement('span');item.className='catalog-item';item.textContent=annotatedWord(w);return item}))}}
let data={title:'南一五上｜第八課 嘗嘗我的家鄉味',words:defaults,done:{},ink:{},theme:'princess'},wi=0,mode='char',qids=[],active=null,stroke=null,redo=[],qi=0,answers=[],missedIds=[],missed=false,locked=false;
try{const current=localStorage.getItem(KEY),saved=JSON.parse(current||localStorage.getItem('chinese-nani-g5a-l08-v1'));if(saved&&Array.isArray(saved.words)&&saved.words.length&&saved.words.every(w=>typeof w.word==='string'&&w.word.length&&w.word.length<=6&&typeof w.wrong==='string'&&typeof w.meaning==='string')){data={...data,...saved};if(!current)for(let i=0;i<data.words.length;i++)if(data.words[i].kind==='char')delete data.done[i]}}catch(e){}
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
