import { useEffect, useState } from "react";
import { Capsule } from "../../components/capsule/Capsule";
import "./capsules.css";

export const Capsules = ({propCapsules}) => {
  const [capsules, setCapsules] = useState(propCapsules);

  useEffect(() => {
    if (!capsules) {
      const getCapsules = async () => {
        const res = await fetch("https://api.spacexdata.com/v4/capsules");
        const data = await res.json();
        const newCapsules = data.map((item) => [
          {
            key: "Capsule type:",
            value: item.type,
          },
          {
            key: "Serial number:",
            value: item.serial,
          },
          {
            key: "Status:",
            value: item.status,
          },
          {
            key: "Water landings:",
            value: item.water_landings,
          },
          {
            key: "Land landings:",
            value: item.land_landings,
          },
          {
            key: "Land landings:",
            value: item.land_landings,
          },
          {
            key: "Reuse count:",
            value: item.reuse_count,
          },
        ]);
        setCapsules(newCapsules);
      };

      getCapsules();
    }
  }, [capsules]);

  return (
    <>
      {capsules ? (
        <div className="capsules">
          <div className="titleCapsules">Capsules</div>
          <div className="capsulesContent">
            {capsules.map((capsule, index) => (
              <Capsule key={`${capsule[0].value}-${index}`} capsule={capsule} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
