function solution(n) {
    let i = 1;
    let ans = 1;
    while (ans*i < n) {
        ans *= ++i;
    }
    return i;
}