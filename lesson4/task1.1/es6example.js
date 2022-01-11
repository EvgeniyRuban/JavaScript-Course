"use strict";
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(){
        this.price *= 0.75;
    }
}