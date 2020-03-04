import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SurveyComponent } from "./components/survey/survey.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { CreateSurveyComponent } from "./components/create-survey/create-survey.component";
import { AdminComponent } from "./components/admin/admin.component";
import {
    AuthGuardService,
    AdminGuardService
} from "./services/auth-guard.service";

const routes: Routes = [
    { path: "survey", component: SurveyComponent },
    {
        path: "collection",
        component: CollectionComponent,
        canActivate: [AuthGuardService]
    },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "search-result", component: SearchResultComponent },
    {
        path: "create-survey",
        component: CreateSurveyComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [AdminGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
