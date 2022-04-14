import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StatsTable } from '../src'

export default {
  title: 'Dashboard/Tables/StatsTable',
  component: StatsTable,
} as ComponentMeta<typeof StatsTable>

const Template: ComponentStory<typeof StatsTable> = (args) => <StatsTable {...args} />

export const Default = Template.bind({})
Default.args = {}
