function LongJump(scoreObj, callbackFnc) {
    console.log(`\nStarting Long Jump...`);
    let color = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
    console.log(`Winner of the Long Jump is ${color}`);
    scoreObj[color] += 150;
    console.log(`Updated Score:`, scoreObj);
    setTimeout(() => {
      callbackFnc(scoreObj, AwardCeremony);
    }, 1000);
  }
  
  function HighJump(scoreObj, callbackFnc) {
    console.log(`\nStarting High Jump...`);
    let color = prompt('What color secured the highest jump?');
    if (color && ['red', 'yellow', 'green', 'blue'].includes(color)) {
      scoreObj[color] += 100;
      console.log(`Updated Score:`, scoreObj);
    } else {
      console.log(`Event was cancelled`);
    }
    setTimeout(() => {
      callbackFnc(scoreObj);
    }, 1000);
  }
  
  function AwardCeremony(scoreObj) {
    console.log(`\nStarting Award Ceremony...`);
    let scoreList = Object.entries(scoreObj).sort((a, b) => b[1] - a[1]);
    console.log(`Award Ceremony Results:`);
    console.log(`${scoreList[0][0].toUpperCase()} came first with ${scoreList[0][1]} points.`);
    console.log(`${scoreList[1][0].toUpperCase()} came second with ${scoreList[1][1]} points.`);
    console.log(`${scoreList[2][0].toUpperCase()} came third with ${scoreList[2][1]} points.`);
  }
  
  // Calling the OpeningCeremony to start the Sports Day
  OpeningCeremony();
  