
function AppController() {
    this.query = '';
}


angular.module('app')
.component('app', {
    templateUrl: 'components/application/application.component.html',
    controller: AppController
});