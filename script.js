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

//Botão de voltar
window.addEventListener("load", function() {
  checkScrollPosition();
});

window.addEventListener("scroll", function() {
  checkScrollPosition();
});

function checkScrollPosition() {
  let scrollButton = document.querySelector(".voltar");
  if (document.documentElement.scrollTop > 300) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

document.querySelector(".voltar").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

