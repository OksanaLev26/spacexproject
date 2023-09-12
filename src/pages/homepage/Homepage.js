import "./homepage.css";

export const Homepage = ({ company }) => {

  return (
    <>
      {company ? (
        <div className="homepage">
          <div className="homePageContent">
            <p>
              Space Exploration Technologies Corp., well-known as SpaceX, is an
              American spacecraft manufacturer, launch service provider and
              satellite communications company headquartered in{" "}
              {company.headquarters.city}, {company.headquarters.state}.
            </p>
            <p>
              The company was founded in {company.founded} by {company.ceo} with
              the goal of reducing space transportation costs and to colonize
              Mars.
            </p>
            <p>
              {company.name} offers internet service via its constellation of
              Starlink satellites, which became the largest-ever satellite
              constellation in January 2020 and as of June 2023 comprised more
              than 4,300 small satellites in orbit.
            </p>
            <p>
              {company.name} is the first private company to develop a
              liquid-propellant rocket that has reached orbit; to launch, orbit,
              and recover a spacecraft; to send a spacecraft to the
              International Space Station; and to send astronauts to the
              International Space Station. It is also the first organization of
              any type to achieve a vertical propulsive landing of an orbital
              rocket booster and the first to reuse such a booster. The
              company's Falcon 9 rockets have landed and reflown more than 200
              times.
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
