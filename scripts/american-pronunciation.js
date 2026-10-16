/* Instant US pronunciation. No network requests in the button click path. */
(function(){'use strict';
let utterance=null;
function speak(text,status){
 if(!('speechSynthesis' in window)){if(status)status.textContent='裝置不支援語音朗讀，請使用劍橋字典。';return;}
 const synth=window.speechSynthesis;synth.cancel();
 const u=new SpeechSynthesisUtterance(text);utterance=u;u.lang='en-US';u.rate=.88;u.pitch=1;
 const voices=synth.getVoices();
 u.voice=voices.find(v=>v.lang.toLowerCase()==='en-us'&&/premium|enhanced|natural/i.test(v.name))||voices.find(v=>v.lang.toLowerCase()==='en-us')||null;
 u.onerror=()=>{if(status)status.textContent='語音播放失敗，可使用劍橋字典聽美式發音。';};
 if(status)status.textContent='🔊 美式英語發音：'+text;
 synth.speak(u);
}
window.AmericanPronunciation={speak};
})();