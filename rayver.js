function togglePassword() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.classList.toggle("fa-eye-slash");
}
