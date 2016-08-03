'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('profile',{
      url: '/profile',
      templateUrl: '/templates/profile.html',
      controller: app.Controllers.ProfileController,
      controllerAs: 'vm'
    }).state('Video',{
      url: '/Video',
      templateUrl: '/templates/Video.html',
      controller: app.Controllers.VideoController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
