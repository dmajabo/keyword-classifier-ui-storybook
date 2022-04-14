import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/header/Header'
import { displayFlex } from '../utils/styles'
import TableControls from '../components/TableControls'
import { headerData, listTypesDefault } from '../fixtures'
import SequentialTable from '../components/tables/SequentialTable'
import StatsTable from '../components/tables/StatsTable'
import DatasetChooser from '../components/dialogs/dataset-chooser/DatasetChooser'
import { DashboardProps } from '../index'

const Dashboard = ({ stats, datasetChooser, highLight }: DashboardProps): JSX.Element => {
  const classes = useStyles()
  const [currentListType, setCurrentListType] = useState<string | null>('sequential')
  const [statsOpened, setStatsOpened] = useState(stats)
  const [datasetChooserOpened, setDatasetChooserOpened] = useState(datasetChooser)

  const toggleStats = () => {
    setStatsOpened((prevState) => !prevState)
  }

  const handleFilterChange = (_event: React.MouseEvent<HTMLElement>, value: string | null) => {
    setCurrentListType(value)
  }

  const handleHighlightChange = () => {
    console.log('clicked')
  }

  const toggleDatasetChooser = () => {
    setDatasetChooserOpened((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <Header {...headerData} />
      <div className={classes.content}>
        <div className={classes.keywordsContainer} />
        <div className={classes.tablesContainer}>
          <TableControls
            currentListType={currentListType}
            listTypes={statsOpened ? listTypesDefault.slice(0, 3) : listTypesDefault}
            statsOpened={statsOpened}
            onStatsClick={toggleStats}
            onFilterChange={handleFilterChange}
            highLight={highLight}
            onHighlightChange={handleHighlightChange}
          />
          {!statsOpened ? (
            <SequentialTable highLight={highLight} className={classes.table} />
          ) : (
            <StatsTable className={classes.table} />
          )}
        </div>
      </div>
      <DatasetChooser opened={datasetChooserOpened} onClose={toggleDatasetChooser} />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {
    width: '100%',
    ...displayFlex('stretch', 'flex-start'),
  },
  keywordsContainer: {
    width: '100%',
    maxWidth: 360,
    background: '#F9F9F9',
  },
  tablesContainer: {
    flex: 1,
    background: '#fff',
    padding: 20,
    paddingBottom: 100,
  },
  table: {
    marginTop: 20,
  },
})

export default Dashboard
