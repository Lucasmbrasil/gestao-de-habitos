import { CardGroup, Image, ImagePlus } from "./styles";

import ControlPointIcon from "@material-ui/icons/ControlPoint";

const Newgroup = () => {
  return (
    <>
      <CardGroup>
        <div className="red" />
        <div className="main">
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgsEkRrofPZsplqZJU6PDESFK6log2EySfA&usqp=CAU"
            }
            alt=""
          />
          <div className="group">
            <div>nomedogrupo</div>
            <div>Categoria</div>
          </div>
        </div>
        <div className="description">
          <span>Descrição</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
        </div>
        <div className="details">
          <button>
            <ControlPointIcon className="plus" />
            <div className="sign">Inscrever-se</div>
          </button>
          <div className="more">ver mais</div>
        </div>
        <div className="red" />
      </CardGroup>
    </>
  );
};

export default Newgroup;
