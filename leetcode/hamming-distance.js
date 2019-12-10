var hammingDistance = function(x, y) {
    let samesies = toFixed((x ^ y).toString(2));
	let sameBits = [...samesies].filter(item => +item);
	return sameBits.length;
};

function toFixed(str){
	return '0000'.slice(0, 4 - str.length) + str;
}