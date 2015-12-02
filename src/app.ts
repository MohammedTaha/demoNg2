/**
 * Created by MTA on 11/28/2015.
 */

import {Component, View} from "angular2/angular2";
import {Home} from "./home";
import {AboutUs} from "./aboutus";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";

@Component({
    selector: 'app'
})

@View({
    directives : [RouterOutlet, RouterLink],
    template : `
    <div class="container">
      <a [router-link] = "['/Home']">Home</a> | <a [router-link] = "['/AboutUs']">About Us</a>
      <router-outlet></router-outlet>
    </div>
    `
})
@RouteConfig([
    {path : "/", redirectTo : "/home"},
    {path : "/home", as : "Home", component : Home},
    {path : "/AboutUs", as : "AboutUs", component : AboutUs}
])


export class App{

}