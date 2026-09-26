class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let lmax = 0; 
        let rmax = 0
        let ans = 0;

        while (left < right) {
            lmax = Math.max(lmax, height[left]);
            rmax = Math.max(rmax, height[right]);

            if (lmax < rmax) {
                ans = ans + (lmax - height[left]);
                left++;
            } else {
                ans = ans + (rmax - height[right]);
                right--;
            }
        }
        return ans;
    }
}
