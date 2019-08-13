import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FormModule } from './form.module';
import { FormComponent } from './form.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BtnFullModule } from '../../atoms/btn-full/btn-full.module';
import { LoaderModule } from '../../atoms/loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';

//FIXME: bug https://github.com/storybookjs/storybook/issues/7157 si aspetta la 5.2.0 stabile

storiesOf('MOLECULES', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        LoaderModule,
        BtnFullModule,
        FormModule,
      ]
    })
  )
  .add('Form', () => ({
    component: FormComponent,
    props: {
      theme: 'dark'
    }
  }));
