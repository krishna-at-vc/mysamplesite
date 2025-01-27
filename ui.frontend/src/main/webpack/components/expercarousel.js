export default class ExperCarousel {
    constructor(element) {
        if (!element) {
            console.warn('ExperCarousel: No element provided');
            return;
        }

        try {
            this.element = element;
            this.slides = this.element.querySelectorAll('.exper-carousel-slide');
            
            if (!this.slides || this.slides.length === 0) {
                console.warn('ExperCarousel: No slides found');
                return;
            }

            this.currentSlide = 0;
            this.totalSlides = this.slides.length;
            this.prevButton = this.element.querySelector('.exper-carousel-prev');
            this.nextButton = this.element.querySelector('.exper-carousel-next');
            this.indicators = this.element.querySelectorAll('.exper-carousel-indicator');
            
            if (!this.prevButton || !this.nextButton) {
                console.warn('ExperCarousel: Navigation buttons not found');
                return;
            }

            this.init();
        } catch (error) {
            console.error('Error initializing experience carousel:', error);
        }
    }

    init() {
        try {
            this.prevButton.addEventListener('click', () => this.navigate('prev'));
            this.nextButton.addEventListener('click', () => this.navigate('next'));
            
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });

            this.showSlide(this.currentSlide);
        } catch (error) {
            console.error('Error in experience carousel initialization:', error);
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
            console.error('Error navigating experience carousel:', error);
        }
    }

    goToSlide(index) {
        try {
            if (index >= 0 && index < this.totalSlides) {
                this.currentSlide = index;
                this.showSlide(index);
            }
        } catch (error) {
            console.error('Error going to slide:', error);
        }
    }

    showSlide(index) {
        try {
            this.slides.forEach((slide, i) => {
                if (slide) {
                    slide.classList.remove('active');
                    this.indicators[i]?.classList.remove('active');
                }
            });
            
            if (this.slides[index]) {
                this.slides[index].classList.add('active');
                this.indicators[index]?.classList.add('active');
            }
        } catch (error) {
            console.error('Error showing slide:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const carouselElements = document.querySelectorAll('.exper-carousel');
        if (carouselElements.length > 0) {
            carouselElements.forEach(element => {
                new ExperCarousel(element);
            });
        }
    } catch (error) {
        console.error('Error initializing experience carousels:', error);
    }
}); 