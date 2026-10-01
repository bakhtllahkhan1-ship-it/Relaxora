const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',()=>navMenu.classList.remove('open'));
});

document.querySelectorAll('.select-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.getElementById('service').value=btn.dataset.service;
    document.getElementById('booking').scrollIntoView({behavior:'smooth'});
  });
});

const form=document.getElementById('bookingForm');
const modal=document.getElementById('successModal');
const modalText=document.getElementById('modalText');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const service=document.getElementById('service').value;
  const date=document.getElementById('date').value;
  const time=document.getElementById('time').value;
  modalText.textContent=`Thank you, ${name}. Your request for ${service} on ${date} at ${time} has been recorded in this demo.`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  form.reset();
});

function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}
document.getElementById('closeModal').addEventListener('click',closeModal);
document.getElementById('modalOk').addEventListener('click',closeModal);
modal.addEventListener('click',(e)=>{if(e.target===modal) closeModal();});
function openPartnerForm() {
  document.getElementById("partnerForm").style.display = "flex";
}

function closePartnerForm() {
  document.getElementById("partnerForm").style.display = "none";
}

document
  .getElementById("partnerRegistrationForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Partner registration submitted successfully!");

    this.reset();
    closePartnerForm();
