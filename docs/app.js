function AppController($scope, ICONS) {
    $scope.icons = ICONS;
}

angular.module('app', ['ng-ias'])
    .controller('AppController', AppController);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});

