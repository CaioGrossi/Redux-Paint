import ColorPanel from "../ColorPanel";
import FilePanel from "../FilePanel";
import CanvasPanel from "../CanvasPanel";
import EditPanel from "../EditPanel";

import * as S from "./styles";

const Layout = () => {
  return (
    <S.Wrapper>
      <h1>Redux paint</h1>
      <S.BoardWrapper>
        <CanvasPanel />

        <S.EditBoxWrapper>
          <ColorPanel />
          <FilePanel />
          <EditPanel />
        </S.EditBoxWrapper>
      </S.BoardWrapper>
    </S.Wrapper>
  );
};

export default Layout;
