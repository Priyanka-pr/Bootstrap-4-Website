let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);
function inputMsg(){
    var name= prompt('Enter Name of Student');
    namasteBtn.textContent='Rol.No. 1:'+name;
}
// var time=prompt("What's the time:")
// if (time>5 && time<12){
//     alert("Good Morning")
// }
// else if(time>12 && time<17){
//     alert("Good Afternoon")
// }
// else if(time>17 && time<21){
//     alert("Good Evening")
// }
// else{
//     alert("Good Night")
// }
var fruittype=prompt("What's your favourite fruit:")
switch(fruittype){
    case 'Narangi':
        console.log('Narangi hai Rs.60 Per Kilo.');
        break;
    case 'Sabe':
        console.log('Sabe hai Rs.140 Per Kilo.');
}
console.log("Orr kuch?")
