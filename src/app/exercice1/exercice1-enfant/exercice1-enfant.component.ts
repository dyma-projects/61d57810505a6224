import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() resultat: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addNumber() {
    this.compteur = ++this.compteur;
    this.resultat.emit({ value: this.compteur });
  }
  removeNumber() {
    this.compteur = --this.compteur;
    this.resultat.emit({ value: this.compteur });
  }
}
