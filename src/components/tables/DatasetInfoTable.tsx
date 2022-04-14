import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AutoSizer, Table } from 'react-virtualized'
import 'react-virtualized/styles.css'
import cn from 'classnames'
import { displayFlex } from '../../utils/styles'
import Typography from '@material-ui/core/Typography'
import { sequentialTableData } from '../../fixtures'
import { TableHeaderRowProps, TableRowProps } from 'react-virtualized/dist/es/Table'
import { DatasetInfoTableProps } from '../../'

const DatasetInfoTable = ({ className }: DatasetInfoTableProps): JSX.Element => {
  const classes = useStyles()

  const getRowStyles = (index: number) => ({
    background: index % 2 === 0 ? '#f1f1f1' : '#fff',
  })

  const headerRowRenderer = (props: TableHeaderRowProps) => {
    return (
      // eslint-disable-next-line react/prop-types
      <div className={classes.tableHeader} style={props.style}>
        <div className={cn(classes.col, classes.colId)}>
          <Typography variant="body1">ID</Typography>
        </div>
        <div className={cn(classes.col, classes.colCategory)}>
          <Typography variant="body1">Category</Typography>
        </div>
        <div className={cn(classes.col, classes.colSubcategory)}>
          <Typography variant="body1">Subcategory</Typography>
        </div>
        <div className={cn(classes.col, classes.colDescription)}>
          <Typography variant="body1">Description</Typography>
        </div>
      </div>
    )
  }

  const rowRenderer = ({ rowData, style, index }: TableRowProps) => {
    return (
      <div key={rowData.id} className={classes.tableRow} style={{ ...style, ...getRowStyles(index) }}>
        <div className={cn(classes.col, classes.colId)}>
          <Typography variant="body2" noWrap>
            {rowData.id}
          </Typography>
        </div>
        <div className={cn(classes.col, classes.colCategory)}>
          <Typography variant="body2" noWrap>
            {rowData.category}
          </Typography>
        </div>
        <div className={cn(classes.col, classes.colSubcategory)}>
          <Typography variant="body2" noWrap>
            {rowData.subcategory}
          </Typography>
        </div>
        <div className={cn(classes.col, classes.colDescription)}>
          <Typography variant="body2" noWrap>
            {rowData.description}
          </Typography>
        </div>
      </div>
    )
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
            rowCount={sequentialTableData.length}
            rowRenderer={rowRenderer}
            headerRowRenderer={headerRowRenderer}
            rowGetter={({ index }) => sequentialTableData[index]}
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
  colId: {
    maxWidth: 50,
    paddingLeft: 20,
  },
  colCategory: {
    maxWidth: 100,
  },
  colSubcategory: {
    maxWidth: 150,
  },
  colDescription: {},
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
    borderBottom: `1px solid #bfbfbf`,
    boxSizing: 'border-box',
    display: 'flex',
  },
  btnLabel: {
    marginRight: 5,
    '&:last-child': {
      marginRight: 0,
    },
  },
}))

export default DatasetInfoTable
