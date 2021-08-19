import styled from "styled-components";

export const Header = styled.div`
  font-family: "Arvo", serif;
  @media (max-width: 768px) {
    color: #fff;
    position: fixed;
    width: 100vw;
    height: 50px;
    top: 0px;
    background-color: #006064;
    text-align: center;
    z-index: 2000;
    h2 {
        margin-top: 0.5rem;
    }
}
`