import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import cn from 'classnames'
import { LabelButtonProps } from '../../index'

const LabelButton = ({
  className,
  onClick,
  label,
  color = '#B5CC18',
}: LabelButtonProps): JSX.Element => {
  const classes = useStyles()
  return (
    <Button
      className={cn(className, classes.root, { [classes.root_dark]: label === 'unlabeled' })}
      onClick={onClick}
      variant="contained"
      style={{ background: color }}
      disableRipple
      size="small"
    >
      {label}
    </Button>
  )
}

const useStyles = makeStyles({
  root: {
    color: '#fff',
    padding: '0 5px',
    minWidth: 30,
    height: 20,
    transition: 'none',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  root_dark: {
    color: '#333',
  },
})

export default LabelButton
