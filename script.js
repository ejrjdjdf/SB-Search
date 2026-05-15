// Функція автоматичного пошуку
function startSearch() {
    const queryInput = document.getElementById('query').value.trim().toLowerCase();
    const errorDiv = document.getElementById('search-error');
    
    if (queryInput === "") {
        errorDiv.style.display = "none";
        return;
    }

    // Перевірка ключових слів для пошуку
    if (queryInput.includes("gdps") || queryInput.includes("kocmoc") || queryInput.includes("geometry") || queryInput.includes("gdrp") || queryInput.includes("nanste")) {
        openIframe('GDRP.html'); // Викликаємо твій реальний файл з великих літер!
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

// Відкриття зовнішнього файлу GDRP.html через iframe вікно
function openIframe(fileName) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    hideAllPages();
    
    const iframe = document.getElementById('browser-iframe');
    iframe.src = "./" + fileName; 
    
    document.getElementById('view-container').classList.add('active');
}

// Відкриття внутрішніх текстових сторінок (маус, казик, кислота)
function openSite(siteId) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    hideAllPages();
    
    document.getElementById('site-' + siteId).classList.add('active');
}

// Приховати абсолютно всі активні вікна
function hideAllPages() {
    const pages = document.querySelectorAll('.site-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('view-container').classList.remove('active');
}

// Кнопка НАЗАД (скидає все до головної сторінки)
function goBack() {
    hideAllPages();
    document.getElementById('browser-iframe').src = ""; // Очищаємо фрейм
    document.getElementById('main-search').style.display = 'block';
    document.getElementById('query').value = ""; // Очищаємо рядок пошуку
}

// Пошук по натисканню кнопки Enter
document.getElementById('query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        startSearch();
    }
});
