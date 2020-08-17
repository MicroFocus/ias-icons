/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var accordion_component_1 = __webpack_require__(2);
	var autocomplete_directive_1 = __webpack_require__(5);
	var avatar_component_1 = __webpack_require__(6);
	var button_component_1 = __webpack_require__(8);
	var date_picker_component_1 = __webpack_require__(10);
	var dialog_service_1 = __webpack_require__(12);
	var icon_directive_1 = __webpack_require__(13);
	var menu_directive_1 = __webpack_require__(15);
	var search_box_component_1 = __webpack_require__(16);
	var side_nav_directive_1 = __webpack_require__(18);
	var tabset_directive_1 = __webpack_require__(20);
	var tile_component_1 = __webpack_require__(21);
	var sort_directive_1 = __webpack_require__(23);
	var toggle_directive_1 = __webpack_require__(24);
	var toggle_service_1 = __webpack_require__(25);
	var validator_directives_1 = __webpack_require__(26);
	angular_1.module('ng-ias', [])
	    .constant('MENU_MARGIN', 24)
	    .directive('iasAccordion', accordion_component_1.AccordionDirective)
	    .directive('iasAccordionItem', accordion_component_1.AccordionItemDirective)
	    .directive('iasAccordionHeader', accordion_component_1.AccordionHeaderDirective)
	    .directive('iasAutocomplete', autocomplete_directive_1.default)
	    .directive('iasAvatar', avatar_component_1.default)
	    .directive('iasButton', button_component_1.default)
	    .directive('iasDatePicker', date_picker_component_1.default)
	    .directive('iasIcon', icon_directive_1.default)
	    .directive('iasMenu', menu_directive_1.default)
	    .directive('iasSearchBox', search_box_component_1.default)
	    .directive('iasSideNav', side_nav_directive_1.default)
	    .directive('iasTabPane', tabset_directive_1.default)
	    .directive('iasTile', tile_component_1.default)
	    .directive('iasToggle', toggle_directive_1.ToggleDirective)
	    .directive('iasSort', sort_directive_1.SortDirective)
	    .directive('iasSortOn', sort_directive_1.SortOnDirective)
	    .directive('iasEmail', validator_directives_1.EmailValidatorDirective)
	    .directive('iasMatches', validator_directives_1.MatchesValidatorDirective)
	    .directive('iasPassword', validator_directives_1.PasswordValidatorDirective)
	    .service('IasDialogService', dialog_service_1.default)
	    .service('IasToggleService', toggle_service_1.default);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var accordionHeaderTemplateUrl = __webpack_require__(3);
	var accordionItemTemplateUrl = __webpack_require__(4);
	function AccordionDirective() {
	    return {
	        restrict: 'E',
	        template: '<div class="ias-accordion-group" ng-transclude></div>',
	        transclude: true,
	        replace: true
	    };
	}
	exports.AccordionDirective = AccordionDirective;
	var AccordionItemController = (function () {
	    function AccordionItemController($element, toggleService) {
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	    }
	    AccordionItemController.prototype.$onInit = function () {
	        this.toggleService.register(this);
	        if (this.toggleStartOpen) {
	            this.toggleService.showComponent(this.name);
	        }
	    };
	    AccordionItemController.prototype.hide = function () {
	        this.open = false;
	        this.$element.removeClass('ias-open');
	    };
	    AccordionItemController.prototype.show = function (element) {
	        this.open = true;
	        this.$element.addClass('ias-open');
	    };
	    return AccordionItemController;
	}());
	AccordionItemController.$inject = ['$element', 'IasToggleService'];
	function AccordionItemDirective() {
	    return {
	        bindToController: true,
	        controller: AccordionItemController,
	        restrict: 'E',
	        scope: {
	            name: '@',
	            toggleStartOpen: '<',
	            toggleGroup: '@',
	            toggleMutexGroup: '@'
	        },
	        templateUrl: accordionItemTemplateUrl,
	        transclude: true,
	        replace: true
	    };
	}
	exports.AccordionItemDirective = AccordionItemDirective;
	function AccordionHeaderDirective() {
	    return {
	        link: function (scope, element, attributes, controller) {
	            scope['isOpen'] = function () { return controller.open; };
	        },
	        restrict: 'E',
	        templateUrl: accordionHeaderTemplateUrl,
	        transclude: true,
	        replace: true,
	        require: '^iasAccordionItem'
	    };
	}
	exports.AccordionHeaderDirective = AccordionHeaderDirective;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var path = 'components/accordion/accordion-header.component.html';
	var html = "<div class=\"ias-accordion-header\" tabindex=\"0\">\r\n    <div class=\"ias-accordion-title\" ng-transclude></div>\r\n    <span class=\"ias-fill\"></span>\r\n    <i ng-if=\"!isOpen()\" class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\r\n    <i ng-if=\"isOpen()\" class=\"ias-icon ias-icon-up_thin ias-accordion-icon-toggle\"></i>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var path = 'components/accordion/accordion-item.component.html';
	var html = "<div class=\"ias-accordion\" ng-transclude>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var AutocompleteController = (function () {
	    function AutocompleteController($element, $scope) {
	        this.$element = $element;
	        this.$scope = $scope;
	        this.focusedIndex = null;
	        this.open = false;
	    }
	    AutocompleteController.prototype.fetchResults = function (query) {
	        var itemsExpr = this.itemsExpr.split(/ in /i)[1];
	        var items = this.$scope.$parent.$eval(itemsExpr, { $query: query });
	        if (angular_1.isArray(items)) {
	            this.handleResults(items);
	        }
	        else if (!!items.then) {
	            items.then(this.handleResults.bind(this));
	        }
	    };
	    AutocompleteController.prototype.handleResults = function (items) {
	        this.results = items;
	        if (!items || !items.length) {
	            this.hide();
	        }
	        else {
	            this.show();
	        }
	    };
	    AutocompleteController.prototype.handleKeyDown = function (event) {
	        switch (event.which || event.keyCode) {
	            case 9:
	            case 13:
	                if (this.isResultFocused()) {
	                    event.preventDefault();
	                    this.handleResultClick(this.results[this.focusedIndex]);
	                }
	                break;
	            case 27:
	                if (this.isResultFocused()) {
	                    this.$element.find('input')[0].focus();
	                    this.focusedIndex = null;
	                }
	                if (!this.searchText) {
	                    this.hide();
	                }
	                break;
	            case 38:
	                this.focusPrevResult();
	                break;
	            case 40:
	                this.focusNextResult();
	                break;
	        }
	    };
	    AutocompleteController.prototype.handleResultClick = function (item) {
	        this.$element.find('input')[0].focus();
	        if (this.onItemSelected) {
	            this.onItemSelected({ $item: item });
	        }
	        this.focusedIndex = null;
	    };
	    AutocompleteController.prototype.isResultFocused = function () {
	        return this.focusedIndex !== null;
	    };
	    AutocompleteController.prototype.focusResult = function (resultIndex) {
	        var results = this.$element[0].querySelectorAll('.ias-result');
	        results[resultIndex].focus();
	    };
	    AutocompleteController.prototype.focusNextResult = function () {
	        if (!this.results || !this.results.length) {
	            return;
	        }
	        if (!this.isResultFocused()) {
	            this.focusedIndex = 0;
	        }
	        else {
	            this.focusedIndex = Math.min(this.results.length - 1, this.focusedIndex + 1);
	        }
	        this.focusResult(this.focusedIndex);
	    };
	    AutocompleteController.prototype.focusPrevResult = function () {
	        if (!this.results || !this.results.length || !this.isResultFocused()) {
	            return;
	        }
	        this.focusedIndex = Math.max(0, this.focusedIndex - 1);
	        this.focusResult(this.focusedIndex);
	    };
	    AutocompleteController.prototype.hide = function () {
	        this.open = false;
	        this.$element.removeClass('ias-open');
	    };
	    AutocompleteController.prototype.show = function (element) {
	        this.open = true;
	        this.$element.addClass('ias-open');
	    };
	    return AutocompleteController;
	}());
	AutocompleteController.$inject = ['$element', '$scope'];
	function AutocompleteDirective() {
	    return {
	        bindToController: true,
	        controller: AutocompleteController,
	        controllerAs: '$ctrl',
	        restrict: 'E',
	        scope: {
	            debounce: '<iasDebounce',
	            itemsExpr: '@iasItems',
	            onItemSelected: '&iasOnItemSelected',
	            placeholder: '@',
	            searchText: '<iasSearchText'
	        },
	        template: function (element, attributes) {
	            var itemParts = attributes['iasItems'].split(/ in /i);
	            return "\n                <div class=\"ias-autocomplete\"\n                        ng-class=\"{'ias-open': $ctrl.open}\" \n                        ng-keydown=\"$ctrl.handleKeyDown($event)\">\n                    <ias-search-box ng-model=\"$ctrl.searchText\"\n                                    ng-model-options=\"{ debounce: $ctrl.debounce || 300 }\"\n                                    ias-on-change=\"$ctrl.fetchResults($text)\"\n                                    placeholder=\"{{$ctrl.placeholder}}\">\n                    </ias-search-box>\n                    <div class=\"ias-results\">\n                        <div class=\"ias-result\" \n                            tabindex=\"0\" \n                            ng-repeat=\"" + itemParts[0] + " in $ctrl.results\"\n                            ng-click=\"$ctrl.handleResultClick(" + itemParts[0] + ")\">" +
	                getItemTemplate() +
	                "</div>\n                    </div>\n                </div>";
	            function getItemTemplate() {
	                var templateElement = element.find('template').detach();
	                if (!templateElement.length) {
	                    return "{{" + itemParts[0] + "}}";
	                }
	                return templateElement.html();
	            }
	        },
	        replace: true
	    };
	}
	exports.default = AutocompleteDirective;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(7);
	var AvatarController = (function () {
	    function AvatarController() {
	    }
	    AvatarController.prototype.getStyle = function () {
	        return { 'background-image': 'url(' + this.imageUrl + ')' };
	    };
	    return AvatarController;
	}());
	function AvatarDirective() {
	    return {
	        bindToController: true,
	        controller: AvatarController,
	        controllerAs: '$ctrl',
	        scope: {
	            imageUrl: '@'
	        },
	        restrict: 'E',
	        templateUrl: templateUrl,
	        replace: true
	    };
	}
	exports.default = AvatarDirective;


