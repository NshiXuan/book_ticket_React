import styled from "styled-components";

const FightStyle = styled.div`
  height: calc(100% - 40px);
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

  .book_btn{
    background-color: #55D55A;
    color: #fff;
  }

  .no_found{
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

export default FightStyle