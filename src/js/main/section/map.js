if(document.getElementById('map')) {
    setTimeout(
        function tick() {
            
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center:[55.751898, 37.585799],
                zoom: 16,
                controls: ['zoomControl'],
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.751898, 37.585799], {}, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'images/map/geo.png',
                iconImageSize: [42, 54],
                iconImageOffset: [-21, -54],
            });
        
        myMap.geoObjects.add(myPlacemarkWithContent);
    });

    },1000
    );    
}
