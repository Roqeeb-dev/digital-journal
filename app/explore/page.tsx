import ExploreClient from "./ExploreClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Journals | Ink",
  description:
    "Discover reflections, ideas, and stories shared by writers in the Ink journal community.",
};

export default function Page() {
  return (
    <main>
      <ExploreClient />
    </main>
  );
}
