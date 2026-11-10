const scripts = [
  {title:"TSB HALLOWEEN FARMER",description:"Halloween farming script for The Strongest Battlegrounds.",source:'script_key = "KEY_HERE"\nloadstring(game:HttpGet("https://flowauth.net/v1/loaders/HALLOWEENFARM.lua"))(script_key)'},
  {title:"TSB HALLOWEEN SCRIPTHUB",description:"Halloween script hub for The Strongest Battlegrounds.",source:'script_key = "KEY_HERE"\nloadstring(game:HttpGet("https://flowauth.net/v1/loaders/TSBHALLOWEENSCRIPTHUB.lua"))(script_key)'},
  {title:"TSB PUBLIC FARM (Saitama)",description:"Public farming script — Saitama.",source:'script_key = "KEY_HERE"\nloadstring(game:HttpGet("https://flowauth.net/v1/loaders/saitamafarm.lua"))(script_key)'},
  {title:"TSB PUBLIC FARM (Genos)",description:"Public farming script — Genos.",source:'script_key = "KEY_HERE"\nloadstring(game:HttpGet("https://flowauth.net/v1/loaders/genosfarm.lua"))(script_key)'}
];
const grid=document.querySelector("#script-grid");
function escapeHtml(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
// Lightweight Luau lexer: escapes source first, then styles tokens without altering copy payload.
function highlight(source){
  const tokenRe=/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(--[^\n]*)|(\b(?:local|function|return|if|then|else|elseif|end|for|while|do|in|repeat|until|break|continue|and|or|not|nil|true|false)\b)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_]\w*\b)|([=+\-*\/<>~:.,()[\]{}])/g;
  let out="",last=0,m;
  while((m=tokenRe.exec(source))){
    out+=escapeHtml(source.slice(last,m.index));let t=m[0],cls="";
    if(m[1])cls="str";else if(m[2])cls="comment";else if(m[3])cls="kw";else if(m[4])cls="num";else if(m[5]){
      const prev=source.slice(0,m.index).trimEnd().slice(-1);
      if(t==="game"||t==="HttpGet")cls="api";
      else if(prev==="." )cls="api";
      else if(source.slice(m.index+t.length).trimStart().startsWith("("))cls="fn";
      else cls="var";
    }else cls="op";
    out+=`<span class="${cls}">${escapeHtml(t)}</span>`;last=tokenRe.lastIndex;
  }
  return out+escapeHtml(source.slice(last));
}
scripts.forEach((item,i)=>{
 const card=document.createElement("article");card.className="panel script-card";
 card.innerHTML=`<div class="script-head"><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div><span class="script-number">0${i+1}</span></div><div class="code-wrap"><pre class="code"><code>${highlight(item.source)}</code></pre></div><div class="code-footer"><span class="code-label">LUAU · SOURCE</span><button class="copy-btn" type="button" data-copy="${i}"><span class="copy-label">Copy Code</span></button></div>`;
 grid.appendChild(card);
});
grid.addEventListener("click",async e=>{
 const btn=e.target.closest("[data-copy]");if(!btn)return;
 const source=scripts[Number(btn.dataset.copy)].source;
 try{await navigator.clipboard.writeText(source);btn.classList.add("copied");btn.querySelector(".copy-label").textContent="Copied!";btn.setAttribute("aria-label","Copied!");
 setTimeout(()=>{btn.classList.remove("copied");btn.querySelector(".copy-label").textContent="Copy Code";btn.removeAttribute("aria-label");},1600);
 }catch(err){btn.querySelector(".copy-label").textContent="Copy failed";setTimeout(()=>btn.querySelector(".copy-label").textContent="Copy Code",1600);}
});
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
const navLinks=[...document.querySelectorAll(".nav-link")];
function setActive(){const hash=location.hash||"#home";navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")===hash));}
window.addEventListener("hashchange",setActive);setActive();
// External links intentionally open in a new tab; no additional JS needed.
