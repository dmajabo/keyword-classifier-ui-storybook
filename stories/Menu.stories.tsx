import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu } from '../src'

export default {
  title: 'Dashboard/Header/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => (
  <div style={{ padding: 10, background: '#333' }}>
    <Menu {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  username: 'Adam',
}
