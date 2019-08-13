import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';
import { ReactiveFormsModule } from '@angular/forms';

const styles = [
  '.container { display: grid; grid-template-columns: repeat(11, 1fr 30px) 1fr; }',
  '.wrapper { grid-column: span 6; }',
];

const template = `
<div class="container">
  <div class="wrapper">
    <plg-text-area [theme] = "'light'"
                   [placeholder]="'message'"
                   [required] = "true"></plg-text-area>
  </div>
</div>`;

storiesOf('ATOMS', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TextAreaComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
  )
  .add('Text area', () => ({
    component: TextAreaComponent,
    template: template,
    styles: styles
  }));
