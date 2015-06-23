(function() {
  'use strict';

  angular
    .module('giveItStyle')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(LETTERS) {
    var vm = this;

    init();

    vm.dropComplete = function row1DropComplete(index, obj /*,evt*/) {
      // find letter of target by looking in current list at drop position
      // find dragged index by looking it up using the dropped object
      // swap locations; put dropped item at target location and target letter where drag object started
      var targetLetter = vm.shuffled[index];
      var draggedIndex = vm.shuffled.indexOf(obj);
      vm.shuffled[index] = obj;
      vm.shuffled[draggedIndex] = targetLetter;
      checkForWinner();

      function checkForWinner() {
        if (_.isEqual(vm.shuffled, LETTERS)) {
          // throw alert on next tick so drop happens (letters appear on correct place) before alter modal
          setTimeout(function() {
            alert('WINNER!!!!!!!');
          }, 0);
          vm.won = true;
        }
      }
    };

    vm.replay = init;

    function init() {
      vm.shuffled = _.shuffle(LETTERS);
      vm.won = false;
    }
  }
})();
