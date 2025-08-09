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


/*-------------------------*/

// document.addEventListener('DOMContentLoaded', function() {
//     // Sample data - in a real app, this would come from an API
//     const allBooks = [
//         { accessionNo: 'ACC001', title: 'The Great Gatsby', author: 'h. Scott Fitzgerald', subject: 'Classic Literature', status: 'Available' },
//         { accessionNo: 'ACC002', title: 'To Kill a Mockingbird', author: 'Harper Lee', subject: 'Classic Literature', status: 'Checked Out' },
//         { accessionNo: 'ACC003', title: '1984', author: 'George Orwell', subject: 'Dystopian Fiction', status: 'Available' },
//         { accessionNo: 'ACC004', title: 'The Silent Patient', author: 'Alex Michaelides', subject: 'Psychological Thriller', status: 'Available' },
//         { accessionNo: 'ACC005', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', subject: 'Anthropology', status: 'Checked Out' },
//         { accessionNo: 'ACC006', title: 'The Hobbit', author: 'J.R.R. Tolkien', subject: 'Fantasy', status: 'Available' },
//         { accessionNo: 'ACC007', title: 'Atomic Habits', author: 'James Clear', subject: 'Self-Improvement', status: 'Available' },
//         { accessionNo: 'ACC008', title: 'The Psychology of Money', author: 'Morgan Housel', subject: 'Finance', status: 'Checked Out' },
//         { accessionNo: 'ACC009', title: 'Educated', author: 'Tara Westover', subject: 'Memoir', status: 'Available' },
//         { accessionNo: 'ACC010', title: 'The Midnight Library', author: 'Matt Haig', subject: 'Fiction', status: 'Available' },
//         { accessionNo: 'ACC011', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', subject: 'Psychology', status: 'Available' },
//         { accessionNo: 'ACC012', title: 'The Alchemist', author: 'Paulo Coelho', subject: 'Philosophical Fiction', status: 'Checked Out' },
//         { accessionNo: 'ACC013', title: 'The Power of Now', author: 'Eckhart Tolle', subject: 'Spirituality', status: 'Available' },
//         { accessionNo: 'ACC014', title: 'The Four Agreements', author: 'Don Miguel Ruiz', subject: 'Self-Help', status: 'Available' },
//         { accessionNo: 'ACC015', title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', subject: 'Self-Help', status: 'Checked Out' },
//         { accessionNo: 'ACC016', title: 'Deep Work', author: 'Cal Newport', subject: 'Productivity', status: 'Available' },
//         { accessionNo: 'ACC017', title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', subject: 'Self-Improvement', status: 'Available' },
//         { accessionNo: 'ACC018', title: 'The Intelligent Investor', author: 'Benjamin Graham', subject: 'Investing', status: 'Checked Out' },
//         { accessionNo: 'ACC019', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', subject: 'Personal Finance', status: 'Available' },
//         { accessionNo: 'ACC020', title: 'The Lean Startup', author: 'Eric Ries', subject: 'Business', status: 'Available' }
//     ];
    
//     // Initialize variables
//     let currentPage = 1;
//     let rowsPerPage = 10;
//     let filteredBooks = [...allBooks];
    
//     // DOM elements
//     const booksTable = document.getElementById('booksTable');
//     const tbody = booksTable.querySelector('tbody');
//     const searchInput = document.getElementById('searchInput');
//     const clearSearch = document.getElementById('clearSearch');
//     const searchBtn = document.getElementById('searchBtn');
//     const categoryFilter = document.getElementById('categoryFilter');
//     const statusFilter = document.getElementById('statusFilter');
//     const rowsPerPageSelect = document.getElementById('rowsPerPage');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     const startRowSpan = document.getElementById('startRow');
//     const endRowSpan = document.getElementById('endRow');
//     const totalRowsSpan = document.getElementById('totalRows');
    
//     // Initialize the table
//     function renderTable() {
//         // Clear existing rows
//         tbody.innerHTML = '';
        
