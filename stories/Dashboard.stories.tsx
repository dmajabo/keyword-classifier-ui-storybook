import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dashboard from '../src/pages/Dashboard'

export default {
  title: 'Dashboard/Page',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = (args) => <Dashboard {...args} />

export const Default = Template.bind({})
Default.args = {
  stats: false,
  datasetChooser: false,
  highLight: 'none',
}

export const SingleHighlight = Template.bind({})
SingleHighlight.args = {
  stats: false,
  datasetChooser: false,
  highLight: 'single',
}

export const Stats = Template.bind({})
Stats.args = {
  stats: true,
  datasetChooser: false,
  highLight: 'none',
}

export const DatasetChooser = Template.bind({})
DatasetChooser.args = {
  stats: false,
  datasetChooser: true,
  highLight: 'none',
}
