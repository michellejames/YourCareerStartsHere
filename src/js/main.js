var ids = [
	 "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10", "_2-2", "_3-2", "_4-2", "_5-2", "_6-2", 
]


for (var i = ids.length - 1; i >= 0; i--) {
    var selector = ids[i];
    // console.log(document.querySelector("#" + selector));
    if(document.querySelector(".button" + selector + '-right')) {
        document.querySelector(".button" + selector + '-right').addEventListener('onclick', function() {
        	        	console.log('clicked')
            document.querySelector(".button" + selector + '-right-line').addClass('active');
            document.querySelector("svg").addClass('active-'+selector);    
        });
    }
    if(document.querySelector(".button" + selector + '-left')) {
        document.querySelector(".button" + selector + '-left').addEventListener('onclick', function(){
        	        	console.log('onclicked')
            document.querySelector(".button" + selector + '-left-line').addClass('active');
            document.querySelector("svg").addClass('active-'+selector);
        });
    }
    if(document.querySelector(".button" + selector + '-top')) {
        document.querySelector(".button" + selector + '-top').addEventListener('onclick', function(){
        	        	console.log('onclicked')
            document.querySelector(".button" + selector + '-top-line').addClass('active');
            document.querySelector("svg").addClass('active-'+selector);
        });
    }
    if(document.querySelector(".button" + selector + '-bottom')) {
        document.querySelector(".button" + selector + '-bottom').addEventListener('onclick', function(){
        	console.log('clicked')
            document.querySelector(".button" + selector + '-bottom-line').addClass('active');
            document.querySelector("svg").addClass('active-'+selector);
            console.log(document.querySelector("svg"));
        });
    }
}