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
document.addEventListener("DOMContentLoaded", function () {

  const partnerForm = document.getElementById("partnerForm");
  const partnerRegistrationForm =
    document.getElementById("partnerRegistrationForm");

  window.openPartnerForm = function () {
    if (partnerForm) {
      partnerForm.style.display = "flex";
    }
  };

  window.closePartnerForm = function () {
    if (partnerForm) {
      partnerForm.style.display = "none";
    }
  };

  if (partnerRegistrationForm) {
    partnerRegistrationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Partner registration submitted successfully!");

      partnerRegistrationForm.reset();
      closePartnerForm();
    });
  }

});

function showPartnerStep(stepNumber) {
  document.querySelectorAll(".partner-step").forEach(function(step) {
    step.classList.remove("active");
  });

  document
    .getElementById("partnerStep" + stepNumber)
    .classList.add("active");
}

function nextPartnerStep(stepNumber) {

  if (stepNumber === 2) {

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const dob = document.getElementById("dob");
    const profilePicture = document.getElementById("profilePicture");

    if (
      !firstName.value ||
      !lastName.value ||
      !dob.value ||
      !profilePicture.files.length
    ) {
      alert("Please complete Step 1 first.");
      return;
    }
  }

  if (stepNumber === 3) {

    const gender = document.getElementById("gender");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const services = document.querySelectorAll(
  'input[name="services"]:checked'
);

if (
  !gender.value ||
  !email.value ||
  !phone.value ||
  services.length === 0
) {
  alert("Please complete Step 2 first.");
  return;
}
  }

  showPartnerStep(stepNumber);
}

function previousPartnerStep(stepNumber) {
  showPartnerStep(stepNumber);
}