/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = 'components/avatar/avatar.component.html';
	var html = "<div class=\"ias-avatar\" ng-style=\"$ctrl.getStyle()\"></div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(9);
	function ButtonDirective() {
	    return {
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true,
	        replace: true
	    };
	}
	exports.default = ButtonDirective;


/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = 'components/button/button.component.html';
	var html = "<button class=\"ias-button\" ng-transclude>\r\n</button>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var templateUrl = __webpack_require__(11);
	var DatePickerController = (function () {
	    function DatePickerController() {
	        this.monthMode = true;
	    }
	    DatePickerController.prototype.$onInit = function () {
	        this.visibleDate = angular_1.isString(this.startDate) ? new Date(this.startDate) : new Date();
	        this.currentYear = this.visibleDate.getFullYear();
	        this.currentWeeks = this.getMonth(this.visibleDate);
	        this.today = new Date();
	    };
	    DatePickerController.prototype.getClass = function (date) {
	        return {
	            'ias-soften': date.getMonth() !== this.visibleDate.getMonth(),
	            'ias-today': this.isToday(date),
	            'ias-selected': this.isSelected(date)
	        };
	    };
	    DatePickerController.prototype.getMonth = function (date) {
	        var firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	        var lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	        var current = new Date(firstOfMonth);
	        current.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());
	        var weeks = [];
	        var week = [];
	        while (current <= lastOfMonth || week.length > 0) {
	            week.push(current);
	            if (current.getDay() === 6) {
	                weeks.push(week);
	                week = [];
	            }
	            current = new Date(current);
	            current.setDate(current.getDate() + 1);
	        }
	        return weeks;
	    };
	    DatePickerController.prototype.goToMonth = function (monthIndex) {
	        this.visibleDate = new Date(this.currentYear, monthIndex, 1);
	        this.currentWeeks = this.getMonth(this.visibleDate);
	        this.monthMode = true;
	    };
	    DatePickerController.prototype.isSameDay = function (date1, date2) {
	        return date1.getFullYear() === date2.getFullYear() &&
	            date1.getMonth() === date2.getMonth() &&
	            date1.getDate() === date2.getDate();
	    };
	    DatePickerController.prototype.isSelected = function (date) {
	        if (!this.selectedDate) {
	            return false;
	        }
	        return this.isSameDay(date, this.selectedDate);
	    };
	    DatePickerController.prototype.isToday = function (date) {
	        return this.isSameDay(date, this.today);
	    };
	    DatePickerController.prototype.next = function () {
	        if (this.monthMode) {
	            this.visibleDate.setMonth(this.visibleDate.getMonth() + 1);
	            this.currentYear = this.visibleDate.getFullYear();
	            this.currentWeeks = this.getMonth(this.visibleDate);
	        }
	        else {
	            this.currentYear++;
	        }
	    };
	    DatePickerController.prototype.prev = function () {
	        if (this.monthMode) {
	            this.visibleDate.setMonth(this.visibleDate.getMonth() - 1);
	            this.currentYear = this.visibleDate.getFullYear();
	            this.currentWeeks = this.getMonth(this.visibleDate);
	        }
	        else {
	            this.currentYear--;
	        }
	    };
	    DatePickerController.prototype.showSelectedDate = function () {
	        this.visibleDate = this.selectedDate;
	        this.currentYear = this.selectedDate.getFullYear();
	        this.currentWeeks = this.getMonth(this.visibleDate);
	        this.monthMode = true;
	    };
	    DatePickerController.prototype.toggleMonthMode = function () {
	        this.monthMode = !this.monthMode;
	    };
	    return DatePickerController;
	}());
	function DatePickerDirective() {
	    return {
	        bindToController: true,
	        controller: DatePickerController,
	        controllerAs: '$ctrl',
	        link: function (scope, element, attributes, ngModelController) {
	            ngModelController.$render = function () {
	                var date = Date.parse(ngModelController.$viewValue);
	                if (isNaN(date)) {
	                    scope.$ctrl.selectedDate = null;
	                }
	                else {
	                    scope.$ctrl.selectedDate = new Date(date);
	                    scope.$ctrl.showSelectedDate();
	                }
	            };
	            scope.$ctrl.selectDate = function (date) {
	                scope.$ctrl.selectedDate = date;
	                ngModelController.$setDirty();
	                ngModelController.$setTouched();
	                ngModelController.$setViewValue(date);
	            };
	        },
	        replace: true,
	        require: 'ngModel',
	        restrict: 'E',
	        templateUrl: templateUrl
	    };
	}
	exports.default = DatePickerDirective;


