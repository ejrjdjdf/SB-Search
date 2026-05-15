// Логіка пошуку
function startSearch() {
    const queryInput = document.getElementById('query').value.trim().toLowerCase();
    const errorDiv = document.getElementById('search-error');
    
    if (queryInput === "") {
        errorDiv.style.display = "none";
        return;
    }

    // Перевірка слів
    if (queryInput.includes("gdps") || queryInput.includes("kocmoc") || queryInput.includes("geometry") || queryInput.includes("gdrp") || queryInput.includes("nanste")) {
        openIframe('GDRP.html');
    } else if (queryInput.includes("maus") || queryInput.includes("маус") || queryInput.includes("taschenratte")) {
        openSite('maus');
    } else if (queryInput.includes("t22") || queryInput.includes("т-22")) {
        openSite('t22');
    } else if (queryInput.includes("acid") || queryInput.includes("світло") || queryInput.includes("сульфурик")) {
        openSite('acid');
    } else {
        errorDiv.style.display = "block";
    }
}

// Запуск зовнішнього файлу GDRP.html у фрейм
function openIframe(fileName) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    hideAllPages();
    
    const iframe = document.getElementById('browser-iframe');
    iframe.src = "./" + fileName; 
    
    document.getElementById('view-container').classList.add('active');
}

// Запуск внутрішніх текстових сторінок
function openSite(siteId) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    hideAllPages();
    
    document.getElementById('site-' + siteId).classList.add('active');
}

function hideAllPages() {
    const pages = document.querySelectorAll('.site-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('view-container').classList.remove('active');
}

// Кнопка НАЗАД (Скидання всього)
function goBack() {
    hideAllPages();
    document.getElementById('browser-iframe').src = ""; 
    document.getElementById('main-search').style.display = 'block';
    document.getElementById('query').value = ""; 
}

// Пошук по Enter
document.getElementById('query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        startSearch();
    }
});
