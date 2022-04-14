import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import { displayFlex } from '../utils/styles'
import Typography from '@material-ui/core/Typography'
import FilterTabs from './FilterTabs'
import Icon from '@material-ui/core/Icon'
import CheckButton from './buttons/CheckButton'
import { TableControlsProps } from '../index'

const TableControls = ({
  className,
  currentListType,
  listTypes,
  statsOpened,
  highLight,
  onFilterChange,
  onHighlightChange,
  onStatsClick,
}: TableControlsProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={cn(className, classes.root)}>
      <div className={classes.listControls}>
        <Typography variant="body1">LIST TYPE</Typography>
        <FilterTabs
          className={classes.filters}
          value={currentListType}
          options={listTypes}
          onChange={onFilterChange}
        />
        <CheckButton className={classes.btnStats} value={statsOpened} onChange={onStatsClick}>
          <Icon fontSize="small">sort</Icon>
        </CheckButton>
      </div>
      <div className={classes.highlightControls}>
        <CheckButton
          className={classes.btnHighlight}
          value={highLight === 'none'}
          onChange={onHighlightChange}
        >
          <Icon fontSize="small">edit_off</Icon>
        </CheckButton>
        <CheckButton
          className={classes.btnHighlight}
          value={highLight === 'single'}
          onChange={onHighlightChange}
        >
          <Icon fontSize="small">edit</Icon>
        </CheckButton>
        <CheckButton
          className={classes.btnHighlight}
          value={highLight === 'double'}
          onChange={onHighlightChange}
        >
          <Icon className={classes.firstIcon} fontSize="small">
            edit
          </Icon>
          <Icon className={classes.secondIcon} fontSize="small">
            edit
          </Icon>
        </CheckButton>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
    ...displayFlex('center', 'space-between'),
  },
  listControls: {
    ...displayFlex('center', 'flex-start'),
  },
  highlightControls: {},
  filters: {
    marginLeft: 20,
  },
  btnStats: {
    marginLeft: 20,
  },
  btnHighlight: {
    border: 'none',
  },
  firstIcon: {
    transform: 'translateX(-5px)',
  },
  secondIcon: {
    position: 'absolute',
    right: 5,
  },
})

export default TableControls
