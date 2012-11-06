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

$('#nw').click(function(){
	
	$(this).addClass('active');
	$('#nw>h1').addClass('active');
	
	$('#ne').removeClass('active');
	$('#ne>h1').removeClass('active');
	$('#se').removeClass('active');
	$('#se>h1').removeClass('active');
	$('#sw').removeClass('active');
	$('#sw>h1').removeClass('active');
	
	$('#about').fadeOut(delay);
	$('#social').fadeOut(delay);
	$('#contact').fadeOut(delay);
	
	
	$('#galery').fadeIn(delay);
	

})


$('#ne').click(function(){
	
	$(this).addClass('active');
	$('#ne>h1').addClass('active');
	
	$('#nw').removeClass('active');
	$('#nw>h1').removeClass('active');
	$('#se').removeClass('active');
	$('#se>h1').removeClass('active');
	$('#sw').removeClass('active');
	$('#sw>h1').removeClass('active');
	
	$('#galery').fadeOut(delay);
	$('#social').fadeOut(delay);
	$('#contact').fadeOut(delay);
	
	$('#about').fadeIn(delay);
	

})


$('#se').click(function(){
	
	$(this).addClass('active');
	$('#se>h1').addClass('active');
	
	$('#ne').removeClass('active');
	$('#ne>h1').removeClass('active');
	$('#nw').removeClass('active');
	$('#nw>h1').removeClass('active');
	$('#sw').removeClass('active');
	$('#sw>h1').removeClass('active');
	
	$('#galery').fadeOut(delay);
	$('#about').fadeOut(delay);
	$('#contact').fadeOut(delay);
	
	$('#social').fadeIn(delay);
	

})


$('#sw').click(function(){
	
	$(this).addClass('active');
	$('#sw>h1').addClass('active');
	
	$('#ne').removeClass('active');
	$('#ne>h1').removeClass('active');
	$('#se').removeClass('active');
	$('#se>h1').removeClass('active');
	$('#nw').removeClass('active');
	$('#nw>h1').removeClass('active');
	
	$('#galery').fadeOut(delay);
	$('#about').fadeOut(delay);
	$('#social').fadeOut(delay);
	
	$('#contact').fadeIn(delay);
	
	

})

function hover(id){
	

		$(id).mouseover(function() {
			$(this).addClass('over');
			$(id+'>h1').addClass('over');
		});

		$(id).mouseout(function() {
			$(this).removeClass('over');
			$(id+'>h1').removeClass('over');
			
		});

	

}