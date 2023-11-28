// Get references to the button and modal elements
const profileBtn = document.getElementById('profile-btn');
const alertBtn = document.getElementById('alert-btn');
const alertModal = document.getElementById('alert-modal');
const profileModal = document.getElementById('profile-modal');
const showStepsbutton = document.getElementById('show-steps-btn');
const arrowUp = document.getElementById('arrow-up');
const articles = document.querySelectorAll('.article');
const closeBtn = document.querySelector('.close-button');
const selectPlan = document.querySelector('.select-plan');
// Store the click counts for each button
const clickCounts = {};
// Select the steps completed span
const stepsCompletedSpan = document.getElementById('steps-completed');
const progressBar = document.querySelector('.progress-bar');
let stepsCompletedCount = 0;


closeBtn.addEventListener('click', () => {
  selectPlan.classList.add('hidden');
})

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



// Add 'selected' class to the first article by default
articles[0].classList.add('selected');
// Add event listeners to all transition buttons
document.querySelectorAll('.transition-button').forEach(transitionButton => {
  clickCounts[transitionButton.id] = 0;
  transitionButton.addEventListener('click', () => {
  
    clickCounts[transitionButton.id]++;

    const isOddClick = clickCounts[transitionButton.id] % 2 !== 0;

    const progressBarWidth = parseInt(window.getComputedStyle(progressBar).width);
    progressBar.style.width = isOddClick ? `${progressBarWidth + 18}px` : `${progressBarWidth - 18}px`;

    stepsCompletedCount = isOddClick ? stepsCompletedCount + 1 : stepsCompletedCount - 1;
    stepsCompletedCount = Math.min(5, Math.max(0, stepsCompletedCount));
    stepsCompletedSpan.textContent = `${stepsCompletedCount}`;

    const currentVisibleDiv = document.querySelector('.flex-box');
    const targetHiddenDivId = transitionButton.dataset.targetHiddenDiv;
    const targetHiddenDiv = document.getElementById(targetHiddenDivId);
    const openUpDivId = transitionButton.dataset.openUpDiv;
    const openUpDiv = document.getElementById(openUpDivId);
    const parentArticle = transitionButton.closest('.article');
    const nextArticle = transitionButton.closest('.article').nextElementSibling;
     // Remove 'selected' class from all articles
     articles.forEach(article => article.classList.remove('selected'));

    if (currentVisibleDiv) {
      currentVisibleDiv.classList.remove('flex-box');
      currentVisibleDiv.classList.add('hidden');
      nextArticle.classList.add('selected');
    }

    if (targetHiddenDiv && isOddClick) {
      targetHiddenDiv.classList.remove('hidden');
      targetHiddenDiv.classList.add('flex-box')
      nextArticle.classList.add('selected');;
    }

    if (openUpDiv && !isOddClick) {
      openUpDiv.classList.remove('hidden');
      openUpDiv.classList.add('flex-box');
      parentArticle.classList.add('selected');
      nextArticle.classList.remove('selected');
      
    }
    console.log(parentArticle);
    console.log(nextArticle);
    // Get the next article (sibling) and add 'selected' class
  });
});



// articles.forEach(article => {
//   article.addEventListener('click', function () {
//     // Remove the 'selected' class from all articles
//     articles.forEach(otherArticle => otherArticle.classList.remove('selected'));

//     // Add the 'selected' class to the clicked article
//     article.classList.add('selected');
    
//     // Get the target hidden div ID from the data attribute
//     const targetHiddenDivId = this.dataset.targetHiddenDiv;

//     // Close currently visible div
//     const visibleDiv = document.querySelector('.flex-box');
//     if (visibleDiv) {
//       visibleDiv.classList.remove('flex-box');
//       visibleDiv.classList.add('hidden');

//     }

//     // Toggle the visibility of the target hidden div
//     const targetHiddenDiv = document.getElementById(targetHiddenDivId);
//     if (targetHiddenDiv) {
//       targetHiddenDiv.classList.remove('hidden');
//       targetHiddenDiv.classList.add('flex-box');
//     }
//   });
// });

document.querySelectorAll('.open-article-content').forEach(contentElement => {

  contentElement.addEventListener('click', () => {
    // Hide the current Visiblediv
    const currentVisibleDiv = document.querySelector('.flex-box');
    if (currentVisibleDiv) {
      currentVisibleDiv.classList.remove('flex-box');
      currentVisibleDiv.classList.add('hidden');
        
    }
    console.log(currentVisibleDiv);

    // Show the next hiddenDiv based on the clicked element
    const nextHiddenDivId = contentElement.nextElementSibling.id;
  
    const nextHiddenDiv = document.getElementById
    (nextHiddenDivId);
    console.log(nextHiddenDiv)
    if (nextHiddenDiv) {
      nextHiddenDiv.classList.remove('hidden');
      nextHiddenDiv.classList.add('flex-box');
    }
    
    // Remove 'selected' class from all articles
    articles.forEach(article => article.classList.remove('selected'));
    const nextArticle = contentElement.closest('.article');
    console.log(nextArticle)
    if (nextArticle) {
      nextArticle.classList.add('selected');
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