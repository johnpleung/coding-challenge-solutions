function solution(N) {
	let binVal = N.toString(2);
	let gaps = binVal.match(/1(0+)1/g);
	if (gaps) {
		return gaps.sort().pop().length - 2;
	}
	return 0;
}