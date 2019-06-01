const Ball_size = 100;
const V_ball = 100;	// px per sec

var x, y, next_x, next_y;
var $ball, $body;

function ball_move($ball, x, y) {
	x_center = Math.round(x - Ball_size / 2);
	y_center = Math.round(y - Ball_size / 2); 
	// $ball.css('left', x_center); 
	// $ball.css('top', y_center);
	$ball.animate(
		{left: x_center, top: y_center}
	);
	// $ball.animate({top: y_center});
}


window.onload = function() {

	$body = $(document.body);
	x = Math.floor($body.width() / 2);
	y = Math.floor($body.height() / 2);
	$ball = $('<div>').addClass('ball').appendTo($body);

	$body.click (function(e) {
		next_x = e.clientX;
		next_y = e.clientY;

		ball_move($ball, next_x, next_y);
	});



	// function click_point(e) {
	// 	console.log(e);
	// }
}