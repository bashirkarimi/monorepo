import type {Meta, StoryObj} from "@storybook/react";

import {Button} from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Click me",
    className: "bg-blue-500 text-white p-2 rounded",
    appName: "MyApp",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
