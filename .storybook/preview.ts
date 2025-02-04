import '../src/app/globals.css';
import type { Preview } from "@storybook/react";
import { fn } from "@storybook/test";

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['onClick', 'onSubmit', 'onChange'], // Explicitly define event handlers
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;