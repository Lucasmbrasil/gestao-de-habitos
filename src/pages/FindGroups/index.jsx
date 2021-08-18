import MenuSide from "../../components/MenuSide";
import CardAvailableGroup from "../../components/CardsGroupsPage/CardAvailableGroup";
import { PageContainer, MainContainer } from "../Dashboard/styles";
import {ButtonAddGroup, ContainerHeader, ContainerIconTitleSubtitle} from "./styles"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const FindGroups = () => {

    return (
        <PageContainer>
            <MenuSide />
            <MainContainer>
                <ContainerHeader>
                    <ContainerIconTitleSubtitle>
                        <PeopleOutlineIcon fontSize="large" style={{color: "#F57F17"}}/>
                        <div>
                            <h2>grupos</h2>
                            <p>veja abaixo os grupos em que você se inscreveu</p>
                        </div>  
                    </ContainerIconTitleSubtitle>

                    <ButtonAddGroup>
                        <AddCircleOutlineIcon fontSize="small" /> criar novo grupo
                    </ButtonAddGroup>
                </ContainerHeader>
            </MainContainer>
        </PageContainer>
    )
}

export default FindGroups;