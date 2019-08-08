import { configure, addParameters } from '@storybook/angular';

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff' },
    { name: 'black', value: '#000' },
    { name: 'mid', value: '#898989', default: true },
  ],
});

// automatically import all files ending in *.stories.ts
const req = require.context('../src/app/components', true, /\.story\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
