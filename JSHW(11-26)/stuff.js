let benz = {
    _name: "AMG",
    _engine: "Supercharged V8",
    _power: "all the power",
    _topspeed: 200,
    set topspeed(newspeed) {
        if(typeof speed != "number") {
            console.log('not a number');
        } else {
            this._topspeed = speed;
        }
    },
    get topspeed () {
        return this._topspeed;
    }
}

let cats = {
    name: "Mr.Kitty",
    speed: "FAST",
    mood: "mean"
}

let benz_values = Object.values(benz);
let cats_values = Object.values(cats);

benz_values.forEach(x => {
    console.log(x);
});
cats_values.forEach(x => {
    console.log(x);
});
    
