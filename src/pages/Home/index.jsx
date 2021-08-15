import ModalContainer from "../../components/ModalContainer";

import ModalHabito from "../../components/ModalContainer/ModalHabito";

import ModalDelete from "../../components/ModalContainer/ModalDelete";

import ModalObjetivo from "../../components/ModalContainer/ModalObjetivo";

import ModalGrupo from "../../components/ModalContainer/ModalGrupo";

import ModalAtividade from "../../components/ModalContainer/ModalAtividade";
import EditAtividade from "../../components/ModalContainer/ModalEditAtividade";

import EditUsername from "../../components/ModalContainer/EditUsername";

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
