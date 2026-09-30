class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        //create a hashmap to store the value and index of each element in the array
        const indices ={}
        // iterate through the array and compute the completent of the current element, which is target-nums[i]
        for(let i =0; i < nums.length; i++){
            indices[nums[i]] = i
        }
        for(let i=0; i < nums.length; i++){
            let diff = target - nums[i]
        //check if the compliment exists in the hash map
        if (indices[diff]!== undefined && indices[diff]!== i){
        //If it does, retrun the indices of the current element an its compliment
            return [i, indices[diff]]
        }
        }
        // if no such paid is found return empty array
        return []
    }

}
