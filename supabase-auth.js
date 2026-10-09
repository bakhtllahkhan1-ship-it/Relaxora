
/* RELAX AURA - SUPABASE AUTH */

(function () {
  "use strict";

  // Apna Supabase URL aur Publishable Key yahan paste karein
  const SUPABASE_URL = "https://rayowodkqmjubwlvybqu.supabase.co";
  const SUPABASE_KEY = "sb_publishable_8HLpMMIzpcgEb3vQN5Az4Q_CS8OvtdB";

  function showMessage(message) {
    alert(message);
  }

  function startAuth() {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (!signupForm && !loginForm) {
      console.error("Relax Aura: Login/signup forms not found.");
      return;
    }

    if (
      SUPABASE_URL === "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE" ||
      SUPABASE_KEY === "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE"
    ) {
      showMessage(
        "Please add your Supabase URL and Publishable Key in supabase-auth.js."
      );
      return;
    }

    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function"
    ) {
      showMessage("Supabase library did not load. Check your internet.");
      return;
    }

    let client;

    try {
      client = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );

      window.supabaseClient = client;
    } catch (error) {
      console.error("Supabase initialization error:", error);
      showMessage("Supabase URL or key is incorrect.");
      return;
    }

    // SIGN UP
    if (
      signupForm &&
      signupForm.dataset.supabaseAuthBound !== "true"
    ) {
      signupForm.dataset.supabaseAuthBound = "true";

      signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email =
          document.getElementById("signupContact")?.value.trim() || "";

        const password =
          document.getElementById("signupPassword")?.value || "";

        const confirmPassword =
          document.getElementById("signupConfirmPassword")?.value || "";

        if (!email.includes("@")) {
          showMessage("Please enter a valid email address.");
          return;
        }

        if (password.length < 6) {
          showMessage("Password must be at least 6 characters.");
          return;
        }

        if (password !== confirmPassword) {
          showMessage("Passwords do not match.");
          return;
        }

        const button = signupForm.querySelector(
          'button[type="submit"]'
        );

        if (button) button.disabled = true;

        try {
          const { data, error } = await client.auth.signUp({
            email: email,
            password: password
          });

          if (error) {
            showMessage("Signup error: " + error.message);
            return;
          }

          console.log("Signup response:", data);

          if (data.user && !data.session) {
            showMessage(
              "Signup accepted. Please check your email for verification."
            );
          } else {
            showMessage("Account created successfully.");
          }
        } catch (error) {
          console.error("Signup failed:", error);
          showMessage("Signup failed. Check internet and Supabase settings.");
        } finally {
          if (button) button.disabled = false;
        }
      });
    }

    // LOGIN
    if (
      loginForm &&
      loginForm.dataset.supabaseAuthBound !== "true"
    ) {
      loginForm.dataset.supabaseAuthBound = "true";

      loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email =
          document.getElementById("loginContact")?.value.trim() || "";

        const password =
          document.getElementById("loginPassword")?.value || "";

        if (!email.includes("@")) {
          showMessage(
            "Please enter your email. Phone login is not configured yet."
          );
          return;
        }

        const button = loginForm.querySelector(
          'button[type="submit"]'
        );

        if (button) button.disabled = true;

        try {
          const { error } = await client.auth.signInWithPassword({
            email: email,
            password: password
          });

          if (error) {
            showMessage("Login error: " + error.message);
            return;
          }

          showMessage("Login successful.");

          if (typeof window.closeAuthModal === "function") {
            window.closeAuthModal();
          }
        } catch (error) {
          console.error("Login failed:", error);
          showMessage("Login failed. Check internet and Supabase settings.");
        } finally {
          if (button) button.disabled = false;
        }
      });
    }

    console.log("Relax Aura: Supabase connected.");
  }

  // Load Supabase library
  function loadSupabaseLibrary() {
    if (
      window.supabase &&
      typeof window.supabase.createClient === "function"
    ) {
      startAuth();
      return;
    }

    const sdk = document.createElement("script");

    sdk.src =
      "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

    sdk.onload = startAuth;

    sdk.onerror = function () {
      showMessage(
        "Supabase library did not load. Check your internet connection."
      );
    };

    document.head.appendChild(sdk);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      loadSupabaseLibrary,
      { once: true }
    );
  } else {
    loadSupabaseLibrary();
  }
})();
