/* --- DO NOT EDIT OR RENAME THIS FILE --- */

async function handleForm(f) {
  const formData = new FormData(f);
  const formBody = new URLSearchParams(formData).toString();

  try {
    const response = await fetch(
      "https://ims322-api.vercel.app/api/echoFormData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

window.handleForm = handleForm;

/* --- DO NOT EDIT OR RENAME THIS FILE --- */
