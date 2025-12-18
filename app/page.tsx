import { vegaData } from "./data/vega-sample-data";
import Chart from "./components/chart";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <Chart
        spec={vegaData}
        values={vegaData?.data?.values}
        width={700}
        height={400}
      />
    </main>
  );
}
