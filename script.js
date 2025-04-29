// Main JavaScript file for Mr Luther Codes portfolio

document.addEventListener('DOMContentLoaded', () => {
    console.log('Mr Luther Codes portfolio site loaded!');
    
    // Add event listeners to project cards for enhanced interactivity
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add focus/blur events for keyboard navigation accessibility
        card.addEventListener('focusin', () => {
            card.classList.add('focused');
        });
        
        card.addEventListener('focusout', () => {
            card.classList.remove('focused');
        });
    });
    
    // Optional: Add a simple animation to the header
    const header = document.querySelector('header');
    
    setTimeout(() => {
        header.classList.add('loaded');
    }, 300);
    
    // Optional: Add a filter functionality for future enhancement
    // This could be implemented when there are more projects to filter
    
    /*
    // Example filter function - can be implemented later
    const filterProjects = (category) => {
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
            if (category === 'all' || project.dataset.category === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    };
    */
});

// Add any additional functionality needed for the portfolio site here