/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    var ret = [];
    if (nums.length) {
	    for (let i = 0; i < nums.length - 1; i++) {
	    	let pivot = nums[i];
	    	let count = 0;
	    	for (let x = i + 1; x < nums.length; x++) {
	    		if (nums[x] < pivot) {
	    			count++;
	    		}
	    	}
	    	ret.push(count);
	    }
	    ret.push(0);
    }
    return ret;
};