(() => {
    const observerOptions = {
        rootMargin: '1000px 0px 0px 0px',
        threshold: 0.7
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, observerOptions);
    document.querySelectorAll('article').forEach(el => obs.observe(el));
})();
//map:
mapboxgl.accessToken = "pk.eyJ1IjoiZGs0MTMiLCJhIjoiY2xmN2I0Z3ppMDBwZjN2cDcxMXBpeW92MyJ9.P4O2mbHyviXylMkyk1C3zw";
let loc = [14.432920703901994, 50.08725860834356];
let map = new mapboxgl.Map({
    container: 'map', // container ID
    center: loc, // starting position [lng, lat]
    zoom: 18, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';


let popup = new mapboxgl.Popup({ offset: 70 })
    .setHTML('<div id = "PopUp">Conference location:<br>PCU Hybernská</div>');

new mapboxgl.Marker(marker, { anchor: 'bottom' })
    .setLngLat(loc)
    .addTo(map)
    .setPopup(popup);

//accordion
const accHeaders = document.querySelectorAll(".accordion-header");

accHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
        const content = this.parentNode.nextElementSibling;
        this.querySelector(".arrow").classList.toggle("rotate");
        if (content.style.display === "table-row") {
            content.style.display = "none";
        } else {
            content.style.display = "table-row";
        }
    });
});

function resizeElementsInList(){
    const list = document.querySelectorAll("#TimetableTable tr td");
    if (window.innerWidth < 900) {
        list.forEach(function(el) {
            el.innerHTML = el.innerHTML.replace(": ", ":<br>");
        });
    }
    else {
        list.forEach(function(el) {
            el.innerHTML = el.innerHTML.replace(":<br>", ": ");
        });
    }
    }
    window.addEventListener("resize", resizeElementsInList);



