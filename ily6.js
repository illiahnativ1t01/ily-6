const arr = [
    -5,                        
    'Hello World',             
    true,                      
    { name: 'John' },          
    [1, 2, 3],                 
    function() { return 'hi'; }, 
    null,                      
    undefined,                 
    Symbol('symbol'),          
    new Date()                 
];

const newArrays = {};

for (let i = 0; i < arr.length; i++) {
let type = typeof arr[i]; 
    
if (arr[i] === null) {
type = 'null';
}
    
if (!newArrays[type]) {
newArrays[type] = [];
}
    
newArrays[type].push(arr[i]);
}

console.log(newArrays);
