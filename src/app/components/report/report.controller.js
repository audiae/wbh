(function () {
    'use strict';

    angular
        .module('whistleblowEr')
        .controller('ReportController', ReportController);

    /** @ngInject */
    function ReportController() {
        var vm = this;

        vm.pageClass = 'page-2way';
        
        vm.firstname = "John";
        vm.lastname = "Doe";


    }
})();
