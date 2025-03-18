document.addEventListener("DOMContentLoaded", function () {
    let submitBtn = document.getElementById("submit-btn");
    let usernameInput = document.getElementById("username");
    let message = document.getElementById("message");

    // Function to teleport button
    function teleportButton() {
        let randomX = Math.random() * (window.innerWidth - 120); // Random X
        let randomY = Math.random() * (window.innerHeight - 60); // Random Y

        submitBtn.style.position = "absolute";
        submitBtn.style.left = randomX + "px";
        submitBtn.style.top = randomY + "px";
    }

    // Right-click par button teleport hoga
    submitBtn.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        teleportButton();
    });

    // Hover karne par bhi button bhaag jayega
    submitBtn.addEventListener("mouseover", function () {
        teleportButton();
    });

    // Submit hone par Congratulations message show hoga
    submitBtn.addEventListener("click", function () {
        let username = usernameInput.value.trim();
        if (username === "") {
            alert("Please enter your name first!");
            return;
        }
        message.innerHTML = `🎉 Congratulations, ${username}! You won! 🎉`;
        submitBtn.style.display = "none"; // Button hide after success
    });
});