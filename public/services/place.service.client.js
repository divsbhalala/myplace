/**
 * Created by vyshaalnarayanam on 4/9/17.
 */

(function () {
	angular.module("MyPlace")
	.factory("BizService", BizService);

	var v = "20170101";
	var m = "foursquare";
	var init_url = "https://api.foursquare.com/v2/";
	// var param_url = "client_id=" + client_id + "&client_secret=" + client_secret + "&v=" + v + "&m=" + m;

	function BizService($http, $sce, CLIENT_ID, CLIENT_SECRET) {
		var param_url = "client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=" + v + "&m=" + m;
		var api = {
			findBizs: findBizs,
			findBizById: findBizById,
			findSimilarById: findSimilarById,
			findBizsByLL: findBizsByLL,
			findPhotoById: findPhotoById,
			findBizsToExploreByLL: findBizsToExploreByLL,
			findBizsToExploreByLocation: findBizsToExploreByLocation
		};
		return api;


		function findBizs(location, place) {
			var url = init_url + "venues/search?near=" + location + "&query=" + place + "&" + param_url + "&limit=15";
			return $http.get(url);
		}

		function findBizById(id) {
			var url = init_url + "venues/" + id + "?" + param_url;
			return $http.get(url);
		}

		function findSimilarById(id) {
			var url = init_url + "venues/" + id + "/similar" + "?" + param_url;
			return $http.get(url);
		}

		function findBizsByLL(latitude, longitude) {
			var url = init_url + "venues/search?ll=" + latitude + "," + longitude + "&" + param_url + "&limit=15";
			return $http.get(url);
		}

		function findPhotoById(id) {
			var url = init_url + "venues/" + id + "/photos" + "?" + param_url;
			return $http.get(url);
		}

		function findBizsToExploreByLL(latitude, longitude) {
			var url = init_url + "venues/explore?ll=" + latitude + "," + longitude + "&" + param_url;
			return $http.get(url);
		}

		function findBizsToExploreByLocation(location) {
			var url = init_url + "venues/explore?near=" + location + "&" + param_url;
			return $http.get(url);
		}
	}

})();
