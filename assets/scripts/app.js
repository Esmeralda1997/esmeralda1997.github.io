const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "C++",
				weight: 10
			}, {
				text: "CSS",
				weight: 9
			}, {
				text: "JavaScript",
				weight: 12
			}, {
				text: "SQL",
				weight: 15
			}, {
				text: "Math",
				weight: 10
			}, {
				text: "Python",
				weight: 8
			}, {
				text: "HTML",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 100});		  
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 1500;
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "am a full-time student for life.", "teach programming and mentor programmers.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "white", "background-color": "#d1bfa7"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
