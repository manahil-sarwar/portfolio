document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
  
      // Get form values
      const name = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
  
      // Create an object to store
      const formData = { name, email, phone, message };
  
      // Save to localStorage
      localStorage.setItem("contact-FormData", JSON.stringify(formData));
  
      // Optional: alert the user
      alert("Your message has been saved locally!");
  
      // Clear the form
      form.reset();
    });
  });
  