// This script adds the tooltip functionality
const progressBar = document.querySelector('.progress-bar');
const tooltip = progressBar.querySelector('.tooltip');

// Function to update the tooltip text and show it on hover
progressBar.addEventListener('mouseenter', () => {
  const progress = progressBar.getAttribute('data-progress');
  tooltip.textContent = `${progress}%`;
});

// Function to hide the tooltip when hover is removed
progressBar.addEventListener('mouseleave', () => {
  tooltip.textContent = '';
});
