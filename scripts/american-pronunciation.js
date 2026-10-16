/* Fast, predictable American English word and sentence pronunciation.
   No remote audio lookup or preload: avoids sung recordings and page-load network overhead. */
(function(){'use strict';
let active=null;
function speak(text,status){
 if(status)status.textContent='';
 if(!('speechSynthesis' in window))return;
 const synth=window.speechSynthesis;
 synth.cancel();
 const u=new SpeechSynthesisUtterance(text);
 active=u;u.lang='en-US';u.rate=.88;u.pitch=1;
 const voices=synth.getVoices();
 u.voice=voices.find(v=>v.lang.toLowerCase()==='en-us'&&/premium|enhanced|natural/i.test(v.name))
   ||voices.find(v=>v.lang.toLowerCase()==='en-us')
   ||null;
 synth.speak(u);
}
window.AmericanPronunciation={speak,preload:function(){},prepare:function(){return Promise.resolve(null);}};
})();