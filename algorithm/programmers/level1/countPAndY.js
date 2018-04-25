function numPY(str){
    const strP = [...str.toLowerCase()].filter(s => s==='p').length;
    const strY = [...str.toLowerCase()].filter(s => s==='y').length;
    return strP === strY ? true : false
  }
  
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( numPY("pPoooyY") )
  console.log( numPY("Pyy") )