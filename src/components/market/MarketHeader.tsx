import { Box, HStack, Text, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface MarketHeaderProps {
  price: number;
  change: number;
  high: number;
  low: number;
  volume: number;
  volumeUSDT: number;
}

const MarketHeader = ({
  price = 67012.0,
  change = -334.02,
  high = 65777.0,
  low = 68474.55,
  volume = 27306.67,
  volumeUSDT = 1839020199.75,
}: MarketHeaderProps) => {
  return (
    <Box borderBottom="1px" borderColor="#1A1A1A" bg="#0A0A0A">
      <Box maxW="1920px" mx="auto" px={2} py={2}>
        <HStack spacing={8} align="flex-start">
          <HStack spacing={2}>
            <Icon
              as={StarIcon}
              color="#FFB800"
              boxSize={5}
              cursor="pointer"
              _hover={{ color: "#FFA700" }}
            />
            <Text
              color="#FFFFFF"
              fontSize="20px"
              fontWeight="500"
              letterSpacing="-0.2px"
            >
              BTC/USDT
            </Text>
          </HStack>

          <Box>
            <Text
              color="#FFFFFF"
              fontSize="20px"
              fontWeight="500"
              letterSpacing="-0.2px"
            >
              {price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text color="#FF5C5C" fontSize="13px" letterSpacing="-0.1px">
              {change.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                signDisplay: "always",
              })}{" "}
              ({((change / price) * 100).toFixed(2)}%)
            </Text>
          </Box>

          <HStack spacing={8}>
            <Box>
              <Text color="#808080" fontSize="11px" letterSpacing="-0.1px">
                24h High
              </Text>
              <Text color="#FFFFFF" fontSize="13px" letterSpacing="-0.1px">
                {high.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
            </Box>

            <Box>
              <Text color="#808080" fontSize="11px" letterSpacing="-0.1px">
                24h Low
              </Text>
              <Text color="#FFFFFF" fontSize="13px" letterSpacing="-0.1px">
                {low.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
            </Box>

            <Box>
              <Text color="#808080" fontSize="11px" letterSpacing="-0.1px">
                24h Volume(BTC)
              </Text>
              <Text color="#FFFFFF" fontSize="13px" letterSpacing="-0.1px">
                {volume.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
            </Box>

            <Box>
              <Text color="#808080" fontSize="11px" letterSpacing="-0.1px">
                24h Volume(USDT)
              </Text>
              <Text color="#FFFFFF" fontSize="13px" letterSpacing="-0.1px">
                {volumeUSDT.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default MarketHeader;
