import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CookiesPolicyModule } from './cookies-policy.module';
import { CookiesPolicyComponent } from './cookies-policy.component';
import { BtnFullModule } from '../../atoms/btn-full/btn-full.module';

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        CookiesPolicyModule,
        BtnFullModule
      ]
    })
  )
  .add('Cookies', () => ({
    component: CookiesPolicyComponent,
    props: {
      theme: 'light'
    }
  }));
