class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;
        let count = new Array(26).fill(0);
        
        for (let i = 0; i < s.length; i++) {
            let idx1 = s.charCodeAt(i) - 97;
            count[idx1]++;

            let idx2 = t.charCodeAt(i) - 97;
            count[idx2]--;
        }

        for (let i = 0; i < 26; i++) {
            if (count[i] !== 0) return false;
        }

        return true;
    }
}
