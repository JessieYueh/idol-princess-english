/* Geometry matching of whole-character strokes. Does not enforce stroke order.
 * Data: Hanzi Writer Data / Make Me a Hanzi, Arphic Public License.
 */
'use strict';
function samplePath(path,count=24){
 const distances=[0];for(let i=1;i<path.length;i++)distances.push(distances[i-1]+Math.hypot(path[i][0]-path[i-1][0],path[i][1]-path[i-1][1]));
 const length=distances.at(-1);if(!length)return Array.from({length:count},()=>path[0]);let j=1;
 return Array.from({length:count},(_,i)=>{const t=length*i/(count-1);while(j<distances.length-1&&distances[j]<t)j++;const a=path[j-1]||path[0],b=path[j]||a,f=(t-(distances[j-1]||0))/((distances[j]||0)-(distances[j-1]||0)||1);return[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f]});
}
function strokeDistance(a,b){const A=samplePath(a),B=samplePath(b);const length=p=>p.slice(1).reduce((t,x,i)=>t+Math.hypot(x[0]-p[i][0],x[1]-p[i][1]),0);const la=length(A),lb=length(B);if(la<lb*.35||la>lb*2.5)return 10;const cost=(q)=>A.reduce((t,p,i)=>t+Math.hypot(p[0]-q[i][0],p[1]-q[i][1]),0)/A.length;return Math.min(cost(B),cost([...B].reverse()))}
// Hungarian minimum-cost assignment prevents reusing one correct stroke for several strokes.
function assignStrokes(cost){const n=cost.length,u=Array(n+1).fill(0),v=[...u],p=[...u],way=[...u];for(let i=1;i<=n;i++){p[0]=i;let j0=0;const min=Array(n+1).fill(Infinity),used=Array(n+1).fill(false);do{used[j0]=true;const i0=p[j0];let delta=Infinity,j1=0;for(let j=1;j<=n;j++)if(!used[j]){const cur=cost[i0-1][j-1]-u[i0]-v[j];if(cur<min[j]){min[j]=cur;way[j]=j0}if(min[j]<delta){delta=min[j];j1=j}}for(let j=0;j<=n;j++)if(used[j]){u[p[j]]+=delta;v[j]-=delta}else min[j]-=delta;j0=j1}while(p[j0]!==0);do{const j1=way[j0];p[j0]=p[j1];j0=j1}while(j0)}const result=Array(n);for(let j=1;j<=n;j++)result[p[j]-1]=j-1;return result}
function normalizedReference(ref){return ref.medians.map(s=>s.map(p=>[.14+p[0]/1024*.72,.14+(900-p[1])/1024*.72]))}
function checkCharacter(strokes,ref){if(!ref)return{ok:false,message:'字形資料尚未載入。'};const target=normalizedReference(ref);if(strokes.length!==target.length)return{ok:false,message:`這個字有 ${target.length} 筆，目前寫了 ${strokes.length} 筆。請補齊，或復原多出的筆畫。`};if(strokes.some(s=>s.length<2))return{ok:false,message:'有筆畫太短，請復原後再寫一次。'};const costs=strokes.map(s=>target.map(t=>strokeDistance(s,t))),assignment=assignStrokes(costs),scores=assignment.map((j,i)=>costs[i][j]);const mean=scores.reduce((t,x)=>t+x,0)/scores.length;return Math.max(...scores)<=.12&&mean<=.075?{ok:true,message:'字形檢查通過！可以前往下一字。'}:{ok:false,message:'有筆畫的位置或形狀不太相符。對照範字，或按筆畫位置提示，再修正看看。'}}
