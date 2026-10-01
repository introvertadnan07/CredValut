const STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];


const DEFAULT_APPLICATIONS = [
    {
        id: "#APP-0001",
        name: "Aarav Sharma",
        phone: "9876543210",
        gender: "Male",
        city: "Hyderabad",
        state: "Telangana",
        status: "Pending",
        date: "01 Oct 2026"
    },

    {
        id: "#APP-0002",
        name: "Anum Rahi",
        phone: "9123456780",
        gender: "Female",
        city: "Kochi",
        state: "Kerala",
        status: "Approved",
        date: "30 Sep 2026"
    },

    {
        id: "#APP-0003",
        name: "Rahul Verma",
        phone: "9988776655",
        gender: "Male",
        city: "Lucknow",
        state: "Uttar Pradesh",
        status: "Rejected",
        date: "29 Sep 2026"
    },

    {
        id: "#APP-0004",
        name: "Sana Khan",
        phone: "9090909090",
        gender: "Female",
        city: "Pune",
        state: "Maharashtra",
        status: "Pending",
        date: "28 Sep 2026"
    }
];


const DEFAULT_CERTIFICATES = [
    {
        id: "CERT-2026-0001",
        name: "Anum Rahi",
        phone: "9123456780",
        city: "Kochi",
        state: "Kerala",
        issued: "30 Sep 2026",
        status: "Valid"
    },

    {
        id: "CERT-2026-0002",
        name: "Vikram Singh",
        phone: "9012345678",
        city: "Jaipur",
        state: "Rajasthan",
        issued: "27 Sep 2026",
        status: "Revoked"
    },

    {
        id: "CERT-2026-0003",
        name: "Neha Patel",
        phone: "8899776655",
        city: "Ahmedabad",
        state: "Gujarat",
        issued: "25 Sep 2026",
        status: "Valid"
    }
];


function getApplications() {
    const savedApplications =
        localStorage.getItem("credvaultApplications");

    if (savedApplications) {
        return JSON.parse(savedApplications);
    }

    return DEFAULT_APPLICATIONS;
}


function saveApplications(applications) {
    localStorage.setItem(
        "credvaultApplications",
        JSON.stringify(applications)
    );
}


function getCertificates() {
    const savedCertificates =
        localStorage.getItem("credvaultCertificates");

    if (savedCertificates) {
        return JSON.parse(savedCertificates);
    }

    return DEFAULT_CERTIFICATES;
}


function saveCertificates(certificates) {
    localStorage.setItem(
        "credvaultCertificates",
        JSON.stringify(certificates)
    );
}


function createStatus(status) {
    return `
        <span class="status ${status.toLowerCase()}">
            <i></i>
            ${status}
        </span>
    `;
}