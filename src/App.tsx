import './App.css';
import HomeIcon from '@/assets/icons/home.svg';

function App() {
  return (
    <>
      <p className="">일반: MinSans Regular 폰트입니다.</p>
      <p className="font-minSans font-normal">이것은 MinSans Regular 폰트입니다.</p>
      <p className="font-minSans font-medium">이것은 MinSans Medium 폰트입니다.</p>
      <p className="font-minSans font-semibold">이것은 MinSans SemiBold 폰트입니다.</p>
      <p className="font-minSans font-bold">이것은 MinSans Bold 폰트입니다.</p>
      <p className="font-bold">일반 MinSans Bold 폰트입니다.</p>
      <HomeIcon className="text-main" />
    </>
  );
}

export default App;
