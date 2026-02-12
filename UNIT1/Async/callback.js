// function aa(){
//     console.log("first");
// }
// setTimeout(()=>{
//     console.log("second");
// },5000)

// let count=0;
// let id=setInterval(()=>{
//     console.log("Hello World");
//     count++;
//     if(count==5){
//         clearInterval(id);
//     }
// },2000);

// function roll(num,delay,next){
//     setTimeout(()=>{
//         console.log("roll no is: "+num);
//         if(next) next();
//     },delay);
// }

// roll(12,2000,()=> {
//     console.log("completed");
//     roll(13,5000,()=> {
//         console.log("completed");
//         roll(15,7000,()=> {
//             console.log("completed");
//             roll(17);
//         });
//     }); 
// })

const uiteam=["Ayush","Rohit","Satyarth","Shivam"];
const flutterteam=["Arpit","Kritarth","Paaji","Kushagra"];
function showMenu(){
    console.log("UI Team: ",uiteam);
    console.log("Flutter Team: ",flutterteam);
    const teams=[...uiteam,...flutterteam];
    console.log("All teams: ",teams);
}
function displayTeam(option){
    switch(option){
        case 1:
            return uiteam;  
        break;
        case 2:
            return flutterteam;
        break;
        case 3:
            return [...uiteam,...flutterteam];
        break;  
        default:
            console.log("Invalid option");
    }
}
displayTeam(1);
displayTeam(2);
displayTeam(3);