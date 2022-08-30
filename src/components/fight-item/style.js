import styled from "styled-components";

const FightItemStyle = styled.div`
  margin-bottom: 10px;

  .fight_item_wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .position,.fight_time{
      font-weight: bold;
      font-size: 18px;
    }

    .icon{
      margin: 0 10px;
    }

    .cabin{
      font-size: 16px;
    }

    .price{
      font-weight: bold;
      color:#FF6C37;
      font-size: 18px;
      
      .money_icon,div{
        font-size: 14px;
      }

      div{
        font-weight: normal;
        font-size: 12px;
        color: #777;
      }

      .status{
        margin-left: 5px;
        color: #55D55A;
        font-weight: bold;
      }
    }
  }

  .bottom{
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`

export default FightItemStyle