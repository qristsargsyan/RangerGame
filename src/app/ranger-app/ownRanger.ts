let point  = 8;
let player1 = 0;
let player2 = 0;

export abstract class Player{
    start(){
        alert('The rangers start fighting! ');
    }
    stop(){
        alert('The End!');
    }
}

export class Ranger extends Player{
   private _name1:string = "";
   private _name2:string = "";
    constructor(name:string,name2:string) {
        super();
        this._name1= name; 
        this._name2 = name2;        
    }
    stop(){
        if(this._name1=='Ranger1' && player1<=0)
        alert(`${this._name1} is died`);
        else if(this._name2 == 'Ranger2' && player2<=0)
        alert(`${this._name2} is died`);   
    }
    countPoint(){
      
        while(player1 >= 0 || player2 >= 0) {
            if(this._name1 == 'Ranger1' && this._name2 == 'Ranger2'){
           
               countPointsForPlayer1();
               alert(`${this._name1} result is ${player1}`);

               if(player1 <= 0){
                   this.stop();
                   break;
                }
               else{
                   countPointsForPlayer2();
                   alert(`${this._name2} result is ${player2}`);
                    if(player2<=0){
                       this.stop();
                       break;
                    }
            }
        } 
        else{
            alert('Wrong players');
        }                      
        }    
    }   

}

function countPointsForPlayer1(){
   player1 = point - Math.floor(Math.random() * 10) - 1;
}

function countPointsForPlayer2(){
    player2 = point - Math.floor(Math.random() * 10) - 1;
}

