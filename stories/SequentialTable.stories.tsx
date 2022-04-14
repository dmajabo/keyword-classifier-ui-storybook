import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SequentialTable } from '../src'

export default {
  title: 'Dashboard/Tables/SequentialTable',
  component: SequentialTable,
} as ComponentMeta<typeof SequentialTable>

const Template: ComponentStory<typeof SequentialTable> = (args) => <SequentialTable {...args} />

export const Default = Template.bind({})
Default.args = {
  highLight: 'none',
}

export const SingleHighlight = Template.bind({})
SingleHighlight.args = {
  highLight: 'single',
}
