import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import { displayFlex } from '../utils/styles'
import Typography from '@material-ui/core/Typography'
import { DatasetSelectorProps } from '../index'

const states = ['CO', 'VT', 'NZ']
const counties = ['Boulder', 'Jefferson', 'Larimer', 'Weld', 'Broomfield']
const cities = ['Boulder', 'Longmont', 'Lyons', 'Nederland', 'Unicorporated']

const DatasetSelector = ({ className }: DatasetSelectorProps): JSX.Element => {
  const classes = useStyles()
  const activeState = 'VT'
  const activeCounty = 'Weld'
  const activeCity = 'Boulder'

  const statesList = states.map((state) => (
    <li key={state} className={cn({ [classes.active]: state === activeState })}>
      <Typography variant="body2" noWrap>
        {state}
      </Typography>
    </li>
  ))

  const countiesList = counties.map((county) => (
    <li key={county} className={cn({ [classes.active]: county === activeCounty })}>
      <Typography variant="body2" noWrap>
        {county}
      </Typography>
    </li>
  ))

  const citiesList = cities.map((city) => (
    <li key={city} className={cn({ [classes.active]: city === activeCity })}>
      <Typography variant="body2" noWrap>
        {city}
      </Typography>
    </li>
  ))

  return (
    <div className={cn(className, classes.root)}>
      <div className={classes.selectorHeader}>
        <div className={cn(classes.col, classes.colState)}>
          <Typography variant="body1">State</Typography>
        </div>
        <div className={cn(classes.col, classes.colCounty)}>
          <Typography variant="body1">County</Typography>
        </div>
        <div className={cn(classes.col, classes.colCity)}>
          <Typography variant="body1">City</Typography>
        </div>
      </div>
      <div className={classes.selectorBody}>
        <ul className={cn(classes.col, classes.colState)}>{statesList}</ul>
        <ul className={cn(classes.col, classes.colCounty)}>{countiesList}</ul>
        <ul className={cn(classes.col, classes.colCity)}>{citiesList}</ul>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  selectorHeader: {
    ...displayFlex('center', 'flex-start'),
  },
  selectorBody: {
    ...displayFlex('flex-start', 'flex-start'),
    marginTop: 10,

    '& $col': {
      boxSizing: 'border-box',
      padding: 0,

      '& li': {
        position: 'relative',
        margin: 0,
        height: 40,
        borderRight: '2px solid #bfbfbf',
        boxSizing: 'border-box',
        listStyle: 'none',
        ...displayFlex('center', 'flex-start'),
        cursor: 'pointer',
      },
    },
  },
  col: {
    width: '100%',
    //overflow: 'hidden',
    margin: '0 20px 0 0',

    '&:last-child': {
      margin: 0,
    },
  },
  colState: {
    maxWidth: 50,
  },
  colCounty: {
    maxWidth: 100,
  },
  colCity: {
    maxWidth: 100,
  },
  active: {
    '&::after': {
      content: `""`,
      width: 2,
      height: '100%',
      position: 'absolute',
      top: 0,
      right: -2,
      background: '#333',
    },
    '& p': {
      fontWeight: 700,
    },
  },
})

export default DatasetSelector
