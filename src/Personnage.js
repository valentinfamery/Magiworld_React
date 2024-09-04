export class Personnage {
    constructor(niveau, force, agilite, intelligence, playerNumber,asset) {
      if (this.constructor === Personnage) {
        throw new Error("Cannot instantiate abstract class Personnage directly");
      }
      this.niveau = niveau;
      this.vie = niveau * 5;
      this.force = force;
      this.agilite = agilite;
      this.intelligence = intelligence;
      this.playerNumber = playerNumber;
      this.asset = asset;
    }
  
    // ---- Getters ----
  
    getNiveau() {
      return this.niveau;
    }
  
    getVie() {
      return this.vie;
    }
  
    getForce() {
      return this.force;
    }
  
    getAgilite() {
      return this.agilite;
    }
  
    getIntelligence() {
      return this.intelligence;
    }
  
    getPlayerNumber() {
      return this.playerNumber;
    }

    getAsset() {
      return this.asset;
    }
  
    // ---- Setters ----
  
    setNiveau(niveau) {
      this.niveau = niveau;
    }
  
    setVie(vie) {
      this.vie = vie;
    }
  
    setForce(force) {
      this.force = force;
    }
  
    setAgilite(agilite) {
      this.agilite = agilite;
    }
  
    setIntelligence(intelligence) {
      this.intelligence = intelligence;
    }
  
    setPlayerNumber(playerNumber) {
      this.playerNumber = playerNumber;
    }
  
    // ---- Class methods ----
  
    removeLife(damage) {
      const currentLife = this.getVie();
      console.log(`Joueur ${this.getPlayerNumber()} perd ${damage} points de vie`);
      this.setVie(currentLife - damage);
      if (this.getVie() <= 0) {
        console.log(`Joueur ${this.getPlayerNumber()} est mort`);
      }
    }
  
    addLife(health) {
      console.log(`Joueur ${this.getPlayerNumber()} utilise Soin et gagne ${health} en vitalité.`);
      this.setVie(this.getVie() + health);
    }
  
    addAgility(agility) {
      console.log(`Joueur ${this.getPlayerNumber()} utilise Concentration et gagne ${agility} en agilité.`);
      this.setAgilite(this.getAgilite() + agility);
    }
  
    // ---- Abstract methods ----
  
    cri() {
      throw new Error("Abstract method 'cri' must be implemented by subclass");
    }
  
    attackBase(p) {
      throw new Error("Abstract method 'attackBase' must be implemented by subclass");
    }
  
    attackSpecial(p) {
      throw new Error("Abstract method 'attackSpecial' must be implemented by subclass");
    }
  
    // ---- toString ----
  
    toString() {
      return `${this.cri()} je suis le ${this.constructor.name} Joueur ${this.getPlayerNumber()} niveau ${this.getNiveau()} je possède ${this.getVie()} de vitalité, ${this.getForce()} de force, ${this.getAgilite()} d'agilité et ${this.getIntelligence()} d'intélligence !`;
    }
  }
  