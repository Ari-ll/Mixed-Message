const msgs = {
astroMsg: ['Your sign is sun.','Fly to The Moon','jupiter is delicious'],
jokesMsg: ['My mother-in-law fell down a wishing well. I was amazed – I never knew they worked', 'I went to the zoo the other day. There was only a dog in it – it was a shihtzu.'],
motiMsg: ['You\'re the Best' ,'Never Quit', 'Chase Your Dreams' ]

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
const getRandMsg = Math.floor(Math.random() * msgs.length);
let msg =msgs[getRandMsg]
msgArr.splice(getRandMsg,1)

return document.write(msg)
}
getMsg(msgArr);
