(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('ToBuyController', ToBuyController)
        .service('ItemListService', ItemListService);

    ToBuyController.$inject = ['ItemListService'];
    function ToBuyController(ItemListService) {
        var toBuyItem = this;

        toBuyItem.items = ItemListService.getBuyItems();

        toBuyItem.buyItem = function(index){
            ItemListService.buyItem(index);
        };

        toBuyItem.empty = function(){
            return toBuyItem.items.length === 0;
        }
    };

    AlreadyBoughtController.$inject = ['ItemListService'];
    function AlreadyBoughtController(ItemListService) {
        var boughtItems = this;

        boughtItems.items = ItemListService.getBoughtItems();

        boughtItems.empty = function(){
            return boughtItems.items.length === 0;
        }
    };

    function ItemListService() {
        var service = this;
      
        var buyItems = [ {
                name: "Meat",
                quantity: 5,
            },{
                name: "Bacon",
                quantity: 8,
            },{
                name: "Salad",
                quantity: 3,
            },{
                name: "Ribs",
                quantity: 9,
            },{
                name: "Eggs",
                quantity: 6,
            },

        ];
        var boughtItems = [];

        service.buyItem = function (index) {
            boughtItems.push(buyItems[index]);
            buyItems.splice(index,1);
            console.log(boughtItems);
        };
        service.getBuyItems = function () {
            return buyItems;
        };
        service.getBoughtItems = function () {
            return boughtItems;
        };

    }

})();
