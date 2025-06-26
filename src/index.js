// module.exports ={
//     isLetter: function(){
//       value="1234";
//       return value;
//     }
// }


// //before refactor
// export function isLetter(){
//      const value="123";
//      return value

// }

// export function isEmail(){
//     const email="sumi@gmail.com"
//     return email;
// }

// export function isLength(){
//     const word ="hdc13546";
//     return word;
// }

//after refactor
export function isLetter(value) {
    return /^[a-zA-Z]+$/.test(value);
}

export function isEmail(value){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value);
}

export function isLength(value){
    const regex = /^([a-zA-Z0-9_-]){8,1000}$/;
    return regex.test(value);
}

