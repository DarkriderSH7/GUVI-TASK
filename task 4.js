var request = new XMLHttpRequest;
request.open('GET', 'https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    
}

//Question 1
//const data=countryData.filter((x))=>{
//     return x.region==="Asia";
// };
// console.log(area);
//Question 2
// const data=countryData.filter((x))=>{
//     return x.popultation<200000

// };
// Question 3
// const details=readData.forEach(i=>{
// //     console.log(i.name);
//         console.log(i.capital);
//         console.log(i.flagurl);
// });
//QUESTION 4
//   let total=readData.reduce((acc,ele) => acc+ele.population,0);
// console.log(total);
//Question 5
//var readData = JSON.parse(this.response);
// const details=readData.forEach(i=>{
//     if(i.currencies[0].code==="USD")
// {
//  console.log(i.name);
// }});




