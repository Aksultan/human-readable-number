module.exports = function toReadable (number) {
    let humanNumsSingles = {
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine"
    }

    let humanUniqueDoubles  = {
        10:"ten",
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        15:"fifteen",
        18:"eighteen",
        20:"twenty",
        30:"thirty",
        40:"forty",
        50:"fifty",
        80:"eighty"
    }

    let numtoStr = number + ''
    //human readable 🤡    
    let convDouble = (num)=>{
        let joinNum = Array.isArray(num)?num.join(""):num
        if(joinNum>10&&joinNum<20&&!humanUniqueDoubles[joinNum])return humanNumsSingles[joinNum[joinNum.length-1]]+"teen"
        if(humanNumsSingles[joinNum] || joinNum[0]==0)return humanNumsSingles[parseInt(joinNum)]
        if(humanUniqueDoubles[joinNum])return humanUniqueDoubles[joinNum]  
        return (humanUniqueDoubles[joinNum[0]+0]||(humanNumsSingles[joinNum[0]]+"ty"))+(parseInt(joinNum[1])?(" "+humanNumsSingles[joinNum[1]]):"")    
    }
    return number?number%100==0?humanNumsSingles[numtoStr[0]]+" hundred":(number>99?humanNumsSingles[numtoStr[0]]+" hundred "+(convDouble(numtoStr.slice(1))):convDouble(numtoStr)):"zero"
}
