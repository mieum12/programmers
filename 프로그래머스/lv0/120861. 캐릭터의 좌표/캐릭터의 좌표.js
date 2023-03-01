function solution(keyinput, board) {
  var answer = [0,0];
    
  //키인풋에 맞게 좌표 바꾸기
  for (let i of keyinput) {
      //먼저 좌표이동에 대해
      //break 꼭 써줘야한다
      switch(i){
          case "right": answer[0]++; break;
          case "left": answer[0]--; break;
          case "up": answer[1]++; break;
          case "down": answer[1]--; break;
      }
      
      //보더의 범위 정해주고
      const boardRange = [Math.abs(Math.floor(board[0]/2)),Math.abs(Math.floor(board[1]/2))]
      //만약 범위 밖의 값이 나오면 수정
        if(Math.abs(answer[0])>boardRange[0]){
            answer[0] = answer[0] > 0 ? boardRange[0] : boardRange[0] * -1;
         }
        if(Math.abs(answer[1])>boardRange[1]){
            answer[1] = answer[1] > 0 ? boardRange[1] : boardRange[1] * -1;
        }
    }
  return answer;
}