(function() {
  'use strict';

  angular
    .module('giveItStyle')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
