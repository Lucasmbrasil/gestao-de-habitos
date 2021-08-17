import { ContainerBody, ContainerMyGroups, ContainerSuggestionGroups, SearchPlace, SearchBar } from "./styles"
import SearchIcon from '@material-ui/icons/Search';

const MyGroupsBody = () => {
    return (<>

        <ContainerBody>        
            <ContainerMyGroups>
                <h2>meus grupos</h2>
            </ContainerMyGroups>

            <ContainerSuggestionGroups>
                <h2>grupos sugeridos</h2>

                <SearchPlace>
                    <p>deseja ver mais? busque novos grupos</p>                
                    <SearchBar>
                        buscar novos grupos <SearchIcon />
                    </SearchBar>
                </SearchPlace>
            </ContainerSuggestionGroups>
        </ContainerBody> 
    </>)
}

export default MyGroupsBody;