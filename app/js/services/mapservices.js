/**
 * @author rrubalcava@lacsd.org (Rene Rubalcava)
 */
/*global window document console define require */
(function() {
  'use strict';

  define([
    'esri/layers/FeatureLayer'
  ], function(FeatureLayer) {

    function _loadServices(config) {
      var layers = [];

      layers.push(new FeatureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CensusLaborDemo/FeatureServer/1'));

      return layers;
    }

    return {
      loadServices: _loadServices
    };

  });

})(this);
