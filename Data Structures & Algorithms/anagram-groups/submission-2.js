class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let word of strs) {
            let count = new Array(26).fill(0);
            for (let char of word) {
                let idx = char.charCodeAt(0) - 97;
                count[idx]++;
            }
            if (!map[count]) {
                map[count] = [];
            }
            map[count].push(word);
        }
        return Object.values(map);
    }
}