//         // Calculate pagination
//         const startIndex = (currentPage - 1) * rowsPerPage;
//         const endIndex = startIndex + rowsPerPage;
//         const booksToShow = filteredBooks.slice(startIndex, endIndex);
        
//         // Render rows with auto-incrementing row numbers
//         booksToShow.forEach((book, index) => {
//             const rowNumber = startIndex + index + 1;
//             const row = document.createElement('tr');
            
//             row.innerHTML = `
//                 <td>${rowNumber}</td>
//                 <td>${book.accessionNo}</td>
//                 <td>${book.title}</td>
//                 <td>${book.author}</td>
//                 <td>${book.subject}</td>
//                 <td><span class="status ${book.status === 'Available' ? 'available' : 'checked-out'}">${book.status}</span></td>
//             `;
            
//             tbody.appendChild(row);
//         });
        
//         // Update pagination info
//         startRowSpan.textContent = filteredBooks.length > 0 ? startIndex + 1 : 0;
//         endRowSpan.textContent = Math.min(endIndex, filteredBooks.length);
//         totalRowsSpan.textContent = filteredBooks.length;
        
//         // Update button states
//         prevBtn.disabled = currentPage === 1;
//         nextBtn.disabled = endIndex >= filteredBooks.length;
//     }
    
//     // Filter books based on search and filters
//     function filterBooks() {
//         const searchTerm = searchInput.value.toLowerCase();
//         const category = categoryFilter.value;
//         const status = statusFilter.value;
        
//         filteredBooks = allBooks.filter(book => {
//             // Search term matching (title, author, or accession number)
//             const matchesSearch = searchTerm === '' || 
//                 book.title.toLowerCase().includes(searchTerm) ||
//                 book.author.toLowerCase().includes(searchTerm) ||
//                 book.accessionNo.toLowerCase().includes(searchTerm);
            
//             // Category filter
//             const matchesCategory = category === '' || book.subject === category;
            
//             // Status filter
//             const matchesStatus = status === '' || book.status === status;
            
//             return matchesSearch && matchesCategory && matchesStatus;
//         });
        
//         currentPage = 1; // Reset to first page when filters change
//         renderTable();
//     }
    
//     // Reset to original state when search is cleared
//     function resetSearch() {
//         searchInput.value = '';
//         filterBooks();
//     }
    
//     // Event listeners
//     searchBtn.addEventListener('click', filterBooks);
    
//     searchInput.addEventListener('keyup', function(e) {
//         if (e.key === 'Enter') {
//             filterBooks();
//         } else if (this.value === '') {
//             resetSearch();
//         }
//     });
    
//     clearSearch.addEventListener('click', resetSearch);
    
//     categoryFilter.addEventListener('change', filterBooks);
//     statusFilter.addEventListener('change', filterBooks);
    
//     rowsPerPageSelect.addEventListener('change', function() {
//         rowsPerPage = parseInt(this.value);
//         currentPage = 1;
//         renderTable();
//     });
    
//     prevBtn.addEventListener('click', function() {
//         if (currentPage > 1) {
//             currentPage--;
//             renderTable();
//         }
//     });
    
//     nextBtn.addEventListener('click', function() {
//         const totalPages = Math.ceil(filteredBooks.length / rowsPerPage);
//         if (currentPage < totalPages) {
//             currentPage++;
//             renderTable();
//         }
//     });
    
//     // Initial render
//     renderTable();
// });


