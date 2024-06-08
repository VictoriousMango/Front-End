document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-outline-info');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const url = button.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            } else {
                console.log('No URL defined for this button.');
            }
        });
    });
});
