(function() {
  'use strict';

  angular
    .module('giveItStyle')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
