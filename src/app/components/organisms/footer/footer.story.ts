import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { MenuFooterModule } from '../../molecules/menu-footer/menu-footer.module';
import { ContentModule } from '../../molecules/content/content.module';
import { FormModule } from '../../molecules/form/form.module';

//FIXME: bug https://github.com/storybookjs/storybook/issues/7157 si aspetta la 5.2.0 stabile

storiesOf('ORGANISMS', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FormModule,
        ContentModule,
        MenuFooterModule,
      ]
    })
  )
  .add('Footer', () => ({
    component: FooterComponent,
  }));
