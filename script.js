const menu=document.getElementById('menu');
const nav=document.getElementById('navlinks');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('AgroTekton website inquiry — '+name);
  const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
  window.location.href='mailto:agrotekton@agrotekton.com?subject='+subject+'&body='+body;
});
