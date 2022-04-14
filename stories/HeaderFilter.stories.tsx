import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HeaderFilter } from '../src'

export default {
  title: 'Dashboard/Header/Filter',
  component: HeaderFilter,
} as ComponentMeta<typeof HeaderFilter>

const Template: ComponentStory<typeof HeaderFilter> = (args) => <HeaderFilter {...args} />

export const Default = Template.bind({})
Default.args = {}
