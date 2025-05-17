const elMap = document.getElementById('js-contactsMap');

initMap();


async function initMap() {
   await ymaps3.ready;

   const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

   const elMap = document.getElementById('js-contactsMap');
   
   if (elMap) {
      const map = new YMap(
         elMap,
         {
            location: {
               center: [84.962740, 56.493850],
               zoom: 15,
            }
         }
      );

      // Cлой с дорогами и зданиями
      map.addChild(new YMapDefaultSchemeLayer());

      // Cлой для маркеров
      map.addChild(new YMapDefaultFeaturesLayer());

      const content = document.createElement('section');

      // Инициализация маркера
      const marker = new YMapMarker(
         {
            coordinates: [84.962740, 56.493850],
         },
         content
      );

      // Добавление маркера на карту
      map.addChild(marker);

      // Произвольная HTML-разметка внутрь содержимого маркера
      content.innerHTML = '<svg class="contacts__map-svg"><use use xlink: href = "assets/icons/symbols.svg#logo_map" ></use></svg>';
   }
   

}