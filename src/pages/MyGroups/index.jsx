import MyGroupsHeader from "../../components/MyGroupsHeader";
import MyGroupsBody from "../../components/MyGroupsBody";
import { BodyPage } from "./styles";

const MyGroups = () => {
    return <>
        <BodyPage>
            <MyGroupsHeader />  

            <hr />      
            
            <MyGroupsBody />
        </BodyPage>
    </>
}

export default MyGroups;