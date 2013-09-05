/**
 * @author odoe@odoe.net (Rene Rubalcava)
 */
/*global window, document, console, define, require */
(function () {
  'use strict';

  define([
    'require',
    'controllers/mapcontroller',
    'services/mapservices',
    'services/logger'
  ], function (require, mapController, mapServices, logger) {

    function widgetLoader(widget, data) {
      widget.options = widget.options || {};
      // esri widgets
      if (widget.name === 'geocoder') {
        geocodeLoader(widget, data);
      }
      // Testing a Widget Factory pattern
      if (widget.path) {
        logger.debug('adding widget', widget);
        require([widget.path], function (Widget) {
          if (widget.requireOperational) {
            widget.options.operational = data.operational;
          }
          if (widget.requireMap) {
            widget.options.map = data.map;
          }
          Widget.create(widget.options);
        });
      }
    }

    function _start(config) {
      config.layers = mapServices.loadServices();
      config.elem = 'map-div';
      mapController
        .start(config)
        .then(function(map) {
          logger.debug('map has been loaded', map);
        });
    }

    return {
      start: _start
    };

  });
}).call(this);
