import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '@material-ui/core/Icon'
import { CheckButton } from '../src'

export default {
  title: 'Dashboard/Buttons/CheckButton',
  component: CheckButton,
} as ComponentMeta<typeof CheckButton>

const Template: ComponentStory<typeof CheckButton> = (args) => (
  <CheckButton {...args}>
    <Icon fontSize="small">sort</Icon>
  </CheckButton>
)

export const Default = Template.bind({})
Default.args = {
  value: false,
  onChange: () => {
    console.log('clicked')
  },
}

export const Checked = Template.bind({})
Checked.args = {
  value: true,
  onChange: () => {
    console.log('clicked')
  },
}
