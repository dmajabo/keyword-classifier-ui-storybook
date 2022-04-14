import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '../buttons/IconButton'
import cn from 'classnames'
import HeaderMenu from './Menu'
import { displayFlex } from '../../utils/styles'
import HeaderFilter from './HeaderFilter'
import { HeaderProps } from '../../'

const Header = ({
  className,
  username,
  datasetName,
  keywords,
  recordsData,
}: HeaderProps): JSX.Element => {
  const classes = useStyles()

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className={cn(className, classes.root)}>
      <AppBar color="default" position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerContent}>
            <div className={classes.datasetControls}>
              <div className={classes.datasetInfo}>
                <Typography variant="body2">DATASET: {datasetName}</Typography>
                <div className={classes.actions}>
                  <IconButton onClick={handleClick} label="Edit" iconName="edit" />
                  <IconButton onClick={handleClick} label="Refresh" iconName="autorenew" />
                </div>
              </div>
              <div className={classes.keywordInfo}>
                <Typography variant="body2" noWrap>
                  KEYWORDS: {keywords.join(', ')}
                </Typography>
                <div className={classes.actions}>
                  <IconButton onClick={handleClick} label="Edit" iconName="edit" />
                  <IconButton onClick={handleClick} label="Refresh" iconName="autorenew" />
                </div>
              </div>
            </div>
            <div className={classes.filtersContainer}>
              <div className={classes.filters}>
                <Typography variant="body2">FILTERS:</Typography>
                <HeaderFilter />
              </div>
              <Typography variant="body2">RECORDS: {recordsData}</Typography>
            </div>
          </div>
          <HeaderMenu username={username} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      height: 100,
      ...displayFlex('center', 'space-between'),
    },
    headerContent: {
      width: '100%',
      ...displayFlex('center', 'flex-start'),
    },
    datasetControls: {
      minWidth: 350,
    },
    filtersContainer: {
      width: '100%',
      marginLeft: 30,
    },
    datasetInfo: {
      ...displayFlex('center', 'flex-start'),
    },
    keywordInfo: {
      ...displayFlex('center', 'flex-start'),
      marginTop: 10,
    },
    actions: {
      marginLeft: 10,
      minWidth: 55,
    },
    filters: {
      ...displayFlex('center', 'flex-start'),
      marginBottom: 10,
    },
  })
)

export default Header
