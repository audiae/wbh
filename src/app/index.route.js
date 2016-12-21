(function() {
  'use strict';

  angular
    .module('whistleblowEr')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('report',{
        url: '/report',
        templateUrl: 'app/components/report/report.html',
        controller: 'ReportController',
        controllerAs: 'report'
      })

      .state('other',{
        url: '/other',
        templateUrl: 'app/components/report/report.other.html'
      })

      .state('user',{
        url: '/user',
        templateUrl: 'app/components/user/userview.html'
      })

      .state('userreport',{
        url: '/userreport',
        templateUrl: 'app/components/user/userreport.html'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
