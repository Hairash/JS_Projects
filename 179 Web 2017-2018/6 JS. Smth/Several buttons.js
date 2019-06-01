Colors = ['yellow', 'green', 'blue', 'red'];
hero = undefined;

window.onload = function() {
	hero = document.createElement('div');
	body.appendChild(hero);
	hero.className = 'block hero';
}

var keys = [];
$(document).keydown(function(e){
    var code = e.which;
    if (keys.indexOf(code)<0){
        keys.push(code);
    }
    key_process(keys);
    // console.log(keys);
});

$(document).keyup(function(e){
  keys.splice(keys.indexOf(e.which),1);
  key_process(keys);
  // console.log(keys);
});

function key_process(keys) {
	switch(keys.join()) {
	case '39':
		// if Pole_arr[hero_x][hero_y + 1]
		hero.style.left = Number(hero.style.left.slice(0,-2)) + 50;
		break;
	case '37':
		hero.style.left = Number(hero.style.left.slice(0,-2)) - 50;
		break;
	case '40':
		hero.style.top = Number(hero.style.top.slice(0,-2)) + 50;
		break;
	case '38':
		hero.style.top = Number(hero.style.top.slice(0,-2)) - 50;
		break;	
	case '39,40':
	case '40,39':
		changeColor(hero);
	}
}

function changeColor(hero) {
	color = Colors[Math.floor(Math.random() * Colors.length)];
	hero.style.backgroundColor = color;
}