import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import ModalContainer from "..";
import Radio from "@material-ui/core/Radio";
import { useState } from "react";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
  },
});

const ModalHabito = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const [value, setValue] = useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <ModalContainer color="#81C784">
      <div className="modal">
        <div className="title">novo hábito:</div>
        <div className="input">
          <div className="text">
            <label>título</label>
          </div>
          <input className="habitoName" placeholder="nome do hábito" />
        </div>
        <div className="input">
          <div className="text2">
            <label>descrição</label>
          </div>
          <input
            className="desc"
            placeholder="descreva um pouco sobre o hábito aqui"
          />
        </div>
        <div className="input">
          <div className="text3">
            <label>categoria</label>
          </div>
          <div className="select">
            <select
              style={{
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                paddingLeft: "1rem",
                border: "1px solid #424242",
                backgroundColor: "white",
              }}
            >
              <option className="option">Selecione uma categoria</option>
            </select>
            <div className="frequency">
              Frequencia:
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <div>diaria</div>
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
              />
              <div>semanal</div>
            </div>
            <div className={classes.box} component="fieldset" mb={3}>
              <Typography component="legend">nivel de dificuldade:</Typography>
              <Rating
                name="habito"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalHabito;
