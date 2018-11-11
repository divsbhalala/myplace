(function () {
	angular.module("MyPlace")
	.controller("BizController", BizController);

	function BizController($location, $window, $routeParams, BizService, SearchService) {
		var vm = this;
		vm.placeId = $routeParams.placeId;
		vm.findBizById = findBizById;
		vm.goback = goback;
		init();

		function init() {
			vm.review = {};
			vm.newsfeed = [];
			vm.isLiked = false;
			$('[data-toggle="tooltip"]').tooltip();
			BizService.findBizById(vm.placeId)
			.then(function (response) {
				vm.place = response.data.response.venue;
				var photos = vm.place.photos.groups;
				photos = _.mapValues(photos[0], function(value, key) { return _.map(photos, key)});
				photos = photos.items;
				_.mapValues(photos[0], function(value, key) { return _.map(photos, key)});
				vm.photo = _.flatten(photos);
				vm.lat = vm.place.location.lat;
				vm.lng = vm.place.location.lng;
			});
			BizService.findSimilarById(vm.placeId)
			.then(function (response) {
				vm.places = response.data.response.similarVenues.items;
			});

		}

		function findBizById(id) {
			$location.url('/place/' + id);
		}

		function goback() {
			$window.history.back()
		}


	}
})();