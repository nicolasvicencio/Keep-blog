import { Featured, PostFeed } from "@/components";

export default function Home() {
  return (
    <main className="w-[80%] mx-auto  h-full min-h-screen">
      <Featured />
      <PostFeed />
    </main>
  );
}
