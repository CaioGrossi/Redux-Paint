import { useCanvas } from "../../CanvasContext";
import { saveAs } from "file-saver";
import { getCanvasImage } from "../../utils/canvas";

import * as S from "./styles";

const FilePanel = () => {
  const canvasRef = useCanvas();

  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current);

    if (!file) {
      return;
    }
    saveAs(file, "drawing.png");
  };
  return (
    <S.Wrapper>
      <h2>File</h2>
      <S.DownloadButton className="save-button" onClick={exportToFile}>
        Download file
      </S.DownloadButton>
    </S.Wrapper>
  );
};

export default FilePanel;
