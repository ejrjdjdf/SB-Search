// ========================================== //
//       ГОЛОВНА ЛОГІКА ПОШУКУ (KOCMOC)       //
// ========================================== //

function startSearch() {
    const queryInput = document.getElementById('query').value.trim().toLowerCase();
    const errorDiv = document.getElementById('search-error');
    
    if (queryInput === "") {
        errorDiv.style.display = "none";
        return;
    }

    // 1. ПЕРЕВІРКА НА GDPS
    if (queryInput.includes("gdps") || queryInput.includes("kocmoc") || queryInput.includes("geometry") || queryInput.includes("gdrp") || queryInput.includes("nanste")) {
        openIframe('GDRP.html');
    } 
    // 2. ПЕРЕВІРКА НА 11 ЛВЛ ТАНКІВ
    else if (queryInput.includes("11") || queryInput.includes("оновлен") || queryInput.includes("maus") || queryInput.includes("маус") || queryInput.includes("taschenratte")) {
        openSite('maus');
    } 
    // 3. ПЕРЕВІРКА НА ФАКТИ ПРО ЗАЗДАТЕЛЯ
    else if (queryInput.includes("факт") || queryInput.includes("заздател") || queryInput.includes("автор") || queryInput.includes("розроб") || queryInput.includes("t22") || queryInput.includes("інтерес")) {
        openSite('t22');
    } 
    // 4. ПЕРЕВІРКА НА СВІТЛО ТА ОБСТРІЛИ (Нова логіка)
    else if (queryInput.includes("світло") || queryInput.includes("обстріл") || queryInput.includes("ремонт") || queryInput.includes("напруг") || queryInput.includes("електр") || queryInput.includes("пк")) {
        openSite('acid');
    } 
    // 5. ПОМИЛКА
    else {
        errorDiv.style.display = "block";
    }
}

// ========================================== //
//      ФУНКЦІЇ ВІДКРИТТЯ СТОРІНОК ТА ФРЕЙМУ  //
// ========================================== //

function openIframe(fileName) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    hideAllPages();
    
    const iframe = document.getElementById('browser-iframe');
    iframe.src = "./" + fileName; 
    document.getElementById('view-container').classList.add('active');
}

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

function goBack() {
    hideAllPages();
    document.getElementById('browser-iframe').src = ""; 
    document.getElementById('main-search').style.display = 'block'; 
    document.getElementById('query').value = ""; 
}

document.getElementById('query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        startSearch();
    }
});
