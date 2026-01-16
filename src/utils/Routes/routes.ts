import { Routes } from "@angular/router";
import { PropertyCardBoxComponent } from "../../app/property-card-box/property-card-box.component";
import { AboutComponent } from "../../app/about/about.component";
import { PropertyDetailsComponent } from "src/app/property-details/property-details.component";

const routeConfig: Routes = [
    { path: "", component: PropertyCardBoxComponent, title: "Home Page" }, {
        path: "about", component: AboutComponent, title: "About Page"
    },
    // {path : "details", component : PropertyDetailsComponent, title: "Each Property Details Page"}, 

    { path: "details/:id", component: PropertyDetailsComponent, title: "Each Property Details Page" }
];

// note : DON'T ADD / IN PATH

export default routeConfig;