import styled from "styled-components";

const SearchStyle = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;

  .search_wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left{
      display: flex;
      align-items: center;
      gap: 1rem;

      .search{
        background-color:#16D46B;
      }
    }

    .right{
      display: flex;
      justify-content: right;
    }
  }
`

export default SearchStyle