import { useState } from "react";
import "./App.css";
import Webcam from "react-webcam";

function App() {
  const [imageSrc, setimageSrc] = useState(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div style={{ display: "relative" }}>
      <Webcam
        audio={false}
        sFormacreenshott="image/jpeg"
        videoConstraints={videoConstraints}
        disablePictureInPicture={true}
        width={500}
        height={900}
        mirrored={true}
      >
        {({ getScreenshot }) => (
          <button
            style={{ position: "absolute", bottom: "0" }}
            onClick={() => {
              const temp = getScreenshot();
              setimageSrc(temp);  
              // console.log(imageSrc);
              const byteString = atob(imageSrc.split(",")[1]);
              const mimeString = imageSrc
                .split(",")[0]
                .split(":")[1]
                .split(";")[0];
              const buffer = new ArrayBuffer(byteString.length);
              const dataView = new Uint8Array(buffer);

              for (let i = 0; i < byteString.length; i++) {
                dataView[i] = byteString.charCodeAt(i);
              }

              const blob = new Blob([buffer], { type: mimeString });
              const file = new File([blob], "captured_photo.png", {
                type: mimeString,
              });
              setimageSrc(temp);
              console.log(file);
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      {imageSrc && <img src={imageSrc} alt="image" />}
    </div>
  );
}

export default App;
