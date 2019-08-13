import { moduleMetadata, storiesOf } from '@storybook/angular';
import { BtnFullComponent } from './btn-full.component';

storiesOf('ATOMS', module)
  .addDecorator(
    moduleMetadata({
      declarations: [BtnFullComponent],
    })
  )
  .add('Full button', () => ({
    template: `<plg-btn-full [theme] = "'dark'">button</plg-btn-full>`,
  }));
