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


// // Add event listeners to all transition buttons
// document.querySelectorAll('.transition-button').forEach(transitionButton => {
//   let clickCount = 0; // Variable to track the number of clicks

//   transitionButton.addEventListener('click', () => {
//       // Check if the current Visiblediv is hidden
//       const currentVisibleDiv = document.querySelector('.Visible');
//       const targetHiddenDivId = transitionButton.dataset.targetHiddenDiv;
//       const targetHiddenDiv = document.getElementById(targetHiddenDivId);
//       console.log(targetHiddenDiv)
//       console.log(currentVisibleDiv)

//       if (currentVisibleDiv && targetHiddenDiv) {
//           clickCount++;

//           console.log(`Button clicked ${clickCount} times`); // Log the click count

//           if (clickCount % 2 === 0) {
//               // On every even click, toggle between hidden and visible states
//               currentVisibleDiv.classList.add('Visible');
//               currentVisibleDiv.remove('hidden')
//               // targetHiddenDiv.classList.toggle('Visible');
//           } else {
//               // On odd clicks, hide the current Visiblediv and show the corresponding hiddenDiv
//               if (currentVisibleDiv !== targetHiddenDiv) {
//                   currentVisibleDiv.classList.remove('Visible');
//                   currentVisibleDiv.classList.add('hidden');
//               }

//               targetHiddenDiv.classList.remove('hidden');
//               targetHiddenDiv.classList.add('Visible');
//           }
//       }
//   });
// });

// Store the click counts for each button
const clickCounts = {}
// Add event listeners to all transition buttons
document.querySelectorAll('.transition-button').forEach(transitionButton => {
  clickCounts[transitionButton.id] = 0;  // Initialize click count for each button
  transitionButton.addEventListener('click', () => {

    // Increment the click count for the clicked button
    clickCounts[transitionButton.id]++;

    // Check if the click count is even for the clicked button
    const isEvenClick = clickCounts[transitionButton.id] % 2 === 0;

   
    // Hide the current Visiblediv
    const currentVisibleDiv = document.querySelector('.Visible');
    const targetHiddenDivId = transitionButton.dataset.targetHiddenDiv;
    const targetHiddenDiv = document.getElementById(targetHiddenDivId);
    const openUpDivId= transitionButton.dataset.openUpDiv;
    const openUpDiv = document.getElementById( openUpDivId);
    
    if (currentVisibleDiv) {
      currentVisibleDiv.classList.remove('Visible');
      currentVisibleDiv.classList.add('hidden');
    }
    
    if (targetHiddenDiv) {
      targetHiddenDiv.classList.remove('hidden');
      targetHiddenDiv.classList.add('Visible');
    }
    

    console.log(currentVisibleDiv)
    console.log(openUpDiv)

     // Check if the click count is even
     if (isEvenClick && openUpDiv) {
      openUpDiv.classList.remove('hidden');
      openUpDiv.classList.add('Visible');
      targetHiddenDiv.classList.add('hidden');
      targetHiddenDiv.classList.remove('Visible');
    }

    
  });

});


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