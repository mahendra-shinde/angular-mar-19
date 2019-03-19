## HTTP Client demo

1.  Create new Angular project
  ```
    ng new http-demo
  ```

2.  Open "app.component.ts" file
  ```  
    export class AppComponent {
      title = 'http-demo';
      data: any;

      constructor(private http: HttpClient) { }

      makeRequest() {
        this.http.get('https://jsonplaceholder.typicode.com/posts/1')
          .subscribe(data => {
            this.data = data;
          });
      }
    }
  ```
3.  Open "app.component.html" file
    ```
    <div>
      <h2>Basic Request</h2>
      <button type="button" (click)="makeRequest()">Make Request</button>

      <pre>{{data | json}}</pre>

    </div>
    ```
4.  Open "app.module.ts" and add new import 
  ```
      imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
    ],
  ```
