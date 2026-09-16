
let accountToDelete = null;

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initTheme();
    updateUserProfile();
    loadAccounts();
});

function loadAccounts() {
    const accountsList = document.getElementById('accounts-list');
    let accounts = JSON.parse(localStorage.getItem('gameShopAccounts')) || [];
    const currentUser = localStorage.getItem('gameShopCurrentUser');

    accountsList.innerHTML = '';

    if (accounts.length === 0) {
        accountsList.innerHTML = '<div class="empty-state"><p>No accounts yet. Create one to get started!</p></div>';
        return;
    }

    accounts.forEach(account => {
        const isCurrentUser = account.username === currentUser;
        const accountCard = document.createElement('div');
        accountCard.className = 'account-card' + (isCurrentUser ? ' account-current' : '');
        accountCard.innerHTML = `
            <div class="account-info">
                <div class="account-icon">${account.username.charAt(0).toUpperCase()}</div>
                <div class="account-details">
                    <h3>${account.username}${isCurrentUser ? ' (Current)' : ''}</h3>
                    <p>Created: ${new Date(account.createdAt).toLocaleDateString()} ${new Date(account.createdAt).toLocaleTimeString()}</p>
                </div>
            </div>
            <div class="account-actions">
                ${!isCurrentUser ? `<button class="btn-switch" onclick="switchAccount('${account.username}')">Switch</button>` : ''}
                <button class="btn-delete" onclick="deleteAccount('${account.username}')">Delete</button>
            </div>
        `;
        accountsList.appendChild(accountCard);
    });
}

function switchAccount(username) {
    localStorage.setItem('gameShopCurrentUser', username);
    showCustomAlert(`Switched to ${username}`);
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function deleteAccount(username) {
    accountToDelete = username;
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function closeModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.remove('show');
    }
    accountToDelete = null;
}

function confirmDelete() {
    if (!accountToDelete) return;

    let accounts = JSON.parse(localStorage.getItem('gameShopAccounts')) || [];
    accounts = accounts.filter(acc => acc.username !== accountToDelete);
    localStorage.setItem('gameShopAccounts', JSON.stringify(accounts));

    const currentUser = localStorage.getItem('gameShopCurrentUser');
    if (currentUser === accountToDelete) {
        localStorage.removeItem('gameShopCurrentUser');
    }

    closeModal();
    showCustomAlert(`Account ${accountToDelete} deleted`);
    setTimeout(() => {
        loadAccounts();
        updateUserProfile();
    }, 1000);
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('confirmModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

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

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}
