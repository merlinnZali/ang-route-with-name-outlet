import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  template: `
  <div>
    <li *ngFor="let user of users">
      <a [routerLink]="['', {outlets: {details: ['users', user.id]}}]" class="link primary">
        <h4>{{user.name}}</h4>
      </a>
      <p>{{user.mail}}</p>
    </li>
  </div>
`,
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSidebarComponent implements OnInit {

  users = [{ id: 1, name: 'merlin', mail: 'merlin@gmail.com' },
  { id: 2, name: 'georges', mail: 'georges@gmail.com' },
  { id: 3, name: 'paul', mail: 'paul@gmail.com' }]
  constructor() { }

  ngOnInit(): void {
  }

}
