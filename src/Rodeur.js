import {Personnage} from './Personnage';
export class Rodeur extends Personnage {
    constructor(niveau, force, agilite, intelligence, playerNumber,asset) {
      super(niveau, force, agilite, intelligence, playerNumber,asset);
    }
  
    // ---- Class methods ----
  
    cri() {
      return "Fsshhh";
    }
  
    attackBase(p) {
      const damage = this.getAgilite();
      console.log(`Joueur ${this.getPlayerNumber()} utilise Tir à l'Arc et inflige ${damage} dommages.`);
      p.removeLife(damage);
    }
  
    attackSpecial(p) {
      const agilityWon = Math.floor(this.getNiveau() / 2);
      this.addAgility(agilityWon);
    }
  }
  