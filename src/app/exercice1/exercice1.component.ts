import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  public resultat: number = 0;

  majCompteur(event: { value: number }) {
    this.resultat = event.value;
  }

  constructor() {}

  ngOnInit() {}
}