document.addEventListener('DOMContentLoaded', function() {
    // Get all books from HTML table rows
    function getAllBooks() {
        const bookRows = document.querySelectorAll('#booksTable tbody tr');
        const books = [];
        
        bookRows.forEach((row, index) => {
            const cells = row.querySelectorAll('td');
            books.push({
                rowElement: row,
                rowNumber: index + 1,
                accessionNo: cells[1].textContent,
                title: cells[2].textContent,
                author: cells[3].textContent,
                subject: cells[4].textContent,
                status: cells[5].querySelector('span').textContent
            });
        });
        
        return books;
    }
    
    // Initialize variables
    let currentPage = 1;
    let rowsPerPage = 10;
    const allBooks = getAllBooks();
    let filteredBooks = [...allBooks];
    
    // DOM elements
    const booksTable = document.getElementById('booksTable');
    const tbody = booksTable.querySelector('tbody');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const searchBtn = document.getElementById('searchBtn');
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const rowsPerPageSelect = document.getElementById('rowsPerPage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const startRowSpan = document.getElementById('startRow');
    const endRowSpan = document.getElementById('endRow');
    const totalRowsSpan = document.getElementById('totalRows');
    
    // Initialize the table
    function renderTable() {
        // Hide all rows first
        allBooks.forEach(book => {
            book.rowElement.style.display = 'none';
        });
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const booksToShow = filteredBooks.slice(startIndex, endIndex);
        
        // Show only the filtered and paginated rows
        booksToShow.forEach((book, index) => {
            book.rowElement.style.display = '';
            
            // Update the row number cell
            const rowNumberCell = book.rowElement.querySelector('td:first-child');
            if (rowNumberCell) {
                rowNumberCell.textContent = startIndex + index + 1;
            }
        });
        
        // Update pagination info
        startRowSpan.textContent = filteredBooks.length > 0 ? startIndex + 1 : 0;
        endRowSpan.textContent = Math.min(endIndex, filteredBooks.length);
        totalRowsSpan.textContent = filteredBooks.length;
        
        // Update button states
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = endIndex >= filteredBooks.length;
    }
    
    // Filter books based on search and filters
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const status = statusFilter.value;
        
        filteredBooks = allBooks.filter(book => {
            // Search term matching (title, author, or accession number)
            const matchesSearch = searchTerm === '' || 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.accessionNo.toLowerCase().includes(searchTerm);
            
            // Category filter
            const matchesCategory = category === '' || book.subject === category;
            
            // Status filter
            const matchesStatus = status === '' || book.status === status;
            
            return matchesSearch && matchesCategory && matchesStatus;
        });
        
        currentPage = 1; // Reset to first page when filters change
        renderTable();
    }
    
    // Reset to original state when search is cleared
    function resetSearch() {
        searchInput.value = '';
        filterBooks();
    }
    
    // Event listeners
    searchBtn.addEventListener('click', filterBooks);
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterBooks();
        } else if (this.value === '') {
            resetSearch();
        }
    });
    
    clearSearch.addEventListener('click', resetSearch);
    
    categoryFilter.addEventListener('change', filterBooks);
    statusFilter.addEventListener('change', filterBooks);
    
    rowsPerPageSelect.addEventListener('change', function() {
        rowsPerPage = parseInt(this.value);
        currentPage = 1;
        renderTable();
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredBooks.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    
    // Initial render
    renderTable();
});



/*---------------=============================================================*/

document.querySelector('.btn-export-excel').addEventListener('click', function () {
    let table = document.querySelector('table').cloneNode(true);
    table.querySelectorAll('*').forEach(el => el.removeAttribute('style'));
    let wb = XLSX.utils.table_to_book(table, { sheet: "Library Books" });
    XLSX.writeFile(wb, "LibraryBooks.xlsx");
});

document.querySelector('.btn-export-word').addEventListener('click', function () {
    let table = document.querySelector('table').cloneNode(true);
    table.querySelectorAll('*').forEach(el => el.removeAttribute('style'));

    let html = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office'
              xmlns:w='urn:schemas-microsoft-com:office:word'
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>Export Table</title></head>
        <body>${table.outerHTML}</body></html>
    `;
    let blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    saveAs(blob, 'LibraryBooks.doc');
});

document.querySelector('.btn-export-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.text("Library Books", 14, 15);
    doc.autoTable({
        html: 'table',
        startY: 20,
        styles: { fontSize: 10, halign: 'center', valign: 'middle' },
        headStyles: { fillColor: [63, 81, 181] }
    });

    doc.save('LibraryBooks.pdf');
});