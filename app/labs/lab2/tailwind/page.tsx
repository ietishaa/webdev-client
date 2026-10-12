import MarginsPadding from "./MarginsPadding";
import FontSizeWeight from "./FontSizeWeight";
import BackgroundColors from "./BackgroundColors";
import Responsive from "./Responsive";
import ResponsiveCard from "./ResponsiveCard";
import Blurs from "./Blurs";
import GridSpan from "./GridSpan";

export default function TailwindPage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Tailwind Samples</h2>
      <MarginsPadding />
      <FontSizeWeight />
      <BackgroundColors />
      <Responsive />
      <ResponsiveCard />
      <Blurs />
      <GridSpan />
    </div>
  );
}