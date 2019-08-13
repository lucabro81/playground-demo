import { moduleMetadata, storiesOf } from '@storybook/angular';
import { MenuFooterComponent } from './menu-footer.component';
import { MenuFooterModule } from './menu-footer.module';

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        MenuFooterModule,
      ]
    })
  )
  .add('Menu footer', () => ({
    component: MenuFooterComponent,
  }));
