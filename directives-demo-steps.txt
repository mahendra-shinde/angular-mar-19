1. Open VS Code, File->Open Folder
    choose desktop\projects

2. Open Terminal Terminal -> New

3. Create new angular project
    ng new directives-demo

4. Open "app.component.ts" file (directives-demo project)
    add "implements OnInit" to existing class
    add new function ngOnInit(){}

5. Modiy the component class:

    export class AppComponent implements OnInit {
    title = 'directives-demo';
    clsName: string;
    clsNames: Array<string>;

    ngOnInit() {
        this.clsName = 'style1';
        this.clsNames = ['style1', 'style2', 'style3'];
        }
    }

6. Open "app.component.html" page
    Delete all contents (empty file)

    Add following code:

    <div>
    <h2>Choose your style: </h2>
    <select name="stylechooser">
        <option *ngFor="let x of clsNames" [value]="x">{{x}}</option>
    </select>
    </div>


