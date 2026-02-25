/* ===================================
   MOEEN GS - JavaScript
   Handles navigation, forms, and interactions
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Navigation Toggle =====
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    
    // ===== Smooth Scroll for Anchor Links =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculate offset for sticky nav
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const flashBannerHeight = document.querySelector('.flash-banner').offsetHeight;
                const offset = navbarHeight + flashBannerHeight;
                
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ===== Contact Form Handling =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            // In production, replace this with actual form submission to backend
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
            
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            
            // Simulate API call
            setTimeout(() => {
                // Success message
                showFormMessage(
                    'Thank you for your message! We will get back to you within 24 hours.',
                    'success'
                );
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = originalBtnText;
                
                // Log form data (for development)
                console.log('Form submitted:', formData);
                
                // In production, you would send this data to your backend:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // })
                // .then(response => response.json())
                // .then(data => {
                //     showFormMessage(data.message, 'success');
                //     contactForm.reset();
                // })
                // .catch(error => {
                //     showFormMessage('An error occurred. Please try again.', 'error');
                // });
                
            }, 1500);
        });
    }
    
    
    // ===== Form Message Display =====
    function showFormMessage(message, type) {
        const messageDiv = document.getElementById('formMessage');
        
        if (messageDiv) {
            messageDiv.textContent = message;
            messageDiv.className = 'form-message ' + type;
            messageDiv.style.display = 'block';
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            }
        }
    }
    
    
    // ===== Scroll-based Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature-card, .category-card, .benefit-card, .value-item, .info-card, .mv-card'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    
    // ===== Navbar Scroll Effect =====
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ===== Category Card Hover Effects =====
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    
    // ===== Logo Fallback Handler =====
    // This ensures the fallback logo shows if the image fails to load
    const brandLogo = document.getElementById('brand-logo');
    if (brandLogo) {
        brandLogo.addEventListener('error', function() {
            this.style.display = 'none';
            const fallback = this.nextElementSibling;
            if (fallback && fallback.classList.contains('logo-fallback')) {
                fallback.style.display = 'flex';
            }
        });
    }
    
    
    // ===== Flash Banner Close (Optional) =====
    // Uncomment this if you want to add a close button to the flash banner
    /*
    const flashBanner = document.querySelector('.flash-banner');
    if (flashBanner) {
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            line-height: 1;
        `;
        
        closeBtn.addEventListener('click', function() {
            flashBanner.style.display = 'none';
            // Adjust navbar position
            const navbar = document.querySelector('.navbar');
            navbar.style.top = '0';
        });
        
        flashBanner.style.position = 'relative';
        flashBanner.querySelector('.flash-content').appendChild(closeBtn);
    }
    */
    
    
    // ===== Performance: Lazy Load Images =====
    // If you add more images later, this will help with performance
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    
    // ===== Console Welcome Message =====
    console.log('%c🌸 Moeen GS - Premium Cosmetics & Beauty Store', 
        'color: #c9a173; font-size: 16px; font-weight: bold;');
    console.log('%cWebsite loaded successfully!', 
        'color: #666; font-size: 12px;');
    
    
    // ===== Update Current Year in Footer =====
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
    }
    
});


// ===== Helper Functions =====

/**
 * Debounce function to limit function execution frequency
 * Useful for scroll and resize events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Format phone number for display
 */
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}


// ===== Custom Configuration =====
// You can customize these values after deployment

const SITE_CONFIG = {
    // WhatsApp number (include country code without + or spaces)
    whatsappNumber: 'YOUR_PHONE_NUMBER',
    
    // Phone number for tel: links
    phoneNumber: '+1234567890',
    
    // Email address
    email: 'info@moeengs.com',
    
    // Business address
    address: 'Your Business Address Here',
    
    // Google Maps embed URL
    mapEmbedUrl: 'YOUR_GOOGLE_MAPS_EMBED_URL',
    
    // Business hours
    hours: {
        weekday: '9:00 AM - 9:00 PM',
        weekend: '10:00 AM - 6:00 PM'
    }
};

// Apply configuration on page load
window.addEventListener('load', function() {
    // Update WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (SITE_CONFIG.whatsappNumber !== 'YOUR_PHONE_NUMBER') {
            link.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
        }
    });
    
    // Update phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        if (SITE_CONFIG.phoneNumber !== '+1234567890') {
            link.href = `tel:${SITE_CONFIG.phoneNumber}`;
            link.textContent = SITE_CONFIG.phoneNumber;
        }
    });
    
    // Update email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        if (SITE_CONFIG.email !== 'info@moeengs.com') {
            link.href = `mailto:${SITE_CONFIG.email}`;
            link.textContent = SITE_CONFIG.email;
        }
    });
    
    // Update addresses
    document.querySelectorAll('#business-address, #store-address, #footer-address').forEach(element => {
        if (SITE_CONFIG.address !== 'Your Business Address Here') {
            element.textContent = SITE_CONFIG.address;
        }
    });
    
    // Update map embed
    const mapIframe = document.getElementById('google-map');
    if (mapIframe && SITE_CONFIG.mapEmbedUrl !== 'YOUR_GOOGLE_MAPS_EMBED_URL') {
        mapIframe.src = SITE_CONFIG.mapEmbedUrl;
    }
});
