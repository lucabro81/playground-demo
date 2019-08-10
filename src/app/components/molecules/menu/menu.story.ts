import { moduleMetadata, storiesOf } from '@storybook/angular';
import { MenuModule } from './menu.module';
import { MenuComponent } from './menu.component';

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        MenuModule,
      ]
    })
  )
  .add('Menu header', () => ({
    component: MenuComponent,
  }));
