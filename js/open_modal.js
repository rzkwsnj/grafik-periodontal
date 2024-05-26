// Analyse Ã¶ffnen
function open_analysis() {
    var modal_analysis = document.getElementById("modal_analysis");
    
    document.getElementById('modal_analysis').style.display = 'block';

    window.onclick = function(event_analysis) {
        if (event_analysis.target == modal_analysis) {
            document.getElementById('modal_analysis').style.display = 'none';
        }
    }
}

// Analyse schliessen
function close_analysis() {
    document.getElementById('modal_analysis').style.display = 'none';
}

// Einstellungen Ã¶ffnen
function open_settings() {
    var modal_settings = document.getElementById("modal_settings");
    
    document.getElementById('modal_settings').style.display = 'block';

    window.onclick = function(event_settings) {
        if (event_settings.target == modal_settings) {
            document.getElementById('modal_settings').style.display = 'none';
        }
    }
}

// Einstellungen schliessen
function close_settings() {
    document.getElementById('modal_settings').style.display = 'none';
}