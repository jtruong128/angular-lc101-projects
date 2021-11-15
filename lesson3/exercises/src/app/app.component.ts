import { style } from '@angular/animations';
import { ClassMethod } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  changeColor : string ;
  takeOffEnabled : boolean = false;
   
  takeOffBtn() {
      let takeOffclicked = window.confirm("Are you sure the shuttle is ready for takeoff?");
      if (takeOffclicked) {
         this.color= "blue";
         this.height = 10000;
         this.message = "shuttle in flight.";
         this.takeOffEnabled = true;
      }
   }

   landBtn() {
      let landBtnClicked = window.alert("The shuttle is landing. Landing gear engaged.");
      this.color = "green";
      this.height = 0;
      this.message = "The shuttle has landed";
          
   }

   abortBtn() {
      let abortBtnClicked = window.confirm("Confirm, do you want to abort the mission." );
      if(abortBtnClicked) {
           this.message = "Mission aborted";
           this.color = "red";
           this.height = 0;
      }
   }
   
   rocketWarning(edgeMove, direction) {
     // if (edgeMove > 330000) || edgeMove < "-20px" || edgeMove > "130px") {
       console.log(edgeMove);
       if (edgeMove > 130 && direction === "right") {
             this.color = "orange";
      } else if (edgeMove > 330000 && direction === "up") {
            this.color = "orange";
      }
   }

   moveRocket(rocketImage, direction) {
      if (direction === "right") {
          let movement = parseInt(rocketImage.style.left) + 10 + "px";
          rocketImage.style.left = movement;  
          //console.log(movement);
          this.rocketWarning(movement, direction);   
      }

      if (direction === "left") {
          let movement = parseInt(rocketImage.style.left) - 10 + "px";
          rocketImage.style.left = movement;
         // this.rocketWarning(movement);
      }

      if (direction === "up") {
         let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
         rocketImage.style.bottom = movement;
         this.height += 10000;
         this.rocketWarning(this.height, direction); 
      }


      if (direction === "down") {
        let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
        rocketImage.style.bottom = movement;
        this.height -= 10000;
     }
  }




}


