import React from "react";
import styled from "@cogoport/front/styled";
import { Loader, Popover } from "@cogoport/front/components";
import { hover } from "@testing-library/user-event/dist/hover";
import animate, { fadeInTop } from "@cogoport/front/animate";

const Pop = styled(Popover)`
  box-sizing: border-box;
  position: relative;
  background: white;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.15);
  width: 282px;
  height: fit-content;
  max-height: 323px;
  overflow-y: auto;
  margin: 14px 0px 0px 32px;
`;

const AnimatedContainer = animate({
  enter: {
    ...fadeInTop,
    easing: "easeInOutCirc",
    duration: 500,
  },
  exit: {
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    scaleY: 0,
    easing: "easeInOutCirc",
    duration: 300,
  },
});

const Item = styled.div`
  cursor: pointer;
  font-family: "Roboto", "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  justify-content: center;
  padding-top: 16px;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const HR = styled.hr`
  width: 252px;
  border: 1px solid #f2f2f2;
  margin: 16px 15px 0px 15px;
`;

const LOADER = styled(Loader)`
  block-size: 2cm;
  align-items: center;
`;

const Dialog = ({
  loading = false,
  data,
  setPopOverSelectedData,
  children = null
}) => {
  console.log(data);

  const handlePopOverData = (event) => {
    console.log(event.target.value);
    setPopOverSelectedData(event.target.innerHTML);
  };

  return (
    <div>
      <Pop
        placement="bottom"
        animation="shift-away"
        interactive
        content={
            data.length ? <div>
              {data?.map((data, id) => (
                <AnimatedContainer>
                  <Item key={id} onClick={handlePopOverData}>
                    {data.display_name}
                    <HR></HR>
                  </Item>
                </AnimatedContainer>
              ))}
            </div> : <LOADER />
        }
      >
        {children}
      </Pop>
    </div> 
  );
};

export default Dialog;
