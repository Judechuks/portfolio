// Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header nav ul');
const navLinks = document.querySelectorAll('header nav ul li');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(function(link){
  link.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

// About Tab 
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const aboutCol = document.querySelector(".col-2-container");

aboutCol.addEventListener('click', function(e){
  const id = e.target.dataset.id;
  if(id){
    //remove active class from other buttons
    tabBtns.forEach(function(tabBtn){
      tabBtn.classList.remove('active');
      e.target.classList.add('active');
    });
     //hide all the articles
     tabContents.forEach(function(tabContent){
      tabContent.classList.remove('active');
    });
    const selectedArticle = document.getElementById(id);
    selectedArticle.classList.add('active');
  }
});

//Nav Scroll Indicator
function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".active-circle").forEach(c => c.classList.remove("active-circle"));
	
	document.querySelectorAll(".nav-circle")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("active-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
});