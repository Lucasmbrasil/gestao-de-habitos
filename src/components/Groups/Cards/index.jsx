import { CardRed, CardBlue, CardGreen, Image, Image2, Image3 } from "./styles";

const Cards = () => {
  return (
    <>
      <CardRed>
        <div className="red" />
        <div className="main-red">
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgsEkRrofPZsplqZJU6PDESFK6log2EySfA&usqp=CAU"
            }
            alt=""
          />
          <div className="group-red">
            <div>nomedogrupo</div>
            <div>Categoria</div>
          </div>
        </div>
        <div className="description-red">
          <span>Descrição</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
        </div>
        <div className="red" />
      </CardRed>

      <CardBlue>
        <div className="blue" />
        <div className="main-blue">
          <Image2
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgsEkRrofPZsplqZJU6PDESFK6log2EySfA&usqp=CAU"
            }
            alt=""
          />
          <div className="group-blue">
            <div>nomedogrupo</div>
            <div>Categoria</div>
          </div>
        </div>
        <div className="description-blue">
          <span>Descrição</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
        </div>
        <div className="blue" />
      </CardBlue>

      <CardGreen>
        <div className="green" />
        <div className="main-green">
          <Image3
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgsEkRrofPZsplqZJU6PDESFK6log2EySfA&usqp=CAU"
            }
            alt=""
          />
          <div className="group-green">
            <div>nomedogrupo</div>
            <div>Categoria</div>
          </div>
        </div>
        <div className="description-green">
          <span>Descrição</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
        </div>
        <div className="green" />
      </CardGreen>
    </>
  );
};

export default Cards;
