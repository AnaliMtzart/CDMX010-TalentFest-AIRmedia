import React from "react";
import Logo from "../../Assets/Images/logo.png";
import {
  MenuLogo,
  MenuContent,
  MenuProduct,
  MenuImage,
  MenuP,
  LogoDiv,
  MenuDescripcion,
  MenuPrice,
  SucPromo,
  InfoDiv,
  MenuBurrico,
  InfoRestaurant,
  InfoSuc,
  InfoDirection,
  Insta,
  InstaRef,
} from "./MenuElements";
import Slider from "../../Components/Carousel";
import Burrico from "../../Assets/Images/burrico.png";
import Instagram from "../../Assets/Images/insta.png";
import Modal from "../../Components/Modal/Modal";

const Menu = ({
  data,
  setShowModal,
  showModal,
  listProducts,
  setListProducts,
  cart,
  setCart,
  item,
}) => {
  const { product, price, description, image } = item;
  console.log(data);
  //const products = data.filter((item) => item.type === "product");
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <MenuContent>
      {/* <LogoDiv>
        <MenuLogo src={Logo} alt="logo" />
      </LogoDiv>
      <InfoDiv>
        <MenuBurrico src={Burrico} alt="logo burrico" />
        <InfoRestaurant> Burri.Co </InfoRestaurant>
        <InfoSuc> (Suc. Xochimilco) </InfoSuc>
        <InfoDirection>
          {" "}
          Prol. Canal de Miramontes 2053, Tlalpan, CDMX.{" "}
        </InfoDirection>
        <InstaRef href="https://www.instagram.com/burrico.mx/">
          <Insta
            src={Instagram}
            alt="instagram"
            href="https://www.instagram.com/burrico.mx/"
          />
        </InstaRef>
      </InfoDiv> */}

      {/* {products.map((product) => ( */}
      <button onClick={openModal}>
        <MenuProduct key={item.id}>
          <MenuImage src={image} alt="imagen" />
          <MenuP>{product}</MenuP>
          <MenuDescripcion>{description}</MenuDescripcion>
          <MenuPrice>$ {price} MXN</MenuPrice>
        </MenuProduct>
      </button>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </MenuContent>
  );
};

export default Menu;
