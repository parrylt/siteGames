document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.grupoIMG');


    imagens.forEach(function(image) {
        image.addEventListener('click', function() {

            const imagemOrig = document.createElement('img');
            imagemOrig.src = this.src;
            imagemOrig.classList.add('imagem-original');


            imagemOrig.addEventListener('click', function() {
                this.remove();
            });


            document.body.appendChild(imagemOrig);
        });
    });
});

window.onload = function() {

    anime({
    targets: '.sec1',
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    autoplay: true,
    });

    anime({
    targets: '.navbar',
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    autoplay: true,
    });
}