import { HeaderProps, InfoStructure, ListType } from '../index'

export const sequentialTableData = [
  {
    id: 0,
    labels: ['gfp'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'gas log insert',
  },
  {
    id: 1,
    labels: ['gfp', 'gr'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'residential gas logs in fireplace and gas stove in kitchen',
  },
  {
    id: 2,
    labels: ['unlabeled'],
    category: 'residential',
    subcategory: 'electrical, temporary event',
    description: 'install 65000 btu space heater in living room',
  },
  {
    id: 3,
    labels: ['bf'],
    category: 'residential',
    subcategory: 'building, electrical, mechanical, plumbing',
    description: 'temporary construction power .',
  },
  {
    id: 4,
    labels: ['rf'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'basement finish .',
  },
  {
    id: 5,
    labels: ['gf', 'ac'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'install epdm 1 / 2 inch woodfiber reroof exist structure',
  },
  {
    id: 6,
    labels: ['el', 'ac'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'install faf and cc',
  },
  {
    id: 7,
    labels: ['gfp'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'gas log insert',
  },
  {
    id: 8,
    labels: ['gfp', 'gr'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'residential gas logs in fireplace and gas stove in kitchen',
  },
  {
    id: 9,
    labels: ['unlabeled'],
    category: 'residential',
    subcategory: 'electrical, temporary event',
    description: 'install 65000 btu space heater in living room',
  },
  {
    id: 10,
    labels: ['bf'],
    category: 'residential',
    subcategory: 'building, electrical, mechanical, plumbing',
    description: 'temporary construction power .',
  },
  {
    id: 11,
    labels: ['rf'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'basement finish .',
  },
  {
    id: 12,
    labels: ['gf', 'ac'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'install epdm 1 / 2 inch woodfiber reroof exist structure',
  },
  {
    id: 13,
    labels: ['el', 'ac'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'install faf and cc',
  },
  {
    id: 14,
    labels: ['gfp'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'gas log insert',
  },
  {
    id: 15,
    labels: ['gfp', 'gr'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'residential gas logs in fireplace and gas stove in kitchen',
  },
  {
    id: 16,
    labels: ['unlabeled'],
    category: 'residential',
    subcategory: 'electrical, temporary event',
    description: 'install 65000 btu space heater in living room',
  },
  {
    id: 17,
    labels: ['bf'],
    category: 'residential',
    subcategory: 'building, electrical, mechanical, plumbing',
    description: 'temporary construction power .',
  },
  {
    id: 18,
    labels: ['rf'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'basement finish .',
  },
  {
    id: 19,
    labels: ['gf', 'ac'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'install epdm 1 / 2 inch woodfiber reroof exist structure',
  },
  {
    id: 20,
    labels: ['el', 'ac'],
    category: 'residential',
    subcategory: 'mechanical',
    description: 'install faf and cc',
  },
]

export const labelsPalette: any = {
  gfp: '#B5CC18',
  gr: '#E03997',
  unlabeled: '#D7D7D7',
  bf: '#B5CC18',
  rf: '#A333C8',
  gf: '#DB2828',
  ac: '#2185D0',
  el: '#175D92',
}

export const listTypesDefault: Array<ListType> = [
  {
    label: 'Sequential',
    value: 'sequential',
  },
  {
    label: 'Duplicates',
    value: 'duplicates',
  },
  {
    label: 'Clusters',
    value: 'clusters',
  },
  {
    label: 'Last Added',
    value: 'lastAdded',
  },
  {
    label: 'Last Removed',
    value: 'lastRemoved',
  },
]

export const statsTableData = [
  {
    id: 1,
    label: 'unlabeled',
    labelNames: ['unlabeled'],
    count: '5.3M',
    percent: 63,
  },
  {
    id: 2,
    label: 'gf',
    labelNames: ['gas'],
    count: '801K',
    percent: 11,
  },
  {
    id: 3,
    label: 'gfp',
    labelNames: ['GAS', 'FURNACE', 'SOMETHING'],
    count: '522K',
    percent: 6.1,
  },
]

export const headerData: HeaderProps = {
  username: 'Adam',
  datasetName: 'City of Boulder',
  keywords: ['Boulder County'],
  recordsData: '230 / 8.2M (<1%)',
}

export const infoData: InfoStructure = {
  name: 'City of Boulder, Boulder City, CO',
  permitCount: 123456,
  percentClassified: 22,
  lastUpdatedBy: 'Adam Steftenagel',
  permitsAcquired: 'PDF export & scraping',
  permitLastUpdate: '2017-05-02 10:15am',
  keywordLastUpdate: '2018-11-05 2:04pm',
  permitStartDate: '2000-07-31',
  permitEndDate: '2017-12-01',
}
