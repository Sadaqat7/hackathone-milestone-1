var button = document.getElementById('toggle-skills');
var education = document.getElementById('Education');
button.addEventListener('click', function () {
    if (education.style.display === 'none') {
        education.style.display = 'block';
    }
    else {
        education.style.display = 'none';
    }
});
