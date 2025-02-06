import type { Meta, StoryObj } from '@storybook/react'
import PerspectiveCard from '../components/PerspectiveCard'

const meta = {
  title: 'Components/PerspectiveCard',
  component: PerspectiveCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PerspectiveCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <PerspectiveCard>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Test Card</h2>
          <p className="text-slate-300">
            This card should have 3D perspective on hover
          </p>
        </div>
      </PerspectiveCard>
    </div>
  ),
}

export const WithHover: Story = {
  render: () => (
    <div className="p-8">
      <PerspectiveCard>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 
                      transform transition-transform duration-500 hover:rotate-y-12">
          <h2 className="text-xl font-bold text-white mb-4">Hover Me</h2>
          <p className="text-slate-300">
            This card should rotate on hover
          </p>
        </div>
      </PerspectiveCard>
    </div>
  ),
} 