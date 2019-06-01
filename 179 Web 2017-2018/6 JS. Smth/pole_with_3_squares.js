// alert('Hello');

// var div = document.createElement('div');
// document.addEventListener("DOMContentLoaded", ready);

Size_of_pole = 4;
Colors = ['yellow', 'green', 'blue', 'red']
window.onload = ready;

function create_block(N, pole) {	//N - size of pole
	x = Math.floor(Math.random() * N);
	y = Math.floor(Math.random() * N);
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

function create_block_XY(pole, x, y) {
	margin = Number(getComputedStyle($('.pole')[0]).margin.slice(0, -2));
	x -= margin;
	y -= margin;
	color = Colors[Math.floor(Math.random() * Colors.length)];
	block = document.createElement('div');
	pole.appendChild(block);
	block.className = 'block gen';
	block.style.backgroundColor = color;
	block.style.left = String(x) + 'px' ;
	block.style.top = String(y) + 'px';
}

function ready() {
	var pole = document.createElement('div');
	body.appendChild(pole);
	// pole.setAttribute('style', 'width: 50px; height: 50px; background-color: yellow');
	pole.className = 'pole indent';
	// block1 = document.createElement('div');
	// pole.appendChild(block1);
	// block1.className = 'block';
	// block1.setAttribute('style', 'background-color: green;');
	// block1.setAttribute('style', block1.getAttribute('style') + 'left: 150px;');
	// block1.style.left = '150px';
	// block1.style.backgroundColor = 'yellow';	
	for(var i = 0; i < 3; i++) {
		create_block(4, pole);
	}
	// console.log(block1.style);
	console.log($('.block'));
	blocks = $('.block');
	for (var i = 0; i < blocks.length; i++) {
		block = blocks[i];
		block.onclick = function() {
			// alert('I\'m a hero!');
			this.style.backgroundColor = 'black';
		};
	};
	
	pole.onclick = function(e) {
		console.log(e.clientX, e.clientY);
		create_block_XY(e.currentTarget, e.clientX, e.clientY);
	};
	
	// body.addEventListener("keydown", function(event) {
    // alert('smth');
  // });
	body.onkeydown = function() {
		block = $('.block')[0];
		block.style.left = Number(block.style.left.slice(0,-2)) + 50;
	}
}
