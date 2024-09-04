import {Personnage} from './Personnage';
export class Mage extends Personnage {
    constructor(niveau, force, agilite, intelligence, playerNumber,asset) {
      super(niveau, force, agilite, intelligence, playerNumber,asset);
      this.defaultLife = niveau * 5;
    }
  
    // ---- Class methods ----
  
    cri() {
      return "Abracadabra";
    }
  
    attackBase(p) {
      const damage = this.getIntelligence();
      console.log(`Joueur ${this.getPlayerNumber()} utilise Boule de Feu et inflige ${damage} dommages.`);
      p.removeLife(damage);
    }
  
    attackSpecial(p) {
      let health = this.getIntelligence() * 2;
      if (this.getVie() + health >= this.defaultLife) {
        health = this.defaultLife - this.getVie();
      }
      this.addLife(health);
    }
  }
  