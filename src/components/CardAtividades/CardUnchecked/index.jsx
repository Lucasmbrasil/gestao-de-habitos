import { CardUnMarked } from "./styles";

import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const CardUnChecked = () => {
  return (
    <>
      <CardUnMarked>
        <div className="check">
          <CheckBoxOutlineBlankOutlinedIcon className="check-icon" />
        </div>
        <div className="text">
          titulo<span>data: 11 de agosto de 2021</span>
        </div>
        <div className="icons">
          <CreateOutlinedIcon />
          <CancelOutlinedIcon />
        </div>
      </CardUnMarked>
    </>
  );
};

export default CardUnChecked;
