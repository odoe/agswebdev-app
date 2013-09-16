/*global define */
(function () {
  'use strict';

  define([
    'controllers/mapcontroller',
    'widgets/edit/editTools',
    'services/logger'
  ], function (MapController, EditTools, logger) {

    function mapLoaded(map) {
      logger.debug('map has been loaded', map);
      /*
      var editTools = new EditTools({
        map: map
      }, 'map-tools');
     */
    }

    function _init(config) {

      var mapCtrl = new MapController(config);

      mapCtrl.load().then(mapLoaded);
    }

    return {
      init: _init
    };

  });
})();
