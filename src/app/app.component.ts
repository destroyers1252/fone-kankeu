import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatrice';
  maintext='0';
  operand1=0;
  operand2=0;
  operator='';
  answered=false;
  operatorset=false;

  pressKey(key: string){
    if(key==='/' ||key==='+' ||key==='-' ||key==='X' ){
    const lastkey=this.maintext[this.maintext.length-1];
    if(lastkey==='/' ||lastkey==='+' ||lastkey==='-' ||lastkey==='X' ){
      this.operatorset=true;
    }
    if((this.operatorset)||(this.maintext==='')){
      return;
    }
    this.operand1=parseFloat(this.maintext)
    this.operator=key;
    this.operatorset=true;
  }
  this.operand1=parseFloat(this.maintext);
    if(this.maintext.length === 10){
      return;
    }
      if(this.maintext==='0'||this.maintext==='NaN'||this.maintext==='impossible de diviser par zéro'||this.maintext==='ERROR: RANGE EXCEDED'||this.maintext==='INVALID OPERATION'){
      this.maintext=key;
    }else{
      this.maintext +=key;
    }
    
  }
  allclear(){
    this.maintext='0'
    this.operatorset=false;
  }
  reponse(){
    this.operand2=parseFloat(this.maintext.split(this.operator)[1]);
    if(this.operator === '/'){
      this.maintext=(this.operand1 / this.operand2).toString();
      if(this.maintext.length>9){
        this.maintext=this.maintext.substr(0,9);
      }
      if (this.operand2 === 0){
        this.maintext='impossible de diviser par zéro';
      
      }
      
    }else if(this.operator === 'X'){
      this.maintext=(this.operand1*this.operand2).toString();
      if(this.maintext.length>9){
        this.maintext='ERROR: RANGE EXCEDED';
        
      }
      
    }else if(this.operator === '+'){
      this.maintext=(this.operand1+this.operand2).toString();
      if(this.maintext.length>9){
        this.maintext='ERROR: RANGE EXCEDED';
      }
      
    }else if(this.operator === '-'){
      this.maintext=(this.operand1-this.operand2).toString();
      if(this.maintext.length>9){
        this.maintext='ERROR: RANGE EXCEDED';
      }
      
    }
    else if(this.operatorset===false){
      this.maintext=this.maintext;
    }
    else{
      this.maintext='INVALID OPERATION';
  }
  this.operatorset=false;

}
}
