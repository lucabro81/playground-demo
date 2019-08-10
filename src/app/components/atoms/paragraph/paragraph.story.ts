import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';

// @Component({
//   selector: 'plg-wrapper',
//   template: '<p><plg-title>{{text}}</plg-title></p>',
// })
// export class TitleWrapperComponent implements OnInit {
//
//   @Input('text') text: string;
//   constructor() {}
//
//   ngOnInit() {
//     console.log('text', this.text);
//   }
//
// }
//
// @NgModule({
//   declarations: [TitleWrapperComponent],
//   imports: [
//     CommonModule, TitleModule
//   ],
//   exports: [TitleWrapperComponent]
// })
// export class TitleWrapperModule { }

storiesOf('ATOMS', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ParagraphComponent],
      imports: [CommonModule],
    }),
  )
  .add('Paragraph', () => ({
    template: '<div style="width:200px"><plg-paragraph [theme]="\'light\'">Aenean mollis dolor a mattis viverra. ' +
    'In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.</plg-paragraph></div>',
  }))
  .add('Paragraph header', () => ({
    template: '<div style="width:200px"><plg-paragraph [type]="\'header\'" [theme]="\'light\'">' +
    'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, ' +
    'et bibendum lacus eleifend ut.</plg-paragraph></div>',
  }))
  .add('Paragraph important', () => ({
    template: '<div style="width:200px"><plg-paragraph [type]="\'important\'" [theme]="\'light\'">' +
    'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, ' +
    'et bibendum lacus eleifend ut.</plg-paragraph></div>',
  }))
  .add('Paragraph tab', () => ({
    template: '<div style="width:200px"><plg-paragraph [type]="\'tab\'" [theme]="\'light\'">' +
    'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, ' +
    'et bibendum lacus eleifend ut.</plg-paragraph></div>',
  }))
  .add('Paragraph footer', () => ({
    template: '<div style="width:200px"><plg-paragraph [type]="\'footer\'" [theme]="\'light\'">' +
    'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, ' +
    'et bibendum lacus eleifend ut.</plg-paragraph></div>',
  }));
