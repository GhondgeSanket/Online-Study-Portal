// Engineering Courses Data
const engineeringCourses = [
    {
        id: 'cse',
        name: 'Computer Science Engineering',
        icon: 'fas fa-laptop-code',
        description: 'Software Development, Programming, Data Structures, AI, Machine Learning',
        color: '#4f46e5',
        subjects: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'AI/ML', 'Web Development']
    },
    {
        id: 'ece',
        name: 'Electronics & Communication',
        icon: 'fas fa-microchip',
        description: 'Electronics, Communication Systems, Signal Processing, VLSI Design',
        color: '#059669',
        subjects: ['Digital Electronics', 'Analog Circuits', 'Communication Systems', 'Signal Processing', 'VLSI Design', 'Microprocessors', 'Control Systems', 'Electromagnetics']
    },
    {
        id: 'me',
        name: 'Mechanical Engineering',
        icon: 'fas fa-cogs',
        description: 'Machines, Thermodynamics, Manufacturing, Automotive, Robotics',
        color: '#dc2626',
        subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing', 'Heat Transfer', 'Strength of Materials', 'CAD/CAM', 'Robotics']
    },
    {
        id: 'ee',
        name: 'Electrical Engineering',
        icon: 'fas fa-bolt',
        description: 'Power Systems, Electrical Machines, Control Systems, Renewable Energy',
        color: '#d97706',
        subjects: ['Power Systems', 'Electrical Machines', 'Control Systems', 'Power Electronics', 'Renewable Energy', 'Circuit Analysis', 'Measurements', 'Protection Systems']
    },
    {
        id: 'ce',
        name: 'Civil Engineering',
        icon: 'fas fa-building',
        description: 'Construction, Structural Design, Environmental Engineering, Transportation',
        color: '#7c3aed',
        subjects: ['Structural Engineering', 'Concrete Technology', 'Geotechnical Engineering', 'Transportation', 'Environmental Engineering', 'Surveying', 'Fluid Mechanics', 'Construction Management']
    },
    {
        id: 'che',
        name: 'Chemical Engineering',
        icon: 'fas fa-flask',
        description: 'Chemical Processes, Petrochemicals, Pharmaceuticals, Environmental',
        color: '#0891b2',
        subjects: ['Chemical Process', 'Mass Transfer', 'Heat Transfer', 'Reaction Engineering', 'Process Control', 'Thermodynamics', 'Fluid Mechanics', 'Separation Processes']
    },
    {
        id: 'it',
        name: 'Information Technology',
        icon: 'fas fa-server',
        description: 'Software Development, Database Management, Networking, Cybersecurity',
        color: '#be185d',
        subjects: ['Database Systems', 'Web Technologies', 'Network Security', 'Software Testing', 'Mobile Computing', 'Cloud Computing', 'Data Mining', 'Cybersecurity']
    },
    {
        id: 'aero',
        name: 'Aeronautical Engineering',
        icon: 'fas fa-plane',
        description: 'Aircraft Design, Aerospace Systems, Flight Mechanics, Propulsion',
        color: '#1f2937',
        subjects: ['Aerodynamics', 'Aircraft Structures', 'Propulsion', 'Flight Mechanics', 'Aircraft Design', 'Avionics', 'Materials Science', 'Control Systems']
    }
];

