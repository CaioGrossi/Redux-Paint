import { useDispatch } from "react-redux";
import { setStrokeColor } from "../../modules/currentStroke/slice";
import { COLORS } from "./colors";
import * as S from "./styles";

const ColorPanel = () => {
  const dispatch = useDispatch();

  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };

  return (
    <S.Wrapper>
      <h2>Pick a color</h2>

      <S.ColorsWrapper>
        {COLORS.map((color: string) => (
          <S.ColorSquare
            key={color}
            onClick={() => {
              onColorChange(color);
            }}
            className="color"
            style={{ backgroundColor: color }}
          ></S.ColorSquare>
        ))}
      </S.ColorsWrapper>
    </S.Wrapper>
  );
};

export default ColorPanel;
