export default class Carousel {
    constructor(element) {
        // Add null check for element
        if (!element) {
            console.warn('Carousel: No element provided');
            return;
        }

        try {
            this.element = element;
            this.slides = this.element.querySelectorAll('.carousel-slide');
            
            // Validate if slides exist
            if (!this.slides || this.slides.length === 0) {
                console.warn('Carousel: No slides found');
                return;
            }

            this.currentSlide = 0;
            this.totalSlides = this.slides.length;
            
            // Initialize navigation buttons with null checks
            this.prevButton = this.element.querySelector('.carousel-prev');
            this.nextButton = this.element.querySelector('.carousel-next');
            
            if (!this.prevButton || !this.nextButton) {
                console.warn('Carousel: Navigation buttons not found');
                return;
            }

            this.init();
        } catch (error) {
            console.error('Error initializing carousel:', error);
        }
    }

    init() {
        try {
            // Add event listeners with error handling
            this.prevButton.addEventListener('click', () => this.navigate('prev'));
            this.nextButton.addEventListener('click', () => this.navigate('next'));
            
            // Show initial slide
            this.showSlide(this.currentSlide);
            
            // Optional: Add auto-play functionality
            this.startAutoPlay();
        } catch (error) {
            console.error('Error in carousel initialization:', error);
        }
    }

    navigate(direction) {
        try {
            if (direction === 'next') {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            } else {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            }
            this.showSlide(this.currentSlide);
        } catch (error) {
            console.error('Error navigating carousel:', error);
        }
    }

    showSlide(index) {
        try {
            // Hide all slides
            this.slides.forEach(slide => {
                if (slide) {
                    slide.style.display = 'none';
                }
            });
            
            // Show current slide
            if (this.slides[index]) {
                this.slides[index].style.display = 'block';
            }
        } catch (error) {
            console.error('Error showing slide:', error);
        }
    }

    startAutoPlay(interval = 5000) {
        try {
            this.autoPlayInterval = setInterval(() => {
                this.navigate('next');
            }, interval);
        } catch (error) {
            console.error('Error starting autoplay:', error);
        }
    }

    // Clean up method
    destroy() {
        try {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
            // Remove event listeners if needed
            if (this.prevButton) {
                this.prevButton.removeEventListener('click', () => this.navigate('prev'));
            }
            if (this.nextButton) {
                this.nextButton.removeEventListener('click', () => this.navigate('next'));
            }
        } catch (error) {
            console.error('Error destroying carousel:', error);
        }
    }
}

// Initialize carousel with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        const carouselElements = document.querySelectorAll('.carousel');
        if (carouselElements.length > 0) {
            carouselElements.forEach(element => {
                new Carousel(element);
            });
        } else {
            console.warn('No carousel elements found on the page');
        }
    } catch (error) {
        console.error('Error initializing carousels:', error);
    }
}); 