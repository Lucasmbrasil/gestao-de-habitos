import { Button } from "./styles";

import ControlPointIcon from "@material-ui/icons/ControlPoint";

const AddButton = ({ color }) => {
  return (
    <>
      <Button color={"red"}>
        <ControlPointIcon className="plus" />
        criar novo
      </Button>
    </>
  );
};

export default AddButton;
