import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatasetChooser } from '../src'

export default {
  title: 'Dashboard/Dialogs/DatasetChooser',
  component: DatasetChooser,
} as ComponentMeta<typeof DatasetChooser>

const Template: ComponentStory<typeof DatasetChooser> = (args) => <DatasetChooser {...args} />

export const Default = Template.bind({})
Default.args = {
  opened: true,
  onClose: () => {
    console.log('closed')
  },
}
