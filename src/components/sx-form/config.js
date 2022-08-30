const addFightForm = [
  {
    label: '编号',
    name: 'name',
    type: 'input',
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '出发地',
    name: 'start',
    type: 'input',
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '目的地',
    name: 'dest',
    type: 'input',
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '出发时间',
    name: 'startTime',
    type: 'input',
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '抵达时间',
    name: 'destTime',
    type: 'input',
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '机舱',
    name: 'cabin',
    type: 'select',
    options: [
      {
        value: '经济舱'
      },
      {
        value: '头等舱'
      }
    ],
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '价格',
    name: 'price',
    type: 'input',
    rules: [
      {
        required: true,
      }
    ]
  },
  {
    label: '折扣',
    name: 'discount',
    type: 'input'
  },
  {
    label: '状态',
    name: 'status',
    type: 'select',
    options: [
      {
        value: '销售中'
      },
      {
        value: '已售罄'
      }
    ],
    rules: [
      {
        required: true,
      }
    ]
  }
]

export default addFightForm