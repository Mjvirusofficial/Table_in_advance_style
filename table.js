let num = parseInt(prompt("Enter the number which table you want:- "))

console.log("Please wait 5 second")

for(let i = 1; i <= 5; i++)
{
  setTimeout(function()       
     {
       console.log(i+"sec")
     },i*1000)
}

function table(){
console.log("\nStart printing table of "+num) 
for(let i = 1; i <= 10; i++){
let table = i * num;
setTimeout(function()
{ 
  console.log(`${num} X ${i} = ${table}`)
},i*1000);
}
}

setTimeout(table,6000)

