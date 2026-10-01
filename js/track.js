const trackForm = document.getElementById("trackForm");
const trackResult = document.getElementById("trackResult");


trackForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(trackForm);

    const id = formData
        .get("id")
        .trim()
        .toLowerCase();


    const application = getApplications().find(
        (item) => item.id.toLowerCase() === id
    );


    if (!application) {

        trackResult.innerHTML = `
            <div class="alert error-alert">
                Application not found.
                Please check your Application ID and try again.
            </div>
        `;

        return;
    }


    trackResult.innerHTML = `
        <div class="result-panel">

            <div class="result-head">

                <div>
                    <span class="muted">
                        Application
                    </span>

                    <h3>
                        ${application.id}
                    </h3>
                </div>

                ${createStatus(application.status)}

            </div>


            <div class="detail-grid">

                <div>
                    <span>Name</span>
                    <b>${application.name}</b>
                </div>

                <div>
                    <span>Submission Date</span>
                    <b>${application.date}</b>
                </div>

                <div>
                    <span>Phone</span>
                    <b>${application.phone}</b>
                </div>

                <div>
                    <span>Location</span>
                    <b>
                        ${application.city},
                        ${application.state}
                    </b>
                </div>

            </div>

        </div>
    `;
});