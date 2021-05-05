// Timer
let intervalRef;

document.addEventListener('DOMContentLoaded', () => {
  let pauseState = false;
  const timer = document.querySelector('.timer')
  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  const refresh = document.querySelector('.refresh');
  const estudo = document.querySelector('.estudo');
  const descanso = document.querySelector('.descanso');
  let totalMinutes = 30;
  let timeLeft = totalMinutes * 60;




  function countDown() {
    if(timer.innerHTML !== "30:00" && pauseState === false) {
       clearInterval(intervalRef);
      }
    
  if(pauseState === true) {
     pauseState = false;
  }
    
    intervalRef = setInterval(() =>{
      if(!pauseState) {

        if(timeLeft <= 0) {
          clearInterval(timer = 0)
        }
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        timer.innerHTML = `${minutes}:${seconds}`;
        timeLeft--;
      }
      }, 1000);
  }

  function handlePause() {
    pauseState = true;
    clearInterval(intervalRef);
  }

  // function handleRefresh() {
  //     timer.innerHTML = `${totalMinutes}:00`;
  //     clearInterval(intervalRef);
  //     timeLeft = totalMinutes * 60;
  // }

  // function handleEstudo() {
  //   totalMinutes = 30;
  //   timer.innerHTML = `${totalMinutes}:00`;
  //   clearInterval(intervalRef);
  //   timeLeft = totalMinutes * 60;
  // }

  // function handleDescanso() {
  //   totalMinutes = 5;
  //   timer.innerHTML = `${totalMinutes}:00`
  //   clearInterval(intervalRef);
  //   timeLeft = totalMinutes * 60;
  // }

   function handleReset (newTotalMinutes) {
      totalMinutes = newTotalMinutes;
      timer.innerHTML = `${newTotalMinutes}:00`;
      clearInterval(intervalRef);
      timeLeft = newTotalMinutes * 60;
    }

  descanso.addEventListener('click', ()=> handleReset(5));

  estudo.addEventListener('click', ()=> handleReset(30))

  refresh.addEventListener('click', ()=> handleReset(totalMinutes))

  play.addEventListener('click', countDown)

  pause.addEventListener('click', handlePause)

})



//Scroll e Scroll Suave da página

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
      })
    }
    animateScroll();

    window.addEventListener('scroll', animateScroll)
  }
} initScrollAnimation();

function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
} initScrollSuave();