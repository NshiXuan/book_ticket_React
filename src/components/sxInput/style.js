import styled from "styled-components";

const SxInputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    font-size: 1rem;
    text-align: right;
    margin-right: 1rem;
    width: ${props => props.labelWidth + 'px'};
  }

  input{
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    padding: 1rem;
    border-radius: 4px;
  }
`

export default SxInputStyle