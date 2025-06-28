import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

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
          container_id: container.current.id,
          symbol: symbol,
          interval: "1",
          timezone: "exchange",
          theme: theme,
          style: "1",
          toolbar_bg: "#161616",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: true,
          save_image: false,
          height: "500",
          width: "100%",
          backgroundColor: "#161616",
          gridColor: "#282828",
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [symbol, theme]);

  return <Box id="tradingview_widget" ref={container} h="500px" />;
};

export default TradingView;
