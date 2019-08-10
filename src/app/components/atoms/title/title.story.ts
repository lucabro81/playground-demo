import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TitleComponent } from './title.component';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

storiesOf('ATOMS', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TitleComponent],
      imports: [CommonModule],
    }),
  )
  .add('Big title', () => ({
    template: '<plg-title [type]="\'big\'" [theme]="\'light\'">lorem<br>ipsum</plg-title>',
  }))
  .add('Small title', () => ({
    template: '<plg-title [type]="\'small\'" [theme]="\'light\'">lorem ipsum</plg-title>',
  }));
