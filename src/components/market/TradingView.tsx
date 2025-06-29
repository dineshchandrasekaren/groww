import { Box, HStack, Icon, VStack, Text, Divider } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import {
  TbChartCandle,
  TbChartLine,
  TbRulerMeasure,
  TbArrowsMaximize,
  TbSettings,
  TbCamera,
  TbLayoutSidebarRightCollapse,
  TbPencil,
  TbMagnet,
  TbChartDots3,
  TbArrowAutofitWidth,
  TbPictureInPicture,
  TbTemplate,
  TbClock,
} from "react-icons/tb";

interface TradingViewProps {
  symbol: string;
  theme?: "light" | "dark";
}

const TradingView = ({ symbol, theme = "dark" }: TradingViewProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (container.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new (window as any).TradingView.widget({
          container_id: "tv_chart_container",
          symbol: symbol,
          interval: "1",
          timezone: "exchange",
          theme: theme,
          style: "1",
          toolbar_bg: "#161616",
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_legend: true,
          save_image: false,
          height: "100%",
          width: "100%",
          backgroundColor: "#161616",
          gridColor: "#282828",
          autosize: true,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [symbol, theme]);

  return (
    <Box ref={container} h="100%" w="100%" position="relative" bg="#161616">
      {/* Top Bar */}
      <HStack
        spacing={2}
        px={2}
        py={1.5}
        borderBottom="1px solid #282828"
        bg="#161616"
        alignItems="center"
        h="42px"
      >
        <HStack spacing={1.5}>
          <Text color="white" fontSize="13px" fontWeight="500">
            BTC/USDT
          </Text>
          <Text color="gray.500" fontSize="11px">
            1m
          </Text>
          <Text color="gray.500" fontSize="11px">
            30m
          </Text>
          <Text color="#00C087" fontSize="11px">
            1h
          </Text>
        </HStack>
        <Divider orientation="vertical" h="16px" borderColor="#282828" />
        <HStack spacing={2}>
          <Icon
            as={TbChartCandle}
            color="#00C087"
            boxSize={4}
            cursor="pointer"
          />
          <Icon
            as={TbChartLine}
            color="gray.500"
            boxSize={4}
            cursor="pointer"
          />
          <Icon
            as={TbRulerMeasure}
            color="gray.500"
            boxSize={4}
            cursor="pointer"
          />
        </HStack>
        <Divider orientation="vertical" h="16px" borderColor="#282828" />
        <HStack spacing={2}>
          <Icon as={TbTemplate} color="gray.500" boxSize={4} cursor="pointer" />
          <Icon as={TbClock} color="gray.500" boxSize={4} cursor="pointer" />
          <Text color="gray.500" fontSize="11px">
            Indicators
          </Text>
          <Icon as={TbSettings} color="gray.500" boxSize={4} cursor="pointer" />
          <Text color="gray.500" fontSize="11px">
            Compare
          </Text>
        </HStack>
        <HStack spacing={2} ml="auto">
          <Icon as={TbCamera} color="gray.500" boxSize={4} cursor="pointer" />
          <Icon
            as={TbArrowsMaximize}
            color="gray.500"
            boxSize={4}
            cursor="pointer"
          />
        </HStack>
      </HStack>

      {/* Side Bar */}
      <VStack
        position="absolute"
        left={0}
        top="42px"
        bottom={0}
        w="38px"
        bg="#161616"
        borderRight="1px solid #282828"
        py={2}
        spacing={2}
        alignItems="center"
      >
        <Icon as={TbPencil} color="gray.500" boxSize={4} cursor="pointer" />
        <Icon as={TbMagnet} color="gray.500" boxSize={4} cursor="pointer" />
        <Icon as={TbChartDots3} color="gray.500" boxSize={4} cursor="pointer" />
        <Icon
          as={TbArrowAutofitWidth}
          color="gray.500"
          boxSize={4}
          cursor="pointer"
        />
        <Icon
          as={TbPictureInPicture}
          color="gray.500"
          boxSize={4}
          cursor="pointer"
        />
        <Icon
          as={TbLayoutSidebarRightCollapse}
          color="gray.500"
          boxSize={4}
          cursor="pointer"
        />
      </VStack>

      {/* Chart Container */}
      <Box
        id="tv_chart_container"
        position="absolute"
        left="38px"
        top="42px"
        right={0}
        bottom={0}
      />
    </Box>
  );
};

export default TradingView;
