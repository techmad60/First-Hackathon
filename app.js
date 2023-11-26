// Get references to the button and modal elements
const profileBtn = document.getElementById('profile-btn');
const alertBtn = document.getElementById('alert-btn');
const alertModal = document.getElementById('alert-modal');
const profileModal = document.getElementById('profile-modal');
const showStepsbutton = document.getElementById('show-steps-btn');
const arrowUp = document.getElementById('arrow-up');
const articles = document.querySelectorAll('.article');

function initializeTransitionButton(buttonId) {
  const transitionButton = document.getElementById(buttonId);


  let currentStage = 1; // Initial stage
  let automaticToggle = false;

  function toggleStage() {
      currentStage = (currentStage % 3) + 1;
      transitionButton.className = `transition-button stage${currentStage}`;

      if (currentStage !== 3 && automaticToggle) {
          setTimeout(toggleStage, 100); // Adjust the time interval (in milliseconds) as needed
      } else {
          automaticToggle = false;
      }
  }

  transitionButton.addEventListener('click', function () {
      if (currentStage === 3) {
          currentStage = 1;
          transitionButton.className = `transition-button stage${currentStage}`;
      } else {
          automaticToggle = true;
          toggleStage();
      }
  });
}

// Apply the function to each button and its corresponding hidden div
initializeTransitionButton('transitionButton1');
initializeTransitionButton('transitionButton2');
initializeTransitionButton('transitionButton3');
initializeTransitionButton('transitionButton4');
initializeTransitionButton('transitionButton5');


// Select the profile button
const profileButton = document.getElementById('profile-btn');

// Add a click event listener to the profile button
profileButton.addEventListener('click', () => {
  // Toggle the border style for the profile button
  profileButton.style.border = (profileButton.style.border === 'rgb(6, 52, 6)') ? 'none' : 'rgb(6, 52, 6)';
});

// Store the click counts for each button
const clickCounts = {};
let stepsCompletedCount = 0;

// Select the steps completed span
const stepsCompletedSpan = document.getElementById('steps-completed');

const progressBar = document.querySelector('.progress-bar');
// Add event listeners to all transition buttons
document.querySelectorAll('.transition-button').forEach(transitionButton => {
  clickCounts[transitionButton.id] = 0;  // Initialize click count for each button
  transitionButton.addEventListener('click', () => {

    // Increment the click count for the clicked button
    clickCounts[transitionButton.id]++;

    // Check if the click count is even for the clicked button
    const isEvenClick = clickCounts[transitionButton.id] % 2 === 0;

    // Check if the click count is odd or even for the clicked button
    const isOddClick = clickCounts[transitionButton.id] % 2 !== 0;

    // Update the progress bar based on odd or even click
    const progressBarWidth = parseInt(window.getComputedStyle(progressBar).width);
    progressBar.style.width = isOddClick ? `${progressBarWidth + 18}px` : `${progressBarWidth - 18}px`;

     // Update steps completed count based on odd or even click
     stepsCompletedCount = isOddClick ? stepsCompletedCount + 1 : stepsCompletedCount - 1;

     // Ensure the stepsCompletedCount stays within the range [0, 5]
     stepsCompletedCount = Math.min(5, Math.max(0, stepsCompletedCount));
 
     // Update the steps completed span
     stepsCompletedSpan.textContent = `${stepsCompletedCount}`;


   
    // Hide the current Visiblediv
    const currentVisibleDiv = document.querySelector('.visible');
    const targetHiddenDivId = transitionButton.dataset.targetHiddenDiv;
    const targetHiddenDiv = document.getElementById(targetHiddenDivId);
    const openUpDivId= transitionButton.dataset.openUpDiv;
    const openUpDiv = document.getElementById( openUpDivId);
    
    if (currentVisibleDiv) {
      currentVisibleDiv.classList.remove('visible');
      currentVisibleDiv.classList.add('hidden');
    }
    
    if (targetHiddenDiv) {
      targetHiddenDiv.classList.remove('hidden');
      targetHiddenDiv.classList.add('visible');
    }
   
     // Check if the click count is even
     if (isEvenClick && openUpDiv) {
      openUpDiv.classList.remove('hidden');
      openUpDiv.classList.add('visible');
      targetHiddenDiv.classList.add('hidden');
      targetHiddenDiv.classList.remove('visible');
    }
  });

});


document.querySelectorAll('.open-article-content').forEach(contentElement => {
  contentElement.addEventListener('click', () => {
      // Hide the current Visiblediv
      const currentVisibleDiv = document.querySelector('.visible');
      if (currentVisibleDiv) {
          currentVisibleDiv.classList.remove('visible');
          currentVisibleDiv.classList.add('hidden');
      }

      // Show the next hiddenDiv based on the clicked element
      const nextHiddenDivId = contentElement.parentElement.nextElementSibling.id;
      const nextHiddenDiv = document.getElementById(nextHiddenDivId);
      if (nextHiddenDiv) {
          nextHiddenDiv.classList.remove('hidden');
          nextHiddenDiv.classList.add('visible');
      }
  });
});
// Function to toggle modal visibility
function toggleModal(modalElement) {
  modalElement.classList.toggle('show-modal');
}

// Function to toggle articles visibility
function toggleArticles() {
  arrowUp.classList.toggle('rotate-down');
  articles.forEach(function(article) {
    article.classList.toggle('show-article');
  });
}

// Toggle modal visibility on button click
profileBtn.addEventListener('click', function() {
  toggleModal(profileModal);
});

// Toggle modal visibility on button click
alertBtn.addEventListener('click', function() {
  toggleModal(alertModal);
});

// Toggle articles visibility on button click
showStepsbutton.addEventListener('click', function() {
  toggleArticles();
});