/***/ },
/* 11 */
/***/ function(module, exports) {

	var path = 'components/date-picker/date-picker.component.html';
	var html = "<div class=\"ias-datepicker\">\r\n    <div class=\"ias-actions\">\r\n        <ias-button class=\"ias-icon-button\" type=\"button\" ng-click=\"$ctrl.prev()\">\r\n            <ias-icon icon=\"prev_left_thin\"></ias-icon>\r\n        </ias-button>\r\n        <span ng-bind=\"$ctrl.monthMode ? ($ctrl.visibleDate | date: 'MMMM yyyy') : $ctrl.currentYear\" ng-click=\"$ctrl.toggleMonthMode()\" tabindex=\"0\"></span>\r\n        <ias-button class=\"ias-icon-button\" type=\"button\" ng-click=\"$ctrl.next()\">\r\n            <ias-icon icon=\"next_right_thin\"></ias-icon>\r\n        </ias-button>\r\n    </div>\r\n\r\n    <!-- MONTH MODE -->\r\n    <table ng-show=\"$ctrl.monthMode\">\r\n        <thead>\r\n        <tr>\r\n            <th>S</th>\r\n            <th>M</th>\r\n            <th>T</th>\r\n            <th>W</th>\r\n            <th>T</th>\r\n            <th>F</th>\r\n            <th>S</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr ng-repeat=\"week in $ctrl.currentWeeks\">\r\n            <td\r\n                ng-repeat=\"day in week\"\r\n                ng-class=\"$ctrl.getClass(day)\"\r\n                ng-click=\"$ctrl.selectDate(day)\"\r\n                ng-bind=\"day.getDate()\"></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <!-- YEAR MODE -->\r\n    <table ng-hide=\"$ctrl.monthMode\" class=\"ias-break\">\r\n        <tbody>\r\n        <tr>\r\n            <td ng-click=\"$ctrl.goToMonth(0)\">Jan</td>\r\n            <td ng-click=\"$ctrl.goToMonth(1)\">Feb</td>\r\n            <td ng-click=\"$ctrl.goToMonth(2)\">Mar</td>\r\n            <td ng-click=\"$ctrl.goToMonth(3)\">Apr</td>\r\n        </tr>\r\n        <tr>\r\n            <td ng-click=\"$ctrl.goToMonth(4)\">May</td>\r\n            <td ng-click=\"$ctrl.goToMonth(5)\">Jun</td>\r\n            <td ng-click=\"$ctrl.goToMonth(6)\">Jul</td>\r\n            <td ng-click=\"$ctrl.goToMonth(7)\">Aug</td>\r\n        </tr>\r\n        <tr>\r\n            <td ng-click=\"$ctrl.goToMonth(8)\">Sep</td>\r\n            <td ng-click=\"$ctrl.goToMonth(9)\">Oct</td>\r\n            <td ng-click=\"$ctrl.goToMonth(10)\">Nov</td>\r\n            <td ng-click=\"$ctrl.goToMonth(11)\">Dec</td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var DialogService = (function () {
	    function DialogService($compile, $controller, $document, $http, $q, $rootScope, $templateCache) {
	        this.$compile = $compile;
	        this.$controller = $controller;
	        this.$document = $document;
	        this.$http = $http;
	        this.$q = $q;
	        this.$rootScope = $rootScope;
	        this.$templateCache = $templateCache;
	    }
	    DialogService.prototype.alert = function (options) {
	        options.cancel = null;
	        options.ok = options.ok || 'OK';
	        return this.open(options);
	    };
	    DialogService.prototype.cancel = function (response) {
	        this.dialogDeferred.reject(response);
	        this.destroy();
	    };
	    DialogService.prototype.close = function (response) {
	        this.dialogDeferred.resolve(response);
	        this.destroy();
	    };
	    DialogService.prototype.confirm = function (options) {
	        options.cancel = options.cancel || 'No';
	        options.ok = options.ok || 'Yes';
	        return this.open(options);
	    };
	    DialogService.prototype.destroy = function () {
	        this.compiledDialogElement.detach();
	        this.dialogController = null;
	        this.dialogDeferred = null;
	    };
	    DialogService.prototype.open = function (options) {
	        var self = this;
	        var scope = (options.scope ?
	            options.scope.$new(false) :
	            (this.$rootScope.$new(true)));
	        scope.cancel = function () { self.cancel(); };
	        scope.cancelText = options.cancel;
	        scope.close = function () { self.close(scope.data.response); };
	        scope.okText = options.ok;
	        scope.prompt = options.prompt;
	        scope.data = { response: options.response };
	        scope.textContent = options.textContent;
	        scope.title = options.title;
	        var locals = options.locals || {};
	        locals.$scope = scope;
	        if (options.controller) {
	            this.dialogController = this.$controller(options.controller, locals);
	        }
	        this.loadTemplate(options)
	            .then(function (template) {
	            self.compiledDialogElement = self.$compile(template)(scope);
	            angular_1.element(self.$document.find('body')).append(self.compiledDialogElement);
	        });
	        this.dialogDeferred = this.$q.defer();
	        return this.dialogDeferred.promise;
	    };
	    DialogService.prototype.prompt = function (options) {
	        options.cancel = options.cancel || 'Cancel';
	        options.ok = options.ok || 'OK';
	        options.prompt = true;
	        return this.open(options);
	    };
	    DialogService.prototype.loadTemplate = function (options) {
	        if (options.template) {
	            return this.$q.resolve(options.template);
	        }
	        else if (options.templateUrl) {
	            var template = this.$templateCache.get(options.templateUrl);
	            var self_1 = this;
	            if (template) {
	                return this.$q.resolve(template);
	            }
	            return this.$http
	                .get(options.templateUrl)
	                .then(function (response) {
	                self_1.$templateCache.put(options.templateUrl, response.data);
	                return response.data;
	            });
	        }
	        else {
	            return this.$q.resolve('<div class="ias-dialog">' +
	                '   <div class="ias-dialog-container">' +
	                '       <div class="ias-dialog-label">' +
	                '           <div ng-if="!!title" class="ias-title">{{title}}</div>' +
	                '       </div>' +
	                '       <div class="ias-dialog-content">' +
	                '           <div ng-if="!prompt">{{textContent}}</div>' +
	                '           <div ng-if="prompt">' +
	                '               <div class="ias-input-container">' +
	                '                   <label for="response">{{textContent}}</label>' +
	                '                   <input id="response" name="response" type="text" ng-model="data.response">' +
	                '               </div>' +
	                '           </div>' +
	                '       </div>' +
	                '       <div class="ias-actions">' +
	                '          <ias-button ng-if="!!okText" ng-click="close()">{{okText}}</ias-button>' +
	                '          <ias-button ng-if="!!cancelText" ng-click="cancel()">{{cancelText}}</ias-button>' +
	                '       </div>' +
	                '       <ias-button class="ias-icon-button ias-dialog-cancel-button" ng-click="cancel()">' +
	                '           <ias-icon icon="close_thick"></ias-icon>' +
	                '       </ias-button>' +
	                '   </div>' +
	                '</div>');
	        }
	    };
	    return DialogService;
	}());
	DialogService.$inject = ['$compile', '$controller', '$document', '$http', '$q', '$rootScope', '$templateCache'];
	exports.default = DialogService;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(14);
	function IconDirective() {
	    return {
	        scope: {
	            icon: '@'
	        },
	        restrict: 'E',
	        templateUrl: templateUrl,
	        replace: true
	    };
	}
	exports.default = IconDirective;


