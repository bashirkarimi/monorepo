import type {Meta, StoryObj} from "@storybook/react";

import { Card } from "./card";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "custom title",
    body: "custom body",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
