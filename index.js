// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    set diameter(d){
        this.radius = d / 2;
    }
    set circumference(c){
        this.radius = (c / Math.PI ) / 2;
    }
    set area(a){
        this.radius = Math.sqrt(a / Math.PI);
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return Math.PI * this.radius * 2;
    }
    get area(){
        return (this.radius ** 2) * Math.PI;
    }
     
}