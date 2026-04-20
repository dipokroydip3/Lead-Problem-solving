function findMedianSortedArrays(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let total = m + n;

    let i = 0, j = 0;
    let prev = 0, curr = 0;

    for (let count = 0; count <= Math.floor(total / 2); count++) {
        prev = curr;

        if (i < m && (j >= n || nums1[i] < nums2[j])) {
            curr = nums1[i];
            i++;
        } else {
            curr = nums2[j];
            j++;
        }
    }

    // যদি total even হয়
    if (total % 2 === 0) {
        return (prev + curr) / 2;
    } 
    // যদি total odd হয়
    else {
        return curr;
    }
}


console.log(findMedianSortedArrays([1, 3], [2]));
