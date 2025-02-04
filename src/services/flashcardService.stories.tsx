import type { Meta, StoryObj } from '@storybook/react';

import { mockFlashcards } from './flashcardService';

const meta = {
  component: mockFlashcards,
} satisfies Meta<typeof mockFlashcards>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};