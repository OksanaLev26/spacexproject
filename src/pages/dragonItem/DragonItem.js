import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./dragonItem.css";

export const DragonItem = () => {
  const [dragonItem, setDragonItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const dragon = localStorage.getItem(id);
      if (!dragon) {
        const getDragonItem = async () => {
          const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`);
          const data = await res.json();
          setDragonItem(data);
          localStorage.setItem(id, JSON.stringify(data));
        };
    
        getDragonItem();
      } else {
        setDragonItem(JSON.parse(dragon));
      }
    }
  }, [id]);

  const status = dragonItem?.active ? "Active" : "Retired";

  const mainInfo = [
    { key: "Type: ", value: dragonItem?.type },
    { key: "Dry Mass: ", value: `${dragonItem?.dry_mass_lb} lb` },
    { key: "Status: ", value: status },
    { key: "Crew: ", value: dragonItem?.crew_capacity },
  ];

  const heatShieldDetails = [
    { key: "Dev Partner: ", value: dragonItem?.heat_shield.dev_partner },
    { key: "Material: ", value: dragonItem?.heat_shield.material },
    { key: "Size: ", value: `${dragonItem?.heat_shield.size_meters} meters` },
    {
      key: "Temperature: ",
      value: `${dragonItem?.heat_shield.temp_degrees}\u00b0`,
    },
  ];

  const specifications = [
    {
      key: "Launch payload mass: ",
      value: `${dragonItem?.launch_payload_mass.lb} lb`,
    },
    {
      key: "Launch payload volume: ",
      value: `${dragonItem?.launch_payload_vol.cubic_feet} cubic feet`,
    },
    {
      key: "Return payload mass: ",
      value: `${dragonItem?.return_payload_mass.lb} lb`,
    },
    {
      key: "Return payload volume: ",
      value: `${dragonItem?.return_payload_vol.cubic_feet} cubic feet`,
    },
    { key: "Thrusters type: ", value: dragonItem?.thrusters[0].type },
    { key: "Thrusters amount: ", value: dragonItem?.thrusters[0].amount },
    {
      key: "Trunk volume: ",
      value: `${dragonItem?.trunk.trunk_volume.cubic_feet} cubic feet `,
    },
    { key: "Diameter: ", value: `${dragonItem?.diameter.feet} feet ` },
  ];

  return (
    <>
      {dragonItem ? (
        <div className="dragonItemWrapper">
          <div className="dragonItemTitle">
            <div className="dragonItemName">{dragonItem?.name}</div>
            <div className="flightDate">{`First Flight Date: ${dragonItem?.first_flight}`}</div>
          </div>

          <div className="dragonItem">
            <div className="dragonItemImages">
              <div className="dragonItemImgWrapper">
                <img
                  className="dragonItemImg"
                  src={dragonItem?.flickr_images[2]}
                />
              </div>
            </div>
            <div className="dragonItemInfo">
              <div className="details">
                <div className="mainInfoWrapper">
                  <div className="mainInfoTitle">Main Info</div>
                  {mainInfo.map((item) => (
                    <div key={item.key} className="info">
                      <div className="infoKey">{item.key}</div>
                      <div className="infoValue">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="heatShieldWrapper">
                  <div className="heatShieldTitle">HEAT SHIELD DETAILS</div>
                  {heatShieldDetails.map((item, index) => (
                    <div key={item.key} className="info">
                      <div className="infoKey">{item.key}</div>
                      <div className="infoValue">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="specifications">
                <div className="specificationsTitle">SPECIFICATIONS</div>
                {specifications.map((item) => (
                  <div key={item.key} className="info">
                    <div className="infoKey">{item.key}</div>
                    <div className="infoValue">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="dragonItemFooter">
                <Link className="dragonItemFooterButton" to="/dragons">
                  Back
                </Link>
                <a
                  className="dragonItemFooterButton"
                  href={dragonItem?.wikipedia}
                  target="_blank"
                >
                  WIKI
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
