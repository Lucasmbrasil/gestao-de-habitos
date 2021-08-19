import { useEffect } from 'react';
import ModalEditUsername from '../ModalContainer/ModalEditUsername';
import api from '../../services/api';

const UserEdit = () => {
    useEffect(() => {
      api
        .patch(`/users/3`)  
    })
    return (
        <div>
            <ModalEditUsername/>
        </div>
    )
}

export default UserEdit;