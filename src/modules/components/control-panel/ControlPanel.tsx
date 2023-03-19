import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Modal from '@/common/components/modal/Modal';
import Button from '@/common/components/button/Button';
import { useAppDispatch } from '@/store';
import { toggleOpen } from '@/store/slices/modalSlice';
import CreateCategory from '../create-category/CteateCategory';

const ControlPanel = () => {
  const [useModal, setUseModal] = useState('');
  const dispatch = useAppDispatch();
  // const openNewTransaction = () => {
  //   dispatch(toggleModal());
  //   setUseModal("transaction");
  // };

  // const openNewCategory = () => {
  //   dispatch(toggleModal());
  //   setUseModal("category");
  // };

  return (
    <div className="w-[230px]">
      <ul>
        <li>
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              [
                ' w-full h-[60px] rounded-md cursor-pointer text-[#879EB1] flex justify-start items-center',
                isActive ? 'bg-[#FED0B3] !text-[#191919]' : null,
              ].join(' ')
            }
          >
            <img className="mx-[20px]" alt="home icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/statistic"
            className={({ isActive }) =>
              [
                'w-full h-[60px] rounded-md cursor-pointer text-[#879EB1] flex justify-start items-center',
                isActive ? 'bg-[#FED0B3] !text-[#191919]' : null,
              ].join(' ')
            }
          >
            Statistic
          </NavLink>
        </li>
        <li>
          <div className="mt-12 mb-2">
            {/* <MainBtn click={openNewTransaction}></MainBtn> */}
            <Button click={() => dispatch(toggleOpen())}>CreateCategory</Button>
          </div>
          <div className="">
            {/* <MainBtn click={openNewCategory}></MainBtn> */}
          </div>
        </li>
      </ul>
      <Modal>
        <CreateCategory />
      </Modal>
    </div>
  );
};

export default ControlPanel;
