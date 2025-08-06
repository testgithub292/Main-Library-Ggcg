    // Search Box Focus Effect
        const searchBox = document.getElementById('searchBox');
        const searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('focus', () => {
            searchBox.classList.add('focused');
        });

        searchInput.addEventListener('blur', () => {
            if (!searchInput.value) {
                searchBox.classList.remove('focused');
            }
        });

        // Search Functionality Simulation
        searchInput.addEventListener('input', function() {
            const term = this.value.trim();
            const resultArea = document.getElementById('resultArea');
            
            if (term.length > 2) {
                // Show loading state
                resultArea.innerHTML = `
                    <div class="text-center">
                        <div class="spinner-border text-primary mb-3" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p>Searching our collection...</p>
                    </div>
                `;
                
                // Simulate API call with timeout
                setTimeout(() => {
                    if (term.toLowerCase().includes("computer")) {
                        resultArea.innerHTML = `
                            <div class="search-results">
                                <h4 class="mb-4">3 Results for "${term}"</h4>
                                <div class="card mb-3 border-0 shadow-sm">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="https://m.media-amazon.com/images/I/41PG42Z25NL._SY425_.jpg" width="60" class="rounded">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h5 class="mb-1">Computer Science: An Overview</h5>
                                                <p class="text-muted small mb-1">J. Glenn Brookshear | 13th Edition</p>
                                                <div class="d-flex align-items-center">
                                                    <span class="badge bg-primary me-2">Available</span>
                                                    <small class="text-muted">Shelf CS-42, Row 3</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-3 border-0 shadow-sm">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="https://m.media-amazon.com/images/I/61fgRn7G3BL._SY425_.jpg" width="60" class="rounded">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h5 class="mb-1">Introduction to Algorithms</h5>
                                                <p class="text-muted small mb-1">Thomas H. Cormen | 4th Edition</p>
                                                <div class="d-flex align-items-center">
                                                    <span class="badge bg-primary me-2">Available</span>
                                                    <small class="text-muted">Shelf CS-15, Row 2</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    } else if (term.toLowerCase().includes("history")) {
                        resultArea.innerHTML = `
                            <div class="search-results">
                                <h4 class="mb-4">2 Results for "${term}"</h4>
                                <div class="card mb-3 border-0 shadow-sm">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="https://m.media-amazon.com/images/I/51P5+ZVFqJL._SY425_.jpg" width="60" class="rounded">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h5 class="mb-1">A Short History of Nearly Everything</h5>
                                                <p class="text-muted small mb-1">Bill Bryson | Illustrated Edition</p>
                                                <div class="d-flex align-items-center">
                                                    <span class="badge bg-primary me-2">Available</span>
                                                    <small class="text-muted">Shelf HIS-08, Row 4</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    } else {
                        resultArea.innerHTML = `
                            <div class="text-center py-4">
                                <i class="fas fa-book-open fa-3x mb-3 text-muted" style="opacity: 0.5;"></i>
                                <h5>No results found for "${term}"</h5>
                                <p class="text-muted">Try different keywords or ask the librarian for assistance</p>
                            </div>
                        `;
                    }
                }, 1000);
            } else if (term.length > 0) {
                resultArea.innerHTML = `
                    <div class="text-center text-muted">
                        <p>Continue typing to search (minimum 3 characters)</p>
                    </div>
                `;
            } else {
                resultArea.innerHTML = `
                    <div class="text-center text-muted">
                        <i class="fas fa-book-open fa-3x mb-3" style="opacity: 0.2;"></i>
                        <p>Your search results will appear here</p>
                    </div>
                `;
            }
        });

        // Animation on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('.animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            animateElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

           // Simple animation for hero button
        const heroBtn = document.querySelector('.btn-hero');
        
        heroBtn.addEventListener('mouseenter', () => {
            heroBtn.style.transform = 'translateY(-3px)';
            heroBtn.style.boxShadow = '0 8px 20px rgba(67, 97, 238, 0.4)';
        });
        
        heroBtn.addEventListener('mouseleave', () => {
            heroBtn.style.transform = 'translateY(0)';
            heroBtn.style.boxShadow = '0 5px 15px rgba(67, 97, 238, 0.3)';
        });