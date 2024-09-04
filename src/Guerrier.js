import {Personnage} from './Personnage';
export class Guerrier extends Personnage {
    constructor(niveau, force, agilite, intelligence, playerNumber,asset) {
      super(niveau, force, agilite, intelligence, playerNumber,asset);
    }
  
    // ---- Class methods ----
  
    cri() {
      return "Woarg";
    }
  
    attackBase(p) {
      const damage = this.getForce();
      console.log(`Joueur ${this.getPlayerNumber()} utilise Coup d'Epee et inflige ${damage} dommages.`);
      p.removeLife(damage);
    }
  
    attackSpecial(p) {
      const damage = this.getForce() * 2;
      const autoDamage = Math.floor(this.getForce() / 2);
      console.log(`Joueur ${this.getPlayerNumber()} utilise Coup de rage et inflige ${damage} dommages.`);
      p.removeLife(damage);
      this.removeLife(autoDamage);
    }
  }
  