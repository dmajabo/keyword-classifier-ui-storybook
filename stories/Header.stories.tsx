import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '../src'

export default {
  title: 'Dashboard/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  username: 'Adam',
  datasetName: 'City of Boulder',
  keywords: ['Boulder County'],
  recordsData: '230 / 8.2M (<1%)',
}
