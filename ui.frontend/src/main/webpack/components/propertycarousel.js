export default class PropertyCarousel {
    constructor(element) {
        if (!element) {
            console.warn('PropertyCarousel: No element provided');
            return;
        }

        try {
            this.element = element;
            this.slides = this.element.querySelectorAll('.property-carousel-slide');
            
            if (!this.slides || this.slides.length === 0) {
                console.warn('PropertyCarousel: No slides found');
                return;
            }

            this.currentSlide = 0;
            this.totalSlides = this.slides.length;
            this.prevButton = this.element.querySelector('.property-carousel-prev');
            this.nextButton = this.element.querySelector('.property-carousel-next');
            this.thumbnails = this.element.querySelectorAll('.property-carousel-thumbnail');
            
            if (!this.prevButton || !this.nextButton) {
                console.warn('PropertyCarousel: Navigation buttons not found');
                return;
            }

            this.init();
        } catch (error) {
            console.error('Error initializing property carousel:', error);
        }
    }

    init() {
        try {
            this.prevButton.addEventListener('click', () => this.navigate('prev'));
            this.nextButton.addEventListener('click', () => this.navigate('next'));
            
            this.thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => this.goToSlide(index));
            });

            this.showSlide(this.currentSlide);
        } catch (error) {
            console.error('Error in property carousel initialization:', error);
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
            console.error('Error navigating property carousel:', error);
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
                    this.thumbnails[i]?.classList.remove('active');
                }
            });
            
            if (this.slides[index]) {
                this.slides[index].classList.add('active');
                this.thumbnails[index]?.classList.add('active');
            }
        } catch (error) {
            console.error('Error showing slide:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const carouselElements = document.querySelectorAll('.property-carousel');
        if (carouselElements.length > 0) {
            carouselElements.forEach(element => {
                new PropertyCarousel(element);
            });
        }
    } catch (error) {
        console.error('Error initializing property carousels:', error);
    }
}); 