$(document).ready(function() {
	CS.init({
		"app_id": "e6ebc4c0",
		"app_key": "ffee0eea6e73d0751625ab8b632cc9b8"
	});

	var streamDescriptor = {
		'name': "Peter's Blog",
		'description': "I will document Peter's efforts to build MVPs rapidly."
	};

	var streamId;

	CS.createStream(streamDescriptor, function (response) {
		streamId = response.id;
	});

	

});
