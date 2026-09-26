class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!this.isAlphaNumeric(s[left])) {
                left++;
                continue;
            } 
            if (!this.isAlphaNumeric(s[right])) {
                right--;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(char) {
        let lowerCase = char.toLowerCase();
        if ((lowerCase >= '0' && lowerCase <= '9') || (lowerCase >= 'a' && lowerCase <= 'z')) {
            return true;
        }
        return false;
    }
}
