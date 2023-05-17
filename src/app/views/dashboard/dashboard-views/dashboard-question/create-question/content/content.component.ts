import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'bdc-bo-content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  public Editor = ClassicEditor;
  public model = {
    editorData: '<p>Hello, world!</p>',
  };
}
