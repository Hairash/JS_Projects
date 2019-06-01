alert('wow!');

N = 5;

function calc_24_5() {
	Max = 1;
	for(i = 0; i < N; i++) {
		Max *= 10;
	};
	for(num = 0; num < Max; num++) {
		num_arr = get_num_arr(num);
	}
}

function get_num_arr(num) {
	arr = []
	while(num){
		digit = num % 10;
		arr.push(digit);
		num = num / 10;
	}
}