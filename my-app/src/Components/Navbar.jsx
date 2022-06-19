import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import {LeftSideBarComponent} from "./LeftSideBarComponent";
import "./LeftSidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginFunction } from "../Redux/Action";

const Navbar = () => {
  const dispatch=useDispatch()
  const logValue = useSelector((Store) => Store.loginStatus)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const loginfun = () => {
    dispatch(LoginFunction(true))
  }
  return (
    <>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            {/* <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p> */}
            <div id="LeftSideBarDiv2">
              <div className="StaticDataSideBar">Home</div>
              <div className={"StaticDataSideBar"}>India News</div>
              <LeftSideBarComponent
                Name={"Entertainment"}
                Options={[
                  "Bollywood",
                  "Tv",
                  "Web Series",
                  "Music",
                  "Hollywood",
                  "Tamil Cinema",
                ]}
              />
              <LeftSideBarComponent
                Name={"IPL 2022"}
                Options={[
                  "Overviews",
                  "News",
                  "Points Table",
                  "Schedule",
                  "Team",
                  "Results",
                  "Orange Cup",
                  "Purple Cup",
                  "IPL History",
                ]}
              />
              <LeftSideBarComponent
                Name={"Elections"}
                Options={[
                  "Uttar Pardesh",
                  "Punjab",
                  "Uttarkhand",
                  "Goa",
                  "Manipur",
                ]}
              />
              <LeftSideBarComponent
                Name={"Cities"}
                Options={[
                  "Delhi",
                  "Mumbai",
                  "Bangalur",
                  "Gurugram",
                  "Noida",
                  "Hyderabad",
                  "Chennai",
                  "Kolkata",
                  "Bhopal",
                  "Chandigarh",
                  "Dehradun",
                  "Indore",
                  "Lucknow",
                  "Patna",
                  "Pune",
                  "Ranchi",
                  "Other Cities",
                ]}
              />

              <div className={"StaticDataSideBar"}>World News</div>
              <LeftSideBarComponent
                Name={"Life Style"}
                Options={[
                  "Fashion",
                  "Health",
                  "Relationship",
                  "Art And Culture",
                  "Travel",
                  "Recipes",
                  "Festivals",
                  "Brunch",
                ]}
              />
              <div className={"StaticDataSideBar"}>Trending</div>
              <LeftSideBarComponent
                Name={"Education"}
                Options={[
                  "Exam Result",
                  "Competitive Exam",
                  "Board Exam",
                  "Admission News",
                  "Employment News",
                ]}
              />
              <LeftSideBarComponent
                Name={"Astrology"}
                Options={[
                  "Horoscope",
                  "Festive Calender",
                  "Compatibility Calculation",
                ]}
              />
              <div className={"StaticDataSideBar"}>Opinion</div>
              <div className={"StaticDataSideBar"}>Analysis</div>
              <LeftSideBarComponent
                Name={"Videos"}
                Options={[
                  "Explainer Videos",
                  "On The Records",
                  "HT Weekend",
                  "Aur Batao",
                  "Vikram Chandra Daily Wrap",
                ]}
              />
              <LeftSideBarComponent
                Name={"Photos"}
                Options={[
                  "Entertainment Photos",
                  "Lifestytles Photos",
                  "News Photos",
                ]}
              />
              <LeftSideBarComponent
                Name={"Sports"}
                Options={["Euro 2020", "Hockey", "Football"]}
              />
              <div className={"StaticDataSideBar"}>Web Stories</div>
              <div className={"StaticDataSideBar"}>Business</div>
              <div className={"StaticDataSideBar"}>Science</div>
              <LeftSideBarComponent
                Name={"HT insight"}
                Options={[
                  "Public Health",
                  "Economic Policy",
                  "International Affairs",
                  "Climate Change",
                  "Gender Equality",
                ]}
              />
              <div className={"StaticDataSideBar"}>Cricket Fantacy</div>
              <LeftSideBarComponent
                Name={"Games"}
                Options={[
                  "Daily Sudoku",
                  "Daily Crossword",
                  "Daily Word Jumble",
                ]}
              />
              <div className={"StaticDataSideBar"}>Quiz</div>
              <div className={"StaticDataSideBar"}>Podcasts</div>
              <div className={"StaticDataSideBar"}>Auto</div>
              <div className={"StaticDataSideBar"}>HT Tech</div>
              <div className={"StaticDataSideBar"}>HT Bangla</div>
              <div className={"StaticDataSideBar"}>HT School</div>
              <div className={"StaticDataSideBar"}>HT Brand Stories</div>
              <div className={"StaticDataSideBar"}>HT Friday Finance</div>
              <div className={"StaticDataSideBar"}>HT Shop</div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <header id="header-1">
        <div id="header-2">
          <div className="header-3">
            <div id="header-search">
              <span>
                <i style={{ color: "grey" }}></i>{" "}
                <strong onClick={onOpen}>Explore</strong>
              </span>

              <div style={{ marginLeft: "80px" }}>
                <span>
                  <i style={{ color: "white" }}></i>
                  <Link to="/Search">
                    <strong>Search</strong>
                  </Link>
                </span>
              </div>
            </div>
            <div id="free-trial-1">
              <p>Sunday,june 15, 2022 Singrauli C</p>
              {/* <span>
                <i class="fa-solid fa-cloud"></i>
              </span> */}
            </div>
          </div>
          <div className="header-3">
            <img
              id="header-3-img"
              src="https://www.hindustantimes.com/res/images/ht-logo.svg"
              alt=""
            />
          </div>
          <div className="header-3">
            <div id="header-search-2">
              <span>
                <i style={{ color: "grey" }}></i> <strong>Games</strong>
              </span>

              <div>
                <span>
                  <i style={{ color: "white" }}></i>
                  <strong>E-Paper</strong>
                </span>{" "}
              </div>

              <div>
                <span>
                  <i></i>
                  {/* {logValue ? <strong onClick={showsidebar}>Profile</strong> : <Link to={'/login'}><strong onClick={loginfun}>Sign-in</strong></Link>}
                  { */}
                     <Link to={"/login"} target="_blank">
                       <strong>Sign-in</strong>
                     </Link>
                   {/* }  */}
                </span>
              </div>
            </div>

            <div id="free-trial">
              <p>Start 15 Days Free Trial</p>
              <button style={{ backgroundColor: "white", color: "black" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* {profileBarVal ? <Sidebar flag={true} /> : <Sidebar flag={false} />} */}

      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div id="list-item">
        <div id="list-item-2">
          <div>
            {" "}
            <Link to="/" className="Link">
              Home
            </Link>{" "}
          </div>
          <div>
            <Link to="/Latest" className="Link">
              Latest
            </Link>
          </div>
          <div>
            <Link to="/India" className="Link">
              India
            </Link>
          </div>
          <div>
            <Link to="/World" className="Link">
              World
            </Link>
          </div>
          <div>
            <Link to="/Cities" className="Link">
              Cities
            </Link>
          </div>
          <div>
            <Link to="/Entertainment" className="Link">
              Entertainment
            </Link>
          </div>
          <div>
            <Link to="/Cricket" className="Link">
              Cricket
            </Link>
          </div>

          <div>
            <Link to="/LifeStyle" className="Link">
              Lifestyles
            </Link>
          </div>
          <div>
            <Link to="/Astrology" className="Link">
              Astrology
            </Link>
          </div>
          <div>
            <Link to="/Editorials" className="Link">
              Editorials
            </Link>
          </div>
          <div>
            <Link to="/ForYou" className="Link">
              For You
            </Link>
          </div>
          <div>
            <Link to="/Saved" className="Link">
              Saved
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
