document.querySelector('.accordion').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.contents').classList.toggle('active')
      }, 300);
    document.querySelector('.accordion').classList.toggle('rotate');
});

document.querySelector('.accordion-2').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.contents-2').classList.toggle('active-2')
      }, 300);
    document.querySelector('.accordion-2').classList.toggle('rotate');
});

document.querySelector('.accordion-3').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.contents-3').classList.toggle('active-3')
      }, 300);
    document.querySelector('.accordion-3').classList.toggle('rotate');
});