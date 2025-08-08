 // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const menuIcon = document.getElementById('menuIcon');

        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        });

        // Dropdown toggle for mobile
        const dropdowns = document.querySelectorAll('.dropdown');
        const submenus = document.querySelectorAll('.dropdown-submenu');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        });

        submenus.forEach(submenu => {
            const toggle = submenu.querySelector('.submenu-toggle');
            
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation();
                    submenu.classList.toggle('active');
                }
            });
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navLinks.classList.remove('active');
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                    submenus.forEach(submenu => submenu.classList.remove('active'));
                }
            }
        });

        // Resize observer to reset menu state when switching between mobile and desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                submenus.forEach(submenu => submenu.classList.remove('active'));
            }
        });    
    
    
    
    // // Search Box Focus Effect
    //     const searchBox = document.getElementById('searchBox');
    //     const searchInput = document.getElementById('searchInput');

    //     searchInput.addEventListener('focus', () => {
    //         searchBox.classList.add('focused');
    //     });

    //     searchInput.addEventListener('blur', () => {
    //         if (!searchInput.value) {
    //             searchBox.classList.remove('focused');
    //         }
    //     });

    //     // Search Functionality Simulation
    //     searchInput.addEventListener('input', function() {
    //         const term = this.value.trim();
    //         const resultArea = document.getElementById('resultArea');
            
    //         if (term.length > 2) {
    //             // Show loading state
    //             resultArea.innerHTML = `
    //                 <div class="text-center">
    //                     <div class="spinner-border text-primary mb-3" role="status">
    //                         <span class="visually-hidden">Loading...</span>
    //                     </div>
    //                     <p>Searching our collection...</p>
    //                 </div>
    //             `;
                
    //             // Simulate API call with timeout
    //             setTimeout(() => {
    //                 if (term.toLowerCase().includes("computer")) {
    //                     resultArea.innerHTML = `
    //                         <div class="search-results">
    //                             <h4 class="mb-4">3 Results for "${term}"</h4>
    //                             <div class="card mb-3 border-0 shadow-sm">
    //                                 <div class="card-body">
    //                                     <div class="d-flex">
    //                                         <div class="flex-shrink-0">
    //                                             <img src="https://m.media-amazon.com/images/I/41PG42Z25NL._SY425_.jpg" width="60" class="rounded">
    //                                         </div>
    //                                         <div class="flex-grow-1 ms-3">
    //                                             <h5 class="mb-1">Computer Science: An Overview</h5>
    //                                             <p class="text-muted small mb-1">J. Glenn Brookshear | 13th Edition</p>
    //                                             <div class="d-flex align-items-center">
    //                                                 <span class="badge bg-primary me-2">Available</span>
    //                                                 <small class="text-muted">Shelf CS-42, Row 3</small>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div class="card mb-3 border-0 shadow-sm">
    //                                 <div class="card-body">
    //                                     <div class="d-flex">
    //                                         <div class="flex-shrink-0">
    //                                             <img src="https://m.media-amazon.com/images/I/61fgRn7G3BL._SY425_.jpg" width="60" class="rounded">
    //                                         </div>
    //                                         <div class="flex-grow-1 ms-3">
    //                                             <h5 class="mb-1">Introduction to Algorithms</h5>
    //                                             <p class="text-muted small mb-1">Thomas H. Cormen | 4th Edition</p>
    //                                             <div class="d-flex align-items-center">
    //                                                 <span class="badge bg-primary me-2">Available</span>
    //                                                 <small class="text-muted">Shelf CS-15, Row 2</small>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     `;
    //                 } else if (term.toLowerCase().includes("history")) {
    //                     resultArea.innerHTML = `
    //                         <div class="search-results">
    //                             <h4 class="mb-4">2 Results for "${term}"</h4>
    //                             <div class="card mb-3 border-0 shadow-sm">
    //                                 <div class="card-body">
    //                                     <div class="d-flex">
    //                                         <div class="flex-shrink-0">
    //                                             <img src="https://m.media-amazon.com/images/I/51P5+ZVFqJL._SY425_.jpg" width="60" class="rounded">
    //                                         </div>
    //                                         <div class="flex-grow-1 ms-3">
    //                                             <h5 class="mb-1">A Short History of Nearly Everything</h5>
    //                                             <p class="text-muted small mb-1">Bill Bryson | Illustrated Edition</p>
    //                                             <div class="d-flex align-items-center">
    //                                                 <span class="badge bg-primary me-2">Available</span>
    //                                                 <small class="text-muted">Shelf HIS-08, Row 4</small>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     `;
    //                 } else {
    //                     resultArea.innerHTML = `
    //                         <div class="text-center py-4">
    //                             <i class="fas fa-book-open fa-3x mb-3 text-muted" style="opacity: 0.5;"></i>
    //                             <h5>No results found for "${term}"</h5>
    //                             <p class="text-muted">Try different keywords or ask the librarian for assistance</p>
    //                         </div>
    //                     `;
    //                 }
    //             }, 1000);
    //         } else if (term.length > 0) {
    //             resultArea.innerHTML = `
    //                 <div class="text-center text-muted">
    //                     <p>Continue typing to search (minimum 3 characters)</p>
    //                 </div>
    //             `;
    //         } else {
    //             resultArea.innerHTML = `
    //                 <div class="text-center text-muted">
    //                     <i class="fas fa-book-open fa-3x mb-3" style="opacity: 0.2;"></i>
    //                     <p>Your search results will appear here</p>
    //                 </div>
    //             `;
    //         }
    //     });

    //     // Animation on scroll
    //     document.addEventListener('DOMContentLoaded', () => {
    //         const animateElements = document.querySelectorAll('.animate');
            
    //         const observer = new IntersectionObserver((entries) => {
    //             entries.forEach(entry => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.style.opacity = 1;
    //                     entry.target.style.transform = 'translateY(0)';
    //                 }
    //             });
    //         }, { threshold: 0.1 });
            
    //         animateElements.forEach(el => {
    //             el.style.opacity = 0;
    //             el.style.transform = 'translateY(30px)';
    //             el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    //             observer.observe(el);
    //         });
    //     });

    //        // Simple animation for hero button
    //     const heroBtn = document.querySelector('.btn-hero');
        
    //     heroBtn.addEventListener('mouseenter', () => {
    //         heroBtn.style.transform = 'translateY(-3px)';
    //         heroBtn.style.boxShadow = '0 8px 20px rgba(67, 97, 238, 0.4)';
    //     });
        
    //     heroBtn.addEventListener('mouseleave', () => {
    //         heroBtn.style.transform = 'translateY(0)';
    //         heroBtn.style.boxShadow = '0 5px 15px rgba(67, 97, 238, 0.3)';
    //     });



    // Search Box Focus Effect
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('focus', () => {
    searchBox.classList.add('focused');
    searchBox.style.boxShadow = '0 0 0 3px rgba(67, 97, 238, 0.2)';
});

