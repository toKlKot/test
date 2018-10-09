import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KebabPageComponent} from './kebab-page/kebab-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {InfoKebabPageComponent} from './kebab-page/info-kebab-page/info-kebab-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {SingInComponent} from './sing-in/sing-in.component';
import {SingUpComponent} from './sing-in/sing-up/sing-up.component';



const appRoutes: Routes = [
  {path:'kebabs',component: KebabPageComponent, children: [
      {path:':id/:name',component: InfoKebabPageComponent}
    ]},
  {path:'',component: HomePageComponent},
  {path:'about', component: AboutUsComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'sing-in', component:SingInComponent},
  {path:'sing-up', component:SingUpComponent},
  {path:'**', redirectTo: '/kebabs'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
