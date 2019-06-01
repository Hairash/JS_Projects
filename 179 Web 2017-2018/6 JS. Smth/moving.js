// "use strict"

Size_of_pole = 4;
Colors = ['yellow', 'green', 'blue', 'red'];
Pole_arr = [];
hero_x = hero_y = 0;
hero = null;

window.onload = ready;

function create_hero(pole) {
	// step = Number(getComputedStyle(pole).width.slice(0, -2)) / N;
	block = document.createElement('div');
	pole.appendChild(block);
	block.className = 'block hero';
	block.style.left = hero_x;
	block.style.top = hero_y;
	hero = block;
}

function create_block(N, pole) {	//N - size of pole
	x = Math.floor(Math.random() * N);
	y = Math.floor(Math.random() * N);
	Pole_arr[x, y] = 1;
	color = Colors[Math.floor(Math.random() * Colors.length)];
	// alert(color);
	step = Number(getComputedStyle(pole).width.slice(0, -2)) / N;
	// alert(step);
	block = document.createElement('div');
	pole.appendChild(block);
	block.className = 'block';
	block.style.backgroundColor = color;
	block.style.left = x * step;
	block.style.top = y * step;
}

function ready() {
	for (i = 0; i < Size_of_pole; i++){
		for (j = 0; j < Size_of_pole; j++){
			Pole_arr[i, j] = 0;
		}
	}

	var pole = document.createElement('div');
	body.appendChild(pole);
	pole.className = 'pole indent';
	for(var i = 0; i < 3; i++) {
		create_block(4, pole);
	}

	create_hero(pole);
	
	// body.addEventListener("keydown", function(event) {
    // alert('smth');
  // });
	body.onkeydown = function(e) {
		switch (e.keyCode) {
		case 39:
			// if Pole_arr[hero_x][hero_y + 1]
			hero.style.left = Number(hero.style.left.slice(0,-2)) + 50;
			break;
		case 37:
			hero.style.left = Number(hero.style.left.slice(0,-2)) - 50;
			break;
		case 40:
			hero.style.top = Number(hero.style.top.slice(0,-2)) + 50;
			break;
		case 38:
			hero.style.top = Number(hero.style.top.slice(0,-2)) - 50;
			break;		
		}
	}
}
