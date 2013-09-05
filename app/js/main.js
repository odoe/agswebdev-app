/**
 * @author rrubalcava@odoe.net (Rene Rubalcava)
 */
/*global define, require, location*/
(function () {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/), locationPath = location.pathname.replace(pathRX, '');

  require({
    async: true,
    aliases: [
      ['text', 'dojo/text']
    ],
    packages: [
      {
      name: 'controllers',
      location: locationPath + 'js/controllers'
    },
    {
      name: 'services',
      location: locationPath + 'js/services'
    },
    {
      name: 'helpers',
      location: locationPath + 'js/helpers'
    },
    {
      name: 'widgets',
      location: locationPath + 'js/widgets'
    }
    ]
  });

  require([
    'dojo/ready',
    'esri/config',
    'esri/request',
    'controllers/appcontroller',
    'services/logger'
  ], function (ready, config, esriRequest, AppCtrl, logger) {

    window._LOGGING_ENABLED = true;

    function onConfigSuccess(response) {
      delete response._ssl;
      if ('proxy' in response) {
        config.defaults.io.proxyUrl = response.proxy.url;
        config.defaults.io.alwaysUseProxy = response.proxy.alwaysUseProxy;
      }

      AppCtrl.start(response);
    }

    function onConfigError(error) {
      logger.warn('ERROR - Loading config file:', error);
    }

    function requestParams() {
      return {
        url: 'config.json',
        handlesAs: 'json'
      };
    }

    ready(function () {
      // Read the config from a url
      //esriRequest(requestParams()).then(onConfigSuccess, onConfigError);
      logger.debug('DEBUG - Starting application');
      AppCtrl.start({});
    });

  });

}).call(this);
