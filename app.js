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

// let visibleDiv = document.getElementById('Visiblediv');

//     articles.forEach(function (article) {
//         const articleContentToggle = article.querySelector('.open-article-content');

//         articleContentToggle.addEventListener('click', function () {
//             // Check if the clicked article contains the visibleDiv
//             const isVisibleDiv = article.contains(visibleDiv);

//             // Toggle the visibility of the visibleDiv based on the clicked article
//             if (isVisibleDiv) {
//                 visibleDiv.style.display = (visibleDiv.style.display === 'none') ? 'block' : 'none';
//             } else {
//                 // Hide the current visibleDiv
//                 if (visibleDiv) {
//                     visibleDiv.style.display = 'none';
//                 }

//                 // Update visibleDiv to the next corresponding hidden div
//                 visibleDiv = article.querySelector('.hidden');

//                 // Show the new visibleDiv
//                 if (visibleDiv) {
//                     visibleDiv.style.display = 'block';
//                 }
//             }
//         });
//     });

// Function to toggle modal visibility
// Add event listeners to all open-article-content elements
document.querySelectorAll('.open-article-content').forEach(contentElement => {
  contentElement.addEventListener('click', () => {
      // Hide the current Visiblediv
      const currentVisibleDiv = document.querySelector('.Visible');
      if (currentVisibleDiv) {
          currentVisibleDiv.classList.remove('Visible');
          currentVisibleDiv.classList.add('hidden');
      }

      // Show the next hiddenDiv based on the clicked element
      const nextHiddenDivId = contentElement.parentElement.nextElementSibling.id;
      const nextHiddenDiv = document.getElementById(nextHiddenDivId);
      if (nextHiddenDiv) {
          nextHiddenDiv.classList.remove('hidden');
          nextHiddenDiv.classList.add('Visible');
      }
  });
});

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