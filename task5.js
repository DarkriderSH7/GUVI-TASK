var request = new XMLHttpRequest;
request.open('GET', 'https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countryData=JSON.parse(this.response);
    var readData = JSON.parse(this.response);
    for(i in readData) {
    var lat = readData[i].latlng[0];
    var lon = readData[i].latlng[1];

    try
    {
        if(lat== null & lon == null) {
    throw new SyntaxError('Lattitude and longitude are not defined')
    }
    }
    catch(error){
    console.log("Name:"+ error.name);
    console.log("Message:" + error.message);
    console.log( "Stac:"+ error.stack );    
    }
}
 getweatherdata(lat,lon);
function getweatherdata(lat,lon){
    var weather = new XMLHttpRequest;
    weather.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c434e067489fc7becd7895f3807645ac',true);
    weather.send();
    weather.onload=fucntion();{
        var readweather=JSON.parse(this.response);
        for(i in readweather){
            var temp=readweather[i].temp;
            if(temp!=null){
                console.log(temp);
            }
        }

    }

}
