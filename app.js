// Get references to the button and modal elements
const profileBtn = document.getElementById('profile-btn');
const alertBtn = document.getElementById('alert-btn');
const alertModal = document.getElementById('alert-modal');
const profileModal = document.getElementById('profile-modal')

// Toggle modal visibility on button click
profileBtn.addEventListener('click', function() {
  // Toggle visibility
  profileModal.style.display = profileModal.style.display === 'none' ? 'flex' : 'none';
});

// Toggle modal visibility on button click
alertBtn.addEventListener('click', function() {
  // Toggle visibility
  alertModal.style.display = alertModal.style.display === 'none' ? 'flex' : 'none';
});
