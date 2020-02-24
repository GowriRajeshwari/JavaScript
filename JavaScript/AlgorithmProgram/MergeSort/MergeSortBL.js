
module.exports = {
    mergesort: (str1) => {
        var list = str1.split(" ");
        module.exports.mergesortDivide(list);
        return list;
    },
    mergesortDivide: (list, left, right) => {
        var sorted = [];
        if (list.length == 1) {
            sorted = list;
        } else {
            let mid = list.length/2;
            let left = null; 
            let right = null;
            if ((list.length % 2) == 0) {
                left = [];
                right = [];
            } else { 
                left = new String[list.length/2];
                right = new String[(list.length/2)+1];
            }
            let x=0;
            let y=0;
            for ( ; x < mid; x++) {
                left[x] = list[x];
            }
            for ( ; x < list.length; x++) {
                right[y++] = list[x];
            }
            left = mergeSort(left);
            right = mergeSort(right);
            sorted = mergeArray(left,right);
        }

        return sorted;
    },
    domerge: (left,right) => {
        var merged = [];
        let lIndex = 0;
        let rIndex = 0;
        let mIndex = 0;
        let comp = 0;
        while (lIndex < left.length || rIndex < right.length) {
            if (lIndex == left.length) {
                merged[mIndex++] = right[rIndex++];
            } else if (rIndex == right.length) {
                merged[mIndex++] = left[lIndex++];
            } else {  
                comp = left[lIndex].localeCompare(right[rIndex]);
                if (comp > 0) {
                    merged[mIndex++] = right[rIndex++];
                } else if (comp < 0) {
                    merged[mIndex++] = left[lIndex++];
                } else { 
                    merged[mIndex++] = left[lIndex++];
                }
            }   
        }
        return merged;
}
}