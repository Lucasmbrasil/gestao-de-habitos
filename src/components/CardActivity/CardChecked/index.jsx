import { CardMarked } from "./styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import { useState } from "react";

const GreyCheckbox = withStyles({
  root: {
    color: grey[900],
    '&$checked': {
      color: grey[900],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CardActivity = ({title, date, handleDelete, handleEdit, achieved}) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  }
  //cores aleatorias para passar por props depois (martelinho de ouro pro final);

  return (
    <>
      <CardMarked>
        <div className="check">
            <GreyCheckbox checked={check} onChange={handleCheck} />
        </div>

        <div className="text">
          <span>{title}</span>
          <p>data: {date}</p>
        </div>

        <div className="icons">
          <CreateOutlinedIcon />
          <button>X</button>
        </div>
      </CardMarked>
    </>
  );
};

export default CardActivity;
