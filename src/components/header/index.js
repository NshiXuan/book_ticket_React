import React, { memo } from 'react'
import { Dropdown, Menu, Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import HeaderStyle from './style'
import localCache from '../../utils/localCache';

const Header = memo(() => {
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '退出'
        }
      ]}
      onClick={e => exitHandle()}
    />
  );

  const exitHandle = () => {
    localCache.clear()
    navigate('/login')
    return message.success('退出成功', .5)
  }


  return (
    <HeaderStyle>
      <div className='header_left'></div>
      <div className='header_right'>
        <Dropdown overlay={menu} placement="bottomLeft" >
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </HeaderStyle>
  )
})

export default Header