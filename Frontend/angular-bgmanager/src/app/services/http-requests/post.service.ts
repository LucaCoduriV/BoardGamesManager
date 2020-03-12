import { Injectable } from "@angular/core";
import { User } from "src/app/objects/user";
import { retry, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ErrorsHandler } from "../errorsHandler.service";

@Injectable({
    providedIn: "root"
})
export class PostService {
    private loginUrl: string = "http://localhost:8081/login";
    private registerUrl: string = "http://localhost:8081/users";

    constructor(
        private http: HttpClient,
        private errorsHandler: ErrorsHandler
    ) {}

    getToken(username: string, password: string) {
        const user: User = {
            username: username,
            password: password
        };
        return this.http
            .post(this.loginUrl, user)
            .pipe(retry(3), catchError(this.errorsHandler.handleLoginError));
    }

    register(username: string, password: string) {
        const user: User = {
            username: username,
            password: password
        };
        return this.http
            .post(this.registerUrl, user, { responseType: "text" })
            .pipe(retry(3), catchError(this.errorsHandler.handleError));
    }
    addGame({ name, minPlayer, maxPlayer, duration, description }) {
        const addGameURL: string = `http://localhost:8081/users/${localStorage.getItem('idUser')}/games`; //prettier-ignore
        let body = {
            gameName: name,
            description: description,
            minAge: 1,
            minNbPlayer: minPlayer,
            maxNbPlayer: maxPlayer,
            duration: duration,
            creationDate: 1994,
            idUser: localStorage.getItem("idUser")
        };
        return this.http
            .post(addGameURL, body, { responseType: "text" })
            .pipe(retry(3), catchError(this.errorsHandler.handleError));
    }
}