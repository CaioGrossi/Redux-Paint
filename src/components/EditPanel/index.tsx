import { useDispatch, useSelector } from "react-redux";
import { redo, undo } from "../../modules/historyIndex/slice";
import { strokesLengthSelector } from "../../modules/strokes/selectors";

import * as S from "./styles";

const EditPanel = () => {
  const dispatch = useDispatch();
  const undoLimit = useSelector(strokesLengthSelector);

  return (
    <S.Wrapper>
      <h2>Edit draw</h2>

      <S.WrapperButtons>
        <S.Button onClick={() => dispatch(redo())}>Redo</S.Button>
        <S.Button onClick={() => dispatch(undo(undoLimit))}>Undo</S.Button>
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default EditPanel;
