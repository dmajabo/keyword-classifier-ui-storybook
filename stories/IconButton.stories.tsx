import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconButton } from '../src'

export default {
  title: 'Dashboard/Buttons/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  iconName: 'autorenew',
  label: 'Refresh',
  color: 'primary',
}
