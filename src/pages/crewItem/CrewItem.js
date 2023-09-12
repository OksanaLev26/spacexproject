import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./crewItem.css";

export const CrewItem = () => {
  const [crewItem, setCrewItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCrewItem = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`);
      const data = await res.json();
      setCrewItem(data);
    };

    getCrewItem();
  }, [id]);

  return (
    <div className="crewItemWrapper">
      {crewItem ? (
        <>
          <div className="crewItem">
            <div className="crewItemImageWrapper">
              <img
                className="crewItemImage"
                src={crewItem.image}
                alt={crewItem.name}
              />
            </div>
            <div className="crewItenDetails">
              <div className="crewItemName">{crewItem.name}</div>
              <div className="crewItemStatus">{`Status: ${crewItem.status}`}</div>
              <div className="agency">{`Currently works in ${crewItem.agency}`}</div>
              <div className="launch">{`Participated in ${crewItem?.launches?.length} launch`}</div>
              <a className="wiki" href={crewItem.wikipedia} target="_blank">
                WIKI
              </a>
            </div>
          </div>
          <Link className="backButton" to="/crew">Back</Link>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
