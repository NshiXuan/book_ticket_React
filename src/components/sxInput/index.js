import React, { memo } from 'react'
import { Input } from 'antd';

import SxInputStyle from './style'

const SxInput = memo(({ label, labelWidth, ...rest }) => {
  return (
    <SxInputStyle labelWidth={labelWidth} >
      <span>{label}</span>
      <Input {...rest} />
    </SxInputStyle>
  )
})

export default SxInput