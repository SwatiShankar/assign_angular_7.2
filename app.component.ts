import { Component } from '@angular/core';

export class User {
	id : number;
	name: string;
}

const USERS = [
  		{id : 1, name : "shruthi"},
  		{id : 2, name : "swati"},
  		{id : 3, name : "saleena"},
  		{id : 4, name : "Veda"}
  ];

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template : `<table>
  				<thead>
  					<th>Name</th>
  				</thead>
  				<tbody>
  					<tr *ngFor="let user of users">
  						<td>{{user.name}}</td>
  					</tr>
  				</tbody>`
})
export class AppComponent {
  //title = 'app works!';

 /* heroes = HEROES;
  selectedHero: Hero;*/
   users = USERS;
  // selectedUser
}