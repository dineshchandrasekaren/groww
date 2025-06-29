import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useColorModeValue,
  HStack,
  Grid,
} from "@chakra-ui/react";

interface TradeFormProps {
  symbol?: string;
  defaultSide: "buy" | "sell";
}

const TradeBox: React.FC<TradeFormProps> = ({
  symbol = "BTC",
  defaultSide,
}) => {
  const [activeTab, setActiveTab] = useState<"Limit" | "Market" | "Stop-limit">(
    "Limit"
  );
  const [price, setPrice] = useState("66871.99");
  const [amount, setAmount] = useState("0.001");
  const [percentage, setPercentage] = useState(0);

  const total = parseFloat(price) * parseFloat(amount);

  const buttonBg = useColorModeValue("gray.800", "gray.800");
  const inputBg = useColorModeValue("gray.800", "gray.800");
  const accentColor = defaultSide === "buy" ? "#00D09C" : "#FF5E5E";

  return (
    <Box bg="#1A1A1A" borderRadius="lg" p={2}>
      {/* Order Type Selection */}
      <HStack spacing={1} mb={4}>
        <Button
          size="sm"
          variant="ghost"
          color={activeTab === "Limit" ? accentColor : "gray.400"}
          onClick={() => setActiveTab("Limit")}
          _hover={{ bg: buttonBg }}
          fontWeight="normal"
        >
          Limit
        </Button>
        <Button
          size="sm"
          variant="ghost"
          color={activeTab === "Market" ? accentColor : "gray.400"}
          onClick={() => setActiveTab("Market")}
          _hover={{ bg: buttonBg }}
          fontWeight="normal"
        >
          Market
        </Button>
        <Button
          size="sm"
          variant="ghost"
          color={activeTab === "Stop-limit" ? accentColor : "gray.400"}
          onClick={() => setActiveTab("Stop-limit")}
          _hover={{ bg: buttonBg }}
          fontWeight="normal"
        >
          Stop-limit
        </Button>
      </HStack>

      {/* Available Balance */}
      <Text fontSize="sm" color="gray.500" mb={4}>
        Avbl - 0.000000USDT
      </Text>

      {/* Trade Form Section */}
      <Box>
        {/* Price Input */}
        <Box mb={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Price
          </Text>
          <Flex position="relative">
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              bg={inputBg}
              border="none"
              _focus={{ border: "none" }}
              color="white"
              pr="60px"
            />
            <Text
              position="absolute"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              color="gray.500"
              fontSize="sm"
            >
              USDT
            </Text>
          </Flex>
        </Box>

        {/* Amount Input */}
        <Box mb={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Amount
          </Text>
          <Flex position="relative">
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              bg={inputBg}
              border="none"
              _focus={{ border: "none" }}
              color="white"
              pr="60px"
            />
            <Text
              position="absolute"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              color="gray.500"
              fontSize="sm"
            >
              BTC
            </Text>
          </Flex>
        </Box>

        {/* Percentage Slider */}
        <Box mb={4}>
          <Box h="2px" bg="#2C2C2C" position="relative" mb={2}>
            <Box
              h="2px"
              bg={accentColor}
              position="absolute"
              left="0"
              top="0"
              width={`${percentage}%`}
            />
            <Box
              w="8px"
              h="8px"
              bg={accentColor}
              position="absolute"
              borderRadius="full"
              top="50%"
              left={`${percentage}%`}
              transform="translate(-50%, -50%)"
            />
          </Box>
          <Flex justify="space-between">
            {[0, 25, 50, 75, 100].map((value) => (
              <Button
                key={value}
                size="xs"
                variant="ghost"
                color={percentage === value ? accentColor : "gray.500"}
                onClick={() => setPercentage(value)}
                _hover={{ bg: buttonBg }}
                fontWeight="normal"
              >
                {value}%
              </Button>
            ))}
          </Flex>
        </Box>

        {/* Total */}
        <Box mb={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Total
          </Text>
          <Flex position="relative">
            <Input
              value={total.toFixed(2)}
              readOnly
              bg={inputBg}
              border="none"
              _focus={{ border: "none" }}
              color="white"
              pr="60px"
            />
            <Text
              position="absolute"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              color="gray.500"
              fontSize="sm"
            >
              USDT
            </Text>
          </Flex>
        </Box>

        {/* Max Buy Info */}
        <Flex justify="space-between" mb={4}>
          <Text fontSize="sm" color="gray.500">
            Avbl
          </Text>
          <Text fontSize="sm" color="gray.500">
            0.00000000 USDT
          </Text>
        </Flex>
        <Flex justify="space-between" mb={4}>
          <Text fontSize="sm" color="gray.500">
            Max {defaultSide === "buy" ? "Buy" : "Sell"}
          </Text>
          <Text fontSize="sm" color="gray.500">
            0.00000000 BTC
          </Text>
        </Flex>

        {/* Action Button */}
        <Button
          w="full"
          bg={accentColor}
          color="white"
          _hover={{ opacity: 0.9 }}
          onClick={() => {}}
        >
          {defaultSide === "buy" ? "Buy" : "Sell"} {symbol}
        </Button>
      </Box>
    </Box>
  );
};

// Main TradeForm component that renders both buy and sell forms
const TradeForm: React.FC = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <TradeBox defaultSide="buy" />
      <TradeBox defaultSide="sell" />
    </Grid>
  );
};

export default TradeForm;
