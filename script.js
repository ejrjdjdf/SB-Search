// ========================================== //
//       ГОЛОВНА ЛОГІКА ПОШУКУ (KOCMOC)       //
// ========================================== //

function startSearch() {
    // Беремо текст із пошуку та чистимо його
    const queryOriginal = document.getElementById('query').value.trim();
    const queryInput = queryOriginal.toLowerCase();
    const errorDiv = document.getElementById('search-error');
    
    if (queryInput === "") {
        errorDiv.style.display = "none";
        return;
    }

    // 1. ПЕРЕВІРКА НА GDPS
    if (queryInput.includes("gdps") || queryInput.includes("kocmoc") || queryInput.includes("geometry") || queryInput.includes("gdrp") || queryInput.includes("nanste")) {
        openIframe('GDRP.html');
    } 
    // 2. ПЕРЕВІРКА НА ТАЧКИ 2005 (NFS)
    else if (queryInput.includes("тачк") || queryInput.includes("машин") || queryInput.includes("2005") || queryInput.includes("nfs") || queryInput.includes("bmw")) {
        openSite('maus');
    } 
    // 3. ПЕРЕВІРКА НА ЛІТО 2026
    else if (queryInput.includes("літо") || queryInput.includes("лето") || queryInput.includes("2026")) {
        openSite('t22');
    } 
    // 4. ПЕРЕВІРКА НА ТАНКИ
    else if (queryInput.includes("танк") || queryInput.includes("тт") || queryInput.includes("лт") || queryInput.includes("ст") || queryInput.includes("пт")) {
        openSite('acid');
    } 
    // 5. ПЕРЕВІРКА НА ЧІТИ ГД
    else if (queryInput.includes("чіт") || queryInput.includes("чит") || queryInput.includes("спам")) {
        openSite('gd-cheats');
    }
    // 6. ПАСХАЛКА: КОТ ПРОСТО КОТ
    else if (queryInput.includes("кот") || queryInput.includes("кіт") || queryInput.includes("fbi") || queryInput.includes("агент")) {
        openSite('secret-cat');
    }
    // 7. НАЛАШТУВАННЯ ПК
    else if (queryInput.includes("герц") || queryInput.includes("fps") || queryInput.includes("налашт") || queryInput.includes("afterburner") || queryInput.includes("180")) {
        openSite('pc-tuning');
    }
    // 8. ПЛАН НА ЗАВТРА
    else if (queryInput.includes("план") || queryInput.includes("завтра") || queryInput.includes("субот")) {
        openSite('tomorrow-plan');
    }
    
    // ========================================== //
    //  ГЛОБАЛЬНИЙ ІНТЕРНЕТ-ПОШУК (ЯКЩО СЕКРЕТІВ НЕМАЄ) //
    // ========================================== //
    else {
        errorDiv.style.display = "none"; // Ховаємо помилку, бо ми знайшли вихід в інтернет!
        
        // Створюємо посилання на Google з нашим запитом
        // Користувач ввів запит, і його викине на сторінку пошуку Google у новій вкладці
        const googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(queryOriginal);
        
        // Відкриваємо справжній пошук Google
        window.open(googleSearchUrl, '_blank'); 
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
