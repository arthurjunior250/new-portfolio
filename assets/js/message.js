db.collection("formData")
    .orderBy("timestamp", "desc")
    .onSnapshot((blog) => {
        const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

        document.getElementById("queries").innerHTML = data

            .map(
                (blog) =>
                `
      <div class="card">
      <div class="card__heading">
        <div class="card__info">
            <h4>Name: </h4>
            <p>${blog.data.Name}</p>
        </div>
        <div class="card__info">
            <h4>Email: </h4>
            <p>${blog.data.Email}</p>
        </div>
          </div>
        <div class="card-message">
            <p>${blog.data.Message}</p>
        </div>
        <button  onclick="deleteMessage('${blog.id}')">
            <b>Delete me!</b>
        </button>
    </div>
`
            )
            .join("")
    })


function deleteMessage(id) {
    db.collection("formData")
        .doc(id)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!")
        })
        .catch((error) => {
            console.error("Error removing document: ", error)
        })
}