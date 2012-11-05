/*
 * PARAMÈTRES  */

var apiKey = 'd6ced05a5e11bf668ecd946bba23b4c9';
var albumId = '72157631550752681';
var userId = '86735532@N05';
var nbPhotos = 10;
var photoSize = "_c"

//'72157631440828014';

/*
 * REQUETE AJAX VERS PHOTOS FLICKR
 */

$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + albumId + '&extras=url' + photoSize + '%2C&per_page=' + nbPhotos + '&format=json&nojsoncallback=1', function(data) {
	$.each(data.photoset.photo, function(i, item) {

		var photoUrl = item.url_c;
		var photoTitle = item.title;

		var insertGal = '<li><img src="' + photoUrl + '" title="' + photoTitle + '" ></li>';

		$(insertGal).appendTo('.bjqs');

	});

	// Slideshow 1
	
	$('#galery').bjqs({
		    animtype      : 'slide',
		            height        : 500,
		            width         : 800,
					animtype        : 'slide',
					animduration    : 450,      // length of transition
					animspeed       : 4000,     // delay between transitions
					automatic       : true,     // enable/disable automatic slide rotation

					// control and marker configuration
					showcontrols    : true,     // enable/disable next + previous UI elements
					centercontrols  : true,     // vertically center controls
					nexttext        : '',   // text/html inside next UI element
					prevtext        : '',   // text/html inside previous UI element
					showmarkers     : false,     // enable/disable individual slide UI markers
					centermarkers   : false,     // horizontally center markers

					// interaction values
					keyboardnav     : false,     // enable/disable keyboard navigation
					hoverpause      : true,     // enable/disable pause slides on hover

					// presentational options
					usecaptions     : false,     // enable/disable captions using img title attribute
					randomstart     : false,     // start from a random slide
					responsive      : false     // enable responsive behaviour
	});
	

});


/*
 * ACTIONS BUTTONS  */
hover('#nw');
hover('#ne');
hover('#se');
hover('#sw');


function hover(id){
	
	if ($(id).hasClass('active')) {
		
	}
	
	else {
		
		$(id).mouseover(function() {
			$(id+'>h1').addClass('active');
		});

		$(id).mouseout(function() {
			$(id+'>h1').removeClass('active');
		});
	}
	

}