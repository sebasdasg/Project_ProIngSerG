/*=============== MIXITUP FILTER SERVICES ===============*/
let mixerServices = mixitup('.service__content-module', {
    selectors: {
      target: '.service__content-category'
    },
    animation: {
      duration: 300
    }
  });
  /* Default filter service */
  mixerServices.filter('.melamine')
  
  /* Link active services */
  const linkService = document.querySelectorAll('.service__item');
  
  function activeServices() {
    linkService.forEach(l => l.classList.remove('active-service'));
    this.classList.add('active-service')
  }
  
  linkService.forEach(l => l.addEventListener('click', activeServices));