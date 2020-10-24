
$(document).ready(function(){
  // DEFINE VARIABLES
  const mobileMenu = $('.mobile-nav')
  const imageIcon = $('.burgermenu')

  // APPLY FUNCTION
  imageIcon.on("click", () => {
    mobileMenu.toggle("slow");
  })
});