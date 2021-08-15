import ModalContainer from "../../components/ModalContainer";

import ModalHabito from "../../components/ModalContainer/ModalHabit";

import ModalDelete from "../../components/ModalContainer/ModalDelete";

import ModalObjetivo from "../../components/ModalContainer/ModalObjetivo";

import ModalGrupo from "../../components/ModalContainer/ModalGroup";

import ModalAtividade from "../../components/ModalContainer/ModalAtividade";
import EditAtividade from "../../components/ModalContainer/ModalEditActivity";

import EditUsername from "../../components/ModalContainer/ModalEditUsername";

const Home = () => {
  return (
    <>
        <ModalHabito />
        <ModalDelete />
        <ModalObjetivo />
        <ModalGrupo />
        <ModalAtividade />     
        <EditAtividade />
        <EditUsername />
      
      <div>Olá</div>
    </>
  );
};
export default Home;
