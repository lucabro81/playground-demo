import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';

// @Component({
//   selector: 'plg-wrapper',
//   template: '<p><plg-title>{{text}}</plg-title></p>',
// })
// export class TitleWrapperComponent implements OnInit {
//
//   @Input('text') text: string;
//   constructor() {}
//
//   ngOnInit() {
//     console.log('text', this.text);
//   }
//
// }
//
// @NgModule({
//   declarations: [TitleWrapperComponent],
//   imports: [
//     CommonModule, TitleModule
//   ],
//   exports: [TitleWrapperComponent]
// })
// export class TitleWrapperModule { }

storiesOf('ORGANISMS', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FooterModule,
      ]
    })
  )
  .add('Footer', () => ({
    component: FooterComponent,
    props: {
      text: 'PLAY HARDER',
      type: 'small',
      theme: 'dark',
    },
  }));
