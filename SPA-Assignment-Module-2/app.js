(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.removeItems= function (itemIndex) {
    ShoppingListCheckOffService.removeItems(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  // alreadyBought.boughtItems = ShoppingListCheckOffService.getItems();

  alreadyBought.addBoughtItems = function (itemIndex) {
    ShoppingListCheckOffService.addBoughtItems(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  var items = [
  {
    name: "Bacon",
    quantity: "2"
  },
  {
    name: "Tuna",
    quantity: "200"
  },
  {
    name: "Pepper",
    quantity: "300"
  },
  {
    name: "Spices",
    quantity: "5"
  }
];

  service.getItems = function () {
    return items;
  };


  // service.addBoughtItems = function (itemIdex) {
  //   boughtItems.push(items.splice(itemIdex, 1));
  // };

  service.removeItems = function (itemIdex) {
items.splice(itemIdex, 1)
  };

  var boughtItems = [];
  service.addBoughtItems = function () {

  };
}


})();
