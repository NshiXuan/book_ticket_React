import React, { memo, useEffect, useState } from 'react'
import { Button, message, Modal } from 'antd'

import FightItem from '../../components/fight-item'
import { cancelFightService, getUserFight, getUserInfo, payUserFightService } from '../../services'
import MineStyle from './style'
import PersonInfo from '../../components/person-info'
import localCache from '../../utils/localCache'

const Mine = memo(() => {
  const [userFightList, setUserFightList] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [isModalVisible, setIsModalVisible] = useState({ isShow: false });

  useEffect(() => {
    const id = localCache.getItem('id')
    getUserFight().then(res => {
      setUserFightList(res)
    })
    handleGetUserInfo(id)
  }, [])

  const handleGetUserInfo = (id) => {
    getUserInfo(id).then(res => {
      setUserInfo(res[0])
    })
  }

  const cancelHandle = (item) => {
    setIsModalVisible({ isShow: true, message: '亲，确定要取消订单吗？', item })
  }

  const payHandle = (item) => {
    setIsModalVisible({ isShow: true, message: '亲，确定付款吗？', item })
  }

  const handleOk = async () => {
    if (isModalVisible.item.status === "未付款") {
      const res = await payUserFightService(isModalVisible.item.id)
      res.status === 200 ? message.success(res.message, 1) : message.error('付款失败', 1)
    } else {
      const res = await cancelFightService(isModalVisible.item.id)
      res.status === 200 ? message.success(res.message, 1) : message.error('订单取消失败', 1)
    }

    getUserFight().then(res => {
      setUserFightList(res)
    })
    setIsModalVisible(false);
  };

  const handleCancel = async () => {
    setIsModalVisible(false);
  };


  return (
    <MineStyle>
      <PersonInfo info={userInfo} handleGetUserInfo={handleGetUserInfo} />
      <div className='title'>我的订单</div>
      {
        userFightList.length ? userFightList.map((item, index) => {
          return (
            <FightItem
              key={item.id}
              item={item}
            >
              <Button
                danger
                onClick={e => cancelHandle(item)}
              >
                取消订单
              </Button>
              {
                item.status === "未付款"
                  ?
                  <Button
                    type='primary'
                    danger
                    onClick={e => payHandle(item)}
                  >
                    付款
                  </Button>
                  :
                  ""
              }
            </FightItem>
          )
        }) : <div className="no_fight"><div>暂无订单</div></div>
      }
      <Modal
        visible={isModalVisible.isShow}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        cancelText="我再想想"
        cancelButtonProps={{ danger: true }}
        okText="确定"
      >
        <p>{isModalVisible.message}</p>
      </Modal>
    </MineStyle >
  )
})

export default Mine