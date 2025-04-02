import type { Meta, StoryObj } from '@storybook/react';
import ProjectArchives from './ProjectArchives';
import { useMotionValue } from 'framer-motion';
import React from 'react';
import { expect, within, userEvent } from '@storybook/test';

// Wrapper component to handle hooks
const ProjectArchivesWrapper = () => {
    const workScroll = useMotionValue(1);

    const handleModalOpen = (item: string, event: React.MouseEvent<HTMLElement>) => {
        // Prevent the link from navigating
        event.preventDefault();

        // Add a data attribute we can check in the play function
        event.currentTarget.setAttribute('data-modal-opened', item);
    };

    return <ProjectArchives
        workScroll={workScroll}
        handleModalOpen={handleModalOpen}
    />;
};

const meta = {
    title: 'Components/ProjectArchives',
    component: ProjectArchivesWrapper,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProjectArchivesWrapper>;

export default meta;
type Story = StoryObj<typeof ProjectArchivesWrapper>;

export const Default: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        // Wait for the component to render
        await step('Render component', () => {
            // Check if the component rendered
            expect(canvas.getByText('Archived Projects')).toBeInTheDocument();
        });

        // Find a project item to click (adjust the selector based on your actual component structure)
        await step('Click on a project item', async () => {
            // This assumes there's a clickable element with a class or attribute we can target
            // Adjust this selector to match your actual component structure
            const projectItem = canvas.getByTitle('Imprnt');
            expect(projectItem).toBeInTheDocument();

            // Simulate a click on the project item
            await userEvent.click(projectItem);

            // Verify the modal was triggered by checking our data attribute
            expect(projectItem).toHaveAttribute('data-modal-opened', 'Imprnt');
        });
    }
};
