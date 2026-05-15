function startSearch() {
    const queryInput = document.getElementById('query').value.trim().toLowerCase();
    const errorDiv = document.getElementById('search-error');
    
    if (queryInput === "") { 
        errorDiv.style.display = "none"; 
        return; 
    }

    // Система пошукових запитів
    if (queryInput.includes("gdps") || queryInput.includes("kocmoc") || queryInput.includes("geometry") || queryInput.includes("nanste")) {
        openSite('gdps.html');
    } else if (queryInput.includes("maus") || queryInput.includes("taschenratte") || queryInput.includes("маус")) {
        openSite('maus.html');
    } else if (queryInput.includes("t22") || queryInput.includes("т-22") || queryInput.includes("казик")) {
        openSite('t22.html');
    } else if (queryInput.includes("acid") || queryInput.includes("світло") || queryInput.includes("пк")) {
        openSite('acid.html');
    } else {
        errorDiv.style.display = "block";
    }
}

function openSite(fileName) {
    document.getElementById('main-search').style.display = 'none';
    document.getElementById('search-error').style.display = 'none';
    
    const iframe = document.getElementById('browser-iframe');
    iframe.src = fileName; 
    
    document.getElementById('view-container').classList.add('active');
}

function goBack() {
    document.getElementById('view-container').classList.remove('active');
    document.getElementById('browser-iframe').src = ""; 
    document.getElementById('main-search').style.display = 'block';
    document.getElementById('query').value = ""; 
}

// Пошук за натисканням клавіші Enter
document.getElementById('query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') { 
        startSearch(); 
    }
});