import React from 'react'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

export interface HeaderProps {
  className?: string
  username: string
  datasetName: string
  keywords: Array<string>
  recordsData: string
}

export interface IconButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  iconName: string
  label: string
  size?: 'small' | 'medium' | undefined
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'action' | 'disabled' | 'error'
}

export interface LabelButtonProps {
  className?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
  color?: string
}

export interface CheckButtonProps {
  className?: string
  value: boolean
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  dark?: boolean
}

export interface ListType {
  label: string
  value: string
}

export interface TableControlsProps {
  className?: string
  currentListType: string | null
  listTypes: Array<ListType>
  statsOpened: boolean
  highLight: 'none' | 'single' | 'double'
  onStatsClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFilterChange: (event: React.MouseEvent<HTMLElement>, value: string | null) => void
  onHighlightChange: () => void
}

export interface InfoStructure {
  name: string
  permitCount: number
  percentClassified: number
  lastUpdatedBy: string
  permitsAcquired: string
  permitLastUpdate: string
  keywordLastUpdate: string
  permitStartDate: string
  permitEndDate: string
}

export interface DatasetInfoProps {
  className?: string
  data: InfoStructure
}

export interface InfoItemProps {
  label: string
  value: string | number
  classes: ClassNameMap
}
export interface DatasetChooserProps {
  opened: boolean
  onClose: () => void
}

export interface OptionItem {
  label: string
  value: string
}

export interface FilterTabsProps {
  className?: string
  value: string | null
  options: Array<OptionItem>
  onChange: (event: React.MouseEvent<HTMLElement>, value: string | null) => void
  dark?: boolean
}

export interface DatasetInfoTableProps {
  className?: string
}

export interface HeaderFilterProps {
  className?: string
}

export interface SequentialTableProps {
  className?: string
  highLight: 'none' | 'single' | 'double'
}

export interface StatsTableProps {
  className?: string
}

export interface MenuProps {
  className?: string
  username: string
}

export interface DatasetSelectorProps {
  className?: string
}

export interface DashboardProps {
  className?: string
  stats: boolean
  datasetChooser: boolean
  highLight: 'none' | 'single' | 'double'
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

export { default as CheckButton } from './components/buttons/CheckButton'
export { default as LabelButton } from './components/buttons/LabelButton'
export { default as IconButton } from './components/buttons/IconButton'
export { default as DatasetChooser } from './components/dialogs/dataset-chooser/DatasetChooser'
export { default as DatasetInfo } from './components/dialogs/dataset-chooser/DatasetInfo'
export { default as Header } from './components/header/Header'
export { default as HeaderFilter } from './components/header/HeaderFilter'
export { default as Menu } from './components/header/Menu'
export { default as SequentialTable } from './components/tables/SequentialTable'
export { default as DatasetInfoTable } from './components/tables/DatasetInfoTable'
export { default as StatsTable } from './components/tables/StatsTable'
export { default as DatasetSelector } from './components/DatasetSelector'
export { default as FilterTabs } from './components/FilterTabs'
export { default as TableControls } from './components/TableControls'

export { default as ExampleDashboard } from './pages/Dashboard';
