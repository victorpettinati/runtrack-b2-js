document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-add-student");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        myRegisterStudent(form);
    });
});

function myRegisterStudent(form) {
    // Récupérez les données du formulaire
    const email = form.querySelector("#student-mail").value;
    const fullname = form.querySelector("#student-fullname").value;
    const gender = form.querySelector("#student-gender").value;
    const grade = form.querySelector("#student-grade").value;
    const birthdate = form.querySelector("#student-birthdate").value;

    // Créez un objet FormData pour envoyer les données via une requête AJAX
    const formData = new FormData();
    formData.append("email", email);
    formData.append("fullname", fullname);
    formData.append("gender", gender);
    formData.append("grade", grade);
    formData.append("birthdate", birthdate);

    // Envoyez les données à request.php via une requête AJAX
    fetch("request.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Student registered successfully!");
            // Réinitialisez le formulaire après l'inscription réussie
            form.reset();
        } else {
            alert("Une erreur s'est produite lors de l'inscription de l'étudiant.");
        }
    })
    .catch(error => {
        console.error("Erreur AJAX :", error);
    });
}
