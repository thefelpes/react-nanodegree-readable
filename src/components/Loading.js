import React from 'react'
import styled from 'styled-components'
import { LinearProgress } from 'material-ui'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Loading = () => (
  <Wrapper>
    <LinearProgress style={{
      backgroundColor: '#454545'
    }} />
  </Wrapper>
)

export default Loading
