/**
 * Created by HSommer on 6/2/2017.
 */
angular.module('app')
    .component('icons', {
        templateUrl: '/docs/components/icons/icons.component.html',
        controller: function(ICONS, ICON_INFO, $stateParams) {
            this.icons =  ICONS;
            this.iconsInfo = ICON_INFO;
            this.query = $stateParams.query;
        }

});