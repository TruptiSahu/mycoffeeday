const sliders = document.querySelectorAll('.slide-up');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

//Appear on Scroll Effect
const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


// Mobile Navbar Burger Menu
// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

// Open the menu on click
selectElement('.toggle-menu').addEventListener('click', () => {
  selectElement('.toggle-menu').classList.toggle('active-nav');
});

// Number Count Animation
function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}


const numberCounts = document.querySelectorAll('.number-count');

const numberCountOnScroll = new IntersectionObserver
(function(
  entries,
  numberCountOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      animateValue("noOfBranches", 0, 100, 5000);
      animateValue("noOfAwards", 0, 85, 5000);
      animateValue("noOfCustomers", 0, 1056, 5000);
      animateValue("noOfStaff", 0, 900, 5000);
      numberCountOnScroll.unobserve(entry.target);
    }
  });
},appearOptions);

numberCounts.forEach(numberCount => {
  numberCountOnScroll.observe(numberCount);
});