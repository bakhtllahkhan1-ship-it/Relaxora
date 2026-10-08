/* RELAX AURA SUPABASE AUTH */

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (!window.supabaseClient) {
    alert("Supabase connection is not loaded.");
    return;
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("signupContact").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirmPassword =
        document.getElementById("signupConfirmPassword").value;

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const { data, error } =
        await window.supabaseClient.auth.signUp({
          email: email,
          password: password
        });

      if (error) {
        alert("Signup error: " + error.message);
        return;
      }

      alert(
        "Account created successfully. Please check your email for verification."
      );

      console.log("Supabase signup:", data);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("loginContact").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (!email.includes("@")) {
        alert("Please enter your email address.");
        return;
      }

      const { data, error } =
        await window.supabaseClient.auth.signInWithPassword({
          email: email,
          password: password
        });

      if (error) {
        alert("Login error: " + error.message);
        return;
      }

      alert("Login successful!");

      if (typeof closeAuthModal === "function") {
        closeAuthModal();
      }

      console.log("Supabase login:", data);
    });
  }

});
