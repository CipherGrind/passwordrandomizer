document.addEventListener("DOMContentLoaded", function() {
    var lengthSlider = document.getElementById("length");
    var lengthValue = document.getElementById("lengthValue");

    // Update lengthValue span when range input value changes
    lengthSlider.addEventListener("input", function() {
        lengthValue.textContent = lengthSlider.value;
    });
});







function generatePassword() {
    var maxLength = 25; // Maximum allowed length
    var length = document.getElementById("length").value;
    var useUppercase = document.getElementById("uppercase").checked;
    var useLowercase = document.getElementById("lowercase").checked;
    var useNumbers = document.getElementById("numbers").checked;
    var useSpecial = document.getElementById("special").checked;

    // Limit the length to maxLength
    length = Math.min(length, maxLength);

    var charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSpecial) charset += "!@#$%^&*()-_=+";

    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}

