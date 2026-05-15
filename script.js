// ========================================== //
//       ГОЛОВНА ЛОГІКА ПОШУКУ (KOCMOC)       //
// ========================================== //

function startSearch() {
    // Беремо текст із пошукового рядка, прибираємо зайві пробіли і переводимо в малі літери
    const queryInput = document.getElementById('query').value.trim().toLowerCase();
    const errorDiv = document.getElementById('search-error');
    
    // Якщо в інпуті пусто, просто ховаємо помилку і нічого не робимо
    if (queryInput === "") {
        errorDiv.style.display = "none";
        return;
    }

    // 1. ПЕРЕВІРКА НА GDPS (Твій крутий фіолетовий сайт GDRP.html)
    if (queryInput.includes("gdps") || queryInput.includes("kocmoc") || queryInput.includes("geometry") || queryInput.includes("gdrp") || queryInput.includes("nanste")) {
        openIframe('GDRP.html');
    } 
    // 2. ПЕРЕВІРКА НА 11 ЛВЛ ТАНКІВ (оновлення від ВГ)
    else if (queryInput.includes("11") || queryInput.includes("оновлен") || queryInput.includes("maus") || queryInput.includes("маус") || queryInput.includes("taschenratte")) {
        openSite('maus');
    } 
    // 3. ПЕРЕВІРКА НА ФАКТИ ПРО ЗАЗДАТЕЛЯ (про тебе)
    else if (queryInput.includes("факт") || queryInput.includes("заздател") || queryInput.includes("автор") || queryInput.includes("розроб") || queryInput.includes("t22")) {
        openSite('t22');
    } 
    // 4. ПЕРЕВІРКА НА КИСЛОТУ ТА ПК (якщо лагає залізо)
    else if (queryInput.includes("acid") || queryInput.includes("світло") || queryInput.includes("сульфурик") || queryInput.includes("пк")) {
        openSite('acid');
    } 
    // 5. ЯКЩО НІЧОГО НЕ ЗНАЙДЕНО — ВИДАЄМО ПОМИЛКУ
    else {
        errorDiv.style.display = "block";
    }
}

// ========================================== //
//      ФУНКЦІЇ ВІДКРИТТЯ СТОРІНОК ТА ФРЕЙМУ  //
// ========================================== //

// Функція для запуску сайту GDRP.html всередині великого вікна фрейму
function openIframe(fileName) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    hideAllPages(); // Чистимо екран від інших сторінок перед запуском
    
    const iframe = document.getElementById('browser-iframe');
    iframe.src = "./" + fileName; // Вставляємо шлях до твоєї сторінки
    
    document.getElementById('view-container').classList.add('active');
}

// Функція для відкриття внутрішніх текстових сторінок (11 лвл, факти, кислота)
function openSite(siteId) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    hideAllPages(); // Чистимо екран від інших сторінок
    
    document.getElementById('site-' + siteId).classList.add('active');
}

// Функція, яка закриває абсолютно всі відкриті вікна під нуль
function hideAllPages() {
    const pages = document.querySelectorAll('.site-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('view-container').classList.remove('active');
}

// Потужна кнопка НАЗАД (Скидає все назад до головного пошуковика)
function goBack() {
    hideAllPages();
    document.getElementById('browser-iframe').src = ""; // Очищаємо фрейм, щоб не лагав і не жер пам'ять
    document.getElementById('main-search').style.display = 'block'; // Повертаємо лого і інпут
    document.getElementById('query').value = ""; // Очищаємо пошуковий рядок
}

// Слухач подій: якщо користувач натискає Enter у полі вводу — запускається пошук
document.getElementById('query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        startSearch();
    }
});
