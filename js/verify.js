const verifyForm = document.getElementById("verifyForm");
const verifyResult = document.getElementById("verifyResult");


verifyForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(verifyForm);

    const id = formData
        .get("id")
        .trim()
        .toLowerCase();


    const certificate = getCertificates().find(
        (item) => item.id.toLowerCase() === id
    );


    if (!certificate) {

        verifyResult.innerHTML = `
            <div class="alert error-alert">
                Certificate not found.
                Please check the Certificate ID and try again.
            </div>
        `;

        return;
    }


    const message =
        certificate.status === "Valid"
            ? "Certificate is valid"
            : "Certificate is revoked";


    verifyResult.innerHTML = `
        <section class="card verification-result">

            <div class="verified-banner">

                <div class="verify-check">
                    ✓
                </div>

                <div>

                    <span>
                        Certificate found
                    </span>

                    <h3>
                        ${message}
                    </h3>

                </div>

                ${createStatus(certificate.status)}

            </div>


            <div class="detail-grid">

                <div>
                    <span>Name</span>
                    <b>${certificate.name}</b>
                </div>

                <div>
                    <span>Phone</span>
                    <b>${certificate.phone}</b>
                </div>

                <div>
                    <span>Issued On</span>
                    <b>${certificate.issued}</b>
                </div>

                <div>
                    <span>Certificate ID</span>
                    <b>${certificate.id}</b>
                </div>

            </div>

        </section>
    `;
});