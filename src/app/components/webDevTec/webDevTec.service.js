(function() {
  'use strict';

  angular
      .module('whistleblowEr')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Suspicious Activities',
        // 'url': 'https://angularjs.org/',
        'description': 'Something strange in your neighborhood? Contact us now!',
        'logo': 'angular.png'
      },
      {
        'title': 'Vehicle Crime',
        // 'url': 'http://jasmine.github.io/',
        'description': 'Vehicles can make crimes more dangerous.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Drug Trafficking',
        // 'url': 'http://karma-runner.github.io/',
        'description': 'Protect your family by taking drugs away from them.',
        'logo': 'karma.png'
      },
      {
        'title': 'Thefts',
        // 'url': 'https://github.com/angular/protractor',
        'description': 'Protect your assets by reporting thefts in your area.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Terrorism',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Assault',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Possession of Weapons',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'angular.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
