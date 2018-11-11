(function () {
	angular.module("MyPlace")
	.controller("BizSearchController", BizSearchController);

	function BizSearchController($location, BizService, SearchService) {
		var vm = this;
		vm.search = search;
		vm.findBizById = findBizById;
		vm.geoLocate = false;
		init();

		function init() {
			detectLocation();
		}

		function search() {
			vm.errorplace = "";
			vm.errorlocation = "";
			if (vm.place === null || vm.place === "") {
				vm.errorplace = "Please enter what you are looking for";
				return;
			}
			if (vm.location === null || vm.location === "") {
				vm.errorlocation = "Please specify a location";
				return;
			}
			SearchService.setPlace(vm.place);
			SearchService.setLocation(vm.location);
			$location.url('/places/' + vm.location + '/' + vm.place);
		}

		function detectLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function (position) {
					vm.lat = position.coords.latitude;
					vm.lng = position.coords.longitude;
					vm.geoLocate = true;
					BizService
					.findBizsByLL(vm.lat, vm.lng)
					.then(function (response) {
						vm.places = response.data.response.venues;
					});
					BizService.findBizsToExploreByLL(vm.lat, vm.lng)
					.then(function (response) {
						vm.trendingplaces = response.data.response.groups[0].items;
					});
				});

			}
		}

		function findBizById(id) {
			$location.url('/place/' + id);
		}

	}
})();