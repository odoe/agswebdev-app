/*global window, document, console, define, require */
(function () {
  'use strict';

  define([
    'dojo/on',
    'dojo/Deferred',
    'esri/map'
  ], function (on, Deferred, Map) {

    function mapOptions() {
      return {
        basemap: 'gray',
        center: [-118.20959546463835,34.28548773859569],
        zoom: 10
      };
    }

    function _start(params) {

      var deferred = new Deferred(),
          map = new Map(params.elem, mapOptions());

      on.once(map, 'layers-add-result', function(layers) {
        deferred.resolve(map);
      });

      // TODO add layers from params
      map.addLayers(params.layers);

      return deferred.promise;
    }


    return {
      start: _start
    };

  });
}).call(this);
