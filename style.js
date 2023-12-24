

function changeImage(newSrc) {
    var image = document.getElementById("myImage");
    setTimeout(function() {
        image.src = newSrc;
    }, 200);
    
}

function resetImage(originalSrc) {
    var image = document.getElementById("myImage");
    setTimeout(function() {
        image.src = originalSrc;
    }, 400);
}