searchInput.addEventListener('blur', () => {
    searchBox.style.boxShadow = 'none';
    if (!searchInput.value) {
        searchBox.classList.remove('focused');
    }
});

// Search Functionality for Books Table
searchInput.addEventListener('input', function() {
    const term = this.value.trim().toLowerCase();
    const resultArea = document.getElementById('resultArea');
    
    if (term.length > 1) {
        // Show loading state with modern animation
        resultArea.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-grow text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <h5 class="text-muted">Searching library database...</h5>
                <p class="small text-muted">Looking for matches in our collection</p>
            </div>
        `;
        
        // Simulate API call with timeout
        setTimeout(() => {
            // Fetch the books table from the other page
            fetch('books/books.html')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const booksTable = doc.getElementById('booksTable');
                    
                    if (!booksTable) {
                        resultArea.innerHTML = `
                            <div class="text-center py-5">
                                <div class="alert alert-warning py-4">
                                    <i class="fas fa-exclamation-triangle fa-2x mb-3"></i>
                                    <h5>Database Connection Error</h5>
                                    <p class="text-muted">Could not access books catalog</p>
                                    <button class="btn btn-sm btn-outline-primary mt-2">Try Again</button>
                                </div>
                            </div>
                        `;
                        return;
                    }
                    
                    // Get all rows except header
                    const rows = booksTable.querySelectorAll('tbody tr');
                    const matchingBooks = [];
                    
                    rows.forEach(row => {
                        const cells = row.querySelectorAll('td');
                        if (cells.length >= 6) { // Matching your table structure
                            const accessionNo = cells[1].textContent.toLowerCase();
                            const title = cells[2].textContent.toLowerCase();
                            const author = cells[3].textContent.toLowerCase();
                            const subject = cells[4].textContent.toLowerCase();
                            const status = cells[5].textContent.toLowerCase();
                            
                            if (accessionNo.includes(term) || 
                                title.includes(term) || 
                                author.includes(term) || 
                                subject.includes(term) || 
                                status.includes(term)) {
                                matchingBooks.push({
                                    id: cells[0].textContent,
                                    accessionNo: cells[1].textContent,
                                    title: cells[2].textContent,
                                    author: cells[3].textContent,
                                    subject: cells[4].textContent,
                                    status: cells[5].textContent,
                                    statusClass: cells[5].querySelector('span').className
                                });
                            }
                        }
                    });
                    
                    if (matchingBooks.length > 0) {
                        let resultsHTML = `
                            <div class="search-results">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                    <h4 class="mb-0">${matchingBooks.length} Results Found</h4>
                                    <div class="text-muted small">Search: "${term}"</div>
                                </div>
                                <div class="table-responsive rounded-3 shadow-sm">
                                    <table class="table table-hover table-borderless mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th width="50px">#</th>
                                                <th>Accession No.</th>
                                                <th>Title</th>
                                                <th>Author</th>
                                                <th>Subject</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                        `;
                        
                        matchingBooks.forEach((book, index) => {
                            const rowClass = index % 2 === 0 ? '' : 'bg-light';
                            resultsHTML += `
                                <tr class="${rowClass}">
                                    <td class="text-muted">${book.id}</td>
                                    <td><span class="badge bg-secondary">${book.accessionNo}</span></td>
                                    <td class="fw-bold">${book.title}</td>
                                    <td>${book.author}</td>
                                    <td><small class="text-muted">${book.subject}</small></td>
                                    <td><span class="${book.statusClass}">${book.status}</span></td>
                                </tr>
                            `;
                        });
                        
                        resultsHTML += `
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div class="text-muted small">
                                        Showing ${matchingBooks.length} of ${matchingBooks.length} records
                                    </div>
                                    <div class="text-primary small">
                                        <i class="fas fa-info-circle me-1"></i>
                                        Click on a book for more details
                                    </div>
                                </div>
                            </div>
                        `;
                        resultArea.innerHTML = resultsHTML;
                    } else {
                        resultArea.innerHTML = `
                            <div class="text-center py-5">
                                <div class="alert alert-light py-4">
                                    <i class="fas fa-book-open fa-3x mb-3 text-muted" style="opacity: 0.3;"></i>
                                    <h5>No matches found</h5>
                                    <p class="text-muted">We couldn't find any books matching "${term}"</p>
                                    <div class="mt-3">
                                        <button class="btn btn-sm btn-outline-primary me-2">Browse All Books</button>
                                        <button class="btn btn-sm btn-primary">Ask Librarian</button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                })
                .catch(error => {
                    console.error('Error fetching books data:', error);
                    resultArea.innerHTML = `
                        <div class="text-center py-5">
                            <div class="alert alert-danger py-4">
                                <i class="fas fa-exclamation-circle fa-2x mb-3"></i>
                                <h5>Search Failed</h5>
                                <p class="text-muted">We're having trouble accessing the catalog</p>
                                <button class="btn btn-sm btn-outline-danger mt-2">Retry Search</button>
                            </div>
                        </div>
                    `;
                });
        }, 800);
    } else if (term.length > 0) {
        resultArea.innerHTML = `
            <div class="text-center py-4">
                <div class="alert alert-light">
                    <i class="fas fa-keyboard fa-2x mb-3 text-muted"></i>
                    <h5>Keep Typing</h5>
                    <p class="text-muted">Enter at least 2 characters to search our collection</p>
                </div>
            </div>
        `;
    } else {
        resultArea.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-search fa-3x mb-3 text-muted" style="opacity: 0.2;"></i>
                <h5 class="text-muted">Library Search</h5>
                <p class="text-muted">Your results will appear here</p>
            </div>
        `;
    }
});

// Modern UI Enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Enhanced search box interaction
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim().length > 2) {
            searchBox.classList.add('search-active');
            setTimeout(() => {
                searchBox.classList.remove('search-active');
            }, 300);
        }
    });
});

// Modern button animation
const heroBtn = document.querySelector('.btn-hero');

heroBtn.addEventListener('mouseenter', () => {
    heroBtn.style.transform = 'translateY(-3px) scale(1.02)';
    heroBtn.style.boxShadow = '0 10px 25px rgba(67, 97, 238, 0.3)';
    heroBtn.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
});

heroBtn.addEventListener('mouseleave', () => {
    heroBtn.style.transform = 'translateY(0) scale(1)';
    heroBtn.style.boxShadow = '0 5px 15px rgba(67, 97, 238, 0.2)';
});