const form = document.getElementById("survey-form");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopup = document.getElementById("close-popup");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    popupContent.innerHTML = "";

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        country === "" ||
        genderCheckboxes.length === 0 ||
        !profession ||
        !email ||
        !mobileNumber
    ) {
        alert("Please fill in all the required fields.");
        return;
    }

    let gender = [];
    genderCheckboxes.forEach((checkbox) => gender.push(checkbox.value));

    const responses = [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Date of Birth: ${dateOfBirth}`,
        `Country: ${country}`,
        `Gender: ${gender.join(", ")}`,
        `Profession: ${profession}`,
        `Email: ${email}`,
        `Mobile Number: ${mobileNumber}`,
    ];

    responses.forEach((response) => {
        const responseElement = document.createElement("div");
        responseElement.innerText = response;
        popupContent.appendChild(responseElement);
    });

    popup.style.display = "block";
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    form.reset();
});

document.getElementById("reset-button").addEventListener("click", function () {
    form.reset();
});
