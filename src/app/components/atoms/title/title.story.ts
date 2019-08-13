import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TitleComponent } from './title.component';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
