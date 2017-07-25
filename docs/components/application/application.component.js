
function AppController() {
    this.query = '';
}


angular.module('app')
.component('app', {
    templateUrl: '/docs/components/application/application.component.html',
    controller: AppController
});