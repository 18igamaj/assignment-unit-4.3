console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log('We set basket array');
function additem(item){
    console.log('his is what we have picked up:',item );
basket.push(item);
return basket;
}
additem('Banana');
additem('Apple');