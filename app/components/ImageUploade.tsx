import React from "react";
import { CldUploadWidget } from "next-cloudinary";
type Props = {
  handleImageChange: () => void;
  updateInfo: React.Dispatch<any>;
  info: any;
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
};

function ImageUploade(props: Props) {
  return (
    <div>
      <CldUploadWidget uploadPreset="<Upload Preset>">
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open();
          }
          return (
            <button className="button" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}

export default ImageUploade;