/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = 'components/icon/icon.component.html';
	var html = "<i ng-class=\"['ias-icon', 'ias-icon-' + icon]\"></i>\r\n<!--<img ng-if=\"!$ctrl.icon\" class=\"svg-icon\" ng-src=\"{{$ctrl.svgIcon}}\" ng-attr-alt=\"{{$ctrl.svgIcon}}\"/>-->";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var HorizontalAlignment;
	(function (HorizontalAlignment) {
	    HorizontalAlignment[HorizontalAlignment["start"] = 0] = "start";
	    HorizontalAlignment[HorizontalAlignment["center"] = 1] = "center";
	    HorizontalAlignment[HorizontalAlignment["end"] = 2] = "end";
	})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
	var VerticalAlignment;
	(function (VerticalAlignment) {
	    VerticalAlignment[VerticalAlignment["top"] = 0] = "top";
	    VerticalAlignment[VerticalAlignment["center"] = 1] = "center";
	    VerticalAlignment[VerticalAlignment["bottom"] = 2] = "bottom";
	})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
	var CLICKABLE_MENU_TAGS = ['a', 'button', 'ias-list-item'];
	var MenuController = (function () {
	    function MenuController($document, $element, $timeout, $window, toggleService, MENU_MARGIN) {
	        var _this = this;
	        this.$document = $document;
	        this.$element = $element;
	        this.$timeout = $timeout;
	        this.$window = $window;
	        this.toggleService = toggleService;
	        this.MENU_MARGIN = MENU_MARGIN;
	        this.open = false;
	        $element.detach();
	        angular_1.element($document.find('body')).append($element);
	        $element.on('click', this.clickMenuScrim.bind(this));
	        this.horizontalAlignment = HorizontalAlignment.start;
	        this.verticalAlignment = VerticalAlignment.top;
	        $timeout(function () {
	            CLICKABLE_MENU_TAGS.forEach(function (tag) {
	                _this.$element.find(tag).on('click', _this.hide.bind(_this));
	            });
	        });
	    }
	    MenuController.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    MenuController.prototype.$onInit = function () {
	        if (this.align) {
	            var tokens = this.align.split(' ');
	            var horizontalAlignment = HorizontalAlignment[tokens[0]];
	            var verticalAlignment = VerticalAlignment[tokens[1]];
	            this.horizontalAlignment = horizontalAlignment || HorizontalAlignment.start;
	            this.verticalAlignment = verticalAlignment || VerticalAlignment.top;
	        }
	        this.toggleService.register(this);
	    };
	    MenuController.prototype.clickMenuScrim = function (event) {
	        if (angular_1.element(event.target).hasClass('ias-menu')) {
	            this.hide();
	        }
	    };
	    MenuController.prototype.hide = function () {
	        this.open = false;
	        this.$element.removeClass('ias-open');
	    };
	    MenuController.prototype.show = function (targetElement) {
	        this.open = true;
	        this.$element.addClass('ias-open');
	        this.showMenuContent(targetElement[0]);
	    };
	    MenuController.prototype.getLayoutDirection = function () {
	        return window.getComputedStyle(this.$element[0], null).getPropertyValue('direction');
	    };
	    MenuController.prototype.numberToPixels = function (num) {
	        return (num === null) ? null : num + 'px';
	    };
	    MenuController.prototype.showMenuContent = function (targetElement) {
	        var menuContentElement = this.$element[0].querySelector('.ias-menu-content');
	        var isLtrLayout = this.getLayoutDirection() !== 'rtl';
	        menuContentElement.style.bottom =
	            menuContentElement.style.left =
	                menuContentElement.style.right =
	                    menuContentElement.style.top = null;
	        var menuBoundingBox = this.$element[0].getBoundingClientRect();
	        var menuContentBoundingBox = menuContentElement.getBoundingClientRect();
	        var targetElementBoundingBox = targetElement.getBoundingClientRect();
	        var bottom = null, left = null, right = null, top = null;
	        if (menuContentBoundingBox.width + (2 * this.MENU_MARGIN) > menuBoundingBox.width) {
	            left = this.MENU_MARGIN;
	            right = this.MENU_MARGIN;
	        }
	        else {
	            switch (this.horizontalAlignment) {
	                case HorizontalAlignment.start:
	                    if (isLtrLayout) {
	                        left = targetElementBoundingBox.left;
	                    }
	                    else {
	                        left = targetElementBoundingBox.right - menuContentBoundingBox.width;
	                    }
	                    break;
	                case HorizontalAlignment.center:
	                    left = targetElementBoundingBox.left +
	                        ((targetElementBoundingBox.width - menuContentBoundingBox.width) / 2);
	                    break;
	                case HorizontalAlignment.end:
	                    if (isLtrLayout) {
	                        left = targetElementBoundingBox.left +
	                            (targetElementBoundingBox.width - menuContentBoundingBox.width);
	                    }
	                    else {
	                        left = targetElementBoundingBox.left;
	                    }
	                    break;
	            }
	            left -= menuBoundingBox.left;
	            left = Math.max(left, this.MENU_MARGIN);
	            if (left + menuContentBoundingBox.width > menuBoundingBox.width) {
	                left = null;
	                right = this.MENU_MARGIN;
	            }
	        }
	        menuContentElement.style.left = this.numberToPixels(left);
	        menuContentElement.style.right = this.numberToPixels(right);
	        menuContentBoundingBox = menuContentElement.getBoundingClientRect();
	        if (menuContentBoundingBox.height + (2 * this.MENU_MARGIN) > menuBoundingBox.height) {
	            top = this.MENU_MARGIN;
	            bottom = this.MENU_MARGIN;
	        }
	        else {
	            switch (this.verticalAlignment) {
	                case VerticalAlignment.top:
	                    top = targetElementBoundingBox.bottom;
	                    break;
	                case VerticalAlignment.center:
	                    top = targetElementBoundingBox.top +
	                        ((targetElementBoundingBox.height - menuContentBoundingBox.height) / 2);
	                    break;
	                case VerticalAlignment.bottom:
	                    top = (targetElementBoundingBox.top - menuContentBoundingBox.height);
	                    break;
	            }
	            top -= menuBoundingBox.top;
	            top = Math.max(top, this.MENU_MARGIN);
	            if (top + menuContentBoundingBox.height > menuBoundingBox.height) {
	                top = null;
	                bottom = this.MENU_MARGIN;
	            }
	        }
	        menuContentElement.style.top = this.numberToPixels(top);
	        menuContentElement.style.bottom = this.numberToPixels(bottom);
	    };
	    return MenuController;
	}());
	MenuController.$inject = ['$document', '$element', '$timeout', '$window', 'IasToggleService', 'MENU_MARGIN'];
	function MenuDirective() {
	    return {
	        bindToController: true,
	        controller: MenuController,
	        replace: true,
	        restrict: 'E',
	        scope: {
	            align: '@iasAlign',
	            name: '@'
	        },
	        template: '<div class="ias-menu">' +
	            '   <div class="ias-menu-content" ng-transclude></div>' +
	            '</div>',
	        transclude: true,
	    };
	}
	exports.default = MenuDirective;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(17);
	var SearchBoxController = (function () {
	    function SearchBoxController($element, $scope) {
	        this.$element = $element;
	        this.$scope = $scope;
	    }
	    SearchBoxController.prototype.$onInit = function () {
	        var _this = this;
	        this.$scope.$watch('$ctrl.ngModel', function (newValue, oldValue) {
	            if (newValue !== oldValue && _this.onChange) {
	                _this.onChange({ $text: newValue });
	            }
	        });
	    };
	    SearchBoxController.prototype.clearInput = function () {
	        this.ngModel = '';
	        this.$element.find('input')[0].focus();
	    };
	    SearchBoxController.prototype.onInputKeyDown = function (event) {
	        if ((event.which || event.keyCode) == 27) {
	            if (!!this.ngModel) {
	                event.preventDefault();
	            }
	            this.clearInput();
	        }
	    };
	    return SearchBoxController;
	}());
	SearchBoxController.$inject = ['$element', '$scope'];
	function SearchBoxDirective() {
	    return {
	        bindToController: true,
	        controller: SearchBoxController,
	        controllerAs: '$ctrl',
	        restrict: 'E',
	        scope: {
	            ngModel: '=',
	            ngModelOptions: '<',
	            onChange: '&iasOnChange',
	            placeholder: '@'
	        },
	        templateUrl: templateUrl,
	        replace: true
	    };
	}
	exports.default = SearchBoxDirective;


