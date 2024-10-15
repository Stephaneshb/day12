document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        const lines = content.split('\n');
        let displayContent = 'Parsed Data:\n\n';
        lines.forEach((line, index) => {
            const cleanedLine = line.trim();
            if (index === 0 || cleanedLine === '') {
                return;
            }
            const columns = cleanedLine.split(',');
            if (columns.length > 1) {
                const year = columns[0];
                const januaryTemp = columns[1];
                if (!isNaN(year) && januaryTemp) {
                    displayContent += `Year: ${year}, January Temperature: ${januaryTemp}\n`;
                }
            }
        });
        document.getElementById('data-display').textContent = displayContent;
    };
    reader.readAsText(file);
});
