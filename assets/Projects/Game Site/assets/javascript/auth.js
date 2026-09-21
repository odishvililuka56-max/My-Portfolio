
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('login.html') && 
        !window.location.pathname.includes('verify.html')) {
        updateUserProfile();
    }

    if (window.location.pathname.includes('login.html')) {
        setupRegisterForm();
    }

    if (window.location.pathname.includes('verify.html')) {
        setupVerifyForm();
    }
});

function setupRegisterForm() {
    const form = document.getElementById('register-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const login = document.getElementById('login').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!login || !password) {
                showCustomAlert('Please fill in all fields');
                return;
            }

            if (!/^[a-zA-Z]+$/.test(login)) {
                showCustomAlert('Username must contain only letters (A-Z, a-z)');
                return;
            }

            if (!/^[a-zA-Z0-9]+$/.test(password)) {
                showCustomAlert('ჩაწერეთ მხოლოდ ასოები და ციფრები');
                return;
            }

            if (password.length < 4) {
                showCustomAlert('Password must be at least 4 characters');
                return;
            }

            let accounts = JSON.parse(localStorage.getItem('gameShopAccounts')) || [];
            if (accounts.some(acc => acc.username === login)) {
                showCustomAlert('This username already exists');
                return;
            }

            accounts.push({
                username: login,
                password: password,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('gameShopAccounts', JSON.stringify(accounts));

            showCustomAlert('Account created successfully! Redirecting to verify...');
            
            setTimeout(() => {
                localStorage.setItem('tempUsername', login);
                window.location.href = 'verify.html';
            }, 1500);
        });
    }
}

function setupVerifyForm() {
    const form = document.getElementById('verify-form');
    if (form) {
        const tempUsername = localStorage.getItem('tempUsername');
        if (!tempUsername) {
            window.location.href = 'login.html';
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const verifyAccount = document.getElementById('verify-account').value.trim();
            const verifyPassword = document.getElementById('verify-password').value;

            if (!verifyAccount || !verifyPassword) {
                showCustomAlert('Please fill in all fields');
                return;
            }

            if (!/^[a-zA-Z]+$/.test(verifyAccount)) {
                showCustomAlert('Account name must contain only letters (A-Z, a-z)');
                return;
            }

            let accounts = JSON.parse(localStorage.getItem('gameShopAccounts')) || [];
            const account = accounts.find(acc => acc.username === verifyAccount);

            if (!account) {
                showCustomAlert('This account does not exist');
                document.getElementById('verify-form').reset();
                return;
            }

            if (account.password !== verifyPassword) {
                showCustomAlert('Password is incorrect');
                document.getElementById('verify-password').value = '';
                return;
            }

            localStorage.setItem('gameShopCurrentUser', verifyAccount);
            localStorage.removeItem('tempUsername');
            showCustomAlert(`Welcome ${verifyAccount}!`);
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
}

function showCustomAlert(message) {
    let alertEl = document.querySelector('.custom-alert');
    if (alertEl) {
        alertEl.remove();
    }

    alertEl = document.createElement('div');
    alertEl.className = 'custom-alert';
    alertEl.textContent = message;
    document.body.appendChild(alertEl);

    setTimeout(() => {
        alertEl.style.animation = 'alertFadeOut 0.4s ease forwards';
        setTimeout(() => {
            alertEl.remove();
        }, 400);
    }, 1500);
}
function logout() {
    localStorage.removeItem('gameShopCurrentUser');
    updateUserProfile();
    window.location.href = 'index.html';
}

function updateUserProfile() {
    const userProfileEl = document.getElementById('user-profile');
    if (!userProfileEl) return;

    const currentUser = localStorage.getItem('gameShopCurrentUser');

    if (currentUser) {
        userProfileEl.innerHTML = `
            <div class="user-menu">
                <button class="user-profile-btn" id="user-toggle">
                    <span class="user-icon">👤</span>
                    <span class="user-name">${currentUser}</span>
                </button>
                <div class="user-dropdown" id="user-dropdown">
                    <a href="accounts.html">My Accounts</a>
                    <a href="#" onclick="logout(); return false;">Logout</a>
                </div>
            </div>
        `;
        attachUserMenuListener();
    } else {
        userProfileEl.innerHTML = `
            <a href="login.html" class="user-profile-btn">
                <span class="user-icon">👤</span>
                <span class="user-name">Sign In</span>
            </a>
        `;
    }
}

function attachUserMenuListener() {
    const userToggle = document.getElementById('user-toggle');
    const userDropdown = document.getElementById('user-dropdown');
    
    if (userToggle && userDropdown) {
        userToggle.addEventListener('click', function(e) {
            e.preventDefault();
            userDropdown.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!userToggle.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
    }
}
