/*global define*/
(function () {
  'use strict';

  require([
    'controllers/appcontroller',
    'services/logger',
    'dojo/domReady!'
  ], function (appCtrl, logger) {

    window._LOGGING_ENABLED = true;

    logger.debug('DEBUG - Starting application');
    appCtrl.init({
      elem: 'map-div'
    });

  });

})();
