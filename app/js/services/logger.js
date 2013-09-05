/*global window document console define require */
(function() {
  'use strict';

  define([
  ], function() {

    if (!('console' in window)) {
      window._LOGGING_ENABLED = false;
    }

    var cons = window.console;

    return {
      log: function() {
        if (window._LOGGING_ENABLED) {
          cons.log.apply(cons, arguments);
        }
      },
      debug: function() {
        if (window._LOGGING_ENABLED) {
          cons.debug.apply(cons, arguments);
        }
      },
      warn: function() {
        if (window._LOGGING_ENABLED) {
          cons.warn.apply(cons, arguments);
        }
      }
    };

  });

})(this);
