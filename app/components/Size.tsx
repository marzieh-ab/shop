import React, { useState } from "react";
type Props = {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: {};
};

function Size({ setFormData, formData }: Props) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const sizes = ["sm", "md", "xl", "2xl", "3xl", "4xl"];
  
  const handleSizeButtonClick = (size: string) => {
    setSelectedSizes((prevSize) => {
      if (prevSize.includes(size)) {
        return prevSize.filter((s) => s !== size);
      } else {
        return [...prevSize, size];
      }
    });
  };

  const handleSubmit = () => {
    setFormData({
      ...formData,
      size: selectedSizes.join(","),
    });
  };
  return (
    <div>
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5 ${
            selectedSizes.includes(size) ? "bg-gray-500 text-white" : ""
          } `}
          onClick={() => handleSizeButtonClick(size)}
        >
          {size}
        </button>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Size;
