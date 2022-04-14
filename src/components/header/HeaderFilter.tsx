import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import cn from 'classnames'
import LabelButton from '../buttons/LabelButton'
import { displayFlex } from '../../utils/styles'
import { HeaderFilterProps } from '../../'

const filters = [
  {
    label: 'Search',
    value: 'search',
  },
  {
    label: 'Category',
    value: 'category',
  },
  {
    label: 'SubCategory',
    value: 'subcategory',
  },
]

const filterValues = [
  {
    value: 'gfp',
    color: '#B5CC18',
  },
  {
    value: 'gr',
    color: '#E03997',
  },
  {
    value: 'unlabeled',
    color: '#D7D7D7',
  },
]

const HeaderFilter = ({ className }: HeaderFilterProps): JSX.Element => {
  const classes = useStyles()

  const handleDelete = () => {
    console.log('deleted')
  }

  const handleLabelClick = () => {
    console.log('clicked')
  }

  const filtersList = filters.map(({ label, value }) => (
    <Chip key={value} label={label} onDelete={handleDelete} className={classes.filterItem} />
  ))

  const filterValuesList = filterValues.map(({ color, value }) => (
    <LabelButton key={value} onClick={handleLabelClick} label={value} color={color} />
  ))

  return (
    <div className={cn(className, classes.root)}>
      <ul className={classes.filters}>{filtersList}</ul>
      <div className={classes.filterValues}>{filterValuesList}</div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    ...displayFlex(),
  },
  filters: {
    display: 'flex',
    margin: '0 10px 0',
    padding: 0,
  },
  filterItem: {
    listStyle: 'none',
    marginRight: 10,

    '&:last-child': {
      margin: 0,
    },
  },
  filterValues: {
    display: 'flex',

    '& button': {
      marginRight: 10,

      '&:last-child': {
        margin: 0,
      },
    },
  },
})

export default HeaderFilter
