const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon= document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

//Barra de progresso
function atualizarBarraProgresso(id, porcentagem) {
    const elementoProgresso = document.getElementById(id);
    elementoProgresso.style.width = porcentagem + '%';
  }
  

  atualizarBarraProgresso('html-progresso', 80);
  atualizarBarraProgresso('css-progresso', 60)
  atualizarBarraProgresso('JavaScript-progresso', 50)
  atualizarBarraProgresso('react-progresso', 30)
  
//card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.style.transition = 'border-color 0.3s ease-in-out';
    card.style.borderColor = 'purple';
  });

  card.addEventListener('mouseout', function() {
    card.style.transition = 'border-color 0.3s ease-in-out';
    card.style.borderColor = '#ccc';
  });
});
