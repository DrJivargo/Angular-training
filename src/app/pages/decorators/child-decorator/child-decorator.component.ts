import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  imports: [],
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss'
})
export class ChildDecoratorComponent implements AfterContentInit {

  @ContentChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;
  @ContentChildren('paragraph') paragraphs!: QueryList<ElementRef<HTMLParagraphElement>>;


  public ngAfterContentInit() {
    console.log(this.paragraph);
    console.log(this.paragraphs);
  }
}

