var reloadPageLink = document.getElementById('reloadPageLink');

reloadPageLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    
    location.reload();
});