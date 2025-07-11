// Terminal cursor animation and simple interactions
document.addEventListener('DOMContentLoaded', function() {
    // Cursor blinking animation
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0.3' ? '1' : '0.3';
        }, 500);
    }
    
    // Add terminal typing effect to project links
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Terminal window buttons interaction
    const terminalButtons = document.querySelectorAll('.terminal-buttons span');
    terminalButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simple visual feedback
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}); 