import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AutoSizer, Table } from 'react-virtualized'
import 'react-virtualized/styles.css'
import cn from 'classnames'
import LabelButton from '../buttons/LabelButton'
import { displayFlex } from '../../utils/styles'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { labelsPalette, sequentialTableData } from '../../fixtures'
import { TableHeaderRowProps, TableRowProps } from 'react-virtualized/dist/es/Table'
import { SequentialTableProps } from '../../'

interface LabelStructure {
  name: string
  highlightColor: string
  words: Array<string>
}

const labelWords: Array<LabelStructure> = [
  {
    name: 'gfp',
    highlightColor: 'rgba(11, 255, 0, 0.5)',
    words: ['gas', 'log'],
  },
  {
    name: 'gr',
    highlightColor: 'rgba(223, 92, 248, 0.5)',
    words: ['residential'],
  },
]

const SequentialTable = ({ className, highLight }: SequentialTableProps): JSX.Element => {
  const classes = useStyles()

  const getRowStyles = (index: number) => ({
    background: index % 2 === 0 ? '#f1f1f1' : '#fff',
  })

  const headerRowRenderer = ({ style }: TableHeaderRowProps) => {
    return (
      <div className={classes.tableHeader} style={style}>
        <div className={cn(classes.col, classes.colLabels)}>
          <Typography variant="body1">Labels</Typography>
          <Icon fontSize="small">filter_list</Icon>
        </div>
        <div className={cn(classes.col, classes.colId)}>
          <Typography variant="body1">ID</Typography>
          <Icon fontSize="small">filter_list</Icon>
        </div>
        <div className={cn(classes.col, classes.colCategory)}>
          <Typography variant="body1">Category</Typography>
          <Icon fontSize="small">filter_list</Icon>
        </div>
        <div className={cn(classes.col, classes.colSubcategory)}>
          <Typography variant="body1">Subcategory</Typography>
          <Icon fontSize="small">filter_list</Icon>
        </div>
        <div className={cn(classes.col, classes.colDescription)}>
          <Typography variant="body1">Sanitized description</Typography>
        </div>
      </div>
    )
  }

  const rowRenderer = ({ rowData, style, index }: TableRowProps) => {
    return (
      <div key={rowData.id} className={classes.tableRow} style={{ ...style, ...getRowStyles(index) }}>
        <div className={cn(classes.col, classes.colLabels)}>
          {rowData.labels.map((label: string) => (
            <LabelButton
              key={label}
              className={classes.btnLabel}
              onClick={handleLabelClick}
              label={label}
              color={labelsPalette[label]}
            />
          ))}
        </div>
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
          <Typography
            variant="body2"
            noWrap
            dangerouslySetInnerHTML={{
              __html: getRowDescription(rowData.labels, rowData.description),
            }}
          />
        </div>
      </div>
    )
  }

  const getRowDescription = (labels: Array<string>, description: string) => {
    let updatedDescription = description

    if (highLight !== 'none') {
      labels.forEach((labelName) => {
        const currentLabel = labelWords.find(({ name }) => name === labelName)
        if (currentLabel) {
          currentLabel.words.forEach((word: string) => {
            const replaceItem = `<span style="background: ${currentLabel.highlightColor}">${word}</span>`
            updatedDescription = updatedDescription.replace(new RegExp(word, 'gi'), replaceItem)
          })
        }
      })
    }

    return updatedDescription
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
  colLabels: {
    maxWidth: 100,
    paddingLeft: 20,
  },
  colId: {
    maxWidth: 50,
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
    '& $colLabels': {
      borderRight: '1px solid #bfbfbf',
    },
  },
  btnLabel: {
    marginRight: 5,
    '&:last-child': {
      marginRight: 0,
    },
  },
}))

export default SequentialTable
