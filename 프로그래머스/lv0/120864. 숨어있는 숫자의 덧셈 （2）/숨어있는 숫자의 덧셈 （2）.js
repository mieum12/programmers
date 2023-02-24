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

//다른 풀이1
// function solution(my_string) {
//   return my_string.split(/[^0-9]/).reduce((acc, cur) => acc + Number(cur), 0);
// }

//다른풀이2
// function solution(my_string) {
//   let result = 0;
//   for (let i = 0; i < my_string.length; i++) {
//     let thisNum = '';
//     while (!Number.isNaN(Number(my_string[i]))) {
//       thisNum += my_string[i];
//       i++;
//     }
//     result += +thisNum;
//   }
//   return result;
// }
