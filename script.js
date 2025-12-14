// Get form and elements
const form = document.getElementById("userForm");
const dateInput = document.getElementById("date");
const dateSticker = document.getElementById("dateSticker");
const resetBtn = document.getElementById("resetBtn");

// Update date sticker
dateInput.addEventListener("change", () => {
  if (dateInput.value) {
    const date = new Date(dateInput.value);
    const options = { day: "numeric", month: "short", year: "numeric" };
    dateSticker.textContent = "📅 " + date.toLocaleDateString(undefined, options);
  } else {
    dateSticker.textContent = "📅 No date chosen";
  }
});

// Reset sticker when reset button clicked
resetBtn.addEventListener("click", () => {
  dateSticker.textContent = "📅 No date chosen";
});

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop default submit

  // Collect values
  const name = form.name.value.trim();
  const age = form.age.value;
  const gender = form.gender.value;
  const general = form.general.value;
  const date = form.date.value;
  const email = form.email.value.trim();
  const address = form.address.value.trim();

  // Simple validation
  if (!name || !age || !gender || !general || !date || !email || !address) {
    alert("⚠️ Please fill all required fields!");
    return;
  }

  // Show details in alert
  const msg = `
✅ Form Submitted Successfully!

👤 Name: ${name}
🎂 Age: ${age}
⚧ Gender: ${gender}
📂 Category: ${general}
📅 Date: ${date}
📧 Email: ${email}
🏠 Address: ${address}
  `;
  alert(msg);
});

