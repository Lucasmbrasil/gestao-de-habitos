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
      <ModalContainer color="#81C784">
        <ModalHabito />
      </ModalContainer>
      <ModalContainer color="#E57373">
        <ModalDelete />
      </ModalContainer>

      <ModalContainer color="#7986CB">
        <ModalObjetivo />
      </ModalContainer>

      <ModalContainer color="#7986CB">
        <ModalGrupo />
      </ModalContainer>

      <ModalContainer color="#8BC34A">
        <ModalAtividade />
      </ModalContainer>
      <ModalContainer color="#8BC34A">
        <EditAtividade />
      </ModalContainer>

      <ModalContainer color="#26A69A">
        <EditUsername />
      </ModalContainer>
      <div>Olá</div>
    </>
  );
};
export default Home;
