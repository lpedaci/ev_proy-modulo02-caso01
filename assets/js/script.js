
function toggleBlock(header){
  const block=header.closest('.form-block');
  block.classList.toggle('open');
  updateProgress();
}

function updateProgress(){
  const selects=document.querySelectorAll('.form-container select');
  const radNames=['q3','q4','q6','q7','q8','q10','q16','q17','q18','q19','q20','q21','q22','q26','q28'];
  const tas=document.querySelectorAll('.form-container textarea');
  let f=0,tot=selects.length+radNames.length+tas.length;
  selects.forEach(s=>{if(s.value)f++;});
  radNames.forEach(n=>{if(document.querySelector('input[name="'+n+'"]:checked'))f++;});
  tas.forEach(t=>{if(t.value.trim().length>3)f++;});
  const pct=Math.round((f/tot)*100);
  document.getElementById('fc-bar').style.width=pct+'%';
}

function switchTab(id){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  event.target.classList.add('active');
}

// Nav active + TOC
const sections=['caso','entrevista','analisis','requerimientos','okrs','perfiles'];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id=entry.target.id;
      document.querySelectorAll('.nav-links a').forEach(a=>{
        a.classList.toggle('act',a.getAttribute('href')==='#'+id);
      });
      document.querySelectorAll('.toc-item').forEach(a=>{
        a.classList.toggle('vis',a.getAttribute('data-section')===id);
      });
    }
  });
},{threshold:0.3});
sections.forEach(id=>{
  const el=document.getElementById(id);
  if(el)observer.observe(el);
});

