import { URL } from '#/js/services/device'

export default function(mock) {
  mock.onPost(URL.updateDevice).reply(() => {
    return [200, '1']
  })
  mock.onGet(URL.getMonitoringData).reply(() => {
    return [
      200,
      {
        columnList: [
          { index: 0, aggType: null, name: 'ae_title' },
          { index: 1, aggType: null, name: 'studydate' },
          { index: 2, aggType: 'min', name: 'uptime' },
          { index: 3, aggType: 'min', name: 'patientcount' },
          { index: 4, aggType: 'min', name: 'protocolcount' },
          { index: 5, aggType: 'min', name: 'laststudytime' },
          { index: 6, aggType: 'min', name: 'yestodayuptime' },
          { index: 7, aggType: 'min', name: 'yesterdaycount' },
          { index: 8, aggType: 'min', name: 'yesterdayprotocolcount' },
          { index: 9, aggType: 'min', name: 'manufacture' },
          { index: 10, aggType: 'min', name: 'location' },
          { index: 11, aggType: 'min', name: 'pattern' },
          { index: 12, aggType: 'min', name: 'asset_name' },
        ],
        data: [
          [
            'CT03',
            '2018-08-11',
            '2018-08-11 07:54:49',
            '47',
            '49',
            '2018-08-11 16:44:58',
            '2018-08-10 07:48:55',
            '63',
            '69',
            null,
            '2号楼1楼',
            'Discovery CT750',
            null,
          ],
          [
            'GUKECT16',
            '2018-08-11',
            '2018-08-11 06:55:46',
            '147',
            '168',
            '2018-08-11 16:53:37',
            '2018-08-10 06:59:59',
            '130',
            '144',
            null,
            '2号楼1楼',
            'OptimaCT540',
            null,
          ],
          [
            'HDe',
            '2018-08-11',
            '2018-08-11 07:21:45',
            '75',
            '376',
            '2018-08-11 23:23:09',
            '2018-08-10 07:13:04',
            '80',
            '393',
            null,
            '3号楼1楼',
            'MR1',
            null,
          ],
          [
            'lx-mr',
            '2018-08-11',
            '2018-08-11 07:38:33',
            '65',
            '474',
            '2018-08-11 23:03:05',
            '2018-08-10 07:37:59',
            '63',
            '469',
            null,
            '3号楼1楼',
            'MR22',
            null,
          ],
        ],
      },
    ]
  })
  mock.onGet(URL.getDevices).reply(() => {
    return [
      200,
      [
        {
          id: '3',
          name: 'HDe',
          deviceType: 'MR',
          aeTitle: 'HDe',
          deviceNumber: null,
          pattern: 'MR1',
          assetName: null,
          manufacture: null,
          photoLink: null,
          location: '3号楼1楼',
          site: '瑞金医院',
          orgName: '放射科',
          dashboardPage: '/cpmboard/starter.html#/dashboard/MR/4/',
          prepareTime1: 0,
          prepareTime2: 0,
        },
        {
          id: '4',
          name: 'lx-mr',
          deviceType: 'MR',
          aeTitle: 'lx-mr',
          deviceNumber: null,
          pattern: 'MR2',
          assetName: null,
          manufacture: null,
          photoLink: null,
          location: '3号楼1楼',
          site: '骨科医院',
          orgName: '骨科',
          dashboardPage: '/cpmboard/starter.html#/dashboard/MR/5/',
          prepareTime1: 0,
          prepareTime2: 0,
        },
        {
          id: '1',
          name: 'OptimaCT540',
          deviceType: 'CT',
          aeTitle: 'GUKECT16',
          deviceNumber: null,
          pattern: 'OptimaCT540',
          assetName: null,
          manufacture: null,
          photoLink: null,
          location: '2号楼1楼',
          site: '瑞金医院',
          orgName: '放射科',
          dashboardPage: '/cpmboard/starter.html#/dashboard/CT/3/',
          prepareTime1: 1,
          prepareTime2: 1,
        },
        {
          id: '2',
          name: 'Discovery CT750',
          deviceType: 'CT',
          aeTitle: 'CT03',
          deviceNumber: null,
          pattern: 'Discovery CT750',
          assetName: null,
          manufacture: 'GE',
          photoLink: '123_jpg',
          location: '2号楼1楼',
          site: '瑞金医院',
          orgName: '骨科',
          dashboardPage: '/cpmboard/starter.html#/dashboard/CT/2/',
          prepareTime1: 1.5,
          prepareTime2: 1.6,
        },
      ],
    ]
  })
  mock.onGet(URL.list).reply(() => {
    return [
      200,
      {
        columnList: [
          { index: 0, aggType: null, name: 'ae_title' },
          { index: 1, aggType: null, name: 'device_type' },
          { index: 2, aggType: null, name: 'location' },
          { index: 3, aggType: null, name: 'max_prepare_time' },
          { index: 4, aggType: null, name: 'name' },
          { index: 5, aggType: null, name: 'dashboard_page' },
          { index: 6, aggType: null, name: 'org_name' },
          { index: 7, aggType: null, name: 'pattern' },
          { index: 8, aggType: null, name: 'site' },
        ],
        data: [
          [
            'HDe',
            'MR',
            '3号楼1楼',
            '2',
            'HDe',
            '#NULL',
            '放射科',
            '#NULL',
            '瑞金医院',
          ],
          [
            'CT03',
            'CT',
            '2号楼1楼',
            '2',
            'Discovery CT750',
            '/cpmboard/starter.html#/dashboard/CT/2/',
            '骨科',
            'Discovery CT750',
            '瑞金医院',
          ],
          [
            'lx-mr',
            'MR',
            '3号楼1楼',
            '2',
            'lx-mr',
            '#NULL',
            '骨科',
            '',
            '骨科医院',
          ],
          [
            'GUKECT16',
            'CT',
            '2号楼1楼',
            '2',
            'OptimaCT540',
            '#NULL',
            '放射科',
            'OptimaCT540',
            '瑞金医院',
          ],
        ],
      },
    ]
  })

  mock.onGet(URL.getDashboardList).reply(() => {
    return [
      200,
      [
        {
          id: 2,
          userId: 1,
          categoryId: 1,
          name: 'Discovery CT750',
          userName: 'Administrator',
          loginName: 'admin',
          createTime: '2018-09-17 10:41:38.136908',
          updateTime: '2018-09-29 13:33:49.874',
          layout: {
            rows: [
              {
                type: 'param',
                params: [
                  {
                    paramType: 'datepicker',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'studydate',
                        datasetId: 2,
                      },
                      {
                        name: '检查时间',
                        column: 'studydate',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'studydate',
                        datasetId: 10,
                      },
                      {
                        name: '开停机时间',
                        column: 'study_date',
                        datasetId: 8,
                      },
                      {
                        name: '使用率',
                        column: 'studydate',
                        datasetId: 4,
                      },
                    ],
                    cfg: {
                      formatter: 'YYYY-MM-DD',
                      min: 'now(-12,\'M\')',
                      max: 'now()',
                      width: '12',
                      range: 'interval(7,\'d\')',
                      maxRange: 'interval(7,\'d\')',
                      step: 'interval(1,\'d\')',
                      value_fmt: 'YYYY-MM-DD',
                    },
                    values: ['2018-09-22', '2018-09-29'],
                    name: '时间区间',
                    type: '[a,b]',
                  },
                  {
                    paramType: 'enum',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'ae_title',
                        datasetId: 2,
                      },
                      {
                        name: '使用率',
                        column: 'ae_title',
                        datasetId: 4,
                      },
                      {
                        name: '检查时间',
                        column: 'ae_title',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'ae_title',
                        datasetId: 10,
                      },
                      {
                        name: '开停机时间',
                        column: 'ae_title',
                        datasetId: 8,
                      },
                    ],
                    enumOptions: {},
                    values: ['CT03'],
                    name: '设备',
                    type: '=',
                    selected: ['CT03'],
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 7,
                    name: '扫描总人数',
                    width: '4',
                  },
                  {
                    widgetId: 8,
                    name: '扫描总时间',
                    width: '4',
                  },
                  {
                    widgetId: 15,
                    name: '检查总部位',
                    width: '4',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 11,
                    name: '平均使用率',
                    width: '6',
                  },
                  {
                    widgetId: 12,
                    name: '使用率',
                    width: '6',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 51,
                    name: '开机时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 48,
                    name: '检查人次/部位数',
                    width: '12',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 50,
                    name: '检查时间空闲时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 52,
                    name: '检查时间',
                    width: 12,
                  },
                ],
              },
            ],
          },
          categoryName: 'CT',
          edit: false,
          delete: false,
        },
        {
          id: 4,
          userId: 1,
          categoryId: 2,
          name: 'MR-1',
          userName: 'Administrator',
          loginName: 'admin',
          createTime: '2018-09-26 21:23:08.326406',
          updateTime: '2018-09-29 13:35:21.92',
          layout: {
            rows: [
              {
                type: 'param',
                params: [
                  {
                    paramType: 'datepicker',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'studydate',
                        datasetId: 2,
                      },
                      {
                        name: '检查时间',
                        column: 'studydate',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'studydate',
                        datasetId: 10,
                      },
                      {
                        name: '开停机时间',
                        column: 'study_date',
                        datasetId: 8,
                      },
                      {
                        name: '使用率',
                        column: 'studydate',
                        datasetId: 4,
                      },
                    ],
                    cfg: {
                      formatter: 'YYYY-MM-DD',
                      min: 'now(-1,\'d\')',
                      max: 'now()',
                      range: 'interval(7,\'d\')',
                    },
                    values: ['2018-09-22', '2018-09-29'],
                    name: '时间区间',
                    type: '[a,b]',
                  },
                  {
                    paramType: 'enum',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'ae_title',
                        datasetId: 2,
                      },
                      {
                        name: '使用率',
                        column: 'ae_title',
                        datasetId: 4,
                      },
                      {
                        name: '开停机时间',
                        column: 'ae_title',
                        datasetId: 8,
                      },
                      {
                        name: '检查时间',
                        column: 'ae_title',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'ae_title',
                        datasetId: 10,
                      },
                    ],
                    enumOptions: {},
                    values: ['HDe'],
                    name: '设备',
                    type: '=',
                    selected: ['HDe'],
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 7,
                    name: '扫描总人数',
                    width: '6',
                  },
                  {
                    widgetId: 8,
                    name: '扫描总时间',
                    width: '6',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 11,
                    name: '平均使用率',
                    width: '6',
                  },
                  {
                    widgetId: 12,
                    name: '使用率',
                    width: '6',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 51,
                    name: '开机时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 6,
                    name: '检查人数',
                    width: '12',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 50,
                    name: '检查时间空闲时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 52,
                    name: '检查时间',
                    width: 12,
                  },
                ],
              },
            ],
          },
          categoryName: 'MR',
          edit: false,
          delete: false,
        },
        {
          id: 5,
          userId: 1,
          categoryId: 2,
          name: 'MR-2',
          userName: 'Administrator',
          loginName: 'admin',
          createTime: '2018-09-27 10:32:06.406799',
          updateTime: '2018-09-29 13:35:48.926',
          layout: {
            rows: [
              {
                type: 'param',
                params: [
                  {
                    paramType: 'datepicker',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'studydate',
                        datasetId: 2,
                      },
                      {
                        name: '检查时间',
                        column: 'studydate',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'studydate',
                        datasetId: 10,
                      },
                      {
                        name: '开停机时间',
                        column: 'study_date',
                        datasetId: 8,
                      },
                      {
                        name: '使用率',
                        column: 'studydate',
                        datasetId: 4,
                      },
                    ],
                    cfg: {
                      formatter: 'YYYY-MM-DD',
                      min: 'now(-1,\'d\')',
                      max: 'now()',
                      range: 'interval(7,\'d\')',
                    },
                    values: ['2018-09-22', '2018-09-29'],
                    name: '时间区间',
                    type: '[a,b]',
                  },
                  {
                    paramType: 'enum',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'ae_title',
                        datasetId: 2,
                      },
                      {
                        name: '使用率',
                        column: 'ae_title',
                        datasetId: 4,
                      },
                      {
                        name: '开停机时间',
                        column: 'ae_title',
                        datasetId: 8,
                      },
                      {
                        name: '检查时间',
                        column: 'ae_title',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'ae_title',
                        datasetId: 10,
                      },
                    ],
                    enumOptions: {},
                    values: ['lx-mr'],
                    name: '设备',
                    type: '=',
                    selected: ['lx-mr'],
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 7,
                    name: '扫描总人数',
                    width: '6',
                  },
                  {
                    widgetId: 8,
                    name: '扫描总时间',
                    width: '6',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 11,
                    name: '平均使用率',
                    width: '6',
                  },
                  {
                    widgetId: 12,
                    name: '使用率',
                    width: '6',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 51,
                    name: '开机时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 6,
                    name: '检查人数',
                    width: '12',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 50,
                    name: '检查时间空闲时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 52,
                    name: '检查时间',
                    width: 12,
                  },
                ],
              },
            ],
          },
          categoryName: 'MR',
          edit: false,
          delete: false,
        },
        {
          id: 3,
          userId: 1,
          categoryId: 1,
          name: 'OptimaCT540',
          userName: 'Administrator',
          loginName: 'admin',
          createTime: '2018-09-26 18:06:44.771836',
          updateTime: '2018-09-29 13:34:22.405',
          layout: {
            rows: [
              {
                type: 'param',
                params: [
                  {
                    paramType: 'datepicker',
                    selects: [],
                    col: [
                      {
                        name: '检查',
                        column: 'studydate',
                        datasetId: 2,
                      },
                      {
                        name: '检查时间',
                        column: 'studydate',
                        datasetId: 3,
                      },
                      {
                        name: '使用空闲时间',
                        column: 'studydate',
                        datasetId: 10,
                      },
                      {
                        name: '开停机时间',
                        column: 'study_date',
                        datasetId: 8,
                      },
                      {
                        name: '使用率',
                        column: 'studydate',
                        datasetId: 4,
                      },
                    ],
                    cfg: {
                      formatter: 'YYYY-MM-DD',
                      min: 'now(-1,\'d\')',
                      max: 'now()',
                      range: 'interval(7,\'d\')',
                    },
                    values: ['2018-09-22', '2018-09-29'],
                    name: '时间区间',
                    type: '[a,b]',
                  },
                  {
                    paramType: 'enum',
                    selects: [],
                    col: [
                      {
                        name: '使用空闲时间',
                        column: 'ae_title',
                        datasetId: 10,
                      },
                      {
                        name: '使用率',
                        column: 'ae_title',
                        datasetId: 4,
                      },
                      {
                        name: '检查',
                        column: 'ae_title',
                        datasetId: 2,
                      },
                      {
                        name: '检查时间',
                        column: 'ae_title',
                        datasetId: 3,
                      },
                      {
                        name: '开停机时间',
                        column: 'ae_title',
                        datasetId: 8,
                      },
                    ],
                    enumOptions: {
                      1: '1',
                    },
                    values: ['GUKECT16'],
                    name: '设备',
                    type: '=',
                    selected: ['GUKECT16'],
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 7,
                    name: '扫描总人数',
                    width: '4',
                  },
                  {
                    widgetId: 8,
                    name: '扫描总时间',
                    width: '4',
                  },
                  {
                    widgetId: 15,
                    name: '检查总部位',
                    width: '4',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 11,
                    name: '平均使用率',
                    width: '6',
                  },
                  {
                    widgetId: 12,
                    name: '使用率',
                    width: '6',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 51,
                    name: '开机时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 48,
                    name: '检查人次/部位数',
                    width: '12',
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 50,
                    name: '检查时间空闲时间',
                    width: 12,
                  },
                ],
              },
              {
                type: 'widget',
                widgets: [
                  {
                    widgetId: 52,
                    name: '检查时间',
                    width: 12,
                  },
                ],
              },
            ],
          },
          categoryName: 'CT',
          edit: false,
          delete: false,
        },
      ],
    ]
  })
}
