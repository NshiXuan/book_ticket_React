import React, { memo } from 'react'
import { Card } from 'antd';
import FightItemStyle from './style';

const FightItem = memo((props) => {
  const { item } = props

  return (
    <FightItemStyle>
      <Card bordered={false}>
        <div className="fight_item_wrapper">
          <div className="fight_name">
            <span>{item.name}</span>
          </div>
          <div className="position">
            <span>{item.start}</span>
            <span className='icon'>---</span>
            <span>{item.dest}</span>
          </div>
          <div className="fight_time">
            <span>{item.startTime}</span>
            <span className='icon'>---</span>
            <span>{item.destTime}</span>
          </div>
          <div className="cabin">
            <span>{item.cabin}</span>
          </div>
          <div className="price">
            <span className='money_icon'>￥</span>
            <span>{item.ticket.price}</span>
            <div>
              <span>{item.ticket.discount}</span>
              <span className='status'>{item.ticket.status}</span>
            </div>
          </div>
          <div className='button'>
            {item.status ? item.status : props.children}
          </div>
        </div>
        {
          item.status ?
            <span className="bottom">
              {props.children}
            </span>
            : ''
        }
      </Card>
    </FightItemStyle >
  )
})

export default FightItem