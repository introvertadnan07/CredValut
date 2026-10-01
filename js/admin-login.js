const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");


loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(loginForm);

    const username = formData
        .get("username")
        .trim();

    const password = formData.get("password");


    if (username === "admin" && password === "admin") {

        window.location.href =
            "admin-applications.html";

        return;
    }


    loginError.innerHTML = `
        <div class="alert error-alert">
            Invalid credentials.
            Use the demo username and password shown below.
        </div>
    `;
});