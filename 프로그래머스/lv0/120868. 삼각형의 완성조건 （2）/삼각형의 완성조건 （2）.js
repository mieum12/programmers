function solution(sides) {
    var answer = 0;
    
    //일단 둘중에 대소 나누기
    var max = Math.max(...sides)
    var min = Math.min(...sides)
    
    //예를들어 [3,6]일때
    // side에 가장 긴 변(6)이 있다면:들어갈 수 있는 i의 개수(4,5,6) 카운트
    for(let i =max-min+1 ; i <=max ; i++) {
        answer++
    }
    // 없다면 : i = 7,8
    for(let i =max+1 ; i <max+min ; i++) {
        answer++
    }
    
    return answer;
}