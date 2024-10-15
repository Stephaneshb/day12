document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        document.getElementById('data-display').textContent = content;
    };
    reader.readAsText(file);
});
