import React from 'react';
import  styled  from '@cogoport/front/styled';

const NAV = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    width: 296px;
    height: 1117px;
    margin-top: -22px;
    margin-bottom: 11px;
`;

const NAV1 = styled.div`
    position: absolute;
    background-color: #F9F9F9;
    border-radius: 0px 0px 8px 8px;
    width: 279px;
    height: 1090px;
    margin: 22px 8px 11px 9px;
`;

const SideNav =() => {
  return <NAV>
      <NAV1></NAV1>
  </NAV>;
}

export default SideNav;
