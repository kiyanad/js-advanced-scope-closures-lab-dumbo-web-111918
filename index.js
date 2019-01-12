function produceDrivingRange(block) {
  return function range(blockA, blockB){
       // debugger
    if ((Number(blockB.slice(0,2))
 - Number(blockA.slice(0,2))
) > block && block < 15) {
  // debugger
return '2 blocks out of range'  }
  else if ((Number(blockB.slice(0,2))
- Number(blockA.slice(0,2))
) < block && block < 10) {
    return 'within range by 4'
  }
else if ((Number(blockB.slice(0,2))
- Number(blockA.slice(0,2))
) < block && block < 25
 ) {
  return 'within range by 10'
  // debugger
}
else {
  return '10 blocks out of range'
}
}

}


function produceTipCalculator(amount) {
  return function tipCalc(tip){
    return tip * amount

  }
}

function createDriver(){
    let driverId = 0
  return class Driver {
  constructor(name) {
    debugger
    this.name = name;
    this.id = ++driverId;

  }
}

}
