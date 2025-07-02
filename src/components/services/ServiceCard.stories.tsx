import type { Meta, StoryObj } from '@storybook/react';
import { MessageCircle } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServicesProvider } from './ServicesContext';

const meta: Meta<typeof ServiceCard> = {
  title: 'Components/Services/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ServicesProvider>
        <div style={{ width: '400px', padding: '2rem' }}>
          <Story />
        </div>
      </ServicesProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    index: {
      control: { type: 'number', min: 0, max: 10 },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockService = {
  id: 'test-service',
  title: 'AI Chat Agents',
  description: 'Intelligent conversational AI that handles customer inquiries, policy questions, and claims support 24/7 with human-like understanding and empathy.',
  icon: MessageCircle,
  features: ['24/7 Availability', 'Multi-language Support', 'Context Awareness'],
};

export const Default: Story = {
  args: {
    service: mockService,
    index: 0,
    isVisible: true,
  },
};

export const Hidden: Story = {
  args: {
    service: mockService,
    index: 0,
    isVisible: false,
  },
};

export const WithDelay: Story = {
  args: {
    service: mockService,
    index: 2,
    isVisible: true,
  },
};