// Study Materials Data
const studyMaterials = [
    {
        id: 1,
        title: 'Engineering Mathematics',
        category: 'notes',
        branch: 'all',
        icon: 'fas fa-calculator',
        links: [
            { name: 'Calculus Notes', url: 'https://nptel.ac.in/courses/111/105/111105041/', icon: 'fas fa-file-pdf' },
            { name: 'Linear Algebra', url: 'https://ocw.mit.edu/courses/mathematics/', icon: 'fas fa-book' },
            { name: 'Differential Equations', url: 'https://www.khanacademy.org/math/differential-equations', icon: 'fas fa-video' },
            { name: 'Previous Papers', url: '#', icon: 'fas fa-clipboard-list' }
        ]
    },
    {
        id: 2,
        title: 'Programming & DSA',
        category: 'videos',
        branch: 'cse',
        icon: 'fas fa-code',
        links: [
            { name: 'C++ Programming', url: 'https://www.geeksforgeeks.org/c-plus-plus/', icon: 'fab fa-cuttlefish' },
            { name: 'Data Structures', url: 'https://www.coursera.org/learn/data-structures', icon: 'fas fa-sitemap' },
            { name: 'Algorithms', url: 'https://www.youtube.com/watch?v=0IAPZzGSbME', icon: 'fab fa-youtube' },
            { name: 'Coding Practice', url: 'https://leetcode.com/', icon: 'fas fa-terminal' }
        ]
    },
    {
        id: 3,
        title: 'Digital Electronics',
        category: 'books',
        branch: 'ece',
        icon: 'fas fa-microchip',
        links: [
            { name: 'Boolean Algebra', url: 'https://nptel.ac.in/courses/108/106/108106165/', icon: 'fas fa-book' },
            { name: 'Logic Gates', url: '#', icon: 'fas fa-file-pdf' },
            { name: 'Sequential Circuits', url: '#', icon: 'fas fa-video' },
            { name: 'Lab Manual', url: '#', icon: 'fas fa-clipboard-check' }
        ]
    },
    {
        id: 4,
        title: 'Thermodynamics',
        category: 'notes',
        branch: 'me',
        icon: 'fas fa-fire',
        links: [
            { name: 'First Law', url: 'https://nptel.ac.in/courses/112/103/112103266/', icon: 'fas fa-file-pdf' },
            { name: 'Second Law', url: '#', icon: 'fas fa-book' },
            { name: 'Heat Engines', url: '#', icon: 'fas fa-video' },
            { name: 'Problem Solving', url: '#', icon: 'fas fa-edit' }
        ]
    },
    {
        id: 5,
        title: 'Circuit Analysis',
        category: 'videos',
        branch: 'ee',
        icon: 'fas fa-plug',
        links: [
            { name: 'AC Circuits', url: 'https://nptel.ac.in/courses/108/102/108102146/', icon: 'fas fa-video' },
            { name: 'DC Circuits', url: '#', icon: 'fas fa-book' },
            { name: 'Network Theorems', url: '#', icon: 'fas fa-file-pdf' },
            { name: 'Lab Experiments', url: '#', icon: 'fas fa-flask' }
        ]
    },
    {
        id: 6,
        title: 'Structural Engineering',
        category: 'papers',
        branch: 'ce',
        icon: 'fas fa-building',
        links: [
            { name: 'RCC Design', url: 'https://nptel.ac.in/courses/105/106/105106109/', icon: 'fas fa-file-pdf' },
            { name: 'Steel Structures', url: '#', icon: 'fas fa-book' },
            { name: 'Foundation Design', url: '#', icon: 'fas fa-video' },
            { name: 'Previous Years', url: '#', icon: 'fas fa-clipboard-list' }
        ]
    },
    {
        id: 7,
        title: 'Machine Learning',
        category: 'videos',
        branch: 'cse',
        icon: 'fas fa-robot',
        links: [
            { name: 'ML Basics', url: 'https://www.coursera.org/learn/machine-learning', icon: 'fas fa-video' },
            { name: 'Deep Learning', url: 'https://www.deeplearning.ai/', icon: 'fab fa-youtube' },
            { name: 'Python for ML', url: 'https://www.kaggle.com/learn', icon: 'fab fa-python' },
            { name: 'Projects', url: 'https://github.com/topics/machine-learning', icon: 'fab fa-github' }
        ]
    },
    {
        id: 8,
        title: 'Database Systems',
        category: 'books',
        branch: 'it',
        icon: 'fas fa-database',
        links: [
            { name: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', icon: 'fas fa-book' },
            { name: 'DBMS Concepts', url: 'https://nptel.ac.in/courses/106/106/106106093/', icon: 'fas fa-file-pdf' },
            { name: 'NoSQL Databases', url: '#', icon: 'fas fa-video' },
            { name: 'Practice Queries', url: '#', icon: 'fas fa-terminal' }
        ]
    }
];

// DOM Elements
let currentUser = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadCourses();
    loadMaterials();
    setupSmoothScrolling();
});

function initializeApp() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
}

function setupEventListeners() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Material filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterMaterials(filter);
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Auth forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('loginModal');
        if (e.target === modal) {
            closeLoginModal();
        }
    });
}

