import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatasetInfoTable } from '../src'

export default {
  title: 'Dashboard/Tables/DatasetInfoTable',
  component: DatasetInfoTable,
} as ComponentMeta<typeof DatasetInfoTable>

const Template: ComponentStory<typeof DatasetInfoTable> = (args) => <DatasetInfoTable {...args} />

export const Default = Template.bind({})
Default.args = {}
