import ai2eye from '../../../assets/charts/ai2eye.png';
import baghMashhad from '../../../assets/charts/baghMashhad.png';
import fooladKhoozestan from '../../../assets/charts/fooladKhoozestan.png';
import payamNour from '../../../assets/charts/payamNour.png';
import pineu from '../../../assets/charts/pineu.png';
import southKave from '../../../assets/charts/southKave.png';
import Chart from './Chart';
import ChartCard from './ChartCard';

export default function ProjectsTable() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-white p-5">
        <img src={ai2eye} alt="ai2eye" />
      </div>

      <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-white p-5">
        <img src={baghMashhad} alt="baghMashhad" />
      </div>

      <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-white p-5">
        <img src={fooladKhoozestan} alt="fooladKhoozestan" />
      </div>

      <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-white p-5">
        <img src={payamNour} alt="payamNour" />
      </div>

      <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-white p-5">
        <img src={pineu} alt="pineu" />
      </div>

      <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-white p-5">
        <img src={southKave} alt="southKave" />
      </div>
    </div>
  );
}