/***/ },
/* 17 */
/***/ function(module, exports) {

	var path = 'components/search-box/search-box.component.html';
	var html = "<div class=\"ias-search\">\r\n    <input type=\"text\"\r\n           ng-attr-placeholder=\"{{$ctrl.placeholder || 'Search'}}\"\r\n           ng-keydown=\"$ctrl.onInputKeyDown($event)\"\r\n           ng-model=\"$ctrl.ngModel\"\r\n           ng-model-options=\"$ctrl.ngModelOptions\">\r\n    <i class=\"ias-icon ias-icon-search_thick\"></i>\r\n    <ias-button class=\"ias-icon-button\" title=\"Clear search box\" ng-click=\"$ctrl.clearInput()\">\r\n        <ias-icon icon=\"close_thick\"></ias-icon>\r\n    </ias-button>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(19);
	var SideNavController = (function () {
	    function SideNavController($element, toggleService) {
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	    }
	    SideNavController.prototype.$onInit = function () {
	        this.toggleService.register(this);
	    };
	    SideNavController.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    SideNavController.prototype.hide = function () {
	        this.$element.removeClass('ias-open');
	        this.open = false;
	    };
	    SideNavController.prototype.show = function () {
	        this.$element.addClass('ias-open');
	        this.open = true;
	    };
	    return SideNavController;
	}());
	SideNavController.$inject = ['$element', 'IasToggleService'];
	function SideNavDirective() {
	    return {
	        bindToController: true,
	        controller: SideNavController,
	        controllerAs: '$ctrl',
	        scope: {
	            name: '@'
	        },
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true,
	        replace: true
	    };
	}
	exports.default = SideNavDirective;


/***/ },
/* 19 */
/***/ function(module, exports) {

	var path = 'components/side-nav/side-nav.component.html';
	var html = "<div class=\"ias-side-nav\" ng-class=\"{ 'ias-open' : $ctrl.open }\">\r\n    <div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\r\n    <div class=\"ias-side-nav-content\">\r\n        <div class=\"ias-side-nav-body\" ng-transclude></div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--<div class=\"ias-side-nav ias-open\">-->\r\n<!--<div class=\"ias-scrim\"></div>-->\r\n<!--<div class=\"ias-side-nav-content\">-->\r\n<!--<div class=\"ias-side-nav-body\">-->\r\n<!--<button type=\"button\">View My Devices</button>-->\r\n<!--<button type=\"button\">Help Me...(end-user)</button>-->\r\n<!--<button type=\"button\">Request impersonate session...(HelpDesk)</button>-->\r\n<!--<button type=\"button\">Button 4</button>-->\r\n<!--<button type=\"button\">An Interesting Link</button>-->\r\n<!--<button type=\"button\">Button 6</button>-->\r\n<!--<button type=\"button\">Button 7</button>-->\r\n<!--<button type=\"button\">IDM Prototype</button>-->\r\n<!--<button type=\"button\">Add Users</button>-->\r\n<!--<button type=\"button\">Button 13</button>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var TabPaneController = (function () {
	    function TabPaneController($element, toggleService) {
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	    }
	    TabPaneController.prototype.$onInit = function () {
	        this.toggleService.register(this);
	        if (this.toggleStartOpen) {
	            this.toggleService.showComponent(this.name);
	        }
	    };
	    TabPaneController.prototype.hide = function () {
	        this.open = false;
	        this.$element.removeClass('ias-open');
	    };
	    TabPaneController.prototype.show = function (element) {
	        this.open = true;
	        this.$element.addClass('ias-open');
	    };
	    return TabPaneController;
	}());
	TabPaneController.$inject = ['$element', 'IasToggleService'];
	function TabPaneDirective() {
	    return {
	        bindToController: true,
	        controller: TabPaneController,
	        replace: true,
	        restrict: 'E',
	        scope: {
	            toggleMutexGroup: '@toggleGroup',
	            toggleStartOpen: '<',
	            name: '@'
	        },
	        template: "\n            <div class=\"ias-tab-pane\" ng-transclude></div>        \n        ",
	        transclude: true
	    };
	}
	exports.default = TabPaneDirective;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var templateUrl = __webpack_require__(22);
	function TileDirective() {
	    return {
	        replace: true,
	        restrict: 'E',
	        templateUrl: templateUrl,
	        transclude: true
	    };
	}
	exports.default = TileDirective;


