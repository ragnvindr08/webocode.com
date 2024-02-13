 document.addEventListener("DOMContentLoaded", function () {
            const loginForm = document.getElementById("login-form");

            loginForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                // Replace this array with your actual user accounts stored in a secure manner
                const userAccounts = [
                    { username: "johnstevencaspe@github.com", password: "caspe" },
                    { username: "mamansagjames@github.com", password: "james" },
                    { username: "brixlecaros@github.com", password: "lecaros" },
                    { username: "lordjustin@github.com", password: "justin" },
                    // Add more accounts as needed
                ];

                // Check if the entered credentials match any user account
                const user = userAccounts.find(user => user.username === username && user.password === password);

                if (user) {
                    // Redirect to another page after successful login
                    window.location.href = "file:///home/chronos/u-79c9f80cc306e4c5fb1b2e3030614b2f2b3eee9d/MyFiles/Downloads/online-python-compiler-main/index.html";
                } else {
                    // For demonstration purposes, show an alert for incorrect credentials
                    alert("Invalid username or password. Please try again.");
                }
            });
        });
  
