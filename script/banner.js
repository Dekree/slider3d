;(function($) {
	'use strict';
	$.fn.slider3d = function(params) {		
		var that = {},			
				toSmallH = 'h4Small',
				toSmallP = 'pSmall',
				barPanel = '',
				h4 = '.h4',
				p = '.p',
				h4After = 'h4SmallAfter',
				pAfter = 'pSmallAfter',
				px = '200px',
				size = '100%',
				selected = 'selected',
				auto = false,
				current = 1,
				duration = params.duration || 3000,
				bars = params.bars || 'on',
				cycleId = 1,
				barPanel = '',
				edges = params.edges;

		$('<div id="slider"></div>').appendTo(this);

		var edgeParams = function(index) {
			var regExp = /#(([A-Fa-f0-9]{6})|([A-Fa-f0-9]{3}))/,
					err = 'Error: Incorrect color on edge ' + index;
			if( index === 1 ) {
				var color = '#d00',	current = edges.first;
			}
			if( index === 2 ) {
				var color = '#dd0',	current = edges.second;
			}
			if( index === 3 ) {
				var color = '#999',	current = edges.third;
			}
			if( index === 4 ) {
				var color = '#04d',	current = edges.fourth;
			}
			if( index === 5 ) {
				var color = '#0dd',	current = edges.fifth;
			}
			if( index === 6 ) {
				var color = '#6a0',	current = edges.sixth;
			}
			if( current.color ) {
					if( current.color.match(regExp)[0] != current.color ) {
						console.error(err);
						current.color = color;
					}
					return current;
			} else {
				current.color = color;
				return current;
			}			
		};

		var createCubics = function() {			
			$('<div class="cubicSlider"></div>').appendTo('#slider');

			for( var i = 1; i <= 6; i++ ) {
				var classCube = 'e' + i,
						elem = '<div class="' + classCube + '"></div>',				
						content = edgeParams(i),
						h4Elem = '<h4 class="h4">' + content.header + '</h4>',
						pElem = '<p class="p">' + content.text + '</p>';
				$(elem).appendTo('.cubicSlider').css('background-color', content.color);
				$(h4Elem).appendTo('.' + classCube);
				$(pElem).appendTo('.' + classCube);
			}
		};
		var createBars = function() {
			$('<div id="bar-panel"></div>').appendTo('#slider');
			for( var i = 1; i <= 6; i++ ) {
				var id = 'b' + i;
				var elem = '<div id="' + id + '" class="bar"></div>';
				$(elem).appendTo('#bar-panel');
			}
			barPanel = $('#bar-panel .bar');
		};		

		var cubicSlide = function(num) {
			var anim = 'showE' + num,
					animAfter = 'showE' + num + 'After',
					slide = 'slide' + num,
					remove1,
					remove2,
					cubicSlider = $('.cubicSlider'),
					cubicSliderDiv = $('.cubicSlider div');

			

			for(var i = 1; i <= 6; i++) {
				remove1 = 'slide' + i;
				cubicSlider.removeClass(remove1);
			}
			$(h4).addClass(toSmallH).addClass(h4After).removeClass(toSmallH);
			$(p).addClass(toSmallP).addClass(pAfter).removeClass(toSmallP);
			cubicSlider.css({width: px, height: px}).addClass(anim);
			cubicSliderDiv.css({width: px, height: px, opacity: '0.9'});
			cubicSlider.addClass(animAfter).removeClass(anim);
			
			setTimeout(function() {
				for(var i = 1; i <= 6; i++) {
					remove2 = 'showE' + i + 'After';
					cubicSlider.removeClass(remove2);
				}
				
				cubicSlider.css({width: size, height: size}).addClass(slide);
				cubicSliderDiv.css({width: size, height: size, opacity: '1'});

				setTimeout(function() {
					$(h4).removeClass(h4After);
					$(p).removeClass(pAfter);
				}, 700);
			}, 1500);
		};

		var chooseBar = function(num, show) {
			if( show === 'on' ) {
				var id = '#b' + num;
				barPanel.each(function() {
					$(this).removeClass(selected);
				});
				$(id).addClass(selected);				
			}
		};

		var launch = function() {
			(function() {
				if( auto ) {
					if( current <= 6 ) {
						cubicSlide(current);					
						chooseBar(current, bars);
						current++;
						cycleId = setTimeout(launch, duration);
					}
					if( current >= 7 ) current = 1;
				}	else {
					return false;
				}					
			})();
		};

		var eventClick = function() {
			if( barPanel.slice().length != '' ) {
				barPanel.click(function(e) {
					for(var i = 1; i <= 6; i++) {
						var name = 'b' + i;
						if( e.target.id == name && e.target.className.indexOf(selected) == -1 ) {
							auto = false;
							current = i;
							auto = true;
							chooseBar(i, bars);
						}
					}			
				});
			}		
		};

		that.stop = function() {
			auto = false;
			clearInterval(cycleId);
		};
		
		that.start = function() {
			auto = true;
			current = 1;
			createCubics();
			createBars();
			eventClick();
			launch();
		};
		that.start();
		return that;
	};
})(jQuery);