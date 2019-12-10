/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort((a, b) => a - b );
    let middleStart;
    let middleEnd;

   	if (arr.length / 2 % 1) {
   	  middleStart = Math.floor(arr.length / 2);
   		middleEnd = middleStart + 1;
   	} else {
   	  middleStart = Math.floor(arr.length / 2) - 1;
   		middleEnd = middleStart + 2;
   	}

    let middle = arr.slice(middleStart, middleEnd);
    if(middle.length===1) {
        return middle[0];
    } else {
        return (middle[0] + middle[1]) / 2;
    }
};