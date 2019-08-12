import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';

const styles = [
  '.container { display: grid; grid-template-columns: repeat(11, 1fr 30px) 1fr; }',
  '.wrapper { grid-column: span 8; }',
];

const template = `
<div class="container">
  <div class="wrapper">
    <plg-tab [theme]="'contrast'"><div>tab seletor</div></plg-tab>
  </div>
</div>`;

const templateSelected = `
<div class="container">
  <div class="wrapper">
    <plg-tab [theme]="'contrast'" [selected]="'dark'">tab seletor</plg-tab>
  </div>
</div>`;

storiesOf('ATOMS', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TabComponent],
      imports: [CommonModule],
    }),
  )
  .add('Tab', () => ({
    template: template,
    styles: styles
  }))
  .add('Tab seleceted', () => ({
    template: templateSelected,
    styles: styles
  }));
