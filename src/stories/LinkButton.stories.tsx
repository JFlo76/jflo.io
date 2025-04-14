import type { Meta, StoryObj } from '@storybook/react';
import LinkButton from '../app/components/LinkButton';

const meta = {
    title: 'Components/LinkButton',
    component: LinkButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        href: {
            control: 'text',
            description: 'The URL the button links to.'
        },
        label: {
            control: 'text',
            description: 'The text displayed on the button.'
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes for styling.'
        },
        target: {
            control: 'select',
            options: ['_self', '_blank', '_parent', '_top'],
            description: 'Specifies where to open the linked document.'
        },
        icon: {
            control: 'text',
            description: 'Optional icon to display alongside the label.'
        },
    },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '#work',
        label: 'See my work',
    },
};

export const CustomStyle: Story = {
    args: {
        href: '#contact',
        label: 'Contact me',
        className: 'text-blue-500 hover:text-blue-700',
    },
};

export const ExternalLink: Story = {
    args: {
        href: 'https://example.com',
        label: 'Visit external site',
        target: '_blank',
    },
};

export const LongText: Story = {
    args: {
        href: '#projects',
        label: 'View all of my amazing projects and case studies',
    },
};

export const WithIcon: Story = {
    args: {
        href: '#download',
        label: 'Download Resume',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 inline-block">
                <circle cx="16" cy="16" r="16" fill="white" />
                <path d="M15.3505 25.875C15.6392 26.375 16.3608 26.375 16.6495 25.875L25.7428 10.125C26.0315 9.625 25.6706 9 25.0933 9H6.90673C6.32938 9 5.96854 9.625 6.25721 10.125L15.3505 25.875Z" fill="#BE230B" />
            </svg>
        ),
    },
};
