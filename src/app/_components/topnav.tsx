import Link from "next/link";

const TopNav = () => {
  return (
    <div className="navbar flex h-[70px] items-center justify-between p-4">
      <Link href={"/"} className="text-2xl font-bold">
        Excel.ai
      </Link>
      <div className="flex gap-4">
        <h3>Pricing</h3>
        <h3>Get Started</h3>
      </div>
    </div>
  );
};

export default TopNav;
