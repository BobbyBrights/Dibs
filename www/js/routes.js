angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.donate', {
    url: '/page1',
    views: {
      'tab2': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('tabsController.worker', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/worker.html',
        controller: 'workerCtrl'
      }
    }
  })

  .state('tabsController.workerHome', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/workerHome.html',
        controller: 'workerCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })



$urlRouterProvider.otherwise('/page1/page1')



});
