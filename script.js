/* =========================================
   RELAX AURA MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE MENU
   ========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });

}


document.querySelectorAll("nav a").forEach(function (a) {

  a.addEventListener("click", function () {

    if (navMenu) {
      navMenu.classList.remove("open");
    }

  });

});


/* =========================================
   SERVICE SELECT BUTTONS
   ========================================= */

document.querySelectorAll(".select-btn").forEach(function (btn) {

  btn.addEventListener("click", function () {

    const serviceInput =
      document.getElementById("service");

    const bookingSection =
      document.getElementById("booking");

    if (serviceInput) {

      serviceInput.value =
        btn.dataset.service || "";

    }

    if (bookingSection) {

      bookingSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


/* =========================================
   BOOKING FORM
   ========================================= */

const bookingForm =
  document.getElementById("bookingForm");

const successModal =
  document.getElementById("successModal");

const modalText =
  document.getElementById("modalText");


if (bookingForm) {

  bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nameElement =
      document.getElementById("name");

    const serviceElement =
      document.getElementById("service");

    const dateElement =
      document.getElementById("date");

    const timeElement =
      document.getElementById("time");


    const name =
      nameElement ? nameElement.value.trim() : "";

    const service =
      serviceElement ? serviceElement.value : "";

    const date =
      dateElement ? dateElement.value : "";

    const time =
      timeElement ? timeElement.value : "";


    if (modalText) {

      modalText.textContent =
        `Thank you, ${name}. Your request for ${service} on ${date} at ${time} has been recorded in this demo.`;

    }


    if (successModal) {

      successModal.classList.add("show");

      successModal.setAttribute(
        "aria-hidden",
        "false"
      );

    }


    bookingForm.reset();

  });

}


/* =========================================
   SUCCESS MODAL
   ========================================= */

function closeModal() {

  if (!successModal) return;

  successModal.classList.remove("show");

  successModal.setAttribute(
    "aria-hidden",
    "true"
  );

}


const closeModalButton =
  document.getElementById("closeModal");

if (closeModalButton) {

  closeModalButton.addEventListener(
    "click",
    closeModal
  );

}


const modalOkButton =
  document.getElementById("modalOk");

if (modalOkButton) {

  modalOkButton.addEventListener(
    "click",
    closeModal
  );

}


if (successModal) {

  successModal.addEventListener(
    "click",
    function (e) {

      if (e.target === successModal) {

        closeModal();

      }

    }
  );

}


/* =========================================
   RELAX AURA PARTNER REGISTRATION
   ========================================= */


/* SHOW PARTNER STEP */

function raShowStep(stepNumber) {

  document
    .querySelectorAll(".ra-partner-step")
    .forEach(function (step) {

      step.classList.remove("active");

    });


  const selectedStep =
    document.getElementById(
      "raPartnerStep" + stepNumber
    );


  if (selectedStep) {

    selectedStep.classList.add("active");

  }

}


/* =========================================
   OPEN PARTNER FORM
   ========================================= */

function openPartnerForm() {

  const modal =
    document.getElementById("raPartnerModal");

  if (!modal) return;

  modal.classList.add("show");

  raShowStep(1);

}


/* =========================================
   CLOSE PARTNER FORM
   ========================================= */

function closePartnerForm() {

  const modal =
    document.getElementById("raPartnerModal");

  if (!modal) return;

  modal.classList.remove("show");

}


/* =========================================
   NEXT STEP
   ========================================= */

function raNextStep(stepNumber) {


  /* STEP 1 → STEP 2 */

  if (stepNumber === 2) {

    const firstName =
      document
        .getElementById("raFirstName")
        ?.value.trim();

    const lastName =
      document
        .getElementById("raLastName")
        ?.value.trim();

    const dob =
      document
        .getElementById("raDob")
        ?.value;

    const profilePicture =
      document
        .getElementById("raProfilePicture");


    if (
      !firstName ||
      !lastName ||
      !dob ||
      !profilePicture ||
      !profilePicture.files.length
    ) {

      alert(
        "Please complete all information first."
      );

      return;

    }

  }


  /* STEP 2 → STEP 3 */

  if (stepNumber === 3) {

    const gender =
      document
        .getElementById("raGender")
        ?.value;

    const email =
      document
        .getElementById("raEmail")
        ?.value.trim();

    const phone =
      document
        .getElementById("raPhone")
        ?.value.trim();


    if (!gender || !email || !phone) {

      alert(
        "Please complete all information first."
      );

      return;

    }

  }


  /* STEP 3 → STEP 4 */

  if (stepNumber === 4) {

    const services =
      document.querySelectorAll(
        'input[name="raServices"]:checked'
      );


    if (services.length === 0) {

      alert(
        "Please select at least one service."
      );

      return;

    }

  }


  raShowStep(stepNumber);

}


/* =========================================
   PREVIOUS STEP
   ========================================= */

function raPreviousStep(stepNumber) {

  raShowStep(stepNumber);

}


/* =========================================
   PROFILE PICTURE PREVIEW
   ========================================= */

const profileInput =
  document.getElementById(
    "raProfilePicture"
  );

const profilePreview =
  document.getElementById(
    "raProfilePreview"
  );

const profilePlaceholder =
  document.getElementById(
    "raProfilePlaceholder"
  );

const removePhoto =
  document.getElementById(
    "raRemovePhoto"
  );


if (profileInput) {

  profileInput.addEventListener(
    "change",
    function () {

      const file =
        this.files[0];

      if (!file) return;


      const reader =
        new FileReader();


      reader.onload =
        function (event) {

          if (profilePreview) {

            profilePreview.src =
              event.target.result;

            profilePreview.style.display =
              "block";

          }


          if (profilePlaceholder) {

            profilePlaceholder.style.display =
              "none";

          }


          if (removePhoto) {

            removePhoto.style.display =
              "block";

          }

        };


      reader.readAsDataURL(file);

    }
  );

}


/* =========================================
   REMOVE PROFILE PICTURE
   ========================================= */

if (removePhoto) {

  removePhoto.addEventListener(
    "click",
    function () {

      if (profileInput) {

        profileInput.value = "";

      }


      if (profilePreview) {

        profilePreview.src = "";

        profilePreview.style.display =
          "none";

      }


      if (profilePlaceholder) {

        profilePlaceholder.style.display =
          "flex";

      }


      removePhoto.style.display =
        "none";

    }
  );

}


/* =========================================
   CLOSE PARTNER FORM BY OUTSIDE CLICK
   ========================================= */

const partnerModal =
  document.getElementById(
    "raPartnerModal"
  );


if (partnerModal) {

  partnerModal.addEventListener(
    "click",
    function (event) {

      if (event.target === partnerModal) {

        closePartnerForm();

      }

    }
  );

}


/* =========================================
   PARTNER REGISTRATION SUBMIT
   ========================================= */

function raSubmitPartner() {

  const cnic =
    document
      .getElementById("raCnic")
      ?.value.trim();

  const cnicFront =
    document
      .getElementById("raCnicFront");

  const cnicBack =
    document
      .getElementById("raCnicBack");

  const address =
    document
      .getElementById("raAddress")
      ?.value.trim();


  if (
    !cnic ||
    !cnicFront ||
    !cnicFront.files.length ||
    !cnicBack ||
    !cnicBack.files.length ||
    !address
  ) {

    alert(
      "Please complete all information first."
    );

    return;

  }


  alert(
    "Partner Registration interface is working successfully!"
  );

}

// =========================================
// RELAX AURA LOGIN / SIGNUP JAVASCRIPT
// =========================================

const authModal = document.getElementById("authModal");
const loginSection = document.getElementById("loginSection");
const signupSection = document.getElementById("signupSection");

function openAuthModal() {
  if (!authModal) return;

  authModal.classList.add("show");
  showLogin();
}

function closeAuthModal() {
  if (!authModal) return;

  authModal.classList.remove("show");
}

function showLogin() {
  if (loginSection) {
    loginSection.style.display = "block";
  }

  if (signupSection) {
    signupSection.style.display = "none";
  }
}

function showSignup() {
  if (loginSection) {
    loginSection.style.display = "none";
  }

  if (signupSection) {
    signupSection.style.display = "block";
  }
}


// Close when clicking outside the box
if (authModal) {
  authModal.addEventListener("click", function (event) {
    if (event.target === authModal) {
      closeAuthModal();
    }
  });
}


// Login demo
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Login interface is working. Database will be connected later.");
  });
}


// Signup demo
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("signupPassword")?.value;
    const confirmPassword =
      document.getElementById("signupConfirmPassword")?.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup interface is working. Database will be connected later.");
  });
}
