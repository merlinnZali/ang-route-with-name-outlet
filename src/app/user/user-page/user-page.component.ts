import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  template: `
  `,
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {

  constructor() {console.log("AAHERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE") }

  ngOnInit(): void {
    console.log("BBHERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE")
  }

}
