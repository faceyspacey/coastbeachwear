import locale from './locale.js';

class LocationServices {
	
	language = "";

	constructor() {}

	loadLocationServices() {
		this.autoCompleteService = new google.maps.places.AutocompleteService();
		this.geoCodeService = new google.maps.Geocoder();

		this.language = locale.language;
	}

	postalCode2LatLng(postalCode, success, fail) {
		success = success || function() {};
		fail = fail || function() {};

		function geoCodeSuccess(results, status) {
			if (!results || !results.length || results.length < 1 || status !== "OK") fail();
			else success(results[0].geometry.location);
		};
		geoCodeSuccess = geoCodeSuccess.bind(this);

		this.geoCodeService.geocode({ 'address': postalCode}, geoCodeSuccess.bind(this));
	}

	placeId2LatLng(placeId, success, fail) {
		success = success || function() {};
		fail = fail || function() {};

		function geoCodeSuccess(results, status) {
			if (!results || !results.length || results.length < 1 || status !== "OK") fail();
			else success(results[0].geometry.location);
		};
		geoCodeSuccess = geoCodeSuccess.bind(this);

		this.geoCodeService.geocode({ 'placeId': placeId }, geoCodeSuccess);
	}

	getPlacePredictions(request, predictionGetSuccess) {
		this.autoCompleteService.getPlacePredictions(request, predictionGetSuccess);
	}

	geoCodePlaceId(placeID, success) {
		this.geoCodeService.geocode({ 'placeId': placeId }, geoCodeSuccess);
	}

	retrieveAddrObjForPlaceId(placeId, isLongName, success, fail) {
		success = success || function() {};
		fail = fail || function() {};

		function geoCodeSuccess(results, status) {
			var data = {};

			if (!results || status !== "OK") return fail();

			data = this.parseAddressComponents(results.first(), isLongName);

			if (data === false) return fail();
			
			success(data);
		};
		geoCodeSuccess = geoCodeSuccess.bind(this);


		this.geoCodeService.geocode({ 'placeId': placeId }, geoCodeSuccess);
	};

	parseAddressComponents(obj, isLongName) {
		var rawData = {};
		var data = {};
		var nameType = isLongName? "long_name" : "short_name";
		
		obj.address_components.forEach(function(component) {
			var types = component.types;

			types.forEach(function(type) {
				// Force long name
				if (["route"].includes(type)) rawData[type] = component["long_name"];
				if (["street_number", "locality", "administrative_area_level_1", "country"].includes(type)) rawData[type] = component[nameType];
			});
		});

		data = {
			address: `${rawData.street_number} ${rawData.route}`,
			city: rawData.locality,
			country: rawData.country,
			territory: rawData.administrative_area_level_1
		};

		//Validation
		if (Object.values(data).includes(undefined)) return false;
		else return data;
	}

	initMap(element, markers, options) {
		var map = new google.maps.Map(element, options)
		
		markers = markers || [];

		markers.forEach(function(marker) {
			new google.maps.Marker({
	          position: marker,
	          map: map
	        });
		});
	}
}

let locationServices = new LocationServices;

export default locationServices;