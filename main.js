const msgs = {
astroMsg: [],
jokesMsg: [],
motiMsg: []
};


const getMsg = (arr) =>{
let randNum = Math.floor(Math.random() * msgArr.length);
return msgArr[randNum];
}