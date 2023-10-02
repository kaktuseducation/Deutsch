localStorage.setItem('ref', 'map.html');

function game(){document.location='plot.html'}
function menu(){document.location='index.html'}
function book(){document.location='plot.html'}
function settings(){document.location='settings.html'}


const SPECIAL = ['Bremen', 'Niedersachsen', 'Schleswig-Holstein', 'Mecklenburg-Vorpommern'];

const map = document.getElementById('interactive-map');
const regions = map.querySelectorAll('path');

LAND_LEVEL = {
    0: [],
    1: ['Bayern']
}

regions.forEach(region => {
    if (LAND_LEVEL[1].includes(region.getAttribute('class'))){
         path.classList.add("done");
    }
    else{
        path.classList.add("usual");
    }
        
    region.addEventListener('click', () => {
        const pathId = region.getAttribute('class');
        localStorage.setItem('land', pathId);
        document.location='land.html';
    });
}); 

// HOVER
function highlightPaths(paths) {
    paths.forEach(path => {
        path.classList.add("hovered");
    });
}
function resetPaths(paths) {
    paths.forEach(path => {
        path.classList.remove("hovered");
    });
}

regions.forEach(path => {
    path.addEventListener('mouseenter', () => {
        path.classList.add("hovered");
    });
    path.addEventListener('mouseleave', () => {
        path.classList.remove("hovered");
    });
});
SPECIAL.forEach(name_id => {
    let land = document.querySelectorAll('.'+ name_id);
    land.forEach(path => {
        path.addEventListener('mouseenter', () => {
            highlightPaths(land);
        });
        path.addEventListener('mouseleave', () => {
            resetPaths(land);
        });
    });
});


// BORDERS
const border = document.getElementById('border');
const borders = border.querySelectorAll('path');
borders.forEach(brd => {
    brd.setAttribute('fill', 'none');
    brd.setAttribute('stroke', 'black');
    brd.setAttribute('stroke-width', '20');
});

// BOOK
var shadowPath = document.getElementById("shadow");
shadowPath.addEventListener("click", book);
