const vowel = ['a', 'e', 'i', 'o', 'u'];
const follow = ['a', 'y'];

function translate(sentence) {
	let letter_arr = sentence.split(" ");
	for (let i = 0; i < letter_arr.length; i++) {
		letter_arr[i] = move(letter_arr[i]);
	}
	return letter_arr.join(" ");
};

//isLetter
function isLetter(letter) {
	let Regx = /[a-z]/;
	if(Regx.test(letter)){
		return 1;
	} else {
		return 0;
	}
};

//move vowel
function move(str) {
  	let single_arr = str.split('');
  	let punctuation_arr = [];
  	let tmp_single_arr = single_arr.slice(0);  //cannot use tmp_single = single
  	let Upper = false;
  	if(/A-Z/.test(single_arr[0])) {
  		Upper = true;
  	}

	//take out the pun
  	if(isLetter(tmp_single_arr[tmp_single_arr.length-1]) == 0) {
  		punctuation_arr.push(tmp_single_arr.pop());
  	}

  	for (let i of single_arr) {
  		if (vowel.indexOf(i) >= 0) {
  			break;
  		}

  		let x = tmp_single_arr.shift();
		tmp_single_arr.push(x);
  	}

  	tmp_single_arr = tmp_single_arr.concat(follow).concat(punctuation_arr);
  	single_arr = tmp_single_arr;
  	if(Upper == true) {
  		str = single_arr.join("").toLowerCase().replace(/(\w)/,function(v){return v.toUpperCase()});
  	} else {
  		str = single_arr.join("");
  	}
  	
  	return str;
};

