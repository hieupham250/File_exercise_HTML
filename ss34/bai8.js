let deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(function(button) {
    button.onclick = function() {
        let row = this.parentNode.parentNode; 
        console.log(row);
        row.parentNode.removeChild(row);
    };
});