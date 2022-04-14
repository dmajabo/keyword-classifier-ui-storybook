import React from 'react'
import { createTheme, makeStyles } from '@material-ui/core/styles'
import { Dialog } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { displayFlex } from '../../../utils/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DatasetSelector from '../../DatasetSelector'
import DatasetInfo from './DatasetInfo'
import DatasetInfoTable from '../../tables/DatasetInfoTable'
import { DatasetChooserProps } from '../../../'
import { infoData } from '../../../fixtures'

const DatasetChooser = ({ opened, onClose }: DatasetChooserProps): JSX.Element => {
  const classes = useStyles()
  const theme = createTheme({
    palette: {
      type: 'light',
    },
  })

  const handleAddNewDataset = () => {
    console.log('added')
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog fullWidth maxWidth="lg" open={opened} onClose={onClose}>
        <div className={classes.root}>
          <div className={classes.dialogHeader}>
            <Typography variant="body1">SELECT DATASET</Typography>
            <Button onClick={handleAddNewDataset} variant="contained" disableRipple>
              add new dataset
            </Button>
          </div>
          <div className={classes.dialogContent}>
            <div className={classes.selectorContainer}>
              <DatasetSelector />
            </div>
            <div className={classes.infoContainer}>
              <DatasetInfo data={infoData} />
              <DatasetInfoTable className={classes.table} />
            </div>
          </div>
        </div>
      </Dialog>
    </ThemeProvider>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 500,
    padding: '0 20px 50px',
    boxSizing: 'border-box',
  },
  dialogHeader: {
    height: 70,
    borderBottom: '1px solid #bfbfbf',
    ...displayFlex('center', 'space-between'),
  },
  dialogContent: {
    width: '100%',
    ...displayFlex('flex-start', 'flex-start'),
    marginTop: 20,
    paddingBottom: 20,
  },
  selectorContainer: {
    width: '100%',
    maxWidth: 300,
  },
  infoContainer: {
    flex: 1,
  },
  table: {
    marginTop: 20,
  },
})

export default DatasetChooser
