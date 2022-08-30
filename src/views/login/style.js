import styled from "styled-components";

const LoginStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A0F19;

  .login_wrapper{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 500px;
    padding: 3rem;
    background-color: #FAFEFF;
    border-radius: 5px;

    .to_register{
      text-align: right;
      a{
        color: #37A3FF;
      }
    }
  }
`

export default LoginStyle