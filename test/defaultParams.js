// const hi = (name) => {
//     if(name === undefined){
//         name = 'user';
//     }
//     console.log('hi' , name);
// }
// hi('ali');

const hi = (name = 'user') => {
    console.log('hi' , name);
}
hi();