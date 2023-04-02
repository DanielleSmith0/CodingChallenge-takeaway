//We need an algorithm that causes the person to reapeatedly (via recursion) consider if their play will leave the next person with <= 1 stones. If num minus 2 = 1 || 0, minus 2, etc. with 3 and else 5. With each recursion, the number of stones is subtracted, depending on the number they chose and set as the new variable. 
//When the number of stones is <= 1, the recursion ceases and the number of recursions is checked to be divisible by 2. If yes, return true, if not, return false.

//Answer Walkthrough:

//Recursion method:
function canWin(n) {
    if (n < 2) {
        return false
    }

    let stoneTakes = [2,3,5]

    for (let i = 0; i < stoneTakes.length; i++) {
        let stoneTake = stoneTakes[i]

        if(n - stoneTake >= 0) {
            let recursiveCallResult = canWin(n - stoneTake)
            if(recursiveCallResult === false) {
                return true
            }
        }
    }

    return false
}

console.log(canWin(10))

//Recursion takes a lot to run and is not efficient for large numbers. This has an exponential runtime complexity.

//Or when you figure out the pattern, you can just do this:

function canWin2(n) {
    if (n % 7  < 2) {
        return false
    } else {
        return true
    }
}

for (let i = 0; i < 200; i++) {
    console.log('')
    // console.log('(canWin1) With ' + i + ': ' + canWin1(i))
    console.log('(canWin2) With ' + i + ': ' + canWin2(i))
}