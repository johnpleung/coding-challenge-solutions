function solution(N, S) {
	let rows = [];
	for (let i = 0; i < N; i++) {
		rows.push(new Row(i + 1, S));
	}
	let checkExprs = ['XOOOOOOOOX', 'XXXOOOOXXX'];
	let numTotal = 0;
	rows.forEach(row => {
		numTotal += Math.max(countPossibilities(checkExprs[0], row.reservedSeats), countPossibilities(checkExprs[1], row.reservedSeats));
	});
	return numTotal;
}

class Row {
    constructor (rowNum, S) {
        this.rowNum = rowNum; // 1-based
        this.reservedSeats = this.getReservedSeats(S);
    }
    getReservedSeats (reservedSeats){
        let expr = new RegExp(`${this.rowNum}[A-K]`, 'g');
        let matches = reservedSeats.match(expr);
        if (matches) {
        	return matches.map(match => {
        		return this.getColNum(match);
        	}).sort();
        } else {
        	return null;
        }
   
    }
    getColNum (seatNum) {
        // Returns a zero-based numeric index representing column number
        return seatNum.replace(this.rowNum, '').replace('J','I').replace('K', 'J').charCodeAt() - 65;
    }
}

function countPossibilities(expr, reservedSeats) {
	let row = [...expr];
	if (reservedSeats && reservedSeats.length){
		reservedSeats.forEach(colNum => {
			row[colNum] = 'X';
		});
		let seatsAvail = row.join('');
		let numPossibilities = seatsAvail.match(/OOOO/g) || [];
		return numPossibilities.length;
	} else {
		return 2;
	}
}