import styled from "styled-components";
import { HabitCardBlue } from "../BlueCard/styles";
export const HabitCardRed = styled(HabitCardBlue)`
  .filled,
  .filled2,
  .category {
    background-color: #ffcdd2;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 39%;
    .filled {
      width: 100%;
    }

    .filled2 {
      margin-left: 0;
    }
  }
`;
