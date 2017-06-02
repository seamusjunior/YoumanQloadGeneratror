var config = function ($stateProvider,  $urlRouterProvider) {

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        controller: function ($rootScope) {
            var vm = this;
            vm.isAuthenticated = $rootScope.isAuthenticated;
        },
        template: '<h1>Home</h1><h3>{{vm.isAuthenticated}}</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);   

    $urlRouterProvider.otherwise('/home');
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module("dfdg").config(config);
