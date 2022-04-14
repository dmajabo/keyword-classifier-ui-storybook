import React from 'react'
import cn from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { displayFlex } from '../../../utils/styles'
import { DatasetInfoProps, InfoItemProps } from '../../../'

const InfoItem = ({ label, value, classes }: InfoItemProps) => {
  return (
    <div className={classes.infoItem}>
      <Typography variant="body2" color="inherit">
        {label}:
      </Typography>
      <Typography variant="body2" color="inherit">
        {value}
      </Typography>
    </div>
  )
}

const DatasetInfo = ({ className, data }: DatasetInfoProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={cn(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="body1">{data.name}</Typography>
      </div>
      <div className={classes.info}>
        <div className={classes.column}>
          <InfoItem
            label="Permit Count"
            value={data.permitCount.toLocaleString()}
            classes={classes}
          />
          <InfoItem
            label="Percent Classified"
            value={data.percentClassified + '%'}
            classes={classes}
          />
          <InfoItem label="Keywords last updated by" value={data.lastUpdatedBy} classes={classes} />
          <InfoItem label="Permits Acquired By" value={data.permitsAcquired} classes={classes} />
        </div>
        <div className={classes.column}>
          <InfoItem label="Last Permit Update" value={data.permitLastUpdate} classes={classes} />
          <InfoItem label="Last Keyword Update" value={data.keywordLastUpdate} classes={classes} />
          <InfoItem label="Permit Start Date" value={data.permitStartDate} classes={classes} />
          <InfoItem label="Permit End Date" value={data.permitEndDate} classes={classes} />
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#333',
    borderRadius: 5,
    color: '#fff',
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    height: 40,
    padding: '0 10px',
    ...displayFlex('center', 'flex-start'),
    color: '#fff',
  },
  info: {
    ...displayFlex('flex-start', 'flex-start'),
    background: '#3e3d3d',
  },
  column: {
    width: '50%',
    borderRight: '1px solid #5d5d5d',

    '&:last-child': {
      border: 'none',
    },
  },
  infoItem: {
    height: 40,
    padding: '0 10px',
    ...displayFlex('center', 'space-between'),
    borderTop: '1px solid #5d5d5d',
  },
})

export default DatasetInfo
