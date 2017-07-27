jQuery.ajax( {
	url: 'https://freegeoip.net/json/',
	type: 'POST',
	dataType: 'jsonp',
	success: function(location) {
		console.log(location)
	}
});