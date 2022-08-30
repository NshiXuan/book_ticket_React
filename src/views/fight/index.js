import React, { memo, useEffect, useState } from 'react'
import { Button, message, Modal } from 'antd';

import FightItem from '../../components/fight-item'
import { bookFightService, deleteFightService, getFightList } from '../../services'
import FightStyle from './style'
import localCache from '../../utils/localCache';
import Search from '../../components/search';

const Fight = memo(() => {
  const [fightList, setFightList] = useState([])
  const [isModalVisible, setIsModalVisible] = useState({ isShow: false });
  const id = localCache.getItem('id')

  useEffect(() => {
    handleGetFightInfo()
  }, [])

  const handleGetFightInfo = async () => {
    const res = await getFightList(0, 5)
    setFightList(res)
  }

  const bookBtnHandle = (item) => {
    setIsModalVisible({
      isShow: true,
      item,
      message: '亲，请支付',
      cancelText: '取消',
      okText: '确定',
      cancelButtonProps: { type: 'primary' },
      okButtonProps: { type: 'primary', danger: true }
    });
  }

  const handleDeleteBtn = (item) => {
    setIsModalVisible({
      isShow: true,
      item,
      message: '确定要删除吗？',
      cancelText: '我再想想',
      okText: '确定',
      cancelButtonProps: { danger: true },
      okButtonProps: { type: 'primary', danger: true },
      isDelete: true
    });
  }

  const handleOk = async () => {
    if (!isModalVisible.isDelete) {
      const res = await bookFightService(isModalVisible.item.id, "已付款")
      res.status !== 200 ? message.error(res.data, 1) : message.success(res.message, 1)
    } else {
      const res = await deleteFightService(isModalVisible.item.id)
      res.status === 200 ? message.success(res.message, 1) : message.error('删除失败', 1)
      handleGetFightInfo()
    }
    setIsModalVisible(false);
  };

  const handleCancel = async () => {
    if (!isModalVisible.isDelete) {
      await bookFightService(isModalVisible.item.id, "未付款")
    }
    setIsModalVisible(false);
  };

  return (
    <FightStyle>
      <Search setFightList={setFightList} handleGetFightInfo={handleGetFightInfo}></Search>
      {
        fightList.length ? fightList.map((item, index) => {
          return (
            <FightItem key={item.id} item={item} >
              {
                id === 11 ?
                  <Button
                    type='primary'
                    danger
                    onClick={e => handleDeleteBtn(item)}
                  >删除</Button>
                  :
                  <Button
                    className='book_btn'
                    onClick={e => bookBtnHandle(item)}
                  >
                    预定
                  </Button>
              }
            </FightItem>
          )
        }) :
          <div className="no_found">空空如也</div>
      }
      <Modal
        visible={isModalVisible.isShow}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        cancelText={isModalVisible.cancelText}
        okText={isModalVisible.okText}
        cancelButtonProps={isModalVisible.cancelButtonProps}
        okButtonProps={isModalVisible.okButtonProps}
      >
        <p>{isModalVisible.message}</p>
      </Modal>
    </FightStyle>
  )
})

export default Fight