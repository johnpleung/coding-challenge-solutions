// https://edabit.com/challenge/SNornDmdQ7ZJngoTn

Array.prototype.compact = function() {
	let newArr = [];
	this.forEach(val => {
		if ((val || val === 0 || val === false)  && !newArr.includes(val)) {
			newArr.push(val);
		}
	});
	return newArr;
}