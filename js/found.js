const THINGS = document.getElementById('things');
const PANEL = document.querySelector('.words');
var origin = document.getElementById('origin');
var hide = document.querySelector('.panel');
var board = origin.querySelector('.origin_image');
var about = document.querySelector('.about');
var end_lvl = document.querySelector('.end');

TEXT = "ghvh kjiljojoi oijoijioj jiiiojio joiojoijpk[ 'p'lkpok [pk[kpojioh hiuiuhui k;lk p[[p popuouoi pl'pl[pl opoiio [ppjoij hj lknfl;hborihgoir; lkjfboifhdb";
about.textContent = TEXT;

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
        origin.style.opacity = '1';
        origin.style.zIndex = '4';
        hide.style.opacity = '0';
        
        
        window.addEventListener('resize', set_about);
        window.addEventListener('resize', size);
        about.style.display = "flex";
        about.style.zIndex = '4';
        about.style.opacity = '1';
        end_lvl.style.display = "flex";
        end_lvl.style.zIndex = '4';
        end_lvl.style.opacity = '1';
        size();
        set_about();

    } 
}

function set_about(){
    var svgBounds = board.getBoundingClientRect();
    about.style.width = svgBounds.left + 'px';
    end_lvl.style.width = svgBounds.left + 'px';
}

function set_list(){
    var labels = document.querySelectorAll('.label');
    labels.forEach(function(label) {
        let size = Math.min(PANEL.offsetHeight/ALL/2.2, 1.5*PANEL.offsetWidth/max_lenght);
        label.style.fontSize = size + 'px';
        label.style.lineHeight = 1.2;
    });
}
set_list();
window.addEventListener('resize', set_list);



function size(){
    let max_length = TEXT.length;
    let width = 0.74*about.offsetWidth;
    let height = 0.85*about.offsetHeight;
    let size = Math.sqrt(0.7*width * height / max_length);
    let space = 0.1*size;
    about.style.fontSize = size+ 'px';
    about.style.letterSpacing = space + 'px';
    about.style.lineHeight = '1.8';
    end_lvl.style.fontSize = size+ 'px';
}
