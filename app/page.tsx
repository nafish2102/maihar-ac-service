import { structuredData } from "./lib/structured-data";
import HomePage from "./components/home/home-page";

export default function Page() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <HomePage />
    </>
  );
}
