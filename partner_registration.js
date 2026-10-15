
/* RELAX AURA - PARTNER REGISTRATION */

async function raSubmitPartner() {
  const client = window.supabaseClient;

  if (!client) {
    alert("Supabase connection is not ready. Refresh the website.");
    return;
  }

  const button = document.querySelector(
    '#raPartnerStep4 button[onclick="raSubmitPartner()"]'
  );

  if (button) button.disabled = true;

  try {
    const { data: authData, error: authError } =
      await client.auth.getUser();

    if (authError || !authData.user) {
      alert("Please log in before registering as a partner.");
      return;
    }

    const user = authData.user;

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
      document.querySelectorAll(
        'input[name="raServices"]:checked'
      )
    ).map((item) => item.value);

    const profileFile =
      document.getElementById("raProfilePicture")?.files?.[0];

    const frontFile =
      document.getElementById("raCnicFront")?.files?.[0];

    const backFile =
      document.getElementById("raCnicBack")?.files?.[0];

    if (
      !firstName || !lastName || !dob || !gender ||
      !email || !phone || !cnic || !address ||
      services.length === 0 || !frontFile || !backFile
    ) {
      alert("Please complete all fields and upload both CNIC images.");
      return;
    }

    const files = [
      profileFile,
      frontFile,
      backFile
    ].filter(Boolean);

    for (const file of files) {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        alert("Images must be JPG, PNG, or WEBP.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Each image must be 5 MB or smaller.");
        return;
      }
    }

    const bucket = "partner_documents";
    const uploadedPaths = [];

    async function uploadImage(file, label) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path =
        `${user.id}/${Date.now()}_${label}_${safeName}`;

      const { error } = await client.storage
        .from(bucket)
        .upload(path, file, {
          contentType: file.type,
          upsert: false
        });

      if (error) throw error;

      uploadedPaths.push(path);
      return path;
    }

    const profilePath = profileFile
      ? await uploadImage(profileFile, "profile")
      : null;

    const frontPath = await uploadImage(frontFile, "cnic_front");
    const backPath = await uploadImage(backFile, "cnic_back");

    const partnerData = {
      user_id: user.id,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dob,
      gender: gender,
      email: email,
      phone: phone,
      profile_picture: profilePath,
      service: JSON.stringify(services),
      nic_number: cnic,
      nic_front_picture: frontPath,
      nic_back_picture: backPath,
      address: address
    };

    const { error: insertError } = await client
      .from("partners")
      .insert(partnerData);

    if (insertError) {
      throw insertError;
    }

    alert("Partner registration submitted successfully!");

    if (typeof closePartnerForm === "function") {
      closePartnerForm();
    }

  } catch (error) {
    console.error("Partner registration error:", error);
    alert(
      "Registration could not be saved. Please check your Supabase policies and table columns, then try again."
    );
  } finally {
    if (button) button.disabled = false;
  }
}

