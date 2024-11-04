import { getTitle } from "@repo/backend-core";

import { Greeter } from "./_components/Greeter";

export default async function Home() {
  const title = await getTitle();

  return (
    <div className="p-4">
      <h1>{title}</h1>
      <Greeter />
    </div>
  );
}
