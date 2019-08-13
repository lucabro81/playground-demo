import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TilesBarComponent } from './tiles-bar.component';
import { TileModule } from '../../molecules/tile/tile.module';

storiesOf('ORGANISMS', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        TileModule,
      ]
    })
  )
  .add('Tiles bar', () => ({
    component: TilesBarComponent,
    props: {},
  }));
