var x = window.matchMedia("(max-width: 1620px)")
responsividadeTelaPequena(x)
x.addEventListener(responsividadeTelaPequena)

function responsividadeTelaPequena(x) {
  if (x.matches) { 
    window.onload = function() {

      anime({
        targets: '.fundo-video',
        scale: [1, 1.5],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1800,
        delay: 1000,
      });
    
      anime({
        targets: '.mirror',
        opacity: [0, 1],
        translateX: '-5vw',
        translateY: '44vh',
        easing: 'easeOutQuart',
        duration: 2800,
        delay: 1500,
      });
    
      anime({
        targets: '.texto',
        opacity: [0, 1],
        translateX: '20vw',
        translateY: '47vh',
        easing: 'easeOutExpo',
        duration: 3800,
        delay: 2500,
      });
    
      anime({
        targets: '.hades',
        opacity: [0, 1],
        translateX: '23vw',
        translateY: '35vh',
        easing: 'easeOutExpo',
        duration: 4200,
        delay: 5500,
      });
    
      anime({
        targets: '.noman',
        opacity: [0, 1],
        translateX: '35vw',
        translateY: '3vh',
        easing: 'easeOutExpo',
        duration: 4200,
        delay: 5500,
      });
    
      anime({
        targets: '.maria',
        opacity: [0, 1],
        translateX: '55vw',
        translateY: '0vh',
        easing: 'easeOutExpo',
        duration: 4200,
        delay: 5500,
      });
    
      anime({
        targets: '.bot',
        opacity: [0, 1],
        translateX: '10px',
        easing: 'easeOutExpo',
        duration: 5000,
        delay: 9000,
      });
    }
  } else {
    window.onload = function() {

      anime({
        targets: '.fundo-video',
        scale: [1, 1.5],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1800,
        delay: 1000,
      });
    
      anime({
        targets: '.mirror',
        opacity: [0, 1],
        translateX: '-1vw',
        translateY: '54vh',
        easing: 'easeOutQuart',
        duration: 2800,
        delay: 1500,
      });
    
      anime({
        targets: '.texto',
        opacity: [0, 1],
        translateX: '20vw',
        translateY: '53vh',
        easing: 'easeOutExpo',
        duration: 3800,
        delay: 2500,
      });
    
      anime({
        targets: '.hades',
        opacity: [0, 1],
        translateX: '36vw',
        translateY: '45.5vh',
        easing: 'easeOutExpo',
        duration: 4200,
        delay: 5500,
      });
    
      anime({
        targets: '.noman',
        opacity: [0, 1],
        translateX: '35vw',
        translateY: '2.5vh',
        easing: 'easeOutExpo',
        duration: 4200,
        delay: 5500,
      });
    
      anime({
        targets: '.maria',
        opacity: [0, 1],
        translateX: '59vw',
        translateY: '0vh',
        easing: 'easeOutExpo',
        duration: 4200,
        delay: 5500,
      });
    
      anime({
        targets: '.bot',
        opacity: [0, 1],
        translateX: '10px',
        easing: 'easeOutExpo',
        duration: 5000,
        delay: 9000,
      });
    }
  }
}