const createContact = (event) => {
    event.preventDefault()

    const fullname = document.getElementById("contact-name")
    const email = document.getElementById("contact-email")
        // const subject = document.getElementById("subject")
    const message = document.getElementById("contact-message")

    db.collection("formData")
        .add({
            Name: fullname.value,
            Email: email.value,
            Message: message.value,
            CreatedAt: Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((message) => {
            console.log(message)
        })
        .catch((error) => {
            console.log(error)
        })
    fullname.value = ""
    email.value = ""
    message.value = ""
    alert("Message Sent Successfully");
}
document.getElementById("submit").addEventListener("click", createContact)