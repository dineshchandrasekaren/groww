import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Button,
  Input,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const TradeForm = () => {
  return (
    <Box bg="secondaryBg" borderRadius="md">
      {/* Order Type Selection */}
      <HStack p={4} spacing={2}>
        <Button
          size="sm"
          colorScheme="green"
          variant="ghost"
          color="primary"
          _hover={{ bg: "whiteAlpha.100" }}
        >
          Limit
        </Button>
        <Button
          size="sm"
          variant="ghost"
          color="bodyText"
          _hover={{ bg: "whiteAlpha.100" }}
        >
          Market
        </Button>
        <Button
          size="sm"
          variant="ghost"
          color="bodyText"
          _hover={{ bg: "whiteAlpha.100" }}
        >
          Stop-limit
        </Button>
      </HStack>

      {/* Available Balance */}
      <Box px={4} py={2}>
        <Text fontSize="sm" color="bodyText">
          Avbl - 0.000000USDT
        </Text>
      </Box>

      {/* Buy/Sell Tabs */}
      <Tabs variant="unstyled">
        <TabList px={4}>
          <HStack spacing={2} w="full">
            <Tab
              flex={1}
              bg="primaryBg"
              color="green.400"
              _selected={{ bg: "green.400", color: "white" }}
              borderRadius="md"
              fontSize="sm"
            >
              Buy
            </Tab>
            <Tab
              flex={1}
              bg="primaryBg"
              color="red.400"
              _selected={{ bg: "red.400", color: "white" }}
              borderRadius="md"
              fontSize="sm"
            >
              Sell
            </Tab>
          </HStack>
        </TabList>

        <TabPanels>
          <TabPanel px={4} py={4}>
            <VStack spacing={4} align="stretch">
              {/* Price Input */}
              <Box>
                <Text fontSize="sm" color="bodyText" mb={2}>
                  Price
                </Text>
                <Input
                  value="66871.99"
                  readOnly
                  bg="primaryBg"
                  border="none"
                  _focus={{ border: "none" }}
                  color="headline"
                />
              </Box>

              {/* Amount Input */}
              <Box>
                <Text fontSize="sm" color="bodyText" mb={2}>
                  Amount
                </Text>
                <Input
                  value="0.001"
                  readOnly
                  bg="primaryBg"
                  border="none"
                  _focus={{ border: "none" }}
                  color="headline"
                />
              </Box>

              {/* Percentage Slider */}
              <Slider defaultValue={0} min={0} max={100} step={25}>
                <SliderTrack bg="primaryBg">
                  <SliderFilledTrack bg="green.400" />
                </SliderTrack>
                <SliderThumb boxSize={3} bg="green.400" />
              </Slider>

              {/* Total */}
              <Box>
                <Text fontSize="sm" color="bodyText" mb={2}>
                  Total
                </Text>
                <Input
                  value="0"
                  readOnly
                  bg="primaryBg"
                  border="none"
                  _focus={{ border: "none" }}
                  color="headline"
                />
              </Box>

              {/* Buy Button */}
              <Button colorScheme="green" size="lg">
                Buy BTC
              </Button>
            </VStack>
          </TabPanel>

          <TabPanel px={4} py={4}>
            <VStack spacing={4} align="stretch">
              {/* Price Input */}
              <Box>
                <Text fontSize="sm" color="bodyText" mb={2}>
                  Price
                </Text>
                <Input
                  value="66871.99"
                  readOnly
                  bg="primaryBg"
                  border="none"
                  _focus={{ border: "none" }}
                  color="headline"
                />
              </Box>

              {/* Amount Input */}
              <Box>
                <Text fontSize="sm" color="bodyText" mb={2}>
                  Amount
                </Text>
                <Input
                  value="0.001"
                  readOnly
                  bg="primaryBg"
                  border="none"
                  _focus={{ border: "none" }}
                  color="headline"
                />
              </Box>

              {/* Percentage Slider */}
              <Slider defaultValue={0} min={0} max={100} step={25}>
                <SliderTrack bg="primaryBg">
                  <SliderFilledTrack bg="red.400" />
                </SliderTrack>
                <SliderThumb boxSize={3} bg="red.400" />
              </Slider>

              {/* Total */}
              <Box>
                <Text fontSize="sm" color="bodyText" mb={2}>
                  Total
                </Text>
                <Input
                  value="0"
                  readOnly
                  bg="primaryBg"
                  border="none"
                  _focus={{ border: "none" }}
                  color="headline"
                />
              </Box>

              {/* Sell Button */}
              <Button colorScheme="red" size="lg">
                Sell BTC
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TradeForm;
