/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var k = m - 1;
  var l = n - 1;
  var j = 1;
  while (l >= 0 && k >= 0) {
    if (nums1[k] < nums2[l]) {
      nums1[m + n - j] = nums2[l];
      l--;
      j++;
    }
    if (nums1[k] >= nums2[l]) {
      nums1[m + n - j] = nums1[k];
      k--;
      j++;
    }
  }

  return nums1;
};
//this is not succeed
