import React, { memo, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu } from 'antd';

import localCache from '../../utils/localCache'
import HomeStyle from './style';
import Header from '../../components/header';

const Home = memo(() => {
  const menu = localCache.getItem('menu')
  const [current] = useState(localCache.getItem('current') + '')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localCache.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])


  const onClick = (e) => {
    localCache.setItem('current', e.key)
    navigate({
      pathname: e.item.props.path
    })
  }

  return (
    <HomeStyle>
      <Menu
        className='menu'
        onClick={onClick}
        style={{
          width: 200,
        }}
        defaultSelectedKeys={current}
        mode="inline"
        items={menu}
      />
      <div className="right">
        <Header />
        <Outlet />
      </div>
    </HomeStyle >
  )
})

export default Home