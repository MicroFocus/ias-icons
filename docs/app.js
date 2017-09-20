angular
    .module('app', [ 'ng-ias', 'ias.icons', 'ui.router' ])
    .config(function($stateProvider, $urlServiceProvider) {
        $urlServiceProvider.rules.otherwise({state: 'app.icons.table'});

        $stateProvider.state('app', {
            url: '/app',
            component: 'app',
            abstract: true
        });

        $stateProvider.state('app.icons', {
            url: '/icons?query',
            component: 'icons',
            abstract: true
        });

        $stateProvider.state('app.icons.table', {
            url: '/table',
            templateUrl: 'components/icons/icons-table.component.html'
        });

        $stateProvider.state('app.icons.tile', {
            url: '/tile',
            templateUrl: 'components/icons/icons-tile.component.html'
        });

    });


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});


