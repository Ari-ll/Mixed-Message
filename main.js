const msgs = {
astroMsg: ['astro'],
jokesMsg: ['joke', 'joke 2'],
motiMsg: ['moti']
};

let msgArr = [];
const loopthrouh = arrObj =>{
for(let i = 0; i < arrObj.length;i++ ){
msgArr.push(arrObj[i]);
}
return msgArr
}

loopthrouh(msgs.astroMsg)
loopthrouh(msgs.motiMsg)
loopthrouh(msgs.jokesMsg)


const getMsg = (msgs) =>{
const getRandMsg = Math.floor(Math.random * msgs.length);


}
getMsg(msgs)