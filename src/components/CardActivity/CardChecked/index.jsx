import { CardMarked } from "./styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete"; 
import CreateIcon from "@material-ui/icons/Create"; 

const GreyCheckbox = withStyles({
  root: {
    color: grey[900],
    '&$checked': {
      color: grey[900],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CardActivity = ({title, date, handleDelete, handleEdit, achieved, activity}) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  }
  

  return (
    <>
      <CardMarked>
        <div className="check">
            <GreyCheckbox checked={check} onChange={handleCheck} />
        </div>

        <div className="text">
          <span>{title}</span>
          <p>data: {new Date(date).toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="icons">
          <CreateIcon />
          <DeleteIcon onClick={() => handleDelete(activity)} />
        </div>
      </CardMarked>
    </>
  );
};

export default CardActivity;
