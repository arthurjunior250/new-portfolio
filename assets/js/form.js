// const createContact = (event) => {
//     event.preventDefault();

//     const fullname = document.getElementById("contact-name").value;
//     const email = document.getElementById("contact-email").value;
//     const message = document.getElementById("contact-message").value;

//     // Check if any of the fields are empty
//     if (fullname === "" || email === "" || message === "") {
//         // alert("Please fill in all the required fields.");
//         Toastify({
//             text: "Please fill in all the required fields",
//             className: "info",
//             style: {
//               background: "linear-gradient(to right, #00b09b, #96c93d)",
//             }
//           }).showToast();
//         return;
//     }

//     db.collection("formData")
//         .add({
//             Name: fullname,
//             Email: email,
//             Message: message,
//             CreatedAt: Date.now(),
//             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         })
//         .then((message) => {
//             // console.log(message);
//             fullname.value = "";
//             email.value = "";
//             message.value = "";
//             // alert("Message Sent Successfully");
//             Toastify({
//                 text: "Message Sent Successfully",
//                 className: "info",
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 }
//               }).showToast();
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// document.getElementById("submit").addEventListener("click", createContact);



const createContact = (event) => {
    event.preventDefault();

    const fullname = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");

    // Get the values from the input fields
    const fullnameValue = fullname.value;
    const emailValue = email.value;
    const messageValue = message.value;

    // Check if any of the fields are empty
    if (fullnameValue === "" || emailValue === "" || messageValue === "") {
        Toastify({
            text: "Please fill in all the required fields",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        return;
    }

    db.collection("formData")
        .add({
            Name: fullnameValue,
            Email: emailValue,
            Message: messageValue,
            CreatedAt: Date.now(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            fullname.value = ""; // Clear the value of the fullname input field
            email.value = ""; // Clear the value of the email input field
            message.value = ""; // Clear the value of the message input field

            Toastify({
                text: "Message Sent Successfully",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        })
        .catch((error) => {
            console.log(error);
        });
};

document.getElementById("submit").addEventListener("click", createContact);
