// Set the target date and time
const targetDate = new Date('2025-12-24T23:59:59').getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
   const now = new Date().getTime();
   const timeLeft = targetDate - now;

   // Calculate days, hours, minutes, and seconds
   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   // Display the countdown
   const countdownElement = document.getElementById('countdown');
   if (timeLeft > 0) {
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      document.getElementById('message').innerText = '';
   } else {
      // If the countdown is over, display a message
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "Time's up!";
      document.getElementById('message').innerText = 'Happy New Year!';
   }
}, 1000);

const slider = document.querySelector('.watch-slider');
const articles = document.querySelectorAll('.watch-article');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

const getVisibleItemsCount = () => {
   // Calculate the number of visible items based on the screen width
   const width = window.innerWidth;

   if (width <= 480) {
      return 1; // Show 1 item on small screens
   } else if (width <= 768) {
      return 2; // Show 2 items on medium screens
   } else if (width <= 1024) {
      return 3; // Show 3 items on large screens
   } else {
      return 4; // Show 4 items on larger screens
   }
};

const slideTo = (index) => {
   // Get the number of visible items
   const visibleItems = getVisibleItemsCount();

   // Loop the slider if it reaches the end or the beginning
   if (index < 0) {
      currentIndex = articles.length - visibleItems;
   } else if (index >= articles.length - visibleItems + 1) {
      currentIndex = 0;
   } else {
      currentIndex = index;
   }

   // Get the width of a single article
   const articleWidth = articles[0].offsetWidth;

   // Move the slider to the correct position
   slider.style.transform = `translateX(-${currentIndex * articleWidth}px)`;
};

prevBtn.addEventListener('click', () => {
   slideTo(currentIndex - 1); // Move one image to the left
});

nextBtn.addEventListener('click', () => {
   slideTo(currentIndex + 1); // Move one image to the right
});

// Optional: Update the slide on window resize to adjust for different screen sizes
window.addEventListener('resize', () => {
   // Recalculate the current position when the window is resized
   slideTo(currentIndex);
});

const shopeNewSlider = document.querySelector('.watch-shopnew-title-slider');
const content = shopeNewSlider.innerHTML;
