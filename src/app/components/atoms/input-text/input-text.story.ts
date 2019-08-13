import { moduleMetadata, storiesOf } from '@storybook/angular';
import { InputTextComponent } from './input-text.component';
import { ReactiveFormsModule } from '@angular/forms';

const props = {
  text: (d = 'Click me') => ['Text', d, 'Content'],
};

const styles = [
  '.container { display: grid; grid-template-columns: repeat(11, 1fr 30px) 1fr; }',
  '.wrapper { grid-column: span 6; }',
];

const template = `
<div class="container">
  <div class="wrapper">
    <plg-input-text [theme] = "'light'" [placeholder]="'name'"></plg-input-text>
  </div>
</div>`;

storiesOf('ATOMS', module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputTextComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
  )
  .add('Input text', () => ({
    component: InputTextComponent,
    template: template,
    styles: styles
  }));
