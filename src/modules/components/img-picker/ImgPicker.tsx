import useOnClickOutside from '@/common/hooks/DetectClickOutside';
import { useRef, useState } from 'react';
import shopIcon from '@/assets/shop.png';
import houseIcon from '@/assets/house.png';
const images = [shopIcon, houseIcon];

interface ImgPickerProps {
  callback: (arg: string) => void;
  bgColor?: string;
}

const ImgPicker = ({ callback, bgColor = 'black' }: ImgPickerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [imagIcon, setImageIcon] = useState(images[0]);
  const [openColors, setOpenColors] = useState(false);
  const putImage = (image: string) => {
    callback(image);
    setOpenColors(false);
    setImageIcon(image);
  };

  useOnClickOutside(ref, () => setOpenColors(false));

  return (
    <div className="relative my-4">
      <h3
        onClick={() => setOpenColors(!openColors)}
        className="flex p-2  rounded cursor-pointer text-white bg-black1 w-[90px] shadow-xl"
      >
        <img className="w-6 mr-2" src={imagIcon} alt="colors-img" />
        Icon
      </h3>
      {openColors && (
        <div
          ref={ref}
          className="absolute top-12 bg-white p-2 rounded-lg w-[240%] z-10 shadow-xl"
        >
          <ul className="grid grid-cols-4 gap-2 ">
            {images.map((image, i) => {
              return (
                <li
                  onClick={() => putImage(image)}
                  key={i}
                  style={{ backgroundColor: bgColor }}
                  className={
                    'cursor-pointer rounded-full h-10 w-10 flex items-center justify-center'
                  }
                >
                  <img
                    className="w-[28px] object-center -translate-y-[2px]"
                    src={image}
                    alt="category-img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImgPicker;
