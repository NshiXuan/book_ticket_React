import styled from "styled-components";

const MineStyle = styled.div`
  padding: 10px 20px;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;

  .title{
    padding: 5px;
    font-size: 1rem;
    font-weight: bold;
  }

  .no_fight{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #666;
    font-weight: bold;
    height: auto;
    flex: 1;
  }
`

export default MineStyle