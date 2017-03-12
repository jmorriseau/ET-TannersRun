angular.module("tanner",['ngRoute'])

.config(function($routeProvider, $locationProvider) {
$routeProvider
 .when('/', {
  templateUrl: 'pages/home/home.html'
})
.when('/registration', {
  templateUrl: 'pages/registration/index.html'
})
.when('/registration/apply', {
  templateUrl: 'pages/registration/apply.html',
  controller: 'RunnerCtrl',
  controllerAs: "rc"
})
.when('/sponsor', {
  templateUrl: 'pages/sponsor/index.html'
})
.when('/sponsor/apply', {
  templateUrl: 'pages/sponsor/apply.html',
  controller: 'SponsorCtrl',
  controllerAs: "sc"
})
.when('/course', {
  templateUrl: 'pages/course/index.html'
})
.when('/contact', {
  templateUrl: 'pages/contact/index.html',
  controller: 'ContactCtrl',
  controllerAs: "cc"
})
.when('/admin',{
  templateUrl: 'pages/admin/admin.html'
})
.otherwise({redirectTo:'/'});

$locationProvider.html5Mode(true);
});
