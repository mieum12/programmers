function solution(my_string) {
    let answer = 0
    for (let i = 0; i < my_string.length; i++) {
        let num = '' //1의자리 이상일때 숫자추가해서 하나의 숫자 만들기위해
        while (Number.isInteger(Number(my_string[i]))) { //정수면
            num += Number(my_string[i]) //숫자추가하기
            i++ //다음인덱스도 정수인지 확인해야하니까
        }
        answer += Number(num)
        // console.log(answer)
    } 
    return answer
}