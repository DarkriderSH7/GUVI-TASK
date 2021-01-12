var request = new XMLHttpRequest;
request.open('GET', 'https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var readData = JSON.parse(this.response);
    for(i in readData){
        console.log(readData[i].name);
    }
}