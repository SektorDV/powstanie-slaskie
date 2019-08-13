    const mid = window.innerWidth/2;
    export const parallax = (x, callback) => {
        
    if (window.innerWidth < 1000) {return}
    if (x - mid < 300 && x > mid) {
       return callback({X:-0.5})
    } else if (x - mid > -300 && x < mid) {
        return callback({X:0.5}) 
    } else if (x - mid < 500 && x > mid) {
        return callback({X:-1})
    } else if (x - mid > -500 && x < mid) {
        return callback({X:1})
    } else if (x - mid < 700 && x > mid) {
        return callback({X:-1.5})
    } else if (x - mid > -700 && x < mid) {
        return callback({X:1.5})
    } else if (x - mid < 900 && x > mid) {
        return callback({X:-2.5})
    } else if (x - mid > -900 && x < mid) {
        return callback({X:2.5})
    }

    }

