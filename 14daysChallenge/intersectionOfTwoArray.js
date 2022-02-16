/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var resultIntersect = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  var i = 0;
  var j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] === nums2[j]) {
      resultIntersect.push(nums1[i]);
      i++;
      j++;
    }
  }
  return resultIntersect;
};
