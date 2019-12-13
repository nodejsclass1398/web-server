// shorthand property

// const name = 'ali';
// const userAge = 30;

// const person = {
//     name,
//     userAge ,
//     city : 'tehran'
// };
// console.log(person);



// const name = product.name;
// const model = product.model ;
// const playstationRating = product.rating;

// const {name , model , rating : playstationRating , size = 1} = product;

// console.log(name);
// console.log(model);
// console.log(playstationRating);
// console.log(size);
const product = {
    name : 'playstation' , 
    model : 4 ,
    rating : 5 ,
    company : 'sony' ,
    size : 10
};

const test = (type , {name , model} = {}) => {
    console.log(type);
    console.log(name);
    console.log(model);
};

test('ps4');


