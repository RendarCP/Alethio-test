import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 2px solid;
  margin-bottom: 20px;
  overflow: hidden;
`

export const HeaderButton = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding:10px;
  &: hover{
    background-color: gray;
    color: white;
  }
`

export const MobileContainer = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000000
  margin-bottom: 10px;
`

export const MobileItem = styled.div`
  padding: 30px;
  border-bottom: 1px solid #000000;
`