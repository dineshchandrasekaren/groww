import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Groww Logo"
      h="24px"
      objectFit="contain"
      cursor="pointer"
    />
  );
};

export default Logo;
