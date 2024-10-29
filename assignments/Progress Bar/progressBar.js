document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const tooltip = document.getElementById('tooltip');
    const percent = parseInt(progressBar.dataset.percent);

    // Set the height of the progress bar based on percentage
    progressBar.style.height = `${percent}%`;

    // Update the tooltip text
    tooltip.textContent = `${percent}%`;

    // Show tooltip on hover
    progressBar.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    // Hide tooltip when not hovering
    progressBar.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});
