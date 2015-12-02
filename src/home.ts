/**
 * Created by MTA on 11/28/2015.
 */

import {Component, View} from "angular2/angular2"

@Component({
    selector : "home"
})

@View({
    templateUrl : "../Templates/home.tpl.html"
})

export class Home{
    public randomNumber:number = 0;
    constructor(){
        this.getNewRandomNumber();
    }


    public getNewRandomNumber():void {
        this.randomNumber = parseInt(Math.random() * 100);
    };
}