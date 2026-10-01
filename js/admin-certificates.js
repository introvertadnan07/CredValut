const certificateRows =
    document.getElementById("certificateRows");

const certificateCount =
    document.getElementById("certificateCount");


function renderCertificates() {

    const certificates = getCertificates();

    certificateCount.textContent =
        `${certificates.length} certificates`;


    certificateRows.innerHTML = certificates
        .map((certificate) => {

            return `
                <tr>

                    <td>
                        <b>${certificate.id}</b>
                    </td>

                    <td>
                        ${certificate.name}
                    </td>

                    <td>
                        ${certificate.phone}
                    </td>

                    <td>
                        ${certificate.city}
                    </td>

                    <td>
                        ${certificate.state}
                    </td>

                    <td>
                        ${certificate.issued}
                    </td>

                    <td>
                        ${createStatus(certificate.status)}
                    </td>

                    <td>

                        <button
                            class="revoke"
                            ${
                                certificate.status === "Revoked"
                                    ? "disabled"
                                    : ""
                            }
                            data-id="${certificate.id}"
                        >
                            Revoke
                        </button>

                    </td>

                </tr>
            `;
        })
        .join("");
}


certificateRows.addEventListener("click", (event) => {

    const button = event.target.closest("button");


    if (!button || button.disabled) {
        return;
    }


    const certificates = getCertificates();

    const certificateId = button.dataset.id;


    const updatedCertificates = certificates.map(
        (certificate) => {

            if (certificate.id === certificateId) {

                return {
                    ...certificate,
                    status: "Revoked"
                };
            }

            return certificate;
        }
    );


    saveCertificates(updatedCertificates);

    renderCertificates();
});


renderCertificates();