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
  uniqueoperatorset=false;
  ans='0';
  multipleoperator=false;

  pressKey(key: string){
    if(key==='/' ||key==='+' ||key==='-' ||key==='*' ){
    const lastkey=this.maintext[this.maintext.length-1];
    if(this.uniqueoperatorset===true ){
      this.uniqueoperatorset=false;
      this.multipleoperator=true;
    }else{ this.operand1=parseFloat(this.maintext)
      this.operator=key;
      this.uniqueoperatorset=true;
    }
   
  }
  this.operand1=parseFloat(this.maintext);
    if(this.maintext.length === 40){
      return;
    }
      if(this.maintext==='0'||this.maintext==='NaN'||this.maintext==='ERROR'||this.maintext==='ERROR: RANGE EXCEDED'||this.maintext==='INVALID OPERATION'){
      this.maintext=key;
    }else{
      this.maintext +=key;
    }
    
  }
  ANS(){
    this.maintext=this.ans;

  }
  DELETE(){
   
    if (this.maintext.length===1 || this.maintext==='0'||this.maintext==='NaN'||this.maintext==='ERROR'||this.maintext==='ERROR: RANGE EXCEDED'||this.maintext==='INVALID OPERATION'){
      this.maintext='0';
    }else{
      this.maintext=this.maintext.substring(0,this.maintext.length-1);
    }
  }
  allclear(){
    this.maintext='0'
    this.uniqueoperatorset=false;
    this.multipleoperator=false;
  }
  reponse(){
    if(this.multipleoperator==true){
      if(eval(this.maintext)===Infinity){
        this.maintext='ERROR';
        this.ans='0'
      
      }
      this.maintext=eval(this.maintext);
      this.ans=this.maintext;
      if(this.maintext.length>20){
        this.maintext='ERROR: RANGE EXCEDED';
        this.ans='0'
        
      }
    }else{
      this.operand2=parseFloat(this.maintext.split(this.operator)[1]);
    if(this.operator === '/'){
      this.maintext=(this.operand1 / this.operand2).toString();  
      this.ans=this.maintext;
      if(this.maintext.length>20){
        this.maintext=this.maintext.substr(0,9);
        this.ans=this.maintext;
      }
      if (this.operand2 === 0){
        this.maintext='ERROR';
        this.ans='0'
      
      }
      
    }else if(this.operator === '*'){
      this.maintext=(this.operand1 * this.operand2).toString();
      this.ans=this.maintext;
      if(this.maintext.length>20){
        this.maintext='ERROR: RANGE EXCEDED';
        this.ans='0'
        
      }
      
    }else if(this.operator === '+'){
      this.maintext=(this.operand1 + this.operand2).toString();
      this.ans=this.maintext;
      if(this.maintext.length>20){
        this.maintext='ERROR: RANGE EXCEDED';
        this.ans='0'
      }
      
    }else if(this.operator === '-'){
      this.maintext=(this.operand1 - this.operand2).toString();
      this.ans=this.maintext;
      if(this.maintext.length>20){
        this.maintext='ERROR: RANGE EXCEDED';
        this.ans='0'
      }
      
    }
    else if(this.uniqueoperatorset===false){
      this.maintext=this.maintext;
    }
    else{
      this.maintext='INVALID OPERATION';
      this.ans='0'
  }
  this.uniqueoperatorset=false;
  this.multipleoperator=false;
    }
    

}
}
