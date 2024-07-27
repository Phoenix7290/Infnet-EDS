document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.querySelector('.accordion-content').style.display === 'block';
  
        accordionItems.forEach(i => i.querySelector('.accordion-content').style.display = 'none');
  
        if (!isActive) {
          item.querySelector('.accordion-content').style.display = 'block';
        }
      });
    });
  });
  