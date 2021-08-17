import {ButtonAddGroup, ContainerButton, ContainerHeader, ContainerIconTitleSubtitle} from "./styles"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const MyGroupsHeader = () => {
    return <>
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

    </>
}

export default MyGroupsHeader;