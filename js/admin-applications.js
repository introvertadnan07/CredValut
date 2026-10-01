const applicationRows =
    document.getElementById("applicationRows");

const applicationCount =
    document.getElementById("applicationCount");


function renderApplications() {

    const applications = getApplications();

    applicationCount.textContent =
        `${applications.length} applications`;


    applicationRows.innerHTML = applications
        .map((application) => {

            return `
                <tr>

                    <td>
                        <b>${application.id}</b>
                    </td>

                    <td>
                        ${application.name}
                    </td>

                    <td>
                        ${application.phone}
                    </td>

                    <td>
                        ${application.gender}
                    </td>

                    <td>
                        ${application.city}
                    </td>

                    <td>
                        ${application.state}
                    </td>

                    <td>
                        ${createStatus(application.status)}
                    </td>

                    <td>

                        <div class="action-buttons">

                            <button
                                ${
                                    application.status === "Approved"
                                        ? "disabled"
                                        : ""
                                }
                                data-id="${application.id}"
                                data-status="Approved"
                            >
                                Issue
                            </button>


                            <button
                                class="reject"
                                ${
                                    application.status === "Rejected"
                                        ? "disabled"
                                        : ""
                                }
                                data-id="${application.id}"
                                data-status="Rejected"
                            >
                                Reject
                            </button>

                        </div>

                    </td>

                </tr>
            `;
        })
        .join("");
}


applicationRows.addEventListener("click", (event) => {

    const button = event.target.closest("button");


    if (!button || button.disabled) {
        return;
    }


    const applications = getApplications();

    const applicationId = button.dataset.id;

    const newStatus = button.dataset.status;


    const updatedApplications = applications.map(
        (application) => {

            if (application.id === applicationId) {

                return {
                    ...application,
                    status: newStatus
                };
            }

            return application;
        }
    );


    saveApplications(updatedApplications);

    renderApplications();
});


renderApplications();