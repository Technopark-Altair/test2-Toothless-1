import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework2';

  firstOperand: number;
  secondOperand: number;
  operator1: string;
  operator2: string;
  result: boolean;
  errorMessage: string;

  doCalc(){
      if(this.firstOperand != null && this.secondOperand != null  && this.operator2 != null){
        if(this.operator1!='!'){
          if(this.operator2=='&&'){
            this.result = Boolean(this.firstOperand && this.secondOperand)
            this.errorMessage = 'Нет ошибок'
          }else if(this.operator2=='||'){
            this.result = Boolean(this.firstOperand || this.secondOperand)
            this.errorMessage = 'Нет ошибок'
          }
        }else if (this.operator1 =='!'){
          if(this.operator2=='&&'){
            this.result = !Boolean(this.firstOperand && this.secondOperand)
            this.errorMessage = 'Нет ошибок'
          }else if(this.operator2=='||'){
            this.result = !Boolean(this.firstOperand || this.secondOperand)
            this.errorMessage = 'Нет ошибок'
          }
        }
      }else if(this.firstOperand==null){
        this.errorMessage='Нет первого операнда!'
      }else if(this.secondOperand==null){
        this.errorMessage='Нет второго операнда!'
      }else if(this.operator2==null){
        this.errorMessage='Нет оператора действия!'
      }
    }
}