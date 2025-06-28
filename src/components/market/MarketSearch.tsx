import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Text,
  VStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";

interface MarketPair {
  symbol: string;
  price: number;
  change: number;
  isFavorite?: boolean;
}

const sampleMarkets: MarketPair[] = [
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
  { symbol: "1000SATS/USDT", price: 0.000274, change: 7.18, isFavorite: true },
];

const MarketSearch = () => {
  const markets = ["USDT", "FDUSD", "USDC", "TUSD", "BNB", "BTC"];

  return (
    <Box bg="#141414" borderRadius="md" overflow="hidden">
      <VStack align="stretch" spacing={0}>
        <Box p={2}>
          <InputGroup size="sm">
            <InputLeftElement pointerEvents="none" pl={2}>
              <SearchIcon color="#808080" boxSize={3} />
            </InputLeftElement>
            <Input
              placeholder="Search"
              bg="#0A0A0A"
              border="none"
              _focus={{ border: "none", boxShadow: "none" }}
              _hover={{ bg: "rgba(255, 255, 255, 0.04)" }}
              fontSize="13px"
              h="32px"
              pl="32px"
              color="#FFFFFF"
              _placeholder={{ color: "#808080" }}
              borderRadius="4px"
            />
          </InputGroup>
        </Box>

        <Box px={2} py={1} borderBottom="1px" borderColor="#1A1A1A">
          <HStack spacing={1}>
            <Icon
              as={StarIcon}
              color="#FFB800"
              boxSize={3}
              cursor="pointer"
              _hover={{ color: "#FFA700" }}
            />
            {markets.map((market) => (
              <Text
                key={market}
                px={2}
                py={1}
                fontSize="13px"
                color={market === "USDT" ? "#00C087" : "#808080"}
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                fontWeight={market === "USDT" ? "500" : "normal"}
                letterSpacing="-0.1px"
              >
                {market}
              </Text>
            ))}
          </HStack>
        </Box>

        <Box>
          <Table variant="unstyled" size="sm">
            <Thead>
              <Tr>
                <Th
                  color="#808080"
                  borderBottom="1px"
                  borderColor="#1A1A1A"
                  fontSize="11px"
                  py={2}
                  pl={2}
                  fontWeight="normal"
                  textTransform="none"
                  letterSpacing="-0.1px"
                >
                  Change
                </Th>
                <Th
                  color="#808080"
                  borderBottom="1px"
                  borderColor="#1A1A1A"
                  fontSize="11px"
                  py={2}
                  isNumeric
                  fontWeight="normal"
                  textTransform="none"
                  letterSpacing="-0.1px"
                >
                  Price
                </Th>
                <Th
                  color="#808080"
                  borderBottom="1px"
                  borderColor="#1A1A1A"
                  fontSize="11px"
                  py={2}
                  pr={2}
                  isNumeric
                  fontWeight="normal"
                  textTransform="none"
                  letterSpacing="-0.1px"
                >
                  Change
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {sampleMarkets.map((market, index) => (
                <Tr
                  key={index}
                  cursor="pointer"
                  _hover={{ bg: "rgba(255, 255, 255, 0.04)" }}
                >
                  <Td borderBottom="1px" borderColor="#1A1A1A" py={1.5} pl={2}>
                    <HStack spacing={1}>
                      <Icon
                        as={StarIcon}
                        color={market.isFavorite ? "#FFB800" : "#666666"}
                        boxSize={3}
                        cursor="pointer"
                        _hover={{
                          color: market.isFavorite ? "#FFA700" : "#FFB800",
                        }}
                      />
                      <Text
                        color="#FFFFFF"
                        fontSize="13px"
                        letterSpacing="-0.1px"
                      >
                        {market.symbol}
                      </Text>
                    </HStack>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    isNumeric
                  >
                    <Text
                      color="#FFFFFF"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {market.price.toFixed(6)}
                    </Text>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    pr={2}
                    isNumeric
                  >
                    <Text
                      color={market.change >= 0 ? "#00C087" : "#FF5C5C"}
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {market.change >= 0 ? "+" : ""}
                      {market.change}%
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default MarketSearch;
