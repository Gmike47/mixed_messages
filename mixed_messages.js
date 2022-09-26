let randNum1 = Math.floor(Math.random() * 3);
let randNum2 = Math.floor(Math.random() * 3);
let randNum3 = Math.floor(Math.random() * 3);
let randNum4 = Math.floor(Math.random() * 3);
//console.log(randNum);

/*
const getMessage = num => {
    if (num === 1) {
        console.log("A squirrel’s front teeth never stop growing!")
    } else if (num === 2) {
        console.log('Squirrels may lose 25 percent of their buried food to thieves')
    } else if (num === 3) {
        console.log('Squirrels may pretend to bury a nut to throw off potential thieves')
    } else if (num === 4) {
        console.log('A newborn squirrel is about an inch long')
    } else {
        console.log('Squirrels don’t dig up all of their buried nuts, which results in more trees!')
    }
}

console.log(getMessage(randNum))
*/

const list1 = ['little shit', 'psycho', 'hero'];
const list2 = ['ran away from', 'charged right into', 'farted in the general direction of'];
const list3 = ['left us hanging', 'saved the day', 'stunked up the entire battlefield'];
const list4 = ['public hanging', 'a big sack of gold', 'deoderent'];

const mess = (num1, num2, num3, num4) => {
    return `Why it's the ${list1[num1]}, we can't beleive you ${list2[num2]} battle! You really ${list3[num3]}, and for that you'll get ${list4[num4]}`
}

console.log(mess(randNum1, randNum2, randNum3, randNum4))