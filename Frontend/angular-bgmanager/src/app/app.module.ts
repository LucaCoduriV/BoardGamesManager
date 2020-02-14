import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { GamelistComponent } from "./components/gamelist/gamelist.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SurveyComponent } from './components/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SearchbarComponent,
    GamelistComponent,
    SearchResultComponent,
    CollectionComponent,
    LoginComponent,
    RegisterComponent,
    SurveyComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
