import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
note=signal(false)
constructor(){
  setTimeout(() => {
this.note.set(true)
}, 5000);
}

}
