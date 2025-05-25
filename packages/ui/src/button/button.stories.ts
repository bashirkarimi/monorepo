import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Click me",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
