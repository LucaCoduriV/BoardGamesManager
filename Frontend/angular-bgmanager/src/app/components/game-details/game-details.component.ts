import {
    Component,
    OnInit,
    OnChanges,
    SimpleChanges,
    Input,
    OnDestroy
} from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-game-details",
    templateUrl: "./game-details.component.html",
    styleUrls: ["./game-details.component.scss"]
})
export class GameDetailsComponent implements OnInit, OnDestroy {
    @Input() isCollection: boolean = false;

    placeholder =
        "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png";

    replaceString: string;

    constructor(private gameService: GameService, private router: Router) {}

    ngOnInit() {}

    placeHolder() {
        if (this.isCollection) {
            this.gameService.addGamePlaceHolder = {
                name: this.gameService.detailedGameData[0].name,
                creationDate: this.gameService.detailedGameData[0].creationDate,
                description: this.gameService.detailedGameData[0].description,
                duration: this.gameService.detailedGameData[0].duration,
                minNbPlayer: this.gameService.detailedGameData[0].minNbPlayer,
                maxNbPlayer: this.gameService.detailedGameData[0].maxNbPlayer,
                image: this.gameService.detailedGameData[0].image,
                minAge: this.gameService.detailedGameData[0].minAge
            };
        }
        if (!this.isCollection) {
            this.gameService.addGamePlaceHolder = {
                name: this.gameService.detailedGameData["item"].name.value
                    ? this.gameService.detailedGameData["item"].name.value
                    : this.gameService.detailedGameData["item"].name[0].value,
                creationDate: this.gameService.detailedGameData["item"]
                    .yearpublished.value,
                description: this.gameService.detailedGameData["item"]
                    .description,
                duration: this.gameService.detailedGameData["item"].playingtime
                    .value,
                minNbPlayer: this.gameService.detailedGameData["item"]
                    .minplayers.value,
                maxNbPlayer: this.gameService.detailedGameData["item"]
                    .maxplayers.value,
                image: this.gameService.detailedGameData["item"].image,
                minAge: this.gameService.detailedGameData["item"].minAge
            };
        }
    }

    edit() {
        this.gameService.isEdit = true;
        this.placeHolder();
        this.router.navigate(["/add-game"]);
    }

    add() {
        this.gameService.isEdit = false;
        this.placeHolder();
        this.router.navigate(["/add-game"]);
    }

    ngOnDestroy() {
        this.gameService.detailedGameData = null;
    }
}
