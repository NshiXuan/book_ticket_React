import styled from "styled-components";

const RegisterStyle = styled.div`
  height: 100vh;
  background-color: #0A0F19;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A0F19;

  .register_wrapper{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 500px;
    padding: 3rem;
    background-color: #FAFEFF;
    border-radius: 5px;

    .to_login{
      text-align: right;
      a{
        color: #37A3FF;
      }
    }
  }
`

export default RegisterStyle