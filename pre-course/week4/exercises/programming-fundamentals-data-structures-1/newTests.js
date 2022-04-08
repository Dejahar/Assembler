function exercise09() {
    const cities = ['Barcelona', 'Sevilla', 'Tarragona', 'Berlin', 'Paris'];
    let nameLengths = [];

    // Write your solution bellow this line
    cities.map((e)=>{console.log('Hello');
        if(e.length < 8){
            nameLengths.push("short name");
        }else{
            nameLengths.push("long name");
        }
    });
 
    nameLengths.map((e) =>{
        return console.log(e);
    })

    // Don’t change the code bellow this line
    return {
        cities: cities,
        nameLengths: nameLengths,
    };
}