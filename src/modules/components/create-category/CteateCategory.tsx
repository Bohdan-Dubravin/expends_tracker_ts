import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ColorPicker from '../color-picker/ColorPicker';
import ImgPicker from '../img-picker/ImgPicker';
import { Input } from '@/common/components/input/Input';

const schema = yup.object().shape({
  name: yup.string().required(),
});

type FormValues = {
  name: string;
};

const CreateCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryImage, setCategoryImage] = useState({
    categoryColor: 'black',
    categoryImg: '/assets/shop.png',
    type: 'expends',
  });
  const setColor = (color: any) => {
    setCategoryImage((prev) => {
      return { ...prev, categoryColor: color };
    });
  };

  const setImg = (img: any) => {
    setCategoryImage((prev) => {
      return { ...prev, categoryImg: img };
    });
  };

  const setType = (type: any) => {
    setCategoryImage((prev) => {
      return { ...prev, type };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const nameValue = watch('name');

  async function submitCategory(data: any) {
    console.log({ ...data, ...categoryImage });
    // await dispatch(createCategory({ ...data, ...categoryImage }));
    reset();
  }

  return (
    <div className="relative pb-14 w-full min-w-[280px] max-w-[340px]">
      <h2 className="text-2xl text-center text-gray-800 font-bold mb-4 ">
        New category
      </h2>
      <div className="items-center justify-between bg-white rounded-xl p-4 shadow-xl">
        <div className="">
          <h3 className="text-center font-bold">Appearance</h3>
          <div className="flex  justify-between">
            <ColorPicker callback={setColor} />
            <ImgPicker
              callback={setImg}
              bgColor={categoryImage.categoryColor}
            />
          </div>
        </div>
        <form className="" onSubmit={handleSubmit(submitCategory)}>
          <div className="mb-6 max-w-[340px]">
            <Input
              label="Category Name"
              placeholder="Category name"
              {...register('name')}
              errorMessage={errors.name?.message}
            />
          </div>
          <button className="bg-black1 shadow-xl hover:bg-[#f3961b] transition-colors duration-300 text-white rounded-lg font-semibold uppercase w-44  py-2 px-2 absolute  right-1/2 translate-x-1/2 bottom-0">
            Create category
          </button>
        </form>
        <div>
          <h3 className="font-bold text-gray-800">Type</h3>
          <div className="flex">
            <div
              onClick={() => setType('expends')}
              className="flex items-center font-light cursor-pointer"
            >
              <div
                className={[
                  'w-4 h-4 border rounded-full ',
                  categoryImage.type === 'expends' ? 'bg-orange3' : '',
                ].join(' ')}
              ></div>{' '}
              Expends
            </div>
            <div
              onClick={() => setType('income')}
              className="flex items-center ml-4  font-light cursor-pointer "
            >
              <div
                className={[
                  'w-4 h-4 border rounded-full ',
                  categoryImage.type === 'income' ? 'bg-orange3' : '',
                ].join(' ')}
              ></div>{' '}
              Income
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mx-auto w-[265px] rounded-lg bg-white p-4 shadow-xl">
        <h3 className="mb-2 text-gray-800 font-bold text-center text-lg">
          Your new category
        </h3>
        <div className="flex items-center ">
          <div
            style={{ backgroundColor: categoryImage.categoryColor }}
            className="w-16 h-16 rounded-full flex items-center justify-center "
          >
            {categoryImage.categoryImg && (
              <img
                className="w-[42px] object-center -translate-y-[2px]  block"
                src={categoryImage.categoryImg}
                alt="category-img"
              />
            )}
          </div>
          <p className="text-lg text-gray-800 ml-4">{nameValue}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
