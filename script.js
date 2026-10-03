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

/* =================================
   RELAX AURA PARTNER REGISTRATION
   ================================= */

.ra-partner-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 99999;

  background: rgba(0, 0, 0, 0.55);

  align-items: center;
  justify-content: center;

  padding: 15px;
  box-sizing: border-box;

  overflow-y: auto;
}


.ra-partner-modal.show {
  display: flex;
}


.ra-partner-box {
  position: relative;

  width: 100%;
  max-width: 430px;

  max-height: 94vh;
  overflow-y: auto;

  background: #ffffff;

  border-radius: 22px;

  padding: 28px 20px 20px;

  box-sizing: border-box;

  box-shadow: 0 15px 40px rgba(0,0,0,0.20);
}


.ra-partner-close {
  position: absolute;

  top: 10px;
  right: 15px;

  width: 38px;
  height: 38px;

  border: none;
  background: transparent;

  font-size: 32px;
  line-height: 1;

  cursor: pointer;

  color: #222;
}


.ra-partner-step {
  display: none;
}


.ra-partner-step.active {
  display: block;
}


.ra-partner-step h2 {
  font-size: 25px;

  margin: 5px 0 25px;

  color: #111;
}


.ra-subtitle {
  color: #777;

  font-size: 14px;

  margin-top: -15px;
  margin-bottom: 20px;
}


/* PROFILE PICTURE */

.ra-profile-area {
  position: relative;

  width: 125px;

  margin-bottom: 22px;
}


.ra-profile-upload {
  display: block;

  width: 125px;
  height: 125px;

  position: relative;

  cursor: pointer;
}


.ra-profile-upload img {
  width: 125px;
  height: 125px;

  object-fit: cover;

  border-radius: 18px;

  display: none;
}


.ra-profile-placeholder {
  width: 125px;
  height: 125px;

  border-radius: 18px;

  background: #f1f1f1;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 42px;

  color: #888;

  border: 1px dashed #bbb;
}


.ra-camera-text {
  position: absolute;

  left: 0;
  top: 132px;

  font-size: 14px;

  color: #222;

  white-space: nowrap;
}


.ra-remove-photo {
  position: absolute;

  right: -9px;
  top: -9px;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  border: none;

  background: #777;
  color: white;

  font-size: 20px;

  line-height: 28px;

  cursor: pointer;
}


/* INPUTS */

.ra-input-box {
  margin-bottom: 14px;
}


.ra-input-box label {
  display: block;

  font-size: 13px;

  color: #777;

  margin: 0 0 5px 14px;
}


.ra-input-box input,
.ra-input-box select,
.ra-input-box textarea {

  width: 100%;

  box-sizing: border-box;

  border: none;

  outline: none;

  background: #f3f3f3;

  border-radius: 14px;

  padding: 16px;

  font-size: 16px;

  color: #222;
}


.ra-input-box input:focus,
.ra-input-box select:focus,
.ra-input-box textarea:focus {
  box-shadow: 0 0 0 2px rgba(150,220,0,0.25);
}


.ra-input-box textarea {
  min-height: 100px;

  resize: vertical;
}


/* SERVICES */

.ra-service-option {

  display: flex;

  align-items: center;

  gap: 12px;

  background: #f3f3f3;

  border-radius: 14px;

  padding: 16px;

  margin-bottom: 12px;

  cursor: pointer;

  font-size: 15px;
}


.ra-service-option input {
  width: 20px;
  height: 20px;

  accent-color: #b8f000;
}


/* BOTTOM AREA */

.ra-bottom {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-top: 25px;

  padding-top: 5px;
}


.ra-progress-info {
  flex: 1;
}


.ra-progress-info span {
  display: block;

  font-size: 17px;

  font-weight: 600;

  margin-bottom: 10px;
}


.ra-progress {

  width: 100%;

  height: 7px;

  background: #ddd;

  border-radius: 20px;

  overflow: hidden;
}


.ra-progress-fill {

  height: 100%;

  background: #b8f000;

  border-radius: 20px;
}


/* BUTTONS */

.ra-buttons {
  display: flex;

  align-items: center;

  gap: 8px;
}


.ra-next {

  min-width: 145px;

  height: 58px;

  border: none;

  border-radius: 17px;

  background: #b8f000;

  color: #111;

  font-size: 17px;

  font-weight: 700;

  cursor: pointer;

  padding: 0 22px;
}


.ra-next span {
  font-size: 25px;

  vertical-align: -2px;

  margin-left: 7px;
}


.ra-back {

  width: 55px;
  height: 55px;

  border: none;

  border-radius: 17px;

  background: #f5f5f5;

  color: #999;

  font-size: 30px;

  cursor: pointer;
}


.ra-next:active,
.ra-back:active {
  transform: scale(0.97);
}


/* MOBILE */

@media (max-width: 480px) {

  .ra-partner-modal {
    padding: 8px;
  }

  .ra-partner-box {
    max-height: 96vh;

    padding: 28px 16px 16px;

    border-radius: 20px;
  }

  .ra-partner-step h2 {
    font-size: 23px;
  }

  .ra-next {
    min-width: 125px;

    height: 54px;

    font-size: 16px;
  }

  .ra-back {
    width: 52px;
    height: 52px;
  }

}
