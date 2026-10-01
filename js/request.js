const stateSelect = document.getElementById("stateSelect");
const requestForm = document.getElementById("requestForm");


// Populate state dropdown
STATES.forEach((state) => {
    const option = document.createElement("option");

    option.value = state;
    option.textContent = state;

    stateSelect.appendChild(option);
});


// Handle form submission
requestForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(requestForm);

    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const gender = formData.get("gender");
    const city = formData.get("city").trim();
    const state = formData.get("state");


    if (!name || !phone || !gender || !city || !state) {
        alert("Please complete all fields.");
        return;
    }


    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }


    const applications = getApplications();

    const nextNumber = String(
        applications.length + 1
    ).padStart(4, "0");


    const newApplication = {
        id: `#APP-${nextNumber}`,
        name,
        phone,
        gender,
        city,
        state,
        status: "Pending",
        date: "01 Oct 2026"
    };


    applications.push(newApplication);

    saveApplications(applications);


    document.querySelector(".card").innerHTML = `
        <div class="success-card">

            <div class="success-icon">
                ✓
            </div>

            <h2>
                Application submitted successfully!
            </h2>

            <p>
                Your request has been recorded. Keep your Application ID
                safe to track its status.
            </p>

            <div class="id-box">
                <span>Application ID</span>
                <strong>${newApplication.id}</strong>
            </div>

            <div class="success-actions">

                <a class="btn" href="track.html">
                    Track Application
                </a>

                <a class="btn secondary" href="request.html">
                    Submit Another
                </a>

            </div>

        </div>
    `;
});