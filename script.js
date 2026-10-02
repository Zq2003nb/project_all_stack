function realtime() {
    document.getElementById('time').innerText = new Date().toLocaleString();
}

realtime();
setInterval(realtime, 1000);