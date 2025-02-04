import type { Meta, StoryObj } from '@storybook/react';

import BlueSun from './BlueSun';

const meta = {
  component: BlueSun,
} satisfies Meta<typeof BlueSun>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};