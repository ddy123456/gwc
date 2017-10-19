/**
 * Created by Nan on 2017/10/18.
 */
var app = angular.module("app", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("shop", {
            url: "/shop",
            templateUrl: "App/View/_shop.html",
            controller: "shopCarController"
        });
    $urlRouterProvider.otherwise("/shop");
});