/***/ },
/* 22 */
/***/ function(module, exports) {

	var path = 'components/tile/tile.component.html';
	var html = "<div class=\"ias-tile\" ng-transclude>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var SortDirectiveController = (function () {
	    function SortDirectiveController($element, $scope) {
	        this.$element = $element;
	        this.$scope = $scope;
	    }
	    SortDirectiveController.prototype.sortOn = function (sortOnProperty) {
	        if (this.sortExpression === sortOnProperty) {
	            this.sortExpression = '-' + sortOnProperty;
	        }
	        else {
	            this.sortExpression = sortOnProperty;
	        }
	        angular_1.element(this.$element[0].querySelectorAll('.ias-sorted')).removeClass('ias-sorted');
	        this.$scope.$eval(this.sortBinding + '="' + this.sortExpression + '"');
	    };
	    return SortDirectiveController;
	}());
	SortDirectiveController.$inject = ['$element', '$scope'];
	exports.SortDirectiveController = SortDirectiveController;
	function SortDirective() {
	    return {
	        controller: SortDirectiveController,
	        restrict: 'A',
	        link: function (scope, element, attributes, controller) {
	            controller.sortBinding = attributes['iasSort'];
	        }
	    };
	}
	exports.SortDirective = SortDirective;
	function SortOnDirective($compile) {
	    return {
	        require: '^iasSort',
	        restrict: 'A',
	        scope: {
	            'sortOn': '<iasSortOn'
	        },
	        link: function (scope, element, attributes, controller) {
	            scope.getSortExpression = function () {
	                return controller.sortExpression;
	            };
	            var iconHtml = '<ias-icon icon="flow_goto_prev_thin" ng-if="getSortExpression() == \'' +
	                scope.sortOn + '\'"></ias-icon>' +
	                '<ias-icon icon="flow_goto_next_thin" ng-if="getSortExpression() == \'-' +
	                scope.sortOn + '\'"></ias-icon>';
	            var iconElement = $compile(iconHtml)(scope);
	            element.append(iconElement);
	            element.addClass('ias-sortable');
	            element.on('click', function () {
	                scope.$apply(function () {
	                    controller.sortOn(scope['sortOn']);
	                    element.addClass('ias-sorted');
	                });
	            });
	        }
	    };
	}
	exports.SortOnDirective = SortOnDirective;
	SortOnDirective.$inject = ['$compile'];


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function ToggleDirective(toggleService) {
	    return {
	        link: function (scope, element, attrs) {
	            var toggleId = scope['iasToggle'];
	            element.on('click', function () {
	                scope.$apply(function () {
	                    toggleService.toggleComponent(toggleId, element);
	                });
	            });
	            var activeClass = scope['iasToggleActive'];
	            if (activeClass) {
	                scope.$on("toggled:" + toggleId, function () {
	                    if (toggleService.isActive(toggleId)) {
	                        element.addClass(activeClass);
	                    }
	                    else {
	                        element.removeClass(activeClass);
	                    }
	                });
	            }
	        },
	        restrict: 'A',
	        scope: {
	            iasToggle: '@',
	            iasToggleActive: '@'
	        }
	    };
	}
	exports.ToggleDirective = ToggleDirective;
	ToggleDirective.$inject = ['IasToggleService'];


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ToggleService = (function () {
	    function ToggleService($rootScope) {
	        this.$rootScope = $rootScope;
	        this.toggleableComponents = {};
	        this.toggleGroups = {};
	    }
	    ToggleService.prototype.register = function (toggleableComponent) {
	        this.toggleableComponents[toggleableComponent.name] = toggleableComponent;
	        var group = toggleableComponent.toggleGroup || toggleableComponent.toggleMutexGroup;
	        if (group) {
	            if (!this.toggleGroups[group]) {
	                this.toggleGroups[group] = [toggleableComponent];
	                if (toggleableComponent.toggleMutexGroup) {
	                    this.showComponent(toggleableComponent.name);
	                }
	            }
	            else {
	                this.toggleGroups[group].push(toggleableComponent);
	            }
	        }
	    };
	    ToggleService.prototype.hideComponent = function (componentId) {
	        var toggleableComponent = this.toggleableComponents[componentId];
	        if (toggleableComponent == null) {
	            return;
	        }
	        if (toggleableComponent.toggleMutexGroup) {
	            if (toggleableComponent.open) {
	                return;
	            }
	        }
	        this.hide(toggleableComponent);
	    };
	    ToggleService.prototype.showComponent = function (componentId) {
	        var _this = this;
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        if (toggleableElement.toggleMutexGroup) {
	            var toggleGroup = this.toggleGroups[toggleableElement.toggleMutexGroup];
	            toggleGroup.forEach(function (groupComponent) {
	                _this.hide(groupComponent);
	            });
	        }
	        this.show(toggleableElement, null);
	    };
	    ToggleService.prototype.anyOpen = function (groupId) {
	        var group = this.toggleGroups[groupId];
	        if (!group) {
	            return false;
	        }
	        return group.filter(function (component) { return component.open; }).length > 0;
	    };
	    ToggleService.prototype.toggleGroup = function (groupId) {
	        var group = this.toggleGroups[groupId];
	        if (!group) {
	            return;
	        }
	        if (this.anyOpen(groupId)) {
	            group.forEach(this.hide, this);
	        }
	        else {
	            group.forEach(this.show, this);
	        }
	    };
	    ToggleService.prototype.toggleComponent = function (componentId, triggerElement) {
	        var _this = this;
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        if (toggleableElement.toggleMutexGroup) {
	            var toggleGroup = this.toggleGroups[toggleableElement.toggleMutexGroup];
	            toggleGroup.forEach(function (groupComponent) {
	                _this.hide(groupComponent);
	            });
	            this.show(toggleableElement, triggerElement);
	        }
	        else {
	            if (!toggleableElement.open) {
	                this.show(toggleableElement, triggerElement);
	            }
	            else {
	                this.hide(toggleableElement);
	            }
	        }
	    };
	    ToggleService.prototype.isActive = function (toggleId) {
	        var toggleableComponent = this.toggleableComponents[toggleId];
	        return toggleableComponent && toggleableComponent.toggleMutexGroup && toggleableComponent.open;
	    };
	    ToggleService.prototype.hide = function (component) {
	        if (component.open) {
	            component.hide();
	            this.$rootScope.$broadcast("toggled:" + component.name);
	        }
	    };
	    ToggleService.prototype.show = function (component, triggerElement) {
	        if (!component.open) {
	            component.show(triggerElement);
	            this.$rootScope.$broadcast("toggled:" + component.name);
	        }
	    };
	    return ToggleService;
	}());
	ToggleService.$inject = ['$rootScope'];
	exports.default = ToggleService;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var EMAIL_REG_EXP = /^(([^<>()\[\].,;:\s@\"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
	function EmailValidatorDirective() {
	    return {
	        require: 'ngModel',
	        restrict: 'A',
	        link: function (scope, element, attributes, ngModelController) {
	            ngModelController.$validators.iasEmail = function (modelValue, viewValue) {
	                var value = modelValue || viewValue;
	                return EMAIL_REG_EXP.test(value);
	            };
	        }
	    };
	}
	exports.EmailValidatorDirective = EmailValidatorDirective;
	function PasswordValidatorDirective() {
	    return {
	        require: 'ngModel',
	        restrict: 'A',
	        scope: {
	            passwordOptions: '<iasPassword'
	        },
	        link: function (scope, element, attributes, ngModelController) {
	            scope.passwordOptions = scope.passwordOptions || {};
	            scope.passwordOptions.changeCase = scope.passwordOptions.changeCase !== false;
	            scope.passwordOptions.number = scope.passwordOptions.number !== false;
	            if (scope.passwordOptions.changeCase) {
	                ngModelController.$validators.iasPasswordCase = function (modelValue, viewValue) {
	                    var value = modelValue || viewValue;
	                    return /[a-z]/.test(value) && /[A-Z]/.test(value);
	                };
	            }
	            if (scope.passwordOptions.number) {
	                ngModelController.$validators.iasPasswordNumber = function (modelValue, viewValue) {
	                    var value = modelValue || viewValue;
	                    return /[0-9]/.test(value);
	                };
	            }
	            if (scope.passwordOptions.special) {
	                ngModelController.$validators.iasPasswordSpecial = function (modelValue, viewValue) {
	                    var value = modelValue || viewValue;
	                    var pattern = angular_1.isString(scope.passwordOptions.special) ? scope.passwordOptions.special : '[!%@#]';
	                    return new RegExp(pattern).test(value);
	                };
	            }
	        }
	    };
	}
	exports.PasswordValidatorDirective = PasswordValidatorDirective;
	function MatchesValidatorDirective() {
	    return {
	        require: 'ngModel',
	        restrict: 'A',
	        scope: {
	            other: '<iasMatches'
	        },
	        link: function (scope, element, attributes, ngModelController) {
	            scope.$watch('other', function () {
	                ngModelController.$validate();
	            });
	            ngModelController.$validators.iasMatches = function (modelValue, viewValue) {
	                var value = modelValue || viewValue;
	                return value === scope.other;
	            };
	        }
	    };
	}
	exports.MatchesValidatorDirective = MatchesValidatorDirective;


/***/ }
/******/ ]);