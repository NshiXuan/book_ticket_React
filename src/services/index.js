import request from './request'

export const loginService = async (name, password) => {
  return await request({
    url: '/login',
    method: 'POST',
    data: {
      name,
      password
    }
  })
}

export const registerService = async (name, password) => {
  return await request({
    url: '/user',
    method: 'POST',
    data: {
      name,
      password
    }
  })
}

export const getFightList = async (offset, limit) => {
  return await request({
    url: '/fight',
    params: {
      offset,
      limit
    }
  })
}

// 预定机票接口
export const bookFightService = async (fightId, status) => {
  return await request({
    url: '/fight/book',
    method: 'POST',
    data: {
      fightId,
      status
    }
  })
}

// 获取用户航班接口
export const getUserFight = async () => {
  return await request({
    url: '/user/fight',
    method: 'POST'
  })
}

// 取消用户订单接口
export const cancelFightService = async (fightId) => {
  return await request({
    url: '/user/fight',
    method: 'DELETE',
    data: {
      fightId
    }
  })
}

// 支付用户未支付航班接口
export const payUserFightService = async (fightId) => {
  return await request({
    url: '/user/pay',
    method: 'POST',
    data: {
      fightId
    }
  })
}

// 获取单个用户信息接口
export const getUserInfo = async (id) => {
  return await request.get(`/user/info/${id}`)
}

// 完善用户信息接口
export const perfectUserInfo = async (name, sex, age, phone, iden, userId) => {
  return await request({
    url: 'user/perfect',
    method: 'POST',
    data: {
      name,
      sex,
      age,
      phone,
      iden,
      userId
    }
  })
}

// 搜索航班接口
export const searchFight = async (start, dest, cabin) => {
  return await request({
    url: '/fight/search',
    params: {
      start,
      dest,
      cabin
    }
  })
}

// 录入航班接口
export const addFightService = async (name, cabin, start, dest, startTime, destTime, price, discount, status) => {
  return await request({
    url: 'fight',
    method: 'POST',
    data: {
      name,
      cabin,
      start,
      dest,
      startTime,
      destTime,
      price,
      discount,
      status
    }
  })
}

// 删除航班接口
export const deleteFightService = async (fightId) => {
  return await request({
    url: `/fight/${fightId}`,
    method: 'delete'
  })
}