import MenuSide from "../../components/MenuSide";
import { PageContainer, MainContainer } from "../Dashboard/styles";
import {ButtonAddGroup, ContainerHeader, ContainerIconTitleSubtitle} from "./styles"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchGroups from "../../components/SearchGroups";
import { useMediaQuery } from 'react-responsive';
import MenuFooter from "../../components/MenuFooter";
import MobileHeader from "../../components/MobileHeader";

const FindGroups = () => {
    const desktop = useMediaQuery({ query: '(min-width: 769px)' })
    return (
        <PageContainer>
            {desktop && <MenuSide />}
            {!desktop && <MobileHeader />}
            <MainContainer>
                <ContainerHeader>
                    <ContainerIconTitleSubtitle>
                        <PeopleOutlineIcon fontSize="large" style={{color: "#F57F17"}}/>
                        <div>
                            <h2>encontre novos grupos</h2>
                            <p>pesquise pelo nome ou categoria que você mais se identifica!</p>
                        </div>  
                    </ContainerIconTitleSubtitle>

                    <ButtonAddGroup>
                        <AddCircleOutlineIcon fontSize="small" /> criar novo grupo
                    </ButtonAddGroup>
                </ContainerHeader>
                <SearchGroups />
            </MainContainer>
            {!desktop && <MenuFooter />}
        </PageContainer>
    )
}

export default FindGroups;