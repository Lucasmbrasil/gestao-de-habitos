import { HabitCard } from "./styles";

import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const BlueCard = () => {
  return (
    <>
      <HabitCard>
        <div className="filled">
          <div />
        </div>
        <div className="text">
          <div>titulo</div>
          <div>Descrição</div>
          <div>
            Nivel:
            <SettingsOutlinedIcon />
            <SettingsOutlinedIcon />
          </div>
        </div>
        <div className="text2">
          <div className="pen">
            <CreateOutlinedIcon />
          </div>
          <button className="btn">Categoria</button>
          <div>Frenquencia:</div>
        </div>

        <div className="filled2">
          <button class="plus">+</button>
          <button class="minus">-</button>
        </div>
      </HabitCard>
    </>
  );
};

export default BlueCard;
