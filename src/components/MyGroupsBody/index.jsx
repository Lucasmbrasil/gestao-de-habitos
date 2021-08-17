import { ContainerBody, ContainerGroups, SearchPlace, SearchBar } from "./styles"
import SearchIcon from '@material-ui/icons/Search';

const MyGroupsBody = () => {
    return (
        <ContainerBody>        
            <ContainerGroups>
                <h2>meus grupos</h2>
            </ContainerGroups>

            <ContainerGroups>
                <h2>grupos sugeridos</h2>

                <SearchPlace>
                    <p>deseja ver mais? busque novos grupos</p>                
                    <SearchBar>
                        buscar novos grupos <SearchIcon />
                    </SearchBar>
                </SearchPlace>
            </ContainerGroups>
        </ContainerBody> 
    )
}

export default MyGroupsBody;