import logo from '../../assets/logo.png';
import PersianDateTime from './PersianDateTime';
import Weather from './Weather';
export default function Header() {
  return (
    <div className="flex items-center justify-between gap-12">
      <img src={logo} alt={'logo'} className="max-w-[350px]" />
      <div className="flex flex-col gap-3">
        <PersianDateTime />
        <Weather />
      </div>
    </div>
  );
}
