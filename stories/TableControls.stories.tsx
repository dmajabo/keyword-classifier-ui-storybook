import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TableControls } from '../src'
import { listTypesDefault } from '../src/fixtures'

export default {
  title: 'Dashboard/TableControls',
  component: TableControls,
} as ComponentMeta<typeof TableControls>

const Template: ComponentStory<typeof TableControls> = (args) => <TableControls {...args} />

export const Default = Template.bind({})
Default.args = {
  currentListType: 'sequential',
  listTypes: listTypesDefault,
  statsOpened: false,
  highLight: 'none',
  onStatsClick: () => {
    console.log('clicked')
  },
}

export const StatsOpened = Template.bind({})
StatsOpened.args = {
  currentListType: 'sequential',
  listTypes: listTypesDefault.slice(0, 3),
  statsOpened: true,
  highLight: 'none',
  onStatsClick: () => {
    console.log('clicked')
  },
}
