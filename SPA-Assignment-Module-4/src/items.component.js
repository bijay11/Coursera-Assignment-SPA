(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'templates/items.template.html',
  bindings: {
    items: '<',
    name: '<',
  }
});

})();
