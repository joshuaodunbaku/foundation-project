import React from "react";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeroComp $heroImage={IMAGES.children_1}>
        <div className="text-center">
          <h1 className="display-5">Page Not Found</h1>
          <div className="btn-div">
            <Button
              onClick={() => navigate("/")}
              variant="outline-light"
              className="rounded-0 btn-lg"
            >
              Back to Home
            </Button>
          </div>{" "}
        </div>
      </HeroComp>
    </div>
  );
};

export default NotFound;
