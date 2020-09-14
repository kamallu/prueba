jQuery(document).ready(function() {
	

/* Responsive slides */

	jQuery('.flexslider').flexslider({
		controlNav: true
	});	


/* Hover */

function get_overlay() {
	jQuery(".portimage a ").hover(function(){
		jQuery(this).find('img').stop().animate({opacity : '0.7'}, 500);
		jQuery(this).append('<div class="zoom"></div>');
		jQuery(this).find('.zoom').animate({opacity : '1', top : '0'}, 500);
	}, function(){
		jQuery(this).find('img').stop().animate({opacity : '1'}, 500);
		jQuery(this).find('.zoom').animate({opacity : '0', top : '200px'}, 500 ,function(){ 
			jQuery(this).remove(); 
		});
		jQuery(this).find('.zoom').css({top: '-200px;'});
	});
	
	}
	get_overlay();	
	
	
	/* Prettyphoto	 */
	
function load_prettyphoto() {
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({theme: 'light_rounded',overlay_gallery: true });
		}
	load_prettyphoto(); 	
	


function portfolio_quicksand() {
		
		// Setting Up Our Variables
		var $filter;
		var $container;
		var $containerClone;
		var $filterLink;
		var $filteredItems
		
		// Set Our Filter
		$filter = $('.folio-filter li.active a').attr('class');
		
		// Set Our Filter Link
		$filterLink = $('.folio-filter li a');
		
		// Set Our Container
		$container = $('ul.filterable-grid');
		
		// Clone Our Container
		$containerClone = $container.clone();
		
		// Apply our Quicksand to work on a click function
		// for each for the filter li link elements
		$filterLink.click(function(e) 
		{
			// Remove the active class
			$('.filter li').removeClass('active');
			
			// Split each of the filter elements and override our filter
			$filter = $(this).attr('class').split(' ');
			
			// Apply the 'active' class to the clicked link
			$(this).parent().addClass('active');
			
			// If 'all' is selected, display all elements
			// else output all items referenced to the data-type
			if ($filter == 'all') {
				$filteredItems = $containerClone.find('li'); 
			}
			else {
				$filteredItems = $containerClone.find('li[data-type~=' + $filter + ']'); 
			}
			
			// Finally call the Quicksand function
			$container.quicksand($filteredItems, 
			{
			
	// The Duration for animation
				duration: 1000,
				// the easing effect when animation
				easing: 'easeInOutQuint',
				// height adjustment becomes dynamic
				adjustHeight: 'dynamic' 

			},
			function () {
				 load_prettyphoto(); 
				 get_overlay();
				 }
			);
							
		});
	}
		
	if(jQuery().quicksand) {
		portfolio_quicksand();	
	}
		

});