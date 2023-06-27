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
  