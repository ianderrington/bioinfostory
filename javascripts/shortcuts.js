var controller = (function() {
    var setupEventListeners = function() {
        document.addEventListener('keydown', function(event) {
            // console.log(event.keyCode);
            // right arrows
            if (event.keyCode === 39) {
                next();
            };
            // left arrows
            if (event.keyCode === 37) {
                previous();
            };
        });        
    };
	var previous = function(){
		document.querySelector('.md-icon--arrow-back').click();
	}
	var next = function(){
		document.querySelector('.md-icon--arrow-forward').click();
	}
    return {
        init: function() {
            setupEventListeners();
        }
    };
})();

controller.init();


