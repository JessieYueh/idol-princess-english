from pathlib import Path
import base64, hashlib, re, shutil
root=Path(__file__).resolve().parents[1]
game=root/'game.html'
text=game.read_text(encoding='utf-8')
(root/'images').mkdir(exist_ok=True)
(root/'media').mkdir(exist_ok=True)
for name in ('adventure_header.png','mitsuki_app_icon.png'):
    source=root/name
    if source.exists(): shutil.copyfile(source,root/'images'/name)
count=[0]
def convert(match):
    kind, subtype, encoded=match.groups()
    try: content=base64.b64decode(encoded,validate=True)
    except Exception: return match.group(0)
    ext={'jpeg':'jpg','mpeg':'mp3'}.get(subtype,subtype)
    folder='images' if kind=='image' else 'media'
    name='asset_'+hashlib.sha256(content).hexdigest()[:16]+'.'+ext
    dest=root/folder/name
    dest.write_bytes(content)
    count[0]+=1
    return './'+folder+'/'+name
pattern=r'data:(image|audio)/(jpeg|jpg|png|webp|gif|mpeg|mp3|wav|ogg);base64,([A-Za-z0-9+/=]+)'
text=re.sub(pattern,convert,text)
if count[0]<2: raise RuntimeError('No embedded media detected: preserving original game')
game.write_text(text,encoding='utf-8')
for path in (root/'index.html',root/'map.html',root/'play.html'):
    if path.exists():
        html=path.read_text(encoding='utf-8')
        html=html.replace('./adventure_header.png','./images/adventure_header.png')
        html=html.replace('./mitsuki_app_icon.png','./images/mitsuki_app_icon.png')
        path.write_text(html,encoding='utf-8')
print('Externalized',count[0],'embedded image/audio references')
