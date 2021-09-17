'use strict'

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

function deepFreeze(user){
    for (let key in user){
        let prop = user[key];
        if (typeof prop == 'object' && prop !== null){
            deepFreeze(prop);
        }
    }
    return Object.freeze(user);
}
// deepFreeze(user);
user.data.a = 101;
console.log(user);




