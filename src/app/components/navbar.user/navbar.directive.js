(function() {
  'use strict';

  angular
    .module('whistleblowEr')
    .directive('acmeNavbarusr', acmeNavbarusr);

  /** @ngInject */
  function acmeNavbarusr() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar.user/navbarusr.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarusrController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarusrController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
