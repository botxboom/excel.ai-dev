import Link from "next/link";
import { Button } from "~/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-grow flex-col gap-7 bg-[#052427] p-10 pt-[100px] text-white">
      <h1 className="text-5xl font-bold">Chat with any EXCEL spreadsheet</h1>
      <span className="text-xl">
        Quickly get insights from your Excel files like never before using
        AI-powered data fetching for streamlined results.
      </span>
      <div className="flex items-center gap-2">
        <Link href="/chat">
          <Button className="w-fit bg-orange-600">Get started for free</Button>
        </Link>
        <span className="">Try the demo</span>
      </div>
    </div>
  );
};

export default HomePage;
