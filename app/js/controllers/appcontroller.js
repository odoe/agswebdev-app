/*global define */
(function () {
  'use strict';

  define([
    'require',
    'controllers/mapcontroller',
    'services/mapservices',
    'widgets/edit/editTools',
    'services/logger'
  ], function (require, MapController, mapServices, EditTools, logger) {

    function mapLoaded(map) {
      logger.debug('map has been loaded', map);
      var editTools = new EditTools({
        map: map
      }, 'map-tools');
    }

    function _init(config) {
      config.layers = mapServices.loadServices();

      var mapCtrl = new MapController(config);

      mapCtrl.load().then(mapLoaded);
    }

    return {
      init: _init
    };

  });
})();
