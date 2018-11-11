/**
 * Created by vyshaalnarayanam on 4/9/17.
 */

(function () {
	angular
	.module("MyPlace")
	.config(Config);

	function Config($routeProvider, $locationProvider) {
		$routeProvider
		.when("/search", {
			templateUrl: "place/views/search.view.client.html",
			controller: "BizSearchController",
			controllerAs: "$ctrl",
			resolve: {}
		})
		.when("/places/:location/:place", {
			templateUrl: "place/views/places.view.client.html",
			controller: "BizListController",
			controllerAs: "$ctrl",
			resolve: {}
		})
		.when("/place/:placeId", {
			templateUrl: "place/views/place.view.client.html",
			controller: "BizController",
			controllerAs: "$ctrl",
			resolve: {}
		})
		.otherwise({
			templateUrl: "place/views/search.view.client.html",
			controller: "BizSearchController",
			controllerAs: "$ctrl",
			resolve: {}
		});
		$locationProvider.html5Mode(true);
	}
})();