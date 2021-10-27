document.addEventListener('DOMContentLoaded', function() {
    const close = function() {
        this.closest('.p-feedback').style.display = 'none';
    }
     
    let elements = document.querySelectorAll('.popup-close');
     
    for (let e of elements) {
        e.addEventListener('click', close);
    }
});