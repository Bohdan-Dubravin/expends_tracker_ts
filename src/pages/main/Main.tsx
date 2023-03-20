import { Outlet } from 'react-router-dom';
import ControlPanel from '@/modules/components/control-panel/ControlPanel';

const Main = () => {
  return (
    <div className="px-[20px] py-[60px] bg-[#FBF5F4] min-h-screen flex">
      <ControlPanel />
      <Outlet />
    </div>
  );
};

export default Main;
