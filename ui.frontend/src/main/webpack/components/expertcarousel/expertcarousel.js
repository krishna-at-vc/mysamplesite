(function() {
    'use strict';

    class ExpertCarousel {
        constructor(element) {
            this.element = element;
            this.wrapper = element.querySelector('.cmp-expert-carousel__wrapper');
            this.slides = element.querySelectorAll('.cmp-expert-carousel__slide');
            this.prevButton = element.querySelector('.cmp-expert-carousel__button--prev');
            this.nextButton = element.querySelector('.cmp-expert-carousel__button--next');
            this.currentIndex = 0;
            this.slidesPerView = 3;
            this.totalSlides = this.slides.length;

            // Add touch handling properties
            this.touchStartX = 0;
            this.touchEndX = 0;
            this.minSwipeDistance = 50;

            // Add keyboard support
            this.focusableElements = element.querySelectorAll('button, a');
            this.firstFocusableElement = this.focusableElements[0];
            this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];

            this.init();
        }

        init() {
            if (!this.wrapper || !this.slides.length) {
                console.warn('Expert Carousel: Required elements not found');
                return;
            }

            this.updateSlidesPerView();
            this.bindEvents();
            this.updateButtonsState();
            this.updateAriaAttributes();
            this.setupKeyboardNavigation();
            window.addEventListener('resize', () => this.updateSlidesPerView());
        }

        bindEvents() {
            if (this.prevButton) {
                this.prevButton.addEventListener('click', () => this.prev());
            }
            if (this.nextButton) {
                this.nextButton.addEventListener('click', () => this.next());
            }

            // Add touch events
            this.wrapper.addEventListener('touchstart', (e) => this.handleTouchStart(e));
            this.wrapper.addEventListener('touchend', (e) => this.handleTouchEnd(e));

            // Add keyboard event listeners
            this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
        }

        handleTouchStart(e) {
            try {
                this.touchStartX = e.touches[0].clientX;
            } catch (error) {
                console.warn('Error handling touch start:', error);
            }
        }

        handleTouchEnd(e) {
            try {
                this.touchEndX = e.changedTouches[0].clientX;
                this.handleSwipe();
            } catch (error) {
                console.warn('Error handling touch end:', error);
            }
        }

        handleSwipe() {
            const swipeDistance = this.touchEndX - this.touchStartX;
            
            if (Math.abs(swipeDistance) > this.minSwipeDistance) {
                if (swipeDistance > 0) {
                    this.prev();
                } else {
                    this.next();
                }
            }
        }

        handleKeydown(e) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prev();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.next();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - this.slidesPerView);
                    break;
            }
        }

        setupKeyboardNavigation() {
            // Trap focus within carousel when navigating with keyboard
            this.element.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === this.firstFocusableElement) {
                            e.preventDefault();
                            this.lastFocusableElement.focus();
                        }
                    } else {
                        if (document.activeElement === this.lastFocusableElement) {
                            e.preventDefault();
                            this.firstFocusableElement.focus();
                        }
                    }
                }
            });
        }

        updateAriaAttributes() {
            // Update ARIA states for slides
            this.slides.forEach((slide, index) => {
                const isVisible = index >= this.currentIndex && 
                                index < this.currentIndex + this.slidesPerView;
                slide.setAttribute('aria-hidden', !isVisible);
            });

            // Update navigation buttons
            if (this.prevButton) {
                this.prevButton.setAttribute('aria-disabled', this.currentIndex === 0);
            }
            if (this.nextButton) {
                this.nextButton.setAttribute('aria-disabled', 
                    this.currentIndex >= this.totalSlides - this.slidesPerView);
            }

            // Announce slide change to screen readers
            this.announceSlideChange();
        }

        announceSlideChange() {
            const liveRegion = this.element.querySelector('.cmp-expert-carousel__live-region') 
                || this.createLiveRegion();
            
            const currentSlide = this.currentIndex + 1;
            const totalSlides = this.totalSlides - this.slidesPerView + 1;
            liveRegion.textContent = `Showing slide ${currentSlide} of ${totalSlides}`;
        }

        createLiveRegion() {
            const liveRegion = document.createElement('div');
            liveRegion.className = 'cmp-expert-carousel__live-region';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.position = 'absolute';
            liveRegion.style.width = '1px';
            liveRegion.style.height = '1px';
            liveRegion.style.padding = '0';
            liveRegion.style.margin = '-1px';
            liveRegion.style.overflow = 'hidden';
            liveRegion.style.clip = 'rect(0, 0, 0, 0)';
            liveRegion.style.whiteSpace = 'nowrap';
            liveRegion.style.border = '0';
            this.element.appendChild(liveRegion);
            return liveRegion;
        }

        updateSlidesPerView() {
            if (window.innerWidth < 768) {
                this.slidesPerView = 1;
            } else if (window.innerWidth < 1024) {
                this.slidesPerView = 2;
            } else {
                this.slidesPerView = 3;
            }
            this.updateButtonsState();
        }

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateSlidePosition();
            }
        }

        next() {
            if (this.currentIndex < this.totalSlides - this.slidesPerView) {
                this.currentIndex++;
                this.updateSlidePosition();
            }
        }

        updateSlidePosition() {
            if (!this.slides.length) return;
            
            const slideWidth = this.slides[0].offsetWidth;
            const computedGap = window.getComputedStyle(this.wrapper).gap;
            // Parse gap value safely, handling 'normal' and other non-pixel values
            const gap = computedGap === 'normal' ? 0 : parseInt(computedGap) || 0;
            const offset = -(slideWidth + gap) * this.currentIndex;
            this.wrapper.style.transform = `translateX(${offset}px)`;
            this.updateButtonsState();
            this.updateAriaAttributes();
        }

        updateButtonsState() {
            this.prevButton.disabled = this.currentIndex === 0;
            this.nextButton.disabled = this.currentIndex >= this.totalSlides - this.slidesPerView;
        }

        goToSlide(index) {
            if (index >= 0 && index < this.totalSlides) {
                this.currentIndex = index;
                this.updateSlidePosition();
            }
        }
    }

    // Export the class for potential reuse
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = ExpertCarousel;
    }

    // Initialize on DOM ready
    function onDocumentReady() {
        try {
            const carousels = document.querySelectorAll('.cmp-expert-carousel');
            carousels.forEach(carousel => new ExpertCarousel(carousel));
        } catch (error) {
            console.error('Error initializing Expert Carousel:', error);
        }
    }

    if (document.readyState !== 'loading') {
        onDocumentReady();
    } else {
        document.addEventListener('DOMContentLoaded', onDocumentReady);
    }
})(); 