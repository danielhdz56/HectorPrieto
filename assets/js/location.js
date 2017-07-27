jQuery.ajax( {
	url: 'http://freegeoip.net/json/',
	type: 'POST',
	dataType: 'jsonp',
	success: function(location) {
		console.log(location)
	}
});