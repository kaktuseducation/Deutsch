localStorage.setItem('ref', 'map.html');
            function game(){document.location='plot.html'}
            function menu(){document.location='index.html'}
            function book(){document.location='plot.html'}
            function settings(){document.location='settings.html'}


            const SPECIAL = ['Bremen', 'Niedersachsen', 'Schleswig-Holstein', 'Mecklenburg-Vorpommern'];

            const map = document.getElementById('interactive-map');
            const regions = map.querySelectorAll('path');

            regions.forEach(region => {
                region.addEventListener('click', () => {
                    const pathId = region.getAttribute('class');
                    localStorage.setItem('land', pathId);
                    document.location='land.html';
                });
            }); 


            SPECIAL.forEach(name_id => {
                let land = document.querySelectorAll('.'+ name_id);
                console.log(name_id, land)
                land.forEach(path => {
                    path.addEventListener('mouseenter', () => {
                        highlightPaths(land);
                    });
                    path.addEventListener('mouseleave', () => {
                        resetPaths(land);
                    });
                });
            });

            // const Bremen = document.querySelectorAll('.Bremen');
            // Bremen.forEach(path => {
            //     path.addEventListener('mouseenter', () => {
            //         highlightPaths(Bremen);
            //     });
            //     path.addEventListener('mouseleave', () => {
            //         resetPaths(Bremen);
            //     });
            // });
            
            // const Niedersachsen = document.querySelectorAll('.Niedersachsen');
            // const Schleswig_Holstein = document.querySelectorAll('.Schleswig-Holstein');
            // const Mecklenburg_Vorpommern = document.querySelectorAll('.Mecklenburg-Vorpommern');
            
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

            // Niedersachsen.forEach(function(element) {
            //     element.classList.add("done");
            // });

            // Mecklenburg_Vorpommern.forEach(function(element) {
            //     element.classList.add("current");
            // });

            regions.forEach(path => {
                path.addEventListener('mouseenter', () => {
                    path.classList.add("hovered");
                });
                path.addEventListener('mouseleave', () => {
                    path.classList.remove("hovered");
                });
            });
            
            

            // Niedersachsen.forEach(path => {
            //     path.addEventListener('mouseenter', () => {
            //         highlightPaths(Niedersachsen);
            //     });
            //     path.addEventListener('mouseleave', () => {
            //         resetPaths(Niedersachsen);
            //     });
            // });

            //  Schleswig_Holstein.forEach(path => {
            //     path.addEventListener('mouseenter', () => {
            //         highlightPaths(Schleswig_Holstein);
            //     });
            //     path.addEventListener('mouseleave', () => {
            //         resetPaths(Schleswig_Holstein);
            //     });
            // });

            //  Mecklenburg_Vorpommern.forEach(path => {
            //     path.addEventListener('mouseenter', () => {
            //         highlightPaths(Mecklenburg_Vorpommern);
            //     });
            //     path.addEventListener('mouseleave', () => {
            //         resetPaths(Mecklenburg_Vorpommern);
            //     });
            // });
            
            const border = document.getElementById('border');
            const borders = border.querySelectorAll('path');
            borders.forEach(brd => {
                brd.setAttribute('fill', 'none');
                brd.setAttribute('stroke', 'black');
                brd.setAttribute('stroke-width', '20');
            });

            var shadowPath = document.getElementById("shadow");
            shadowPath.addEventListener("click", book);
