import { Component, OnInit, ElementRef, Renderer, Directive } from '@angular/core';

@Directive(
  {
    selector: "[apply-border]"
  }
)
export class borderDirective {
  constructor(private ref: ElementRef, private render: Renderer) {
    render.setElementStyle(ref.nativeElement, 'border', '2pt solid red');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directives-demo';
  clsName: string;
  clsNames: Array<string>;

  ngOnInit() {
    this.clsName = 'style1';
    this.clsNames = ['style1', 'style2', 'style3'];
  }

  updateStyle(x: string): void {
    console.log("Updating Stylename! " + x);
    this.clsName = x;
  }
}
