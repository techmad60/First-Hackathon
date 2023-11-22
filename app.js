// Get references to the button and modal elements
const profileBtn = document.getElementById('profile-btn');
const alertBtn = document.getElementById('alert-btn');
const alertModal = document.getElementById('alert-modal');
const profileModal = document.getElementById('profile-modal');
const showStepsbutton = document.getElementById('show-steps-btn');
const arrowUp = document.getElementById('arrow-up');
const articles = document.querySelectorAll('.article');
function initializeTransitionButton(buttonId, hiddenDivId) {
  const transitionButton = document.getElementById(buttonId);
  const hiddenDiv = document.getElementById(hiddenDivId);

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

      // Toggle visibility of the hidden div
      hiddenDiv.style.display = (currentStage === 3) ? 'block' : 'none';
  }

  transitionButton.addEventListener('click', function () {
      if (currentStage === 3) {
          currentStage = 1;
          transitionButton.className = `transition-button stage${currentStage}`;
          hiddenDiv.style.display = 'none';
      } else {
          automaticToggle = true;
          toggleStage();
      }
  });
}

// Apply the function to each button and its corresponding hidden div
initializeTransitionButton('transitionButton1', 'hiddenDiv1');
initializeTransitionButton('transitionButton2', 'hiddenDiv2');
initializeTransitionButton('transitionButton3', 'hiddenDiv3');
initializeTransitionButton('transitionButton4', 'hiddenDiv4');
initializeTransitionButton('transitionButton4', 'hiddenDiv5');



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
