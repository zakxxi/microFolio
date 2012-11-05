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
				usecaptions     : true,     // enable/disable captions using img title attribute
				randomstart     : false,     // start from a random slide
				responsive      : false     // enable responsive behaviour
});
