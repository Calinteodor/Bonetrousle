n = 12, k = 8, b = 3;
// sticks, stick box sizes, boxes
function bonetrousle(n, k, b) {
    //max represents the value of the last k elements
    //min represent the value of the first k elements
    let max = 0;
    let min = b * (b + 1) / 2;
    let sum = 0;
    // k-b+1 is the last element
    for (let i = k-b+1; i <= k; i++) {
        max = max + i
    }
    if (n < min || n > max) {
        return [-1];
    }

    let start = [];
    for (let i = 1; i <= b; i++) {
        start.push(i);
        sum =+ i;
    }

    if (sum === n) {
        return start;
    }
//b-1 starts from last box
    for (let i = b-1; i >= 0; i--) {
        for (let j = start[i] + 1; j <= k - b + i + 1; j++) {
            start[i] = j;
            sum = 0;
            for (let m = 0; m < b; m++) {
                sum = sum + start[m];
            }
            if (sum === n) {
                return start;
            }
        }
    }
}

bonetrousle(n,k,b);