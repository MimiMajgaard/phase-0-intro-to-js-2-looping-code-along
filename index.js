function writeCards(names, event){
    const customMessage = [];
    for (let i = 0; i < names.length; i++) {
        const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        customMessage.push(thankYouMessage);
    }
    return customMessage;
}


function countDown(startNum){
    var i = startNum;
    while(i >= 0){
        console.log(i);
        i--;
    }
}
