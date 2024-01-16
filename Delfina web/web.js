document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    setInterval(function () {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 3000);
  });
  
/*document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', function () {
            alert(`You selected: ${item.textContent}`);
        });
    });
});

*/

