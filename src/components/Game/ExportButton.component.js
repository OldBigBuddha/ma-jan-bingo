import React from "react";

import html2canvas from "html2canvas";

// Ref: https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas
const saveAsImage = uri => {
  const downloadLink = document.createElement('a');
  if (typeof downloadLink.download === 'string') {
    downloadLink.href = uri;
    downloadLink.download = "ma-jan-bingo-sheet.png";

    // Firefox requires the link to be in the body
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } else {
    window.open(uri);
  }
}

export default () => {

  const onClickExport = () => {
    const bingoSheet = document.getElementById("board");
    html2canvas(bingoSheet).then(canvas => {
      const imgBingoSheetUri = canvas.toDataURL("img/png");
      saveAsImage(imgBingoSheetUri);
    });
  }

  return <button className="btn btn-outline-secondary mb-3 ml-2 mr-2" onClick={() => onClickExport()}>PNG出力</button>
}