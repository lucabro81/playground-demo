import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TileModule } from './tile.module';
import { TileComponent } from './tile.component';

const template = `
  <div class="container">
    <div class="wrapper">
      <plg-tile [titleBg]="'card-play-harder.png'">
        <div class="content">Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.</div>
      </plg-tile>
    </div>
  </div>
`;

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        TileModule,
      ]
    })
  )
  .add('Card', () => ({
    component: TileComponent,
    template: template,
    styles: [
      '.container { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 30px; }',
      '.wrapper { grid-column: span 4; }',
    ]
  }));
