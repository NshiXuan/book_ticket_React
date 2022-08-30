import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  /* border-bottom: 1px solid #000; */
  background-color: #fff;
  box-shadow: 0 4px 10px -3px #eee;

  .header_right{
    cursor: pointer;
  }
`

export default HeaderStyle