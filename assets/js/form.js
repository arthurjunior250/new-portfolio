const createContact = (event) => {
    event.preventDefault();

    const fullname = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    // Check if any of the fields are empty
    if (fullname === "" || email === "" || message === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    db.collection("formData")
        .add({
            Name: fullname,
            Email: email,
            Message: message,
            CreatedAt: Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((message) => {
            console.log(message);
            fullname.value = "";
            email.value = "";
            message.value = "";
            alert("Message Sent Successfully");
        })
        .catch((error) => {
            console.log(error);
        });
};

document.getElementById("submit").addEventListener("click", createContact);




