let cardGame = [
    {
        nLabel: "j",
        nValue: 11,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 0,
    },
    {
        nLabel: "Q",
        nValue: 12,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 0,
    },
    {
        nLabel: "K",
        nValue: 13,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 0,
    },
    {
        nLabel: "j",
        nValue: 11,
        eSuit: "diamonds",  
        isJoker: false,
        nGroupId: 1,
    },
    {
        nLabel: "Q",
        nValue: 12,
        eSuit: "hearts",
        isJoker: false,
        nGroupId: 1,
    },
    {
        nLabel: "K",
        nValue: 13,
        eSuit: "diamonds",
        isJoker: false,
        nGroupId: 1,
    },
    {
        nLabel: "A",
        nValue: 1,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 2,
    },
    {
        nLabel: 2,
        nValue: 2,
        eSuit: "spades",
        isJoker: true,
        nGroupId: 2,
    },
    {
        nLabel: 8,
        nValue: 3,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 2,
    },
    {
        nLabel: 9,
        nValue: 4,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 2,
    },
    {
        nLabel: 5,
        nValue: 5,
        eSuit: "clubs",
        isJoker: false,
        nGroupId: 3,
    },
    {
        nLabel: 6,
        nValue: 6,
        eSuit: "clubs",
        isJoker: false,
        nGroupId: 3,
    },
    {
        nLabel: 2,
        nValue: 2,
        eSuit: "diamonds",
        isJoker: true,
        nGroupId: 4,
    },
    {
        nLabel: 3,
        nValue: 3,
        eSuit: "diamonds",
        isJoker: false,
        nGroupId: 4,
    },
    {
        nLabel: 8,
        nValue: 8,
        eSuit: "diamonds",
        isJoker: false,
        nGroupId: 4,
    },
    {
        nLabel: 5,
        nValue: 5,
        eSuit: "hearts",
        isJoker: false,
        nGroupId: 5,
    },
    {
        nLabel: 6,
        nValue: 6,
        eSuit: "hearts",
        isJoker: false,
        nGroupId: 5,
    },
    {
        nLabel: "K",
        nValue: 13,
        eSuit: "clubs",
        isJoker: false,
        nGroupId: 5,
    },
    {
        nLabel: 6,
        nValue: 6,
        eSuit: "clubs",
        isJoker: false,
        nGroupId: 6,
    },
    {
        nLabel: 8,
        nValue: 8,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 6,
    },
    {
        nLabel: 7,
        nValue: 7,
        eSuit: "diamonds",
        isJoker: false,
        nGroupId: 6,
    },
    {
        nLabel: 10,
        nValue: 10,
        eSuit: "diamonds",
        isJoker: false,
        nGroupId: 6,
    },
    {
        nLabel: "A",
        nValue: 1,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 7,
    },
    {
        nLabel: "Q",
        nValue: 12,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 7,
    },
    {
        nLabel: "K",
        nValue: 13,
        eSuit: "spades",
        isJoker: false,
        nGroupId: 7,
    },
];



cardGame.sort((a, b) => {
    return a.nGroupId - b.nGroupId;
});

let k = 0;

while (k !== cardGame.length) {
    let arrObj = [];
    for (let j = 0; j < cardGame.length; j++) {
        if (k === cardGame[j].nGroupId) {
            arrObj.push(cardGame[j]);
        }
    }
    if (arrObj.length === 0) {
        break;
    }


    
    for (let i = 0; i < arrObj.length; i++) {
        if (arrObj[i].nValue === 13) {
            for (let j = 0; j <arrObj.length; j++) {
             if (arrObj[j].nValue ===1) {
                arrObj[j].nValue = 14;
             }     
            }
        } 
    }
    
    arrObj.sort((a, b) => {
        return a.nValue - b.nValue;
    });

    console.log("sorted",arrObj);
    let cNvalue = arrObj[0].nValue;
    let cEsuit = arrObj[0].eSuit;
    let sequence = true;
    let sum = 0;

    for (let a = 0; a < arrObj.length; a++) {
        if (cNvalue != arrObj[a].nValue || cEsuit != arrObj[a].eSuit) {
            sequence = false;
            break;
        }
        cNvalue++;
    }

    if (sequence === false) {
        for (let a = 0; a < arrObj.length; a++) {
            if ((arrObj[a].nValue > 10 || arrObj[a].nValue === 1) && arrObj[a].isJoker === false) {
                sum += 10;
            }
            else if (arrObj[a].nValue <= 10 && arrObj[a].isJoker === false) {
                sum += arrObj[a].nValue;
            }
            else{
                sum += 0;
            }
            
        }
    } else {
        sum += 0;
    }
    
    
    
    // console.log(arrObj);
    console.log(sum);
    k++;
}

// Demo 2:-
// - create one array
// - store all this value as explain
// - check sequence group wise
// - check total score group wise as explained
// - if joker then value will be 0

// e.g for values:-
// {
//         "nLabel": 4,
//         "nValue": 4,
//         "eSuit": "s",
//         "isJoker": false,
//         "nGroupId": 0
//     },




