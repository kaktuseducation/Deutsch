const THINGS = document.getElementById('things');
const PANEL = document.querySelector('.words');

var ITEMS = THINGS.querySelectorAll('image');
var IDS = [];

var max_lenght = 0;
for (var i = 0; i < ITEMS.length; i++) {
    IDS.push(ITEMS[i].id);
    if(ITEMS[i].id.length > max_lenght){
        max_lenght = ITEMS[i].id.length;
    }
}
const ALL = IDS.length;

update();

ITEMS.forEach(function(item) {
    item.addEventListener('click', found);
});

function found(event) {
    var item = event.target
    item.style.display = 'none'

    var index = IDS.indexOf(item.id);
    IDS.splice(index, 1);

    update();  
}

function update() {
    var list = document.getElementById('list');

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (var i = 0; i < IDS.length; i++) {
        var listItem = document.createElement('p');
        listItem.classList.add('label')
        listItem.textContent = IDS[i];
        listItem.style.fontFamily = 'gotic';
        list.appendChild(listItem);
    }

    set_list();

    if (IDS.length == 0){
        document.location='..//test.html';
    } 
}


function set_list(){
    var labels = document.querySelectorAll('.label');
    labels.forEach(function(label) {
        size = Math.min(PANEL.offsetHeight/ALL/2.2, 1.5*PANEL.offsetWidth/max_lenght);
        label.style.fontSize = size + 'px';
        label.style.lineHeight = 1.2;
    });
}
set_list();
window.addEventListener('resize', set_list);
