(function() {
  'use strict';

  angular
    .module('whistleblowEr')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.crimes = [];
    vm.classAnimation = '';
    vm.creationDate = 1482222932723;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.crimes = webDevTec.getTec();

      angular.forEach(vm.crimes, function(crime) {
        crime.rank = Math.random();
      });
    }
  }
})();
