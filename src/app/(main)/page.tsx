import { cn } from "@/lib/utils";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const current_path = headersList.get("siv-pathname");
  const current_query = headersList.get("siv-query");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600">
      <div>
        <span className={cn("text-xl")}>
          {`${current_path}${current_query ? "?" + current_query : ""}`}
        </span>
      </div>
      {Array(100)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{i}</div>
        ))}
    </main>
  );
}
