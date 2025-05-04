document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Ne küldje el az űrlapot automatikusan

  // Mezők bekérése
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // Hibák tárolása
  let errors = [];

  // Szöveges mezők ellenőrzése (legalább 10 karakter)
  if (name.value.trim().length < 10) {
      errors.push("A névnek legalább 10 karakter hosszúnak kell lennie.");
  }

  if (subject.value.trim().length < 10) {
      errors.push("A tárgynak legalább 10 karakter hosszúnak kell lennie.");
  }

  if (message.value.trim().length < 10) {
      errors.push("Az üzenetnek legalább 10 karakter hosszúnak kell lennie.");
  }

  // Email formátum ellenőrzése
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
      errors.push("Kérjük, adjon meg egy érvényes e-mail címet.");
  }

  // Telefonszám ellenőrzése (nem lehet üres és legalább 10 karakter)
  if (phone.value.trim().length < 10) {
      errors.push("Kérjük, adjon meg egy érvényes telefonszámot.");
  }

  // Hibák megjelenítése vagy sikeres beküldés
  if (errors.length > 0) {
      alert("Hiba történt az űrlap kitöltésekor:\n\n" + errors.join("\n"));
  } else {
      alert("Köszönjük, az üzenetet elküldtük!");
      console.log("Űrlap érvényes, küldés kész.");
      this.reset(); // Űrlap ürítése
  }
});
