
var SF425App = angular.module('SF425App', ["ngRoute", "ui.bootstrap"]);

SF425App.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController as vm"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

SF425App.controller("HomeController",
    function ($scope, $location, DataService) {

        var vm = this;

        vm.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm');
        };

        vm.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id)
        };

    });

