import FullScreenWrapper from "../FullScreenWrapper";
import FormSub from "./sub/FormSub";
import HeroSub from "./sub/HeroSub";


interface ScheduleAVisitProps {
  className?: string;
  id: string;
}

const ScheduleAVisit: React.FC<ScheduleAVisitProps> = ({
  className = "",
  id,
}) => {
  return (
    <FullScreenWrapper
      className={`flex flex-row w-screen h-screen min-h-screen bg-[#f7ebe7] p-0 m-0 ${className}`}
      id={id}
    >
      {/* Left: HeroSub */}
      <div className="flex flex-col w-2/5 h-full min-h-screen max-h-screen">
        <HeroSub />
      </div>
      {/* Right: FormSub */}
      <div className="flex flex-col w-3/5 h-full min-h-screen max-h-screen">
        <FormSub />
      </div>
    </FullScreenWrapper>
  );
};

export default ScheduleAVisit;