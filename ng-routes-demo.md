## Creating routes

1. Create new angular project

		ng new routes-demo

2. Create new child component
	```
	cd routes-demo
	ng g c contactus
	ng g c aboutus
	ng g c vacancies
	```

3.	Open contactus.component.html file

	Write address (dummy!!)

4.  Open aboutus.component.html file

	Write info about your website/company

5.	Open vacancies.component.html file

	List of vacancies

6. 	open app.component.html and replace existing contents with:
```
	<div>
  <h1>Example of Routing!</h1>

  <div>
    <a [routerLink]="['/contactus']">Contact Us</a>
    <a [routerLink]="['/aboutus']">About Us</a>
    <a [routerLink]="['/vacancies']">Vacancies</a>
  </div>

  <div>
    <!-- Placeholder for the child components!  -->
    <router-outlet></router-outlet>
  </div>
</div>```

7.	open "app.module.ts" and add new variable
```
	const routes: Routes = [
	  	{ path: 'contactus', component: ContactusComponent },
	  	{ path: 'aboutus', component: AboutusComponent },
	  	{ path: 'vacancies', component: VacanciesComponent }
		]
	```
8.	In same "app.module.ts" add new import clause:

	```
	imports: [
		 BrowserModule,
		 AppRoutingModule,
		 RouterModule.forRoot(routes)
	]
	 ```
