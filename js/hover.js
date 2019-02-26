 const prev = document.getElementById('previous');
 const next = document.getElementById('next');

    function showMe() {
        prev.style.cursor = 'pointer';
        next.style.cursor = 'pointer';
}

    document.addEventListener("DOMContentLoaded", function() {
        prev.addEventListener('mouseover', showMe);
        next.addEventListener('mouseover', showMe);
});