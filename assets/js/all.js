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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaWRzID0gW1xuXHQgXCJfMlwiLCBcIl8zXCIsIFwiXzRcIiwgXCJfNVwiLCBcIl82XCIsIFwiXzdcIiwgXCJfOFwiLCBcIl85XCIsIFwiXzEwXCIsIFwiXzItMlwiLCBcIl8zLTJcIiwgXCJfNC0yXCIsIFwiXzUtMlwiLCBcIl82LTJcIiwgXG5dXG5cblxuZm9yICh2YXIgaSA9IGlkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBzZWxlY3RvciA9IGlkc1tpXTtcbiAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgc2VsZWN0b3IpKTtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiICsgc2VsZWN0b3IgKyAnLXJpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIiArIHNlbGVjdG9yICsgJy1yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgXHQgICAgICAgIFx0Y29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIiArIHNlbGVjdG9yICsgJy1yaWdodC1saW5lJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5hZGRDbGFzcygnYWN0aXZlLScrc2VsZWN0b3IpOyAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIgKyBzZWxlY3RvciArICctbGVmdCcpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIgKyBzZWxlY3RvciArICctbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCAgICAgICAgXHRjb25zb2xlLmxvZygnb25jbGlja2VkJylcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIgKyBzZWxlY3RvciArICctbGVmdC1saW5lJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5hZGRDbGFzcygnYWN0aXZlLScrc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIiArIHNlbGVjdG9yICsgJy10b3AnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiICsgc2VsZWN0b3IgKyAnLXRvcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ29uY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCAgICAgICAgXHRjb25zb2xlLmxvZygnb25jbGlja2VkJylcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIgKyBzZWxlY3RvciArICctdG9wLWxpbmUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLmFkZENsYXNzKCdhY3RpdmUtJytzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiICsgc2VsZWN0b3IgKyAnLWJvdHRvbScpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uXCIgKyBzZWxlY3RvciArICctYm90dG9tJykuYWRkRXZlbnRMaXN0ZW5lcignb25jbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0Y29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIiArIHNlbGVjdG9yICsgJy1ib3R0b20tbGluZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuYWRkQ2xhc3MoJ2FjdGl2ZS0nK3NlbGVjdG9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
