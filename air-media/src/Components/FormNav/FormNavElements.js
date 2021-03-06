import styled from "styled-components";
export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InfoDiv = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 4px #E85D17;
  border-radius: 20px;
  width: 360px;
  height: 120px; 
`;
export const MenuBurrico = styled.img`
  width: 83px;
  height: 83px;
  margin-left: 35px;
  margin-top: 15px;
`;
export const InfoRestaurant = styled.p`
  font-weight: bold;
  color: #e85d17;
  font-size: 20px;
  margin-left: 140px;
  margin-top: -85px;
`;
export const InfoSuc = styled.p`
  font-weight: bold;
  color: #e85d17;
  font-size: 12px;
  margin-left: 140px;
  margin-top: -17px;
`;
export const InfoDirection = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin-left: 140px;
  margin-top: -10px;
  width: 180px;
`;
export const Insta = styled.img`
  width: 38px;
  height: 38px;
  margin-left: 315px;
  margin-top: -95px;
`;
export const InstaRef = styled.a``;

export const SucPromo = styled.div`
  width: 312px;
  height: 82px;
  left: 24px;
  top: 150px;
  margin-top: 220px;
  margin-left: 26px;
  margin-bottom: 10px;
`;
export const MenuSearch = styled.input`
  position: absolute;
  width: 260px;
  height: 44px;
  left: 70px;
  top: 260px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #E85D17;
  }
`;