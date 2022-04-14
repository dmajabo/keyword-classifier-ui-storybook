import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AutoSizer, Table } from 'react-virtualized'
import 'react-virtualized/styles.css'
import cn from 'classnames'
import LabelButton from '../buttons/LabelButton'
import { displayFlex } from '../../utils/styles'
import Typography from '@material-ui/core/Typography'
import { labelsPalette, statsTableData } from '../../fixtures'
import { TableHeaderRowProps, TableRowProps } from 'react-virtualized/dist/es/Table'
import { StatsTableProps } from '../../'

const StatsTable = ({ className }: StatsTableProps): JSX.Element => {
  const classes = useStyles()

  const headerRowRenderer = ({ style }: TableHeaderRowProps) => {
    return (
      <div className={classes.tableHeader} style={style}>
        <div className={cn(classes.col, classes.colLabels)}>
          <Typography variant="body1">Labels</Typography>
        </div>
        <div className={cn(classes.col, classes.colLabelNames)}>
          <Typography variant="body1">Label Names</Typography>
        </div>
        <div className={cn(classes.col, classes.colCount)}>
          <Typography variant="body1">Count</Typography>
        </div>
        <div className={cn(classes.col, classes.colPercent)}>
          <Typography variant="body1">Percent</Typography>
        </div>
      </div>
    )
  }

  const rowRenderer = ({ rowData, style }: TableRowProps) => {
    return (
      <div key={rowData.id} className={classes.tableRow} style={style}>
        <div className={cn(classes.col, classes.colLabels)}>
          <LabelButton
            key={rowData.label}
            className={classes.btnLabel}
            onClick={handleLabelClick}
            label={rowData.label}
            color={labelsPalette[rowData.label]}
          />
        </div>
        <div className={cn(classes.col, classes.colLabelNames)}>
          <Typography variant="body2" noWrap>
            {rowData.labelNames.join(', ')}
          </Typography>
        </div>
        <div className={cn(classes.col, classes.colCount)}>
          <Typography variant="body2" noWrap>
            {rowData.count}
          </Typography>
        </div>
        <div className={cn(classes.col, classes.colPercent)}>
          <Typography variant="body2" noWrap>
            {rowData.percent}%
          </Typography>
          <div style={{ height: 20, width: `${rowData.percent}%`, background: '#D8D8D8' }} />
        </div>
      </div>
    )
  }

  const handleLabelClick = () => {
    console.log('clicked')
  }

  return (
    <div className={cn(className, classes.tableWrapper)}>
      <AutoSizer disableHeight>
        {({ width }) => (
          <Table
            className={classes.table}
            width={width}
            height={400}
            headerHeight={30}
            rowHeight={40}
            rowCount={statsTableData.length}
            rowRenderer={rowRenderer}
            headerRowRenderer={headerRowRenderer}
            rowGetter={({ index }) => statsTableData[index]}
          />
        )}
      </AutoSizer>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  tableWrapper: {
    width: '100%',
  },
  table: {
    borderBottom: `1px solid #bfbfbf`,
  },
  col: {
    width: '100%',
    marginRight: 20,
    ...displayFlex('center', 'flex-start'),
    flexDirection: 'row',
    overflow: 'hidden',

    '&:last-child': {
      margin: 0,
    },
  },
  colLabels: {
    maxWidth: 100,
  },
  colLabelNames: {
    maxWidth: 150,
  },
  colCount: {
    maxWidth: 100,
  },
  colPercent: {
    maxWidth: '100%',
  },
  tableHeader: {
    width: '100%',
    display: 'flex',
    paddingBottom: 5,
    borderBottom: `1px solid #bfbfbf`,
    '& $col span': {
      marginLeft: 5,
    },
  },
  tableRow: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    display: 'flex',
    '& $colPercent p': {
      marginRight: 20,
      minWidth: 30,
    },
  },
  btnLabel: {
    marginRight: 5,
    '&:last-child': {
      marginRight: 0,
    },
  },
}))

export default StatsTable
