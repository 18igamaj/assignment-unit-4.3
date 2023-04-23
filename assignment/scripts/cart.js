console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log('We set basket array');
function additem(item){
    console.log('This is what we have picked up:',item );
basket.push(item);
return basket;
}
additem('Banana');
additem('Apple');
additem('Melon');
additem('Cake');

function listItems(){
for(i=0; i<basket.length;i++){
    console.log('What do we got in our basket?:', basket[i]);
    console.log(basket[0]);
    console.log(basket[1]);
    console.log(basket[2]);
    console.log(basket[3]);
}
}
function empty(){
    if(empty<basket.length){
        return empty(reset);
    }
}