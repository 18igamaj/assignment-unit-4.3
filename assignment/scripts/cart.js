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
};
};
listItems();

function empty(){
    basket.length = 0;
    console.log('You returned everything:', basket)
}
empty();