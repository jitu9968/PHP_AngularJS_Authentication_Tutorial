var app = angular.module("UserAuthTutorial", ["ui.router"]);

app.config(function($stateProvider){
    $stateProvider
        .state("login", {
        url:"/",
        controller: "LoginController",
        templateUrl: "views/login.html"
        })
        
        .state("application", {
        url:"/app",
        controller: "MainController",
        templateUrl: "views/application.html",
        params: {'test': null}
        })
})