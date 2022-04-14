import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LabelButton } from '../src'

export default {
  title: 'Dashboard/Buttons/LabelButton',
  component: LabelButton,
} as ComponentMeta<typeof LabelButton>

const Template: ComponentStory<typeof LabelButton> = (args) => <LabelButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'gfp',
}
