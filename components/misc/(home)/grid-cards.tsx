import {
  GHLink,
  GHStats,
  LinksCard,
  StacksCard,
} from "@/components/misc/(home)/cards";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-5">
        <div className="col-span-3">
          <GHLink />
        </div>
        <div className="col-span-3">
          <GHStats />
        </div>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 mt-3 gap-5">
        <div className="col-span-3">
          <LinksCard />
        </div>
        <div className="col-span-3">
          <StacksCard />
        </div>
      </div>
    </div>
  );
};
