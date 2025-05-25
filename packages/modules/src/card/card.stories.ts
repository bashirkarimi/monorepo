import type {Meta, StoryObj} from "@storybook/react";

import {Card} from "./card.js";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "custom title",
    body: "custom body",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
