/*global require*/
/*jshint laxcomma:true*/
(function () {
  'use strict';

  require([
    'controllers/appcontroller',
    'services/logger',
    'services/mapservices',
    'dojo/domReady!'
  ], function (appCtrl, logger, mapServices) {

    window._LOGGING_ENABLED = true;

    logger.debug('DEBUG - Starting application');
    appCtrl.init({
      elem: 'map-div',
      mapOptions: {
        basemap: 'gray',
        center: [-118.241,34.0542],
        zoom: 12
      },
      layers: mapServices.loadServices()
    });

  });

})();
