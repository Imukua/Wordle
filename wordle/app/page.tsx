import Image from "next/image";
import Grid from "./Grid";
import KeyBoard from "./keyBoard";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Grid />
      <KeyBoard/>
    </div>
  );
}
