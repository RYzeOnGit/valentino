document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');
    const container = document.querySelector('.container');

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '5';
        heart.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out forwards`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Create hearts periodically
    setInterval(createHeart, 1000);

    // Yes button click
    yesBtn.addEventListener('click', function() {
        celebration.classList.remove('hidden');
        container.style.opacity = '0';
        
        // Play celebration animation
        setTimeout(() => {
            container.style.display = 'none';
        }, 500);
    });

    // No button click - make it move around playfully
    let clickCount = 0;
    noBtn.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount < 3) {
            // Move button randomly
            const maxX = window.innerWidth - this.offsetWidth;
            const maxY = window.innerHeight - this.offsetHeight;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            this.style.position = 'absolute';
            this.style.left = randomX + 'px';
            this.style.top = randomY + 'px';
            this.style.transition = 'all 0.3s ease';
        } else {
            // After 3 clicks, show a message or do something fun
            alert('Haha, you can\'t escape! 😸');
            clickCount = 0;
            this.style.position = '';
            this.style.left = '';
            this.style.top = '';
        }
    });

    // Add touch support for mobile
    yesBtn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });

    yesBtn.addEventListener('touchend', function() {
        this.style.transform = '';
    });

    noBtn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });

    noBtn.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

