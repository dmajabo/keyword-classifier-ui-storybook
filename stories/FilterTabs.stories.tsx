import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterTabs, OptionItem } from '../src'

export default {
  title: 'Dashboard/FilterTabs',
  component: FilterTabs,
} as ComponentMeta<typeof FilterTabs>

const options: Array<OptionItem> = [
  {
    label: 'Sequential',
    value: 'sequential',
  },
  {
    label: 'Duplicates',
    value: 'duplicates',
  },
  {
    label: 'Clusters',
    value: 'clusters',
  },
  {
    label: 'Last Added',
    value: 'lastAdded',
  },
  {
    label: 'Last Removed',
    value: 'lastRemoved',
  },
]

const Template: ComponentStory<typeof FilterTabs> = (args) => (
  <div style={{ padding: 20, background: args?.dark ? '#333' : '#fff' }}>
    <FilterTabs {...args} />
  </div>
)

export const NoValue = Template.bind({})
NoValue.args = {
  value: null,
  options,
  onChange: () => {
    console.log('clicked')
  },
}

export const Selected = Template.bind({})
Selected.args = {
  value: 'sequential',
  options,
  onChange: () => {
    console.log('clicked')
  },
}
