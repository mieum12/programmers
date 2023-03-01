function solution(numbers) {
    var answer = []
    // 모든 경우의 수를 구해서 배열에 넣기
    // for문을 두번 돌리기
    for(let i = 0 ; i < numbers.length; i ++) {
        for(let j = 0 ; j < numbers.length; j++) {
            if(i !== j) { //인덱스가 다른 것끼리 곱해야하니깐
                answer.push(numbers[i] * numbers[j])    
            }
        }
    }
    //모든 배열 중에 최댓값 출력
    return Math.max(...answer);
}