    const mid = window.innerWidth/2;
    export const parallax = (x, callback) => {
        
    if (x - mid < 300 && x > mid) {
       return callback({X:-10})
    } else if (x - mid > -300 && x < mid) {
        return callback({X:10}) 
    } else if (x - mid < 500 && x > mid) {
        return callback({X:-20})
    } else if (x - mid > -500 && x < mid) {
        return callback({X:20})
    } else if (x - mid < 700 && x > mid) {
        return callback({X:-30})
    } else if (x - mid > -700 && x < mid) {
        return callback({X:30})
    } else if (x - mid < 900 && x > mid) {
        return callback({X:-40})
    } else if (x - mid > -900 && x < mid) {
        return callback({X:40})
    }
}

