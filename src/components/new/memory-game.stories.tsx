import type { Meta, StoryObj } from '@storybook/react'
import MemoryGame from './memory-game'

const meta = {
  title: 'Games/Memory Game',
  component: MemoryGame,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A classic memory card matching game built with React and Tailwind CSS.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof MemoryGame>

export default meta
type Story = StoryObj<typeof MemoryGame>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default memory game with 4 pairs of cards.'
      }
    }
  }
}

export const SmallGrid: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A 2x2 grid version of the memory game.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="w-[200px]">
        <Story />
      </div>
    )
  ]
} 