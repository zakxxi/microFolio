/*
 * PARAMÈTRES  */

var apiKey = 'd1bb7a26cee61aee8573412d9f46a0dd';
var albumId = '72157631934988931';
var userId = '87291951@N04';
var nbPhotos = 10;
var photoSize = "_c"
var delay = 500;

//'72157631440828014';

/*
 * REQUETE AJAX VERS PHOTOS FLICKR
 */

// IE FIX
jQuery.support.cors = true;


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
					animtype        : 'fade',
					animduration    : delay,      // length of transition
					animspeed       : 6000,     // delay between transitions
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

$('#title').click(function(){
	
	$(this).addClass('active');
	$('#btn_about').removeClass('active');
	$('#btn_contact').removeClass('active');
	
	$('#about').fadeOut(delay);
	$('#contact').fadeOut(delay);
	
	$('#galery').fadeIn(delay);
	
})

$('#btn_about').click(function(){
	
	$(this).addClass('active');
	$('#title').removeClass('active');
	$('#btn_contact').removeClass('active');
	
	$('#galery').fadeOut(delay);
	$('#contact').fadeOut(delay);
	
	$('#about').fadeIn(delay);
	
})

$('#btn_contact').click(function(){
	
	$(this).addClass('active');
	$('#title').removeClass('active');
	$('#btn_about').removeClass('active');
	
	$('#galery').fadeOut(delay);
	$('#about').fadeOut(delay);
	
	$('#contact').fadeIn(delay);
	
})
