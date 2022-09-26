import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pluck, switchMap } from 'rxjs';

interface UserDetail {
  id: number, name: string, mail: string
}

@Component({
  selector: 'app-user-details',
  template: `
  <h1>User Details</h1>
  <section *ngIf="user$ | async as user"> 
      <h4>{{user.name}}</h4>
      <h4>{{user.mail}}</h4>
      <h4>User Id: {{user.id}}</h4>
  </section>
`,
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {

  users: UserDetail[] = [{ id: 1, name: 'merlin', mail: 'merlin@gmail.com' },
  { id: 2, name: 'georges', mail: 'georges@gmail.com' },
  { id: 3, name: 'paul', mail: 'paul@gmail.com' }]

  user$!: Observable<UserDetail | undefined>

  constructor(/*private http: HttpClient,*/ private route: ActivatedRoute) {
    console.log("CCCHERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE")
  }

  ngOnInit(): void {
    this.user$ = this.route.params.pipe(
      map(p => {
        return this.users.find(userInfo => userInfo.id === Number(p['id']))
      } )
    )
    //const routeParams = this.route.snapshot.paramMap;
    //const productIdFromRoute = Number(routeParams.get('id'));

    /*this.route.queryParams.subscribe(params => {
      const id = params['id'];
    });*/

    /*this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );*/

  }

}
