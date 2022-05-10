import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/molecules/Carousel";
import { Collapsible } from "../components/molecules/CustomCollapsible";
import CarouselPageDetails from "../components/molecules/CarouselPageDetails";
import { FLOORS, TOWER_NAMES_LIST } from "../data";
import Dialog from "./Booking/Dialog";
import {
  getFormalNameFromNumber,
  getVRtourLink,
  rupeeIndian,
} from "../functions/helpers";
import { getAllFlatsInFloor } from "../functions/inventory";
import { TowersPageStyle } from "./pages.style";
import Navigator from "../components/atoms/Navigator";
import {
  useLoading,
  useShowDetails,
  useViewport,
} from "../contexts/AppContext";
import Flat from "../components/molecules/Flat";
import Compass from "../components/molecules/Compass";

const HomeButton = () => (
  <Link to={"/"}>
    <div className="home-btn center">
      <img src={`${process.env.PUBLIC_URL}/icons/home.svg`} />
    </div>
  </Link>
);

function Flats() {
  const { showDetails } = useShowDetails();
  const { floorId, towerId, flatNumber } = useParams();
  const [showVRTour, setShowVRTour] = useState(false);
  const navigate = useNavigate();
  const { isMobile } = useViewport();
  const flats = getAllFlatsInFloor(towerId, floorId);
  const { loading, setLoading } = useLoading();
  const FLAT_NAMES = flats.map((flat) =>
    parseInt(flat["FlatNumber"][flat["FlatNumber"].length - 1])
  );

  const [currentFlatIndex, setCurrentFlatIndex] = useState(
    flats.findIndex((flat) => flat["FlatNumber"] == flatNumber)
  );

  return (
    <TowersPageStyle>
      <HomeButton />
      <Dialog
        showDialog={showVRTour}
        setShowDialog={setShowVRTour}
        header={"Virtual Tour - " + flats[currentFlatIndex]["FlatNumber"]}
        className="vr-tour"
        body={
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              maxWidth: "100%",
              margin: "0px",
              paddingBottom: "40px",
              visibility: loading ? "hidden" : "unset",
            }}
            title={flats[currentFlatIndex].FlatNumber}
            frameBorder="0"
            allowFullScreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            onLoad={() => setLoading(false)}
            src={getVRtourLink(flats[currentFlatIndex].UnitType)}
          />
        }
      />
      <Collapsible collapsible={true} open={showDetails}>
        <CarouselPageDetails
          style={{ width: "500px" }}
          title={flats[currentFlatIndex]["FlatNumber"]}
          Header={
            <Header
              FLAT_NAMES={flats.map((flat) => flat["FlatNumber"])}
              onFlatChange={(flat) => setCurrentFlatIndex(flat.value)}
              currentFlatIndex={currentFlatIndex}
              currentFloor={floorId}
              currentTower={towerId}
              onFloorChangge={(floor) =>
                navigate(`/tower/${towerId}/floor/${floor.value}`)
              }
              onTowerChange={(tower) => navigate(`/tower/${tower.value}`)}
            />
          }
          highlights={[
            <span className={flats[currentFlatIndex]["UnitStatus"]}>
              {`${flats[currentFlatIndex]["UnitStatus"]}`}{" "}
            </span>,
            `${flats[currentFlatIndex]["UnitType"]}`,
          ]}
          features={[
            // {
            //   key: "DIRECTION",
            //   value: `${flats[currentFlatIndex]["Direction"].replace(
            //     "Facing",
            //     ""
            //   )}`,
            // },
            {
              key: "RERA CARPET AREA",
              value: `${parseInt(
                flats[currentFlatIndex]["RERACarpetArea"]
              )} Sq.ft`,
            },
            {
              key: "EXCLUSIVE AREA",
              value: `${parseInt(
                flats[currentFlatIndex]["AdditionalCarpetArea"] +
                  flats[currentFlatIndex]["BalconyCarpetArea"]
              )} Sq.ft`,
            },
            {
              key: "TOTAL CARPET AREA",
              value: `${parseInt(flats[currentFlatIndex]["CarpetArea"])} Sq.ft`,
            },
            {
              key: "SBU AREA",
              value: `${parseInt(flats[currentFlatIndex]["Area"])} Sq.ft`,
            },
            {
              key: "Total Cost*",
              value: (
                <>
                  <div>{` ₹ ${rupeeIndian.format(
                    parseInt(flats[currentFlatIndex]["TotalCost"])
                  )}`}</div>
                </>
              ),
            },
            {
              key: "Booking Amount",
              value: "20,000 ₹",
            },
          ].slice(
            0,
            flats[currentFlatIndex]["UnitStatus"] == "Available" ? 5 : 4
          )}
          buttons={
            flats[currentFlatIndex]["UnitStatus"] == "Available"
              ? [
                  {
                    text: "Book Now",
                    onClick: () =>
                      navigate(
                        `/booking/${flats[currentFlatIndex]["PropertyId"]}`
                      ),
                  },
                  {
                    text: "Virtual Tour",
                    onClick: () => {
                      setLoading(true);
                      setShowVRTour(true);
                    },
                  },
                ]
              : []
          }
          tnc={
            flats[currentFlatIndex]["UnitStatus"] == "Available"
              ? "Total Cost does not include GST, Maintenance Charges, and Maintenance Deposit."
              : ""
          }
        />
      </Collapsible>
      <Carousel
        titleList={FLAT_NAMES}
        onChange={(changedItemIndex) => {
          setCurrentFlatIndex(changedItemIndex);
        }}
        currentItemIndex={currentFlatIndex}
      >
        {flats.map((flat, index) => (
          <Flat
            flatNumber={flat["FlatNumber"]}
            flatIndex={index}
            towerId={towerId}
          />
        ))}
      </Carousel>
      <Compass right="8vw" bottom="1rem" />
    </TowersPageStyle>
  );
}

export default Flats;

const Header = ({
  FLAT_NAMES,
  currentTower,
  currentFloor,
  currentFlatIndex,
  onTowerChange,
  onFloorChangge,
  onFlatChange,
}) => (
  <>
    <Navigator
      className={"flat-navigator"}
      defaultOption={currentTower}
      title={"Tower"}
      icon={"building"}
      options={TOWER_NAMES_LIST.map((tower) => ({
        label: tower,
        value: tower,
      }))}
      onChange={onTowerChange}
    />
    <Navigator
      className={"flat-navigator"}
      defaultOption={getFormalNameFromNumber(currentFloor)}
      title={"Floor"}
      icon={"layers"}
      options={FLOORS.map((floor) => ({
        label: getFormalNameFromNumber(floor),
        value: floor,
      }))}
      onChange={onFloorChangge}
    />
    <Navigator
      className={"flat-navigator"}
      defaultOption={FLAT_NAMES[currentFlatIndex]}
      title={"Flat"}
      icon={"layers"}
      options={FLAT_NAMES.map((flat, index) => ({
        label: flat,
        value: index,
      }))}
      onChange={onFlatChange}
    />
  </>
);
