import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
type Props = {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateInfo: React.Dispatch<any>;
  info: any;
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
};
function ImageUploade({
  handleImageChange,
  updateInfo,
  info,
  imageUrls,
  setImageUrls,
}: Props) {
  // ouxldvu8
  const onupload = (result: any) => {
    updateInfo(result.info.secure_url);
    const newImageUrl = result.info.secure_url;
    setImageUrls((preImageUrls) => [...preImageUrls, newImageUrl]);
    handleImageChange(result);
  };

  const handleDeleteImage = (index: number) => {
    setImageUrls((prevImageUrls) => {
      const updateImageUrls = [...prevImageUrls];
      updateImageUrls.splice(index, 1);
      return updateImageUrls;
    });
  };

  return (
    <div>
      <div className="mb-10">
        <CldUploadWidget uploadPreset="ouxldvu8" onUpload={onupload}>
          {({ open }: any) => {
            function handleOnclick(e: React.MouseEvent<HTMLButtonElement>) {
              e.preventDefault();
              open();
            }
            return (
              <button
                className="border-[1px] rounded-lg p-1 px-2"
                onClick={handleOnclick}
              >
                Upload Product Images
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="flex flex-col justify-center">
            <img
              src={imageUrl}
              className="w-[250px] h-[300px] object-cover object-top"
              alt={`uploades Image ${index + 1}`}
            />
            <button
              className="border-[1px] rounded-lg p-1 px-2 mt-5"
              onClick={() => handleDeleteImage(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploade;
