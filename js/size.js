function set_fontsize(){
    var buttons = document.querySelectorAll('.btn');
    var height = buttons[0].offsetHeight;
    var size = Math.floor(height * 0.6) + 'px';
    console.log(size)
    buttons.forEach(function (button) {
        button.style.fontSize = size;
    });
}

window.addEventListener('resize', set_fontsize);