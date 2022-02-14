var maxSubArray = function (nums) {
  var ans = nums[0];
  var sum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    ans = Math.max(nums[i], ans + nums[i]);
    sum = Math.max(sum, ans);
  }
  return sum;
};
