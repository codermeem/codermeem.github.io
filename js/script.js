// page loader
window.addEventListener("load", () => {
      document.querySelector(".main").classList.remove("hidden");
      document.querySelector(".home-section").classList.add("active");
      // page load
      document.querySelector(".page-loader").classList.add("fade-out");
      setTimeout(() =>{
            document.querySelector(".page-loader").style.display = "none";
      },600);     
})

// header tab
const navToggler =document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
      hideSection();
      toggleNavbar();
      document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
      document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
      document.querySelector(".header").classList.toggle("active");
}

// active section
document.addEventListener("click", (e) =>{
      if(e.target.classList.contains("link-item") && e.target.hash !== ''){
            // active overlay
            document.querySelector(".overlay").classList.add("active");
            navToggler.classList.add("hide");
            if(e.target.classList.contains("nav-item")){
                  toggleNavbar();
            }
            else{
                  hideSection();
                  document.body.classList.add("hide-scrolling");
            }
            setTimeout(() =>{
                  document.querySelector("section.active").classList.remove("active","fade-out");
                  document.querySelector(e.target.hash).classList.add("active");
                  window.scrollTo(0,0);
                  document.body.classList.remove("hide-scrolling");
                  navToggler.classList.remove("hide");
                  document.querySelector(".overlay").classList.remove("active");

            },500);
      }
})

// About Tab 

const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
      if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
            tabsContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const target = e.target.getAttribute("data-target");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
      };
});

// portfolio item
document.addEventListener("click", (e) =>{
      if(e.target.classList.contains("view-project-btn")){
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0,0);
            portfolioItemDetails(e.target.parentElement);
      }
})
function togglePortfolioPopup(){
      document.querySelector(".portfolio-popup").classList.toggle("open");
      document.body.classList.toggle("hide-scrolling");
      document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// click out and hide popup
document.addEventListener("click", (e) =>{
      if(e.target.classList.contains("pp-inner")){
            togglePortfolioPopup();
      }
})

function portfolioItemDetails(portfolioItem){
      document.querySelector(".pp-thumbnail img").src =
      portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

      document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;

      document.querySelector(".pp-body").innerHTML =
      portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// maill
window.addEventListener("DOMContentLoaded", function () {
      // get the form elements defined in your form HTML above
    
      var form = document.getElementById("my-form");
      // var button = document.getElementById("my-form-button");
      var status = document.getElementById("status");
    
      // Success and Error functions for after the form is submitted
    
      function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = " Thank you for getting in touch! ";
      }
    
      function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
      }
    
      // handle the form submission event
    
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    }
);
    
// helper function for sending an AJAX request
    
function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
      } else {
      error(xhr.status, xhr.response, xhr.responseType);
      }
};
xhr.send(data);
}