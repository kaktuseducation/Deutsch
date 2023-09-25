var ITEMS = document.querySelectorAll('.item');
var IDS = [];

for (var i = 0; i < ITEMS.length; i++) {
    IDS.push(ITEMS[i].id);
}
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
        var listItem = document.createElement('li');
        listItem.textContent = IDS[i];

        listItem.style.fontFamily = 'gotic';
        listItem.style.fontSize = '35px';
        listItem.style.letterSpacing = '2px';
        listItem.style.lineHeight = 1.5;

        list.appendChild(listItem);
    }

    if (IDS.length == 0){
        document.location='..//test.html';
    } 
}

/////////////////////////////////////////////////////////////////////////
dict = {
    'book': [0,102],
    'chips': [200,200]
}

function positions(dict)
{

}

