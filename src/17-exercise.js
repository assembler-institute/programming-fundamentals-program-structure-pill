/**
 * BONUS EXERCISE
 *
 * Create a for loop that compares the current item (a)
 * in the array with the next item (b) and that:
 *
 * saves the current item (a) in the next item (b)
 * and the next item (b) in the current item (a)
 * if the current item is larger than the next item (a > b).
 *
 * Initial Array = [5, 4, 3, 2, 1]
 *
 * Step 1 in the loop = [|4, 5|, 3, 2, 1] changes |5 with 4|
 * Step 2 in the loop = [4, |3, 5|, 2, 1] changes |5 with 3|
 * Step 3 in the loop = [4, 3, |2, 5|, 1] changes |5 with 2|
 * Step 4 in the loop = [4, 3, 2, |1, 5|] changes |5 with 1|
 *
 * Final Array = [4, 3, 2, 1, 5]
 *
 * Note:
 * You will have to compare the current array index
 * with the next array index (i + 1).
 */

function exercise17() {
    let nums = [5, 4, 3, 2, 1];
    
    for(var i = 0;i < nums.length;i++)
    {
        if(nums[i] > nums[i+1])
        {
            let vi=nums[i];
            nums[i]=nums[i+1];
            nums[i+1]=vi;
        }
    }

    return nums;
}

module.exports = exercise17;
