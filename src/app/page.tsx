import { api, HydrateClient } from "~/trpc/server";
import HomePage from "./_components/homepage";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col">
        <HomePage />
      </main>
    </HydrateClient>
  );
}
