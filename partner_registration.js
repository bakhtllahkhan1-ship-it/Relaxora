
/* RELAX AURA - PARTNER REGISTRATION */

async function raSubmitPartner() {
  const client = window.supabaseClient;

  if (!client) {
    alert("Supabase connection is not ready. Please refresh the page.");
    return;
  }

  const { data: authData, error: authError } =
    await client.auth.getUser();

  if (authError || !authData.user) {
    alert("Please log in before submitting Partner Registration.");
    return;
  }

  const getValue = (id) =>
    document.getElementById(id)?.value?.trim() || "";

  const firstName = getValue("raFirstName");
  const lastName = getValue("raLastName");
  const dob = getValue("raDob");
  const gender = getValue("raGender");
  const email = getValue("raEmail");
  const phone = getValue("raPhone");
  const cnic = getValue("raCnic");
  const address = getValue("raAddress");

  const services = Array.from(
    document.querySelectorAll('input[name="raServices"]:checked')
  ).map((item) => item.value);

  if (
    !firstName || !lastName || !dob || !gender ||
    !email || !phone || !cnic || !address ||
    services.length === 0
  ) {
    alert("Please complete all fields and select at least one service.");
    return;
  }

  const profileFile =
    document.getElementById("raProfilePicture")?.files?.[0];
  const frontFile =
    document.getElementById("raCnicFront")?.files?.[0];
  const backFile =
    document.getElementById("raCnicBack")?.files?.[0];

  if (!frontFile || !backFile) {
    alert("Please select both front and back CNIC images.");
    return;
  }

  alert(
    "Form validation passed. Next we will securely configure image storage and save your partner details."
  );

  console.log("Partner form validated for user:", authData.user.id);
}

