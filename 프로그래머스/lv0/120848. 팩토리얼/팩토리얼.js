function solution(n) {
  let ans = 1;
  for(let i = 1; i <= n; i++){
      ans *= i;
        if(ans === n){
        return i;
    }
      
      if(ans > n){
          return i - 1;
      }
  }
}

//다른 풀이
function solution(n) {
  let i = 1;
  let ans = 1;
  while (ans*i < n) {
      ans *=++i; //이 풀이의 뜻을 잘 모르겠음
  }
  return i;
}