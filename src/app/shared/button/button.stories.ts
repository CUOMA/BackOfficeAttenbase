import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta;

const Template: Story = args => ({
  props: args,
});

export const enabled = Template.bind({});

enabled.args = {
  label: 'Button',
  disabled: false,
};

export const disabled = Template.bind({});
disabled.args = {
  label: 'Button',
  disabled: true,
};
