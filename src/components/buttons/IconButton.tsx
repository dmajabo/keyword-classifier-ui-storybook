import React from 'react'
import Button from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { IconButtonProps } from '../../'

const IconButton = ({
  onClick,
  iconName,
  label,
  size = 'small',
  color,
}: IconButtonProps): JSX.Element => {
  return (
    <Button color="default" onClick={onClick} size={size} aria-label={label} disableRipple>
      <Icon color={color} fontSize="small">
        {iconName}
      </Icon>
    </Button>
  )
}

export default IconButton
