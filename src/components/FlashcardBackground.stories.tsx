import type { Meta, StoryObj } from '@storybook/react';

import { FlashcardBackground } from './FlashcardBackground';

const meta = {
  component: FlashcardBackground,
} satisfies Meta<typeof FlashcardBackground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};