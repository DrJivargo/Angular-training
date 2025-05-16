import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-fiolet',
  imports: [],
  templateUrl: './fiolet.component.html',
  styleUrl: './fiolet.component.scss'
})
export class FioletComponent implements AfterContentInit {

  @ContentChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;
  @ContentChildren('paragraph') paragraphs!: QueryList<ElementRef<HTMLParagraphElement>>;


  public ngAfterContentInit() {
    console.log(this.paragraph);
    console.log(this.paragraphs);
  }
}
