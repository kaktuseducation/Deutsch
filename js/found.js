const THINGS = document.getElementById('things');
const PANEL = document.querySelector('.words');
var origin = document.getElementById('origin');
var hide = document.querySelector('.panel');
var board = origin.querySelector('.origin_image');
var about = document.querySelector('.about');
var end_lvl = document.querySelector('.end');

TEXT = "Hieronymus-im-Gehäus" - ist ein Stich von Albrecht Dürer aus dem Jahr 1514 in Nürnberg. 
Der heilige Hieronymus ist ein Schriftsteller, einer der Lehrer der Kirche. Der Künstler schuf das Bild nicht eines Einsiedlers, sondern eines Wissenschaftlers, der hart in seiner Zelle arbeitet. Der Raum ist von Licht und Komfort durchdrungen. Die gleichmäßigen horizontalen Linien der Komposition unterstreichen die Stimmung des Friedens. Es herrscht eine unerschütterliche Stille. Auf der Schwelle dösen ein Löwe, ein Attribut eines Heiligen, und ein Hund, ein Symbol der Treue. Allerdings tauchen auch hier Symbole auf, die an den Tod erinnern: ein Totenkopf und eine Sanduhr.
Einer Legende zufolge kam Hieronymus zu dem Zeitpunkt, als er im Kloster lebte, ein lahmer Löwe zu ihm. Alle Mönche flohen, und Jerome untersuchte ruhig die schmerzende Pfote des Löwen und zog einen Splitter daraus heraus. Danach wurde der dankbare Löwe sein ständiger Begleiter.
Es lohnt sich, auf das Lichtgefühl zu achten, das die gesamte Komposition durchdringt. Aus dem Fenster links vom Betrachter strömen Lichtstrahlen durch das „Mond“-Glas und symbolisieren „spirituelles Licht“, die Einsicht des Wissenschaftlers.
Interessante Tatsache: Dürer signierte seine Werke mit Initialen in Form eines wunderschönen Autogramms, das er gekonnt in die Komposition des Gemäldes einbezog. Können Sie das Autogramm des großen Meisters finden?
";
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
