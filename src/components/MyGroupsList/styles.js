import styled from "styled-components";

export const GroupsContainer = styled.div`
@media (min-width: 769px){
    height: 60%;
    max-height: 450px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
}
display: flex;
flex-wrap: wrap;
justify-content: center;
 width: 90%;
`