import styled from "styled-components";
import { HabitCardBlue } from "../BlueCard/styles";

export const HabitCardYellow = styled(HabitCardBlue)`
  .filled,
  .filled2,
  .category {
    background-color: #ffffa8;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .filled {
      width: 100%;
    }

    .filled2 {
      margin-left: 0;
    }
  }
`;
