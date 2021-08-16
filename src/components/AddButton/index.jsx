import { Button } from "./styles";
import ControlPointIcon from "@material-ui/icons/ControlPoint";


const AddButton = ({ color, label }) => {
  return (
      <Button color={color}>
        <ControlPointIcon className="plus" />
        {label}
      </Button>
  );
};

export default AddButton;
