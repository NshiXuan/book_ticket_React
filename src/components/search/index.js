import React, { memo, useState, useEffect } from 'react'
import { Button, message, Select } from 'antd'
import { SwapOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons'

import SearchStyle from './style'
import localCache from '../../utils/localCache'
import { getFightList, searchFight } from '../../services'
import SxForm from '../sx-form'
import addFightForm from '../sx-form/config'

const Search = memo((props) => {
  const { setFightList, handleGetFightInfo } = props
  const [start, setStart] = useState('')
  const [dest, setDest] = useState('')
  const [cabin, setCabin] = useState('')
  const [visible, setVisible] = useState(false)
  const [startArr, setStartArr] = useState([])
  const [destArr, setDestArr] = useState([])
  const id = localCache.getItem('id')


  useEffect(() => {
    getFightList(0, 5).then(res => {
      const startArr = []
      const destArr = []
      for (const item of res) {
        if (startArr.indexOf(item.start) === -1) {
          startArr.push(item.start)
        }
        if (destArr.indexOf(item.dest) === -1) {
          destArr.push(item.dest)
        }
      }
      setStartArr(startArr)
      setDestArr(destArr)
    })
  }, [])

  const handleSearch = async () => {
    if (!start || !dest) {
      return message.error('请选择完整的搜索内容', 1)
    }
    const res = await searchFight(start, dest, cabin)
    setFightList(res)
  }

  const handleReset = async () => {
    handleGetFightInfo()
  }

  const handleAdd = () => {
    setVisible(true)
  }

  return (
    <SearchStyle>
      <div className="search_wrapper">
        <div className="left">
          <Select
            style={{
              width: 80,
            }}
            allowClear={true}
            onSelect={e => setStart(e)}
            onClear={e => setStart(e)}
          >
            {
              startArr.map((item, index) => {
                return (
                  <Select.Option
                    key={item}
                    value={item}>
                    {item}
                  </Select.Option>
                )
              })
            }
          </Select>
          <SwapOutlined />
          <Select
            style={{
              width: 80,
            }}
            allowClear={true}
            onSelect={e => setDest(e)}
            onClear={e => setDest(e)}
          >
            {
              destArr.map((item, index) => {
                return (
                  <Select.Option
                    key={item}
                    value={item}>
                    {item}
                  </Select.Option>
                )
              })
            }
          </Select>
          <Select
            defaultValue=""
            style={{
              width: 100,
            }}
            allowClear={true}
            onSelect={e => setCabin(e)}
            onClear={e => setCabin(e)}
          >
            <Select.Option value="经济舱">经济舱</Select.Option>
            <Select.Option value="头等舱">头等舱</Select.Option>
          </Select>
          <Button className='search' icon={<SearchOutlined />} type='primary' onClick={handleSearch}>查询</Button >
          <Button icon={<ReloadOutlined />} type='primary' onClick={handleReset}>重置</Button>
        </div>
        <div className="right">
          {id === 11 ? <Button type='primary' onClick={handleAdd}>录入航班</Button> : ''}
        </div>
      </div>
      <SxForm
        visible={visible}
        setVisible={setVisible}
        formInfo={addFightForm}
        handleGetFightInfo={handleGetFightInfo}
      >

      </SxForm>
    </SearchStyle >
  )
})

export default Search