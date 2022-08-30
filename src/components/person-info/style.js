import styled from "styled-components";

const PersonInfoStyle = styled.div`
  margin-bottom: 10px;

  .person_wrapper{
    display: flex;
    align-items: center;
    gap: 3rem;

    .avatar{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .info{
      display: flex;
      /* align-items: center; */
      gap: 5rem;

      .info_left,.info_right{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    .perfect_info{
      display: flex;
      flex: 1;
      justify-content: right;

      button{
        background-color: #55D55A;
      }
    }
  }


`

export default PersonInfoStyle