import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 350px;
  border: 2px solid #E57373;
  border-radius: 16px;
  background-color: #E57373;

  .div {
    width: 100%;
  }

  .middle {
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    height: 140px;

    div {
        margin: 1rem 0;
        display: flex;
        justify-content: space-evenly;

    }
  }

  .colored_part {
    background-color: #E57373;
    height: 38px;
  }

  .superior {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .inferior {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;