function loadCourses() {
    const courseGrid = document.getElementById('courseGrid');
    if (!courseGrid) return;

    courseGrid.innerHTML = '';

    engineeringCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        courseGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="course-icon">
            <i class="${course.icon}" style="color: ${course.color}"></i>
        </div>
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <div class="course-subjects">
            <h4>Main Subjects:</h4>
            <div class="subject-list">
                ${course.subjects.map(subject => 
                    `<span class="subject-tag">${subject}</span>`
                ).join('')}
            </div>
        </div>
        <button class="btn btn-primary" onclick="exploreCourse('${course.id}')">
            <i class="fas fa-arrow-right"></i> Explore Materials
        </button>
    `;
    
    return card;
}

function loadMaterials() {
    const materialGrid = document.getElementById('materialGrid');
    if (!materialGrid) return;

    materialGrid.innerHTML = '';

    studyMaterials.forEach(material => {
        const materialCard = createMaterialCard(material);
        materialGrid.appendChild(materialCard);
    });
}

function createMaterialCard(material) {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.setAttribute('data-category', material.category);
    card.setAttribute('data-branch', material.branch);
    
    card.innerHTML = `
        <div class="material-header">
            <div class="material-icon">
                <i class="${material.icon}"></i>
            </div>
            <h3>${material.title}</h3>
        </div>
        <div class="material-content">
            <h4>Available Resources:</h4>
            <ul class="material-links">
                ${material.links.map(link => `
                    <li>
                        <a href="${link.url}" target="_blank" onclick="trackMaterialClick('${material.title}', '${link.name}')">
                            <i class="${link.icon}"></i>
                            ${link.name}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    return card;
}

function filterMaterials(filter) {
    const materialCards = document.querySelectorAll('.material-card');
    
    materialCards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            const category = card.getAttribute('data-category');
            if (category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function exploreCourse(courseId) {
    // Scroll to materials section
    scrollToSection('materials');
    
    // Filter materials by course
    setTimeout(() => {
        const materialCards = document.querySelectorAll('.material-card');
        materialCards.forEach(card => {
            const branch = card.getAttribute('data-branch');
            if (branch === courseId || branch === 'all') {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        
        showNotification(`Showing materials for ${engineeringCourses.find(c => c.id === courseId)?.name}`, 'success');
    }, 500);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Modal Functions
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('modalTitle').textContent = 'Login';
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn:first-child').classList.add('active');
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('modalTitle').textContent = 'Register';
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn:last-child').classList.add('active');
}

// Form Handlers
function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    showLoading(true);
    
    // Simulate API call
    setTimeout(() => {
        const savedUser = localStorage.getItem(`user_${email}`);
        
        if (savedUser) {
            const user = JSON.parse(savedUser);
            if (user.password === password) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                updateUIForLoggedInUser();
                closeLoginModal();
                showNotification('Login successful! Welcome back.', 'success');
            } else {
                showNotification('Invalid password. Please try again.', 'error');
            }
        } else {
            showNotification('User not found. Please register first.', 'error');
        }
        
        showLoading(false);
    }, 1500);
}

function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const formData = {
        name: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        phone: form.querySelector('input[type="tel"]').value,
        branch: form.querySelector('select').value,
        password: form.querySelector('input[type="password"]').value,
        confirmPassword: form.querySelectorAll('input[type="password"]')[1].value
    };
    
    if (formData.password !== formData.confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    showLoading(true);
    
    // Simulate API call
    setTimeout(() => {
        // Check if user already exists
        const existingUser = localStorage.getItem(`user_${formData.email}`);
        
        if (existingUser) {
            showNotification('User already exists with this email!', 'error');
        } else {
            // Save user
            const newUser = {
                id: Date.now(),
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                branch: formData.branch,
                password: formData.password,
                registeredAt: new Date().toISOString()
            };
            
            localStorage.setItem(`user_${formData.email}`, JSON.stringify(newUser));
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            updateUIForLoggedInUser();
            closeLoginModal();
            showNotification('Registration successful! Welcome to Engineering Portal.', 'success');
        }
        
        showLoading(false);
    }, 2000);
}

function handleContactForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = {
        name: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        subject: form.querySelectorAll('input[type="text"]')[1].value,
        message: form.querySelector('textarea').value
    };
    
    showLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        form.reset();
        showLoading(false);
    }, 1500);
}

function updateUIForLoggedInUser() {
    if (currentUser) {
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
            loginBtn.onclick = showUserMenu;
        }
    }
}

function showUserMenu() {
    const menu = `
        <div class="user-menu" style="
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 1rem;
            min-width: 200px;
            z-index: 1000;
        ">
            <p><strong>${currentUser.name}</strong></p>
            <p>${currentUser.email}</p>
            <p>Branch: ${currentUser.branch.toUpperCase()}</p>
            <hr style="margin: 0.5rem 0;">
            <button onclick="logout()" style="
                background: #dc2626;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;
            ">Logout</button>
        </div>
    `;
    
    // Remove existing menu
    const existingMenu = document.querySelector('.user-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }
    
    // Add new menu
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.style.position = 'relative';
    loginBtn.insertAdjacentHTML('afterend', menu);
    
    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!e.target.closest('.login-btn') && !e.target.closest('.user-menu')) {
                const menu = document.querySelector('.user-menu');
                if (menu) menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    location.reload();
}

// Utility Functions
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = show ? 'flex' : 'none';
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function trackMaterialClick(materialTitle, linkName) {
    console.log(`Material clicked: ${materialTitle} - ${linkName}`);
    
    // Track in localStorage
    const clicks = JSON.parse(localStorage.getItem('materialClicks') || '[]');
    clicks.push({
        material: materialTitle,
        link: linkName,
        timestamp: new Date().toISOString(),
        user: currentUser?.email || 'anonymous'
    });
    localStorage.setItem('materialClicks', JSON.stringify(clicks.slice(-100))); // Keep last 100 clicks
}

// Search functionality (can be extended)
function searchMaterials(query) {
    const materialCards = document.querySelectorAll('.material-card');
    materialCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.textContent.toLowerCase();
        
        if (title.includes(query.toLowerCase()) || content.includes(query.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeLoginModal();
    }
    
    // Ctrl + / to focus search (if search exists)
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) searchInput.focus();
    }
});

// Add page visibility change handler
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'Come back! - Engineering Portal';
    } else {
        document.title = 'Free Engineering Learning Portal';
    }
});

// Initialize tooltips and other interactive elements
function initializeInteractiveElements() {
    // Add hover effects for course cards
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}
