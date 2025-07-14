// Dark/Light mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.querySelector('.darkmode button');
    const body = document.body;
    const buttonText = darkModeButton.querySelector('span');
    const buttonIcon = darkModeButton.querySelector('.theme-icon path');
    
    // Icons for sun and moon
    const sunIcon = "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z";
    
    const moonIcon = "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z";
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Function to update button appearance
    function updateButton(theme) {
        if (theme === 'dark') {
            buttonText.textContent = 'Light Mode';
            buttonIcon.setAttribute('d', moonIcon);
        } else {
            buttonText.textContent = 'Dark Mode';
            buttonIcon.setAttribute('d', sunIcon);
        }
    }
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        updateButton('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        updateButton('light');
    }
    
    // Toggle theme when button is clicked
    darkModeButton.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        
        // Add a smooth transition class
        body.style.transition = 'all 0.3s ease';
        
        if (currentTheme === 'dark') {
            body.setAttribute('data-theme', 'light');
            updateButton('light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            updateButton('dark');
            localStorage.setItem('theme', 'dark');
        }
        
        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
});
