/*! angular-couchPotato - v0.0.1 - 2013-05-23
 * https://github.com/afterglowtech/angular-couchPotato
 * Copyright (c) 2013 [object Object];
 *    Uses software code found at https://github.com/szhanginrhythm/angular-require-lazyload
 * Licensed MIT
 */
(function(){"use strict";function e(e,r,n,t){function i(e){n.value.apply(null,e)}function o(e){n.factory.apply(null,e)}function l(e){t.register.apply(null,e)}function c(e){r.directive.apply(null,e)}function u(r){e.register.apply(null,r)}function s(e){function r(r,n){var t=r.defer();return require(e,function(){t.resolve(),n.$apply()}),t.promise}return r.$inject=["$q","$rootScope"],r}function p(e){if(e.dependencies){var r=e,n=e.dependencies;return delete r.dependencies,r.resolve={},r.resolve.delay=s(n),r}return e}this.resolveDependencies=s,this.resolveDependenciesProperty=p,this.$get=function(){var e={};return e.registerValue=i,e.registerFactory=o,e.registerFilter=l,e.registerDirective=c,e.registerController=u,e.resolveDependenciesProperty=p,e.resolveDependencies=s,e}}var r=angular.module("agt.couchPotato",["ng"]);e.$inject=["$controllerProvider","$compileProvider","$provide","$filterProvider"],r.provider("$couchPotato",e)})();