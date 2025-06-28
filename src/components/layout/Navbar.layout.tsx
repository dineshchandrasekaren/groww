import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Container,
  Icon,
} from "@chakra-ui/react";
import { BellIcon, SettingsIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import Logo from "./Logo.layout";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="secondaryBg"
      borderBottom="1px"
      borderColor="stroke"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Container maxW="container.xl">
        <Flex h="60px" alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems="center">
            <Box w="120px">
              <Logo />
            </Box>
            {!isMobile && (
              <HStack spacing={1}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="ghost"
                    color="primary"
                    fontSize="sm"
                    fontWeight="normal"
                    _hover={{ bg: "whiteAlpha.50" }}
                    _active={{ bg: "whiteAlpha.50" }}
                  >
                    Trade
                  </MenuButton>
                  <MenuList
                    bg="secondaryBg"
                    borderColor="stroke"
                    minW="180px"
                    py={2}
                  >
                    <MenuItem
                      color="bodyText"
                      fontSize="sm"
                      py={2}
                      _hover={{ bg: "whiteAlpha.50", color: "headline" }}
                    >
                      Market Order
                    </MenuItem>
                    <MenuItem
                      color="bodyText"
                      fontSize="sm"
                      py={2}
                      _hover={{ bg: "whiteAlpha.50", color: "headline" }}
                    >
                      Limit Order
                    </MenuItem>
                    <MenuItem
                      color="bodyText"
                      fontSize="sm"
                      py={2}
                      _hover={{ bg: "whiteAlpha.50", color: "headline" }}
                    >
                      Stop-Limit
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Button
                  variant="ghost"
                  color="bodyText"
                  fontSize="sm"
                  fontWeight="normal"
                  _hover={{ color: "headline" }}
                >
                  Markets
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="ghost"
                    color="bodyText"
                    fontSize="sm"
                    fontWeight="normal"
                    _hover={{ color: "headline" }}
                  >
                    Earn
                  </MenuButton>
                  <MenuList
                    bg="secondaryBg"
                    borderColor="stroke"
                    minW="180px"
                    py={2}
                  >
                    <MenuItem
                      color="bodyText"
                      fontSize="sm"
                      py={2}
                      _hover={{ bg: "whiteAlpha.50", color: "headline" }}
                    >
                      Staking
                    </MenuItem>
                    <MenuItem
                      color="bodyText"
                      fontSize="sm"
                      py={2}
                      _hover={{ bg: "whiteAlpha.50", color: "headline" }}
                    >
                      Yield Farming
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Button
                  variant="ghost"
                  color="bodyText"
                  fontSize="sm"
                  fontWeight="normal"
                  _hover={{ color: "headline" }}
                >
                  Blog
                </Button>
                <Button
                  variant="ghost"
                  color="bodyText"
                  fontSize="sm"
                  fontWeight="normal"
                  _hover={{ color: "headline" }}
                >
                  Invite & Earn
                </Button>
                <Button
                  variant="ghost"
                  color="bodyText"
                  fontSize="sm"
                  fontWeight="normal"
                  _hover={{ color: "headline" }}
                >
                  Reward Hub
                </Button>
                <Button
                  variant="ghost"
                  color="bodyText"
                  fontSize="sm"
                  fontWeight="normal"
                  _hover={{ color: "headline" }}
                >
                  List your crypto
                </Button>
              </HStack>
            )}
          </HStack>

          <HStack spacing={2}>
            <Button
              bg="primary"
              color="white"
              size="sm"
              px={6}
              fontSize="sm"
              fontWeight="normal"
              _hover={{ bg: "button.hover.buy" }}
            >
              Deposit
            </Button>
            <Button
              variant="ghost"
              color="bodyText"
              fontSize="sm"
              fontWeight="normal"
              _hover={{ color: "headline" }}
            >
              Assets
            </Button>
            <IconButton
              aria-label="notifications"
              icon={<BellIcon boxSize={5} />}
              variant="ghost"
              size="sm"
              color="bodyText"
              _hover={{ color: "headline", bg: "whiteAlpha.50" }}
            />
            <IconButton
              aria-label="settings"
              icon={<SettingsIcon boxSize={5} />}
              variant="ghost"
              size="sm"
              color="bodyText"
              _hover={{ color: "headline", bg: "whiteAlpha.50" }}
            />
            <IconButton
              aria-label="profile"
              icon={<Icon as={FaUserCircle} boxSize={5} />}
              variant="ghost"
              size="sm"
              color="bodyText"
              _hover={{ color: "headline", bg: "whiteAlpha.50" }}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
