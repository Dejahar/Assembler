/**
 * BONUS EXERCISE
 *
 * Create a for loop that compares the current item
 * in the array with the next item in the array and that:
 *
 * saves the current item in the next item
 * and the next item in the current item
 *
 * if the current item is larger than the next item.
 *
 * Initial Array = [5, 4, 3, 2, 1]
 *
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
    let currentItem;
    let nextItem;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i + 1];
        currentItem = nums[i];
        nextItem = nums[i + 1];
        if (currentItem > nextItem) {
            nums[i + 1] = nums[i];
            nums[i] = element;
        }
    }
    return nums;
}

module.exports = exercise17;




