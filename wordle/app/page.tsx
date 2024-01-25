import Image from "next/image";
import GridRow from "./GridRow";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </div>
  );
}
