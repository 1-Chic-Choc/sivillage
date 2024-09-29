import { ArrowLeftIcon } from "lucide-react";
import Header from "./Header";
import SearchButton from "@/components/molecule/button/SeachButton";
import HistoryBackButton from "@/components/molecule/button/HistoryBackButton";
import { cn } from "@/lib/utils";

export default function CategoryHeader() {
  return (
    <Header>
      <nav id="tabNav" className="sticky bg-slate-50 p-4">
        <ul className="grid grid-cols-12">
          <li className="col-span-2">
            <HistoryBackButton
              variant="ghost"
              className={cn("absolute left-[16px]", "w-[32px] h-[32px] p-0")}
            />
          </li>
          <ul className="flex col-span-10 border-b-2">
            <li>
              <SearchButton />
            </li>
            <li>
              <p className="text-slate-500 pt-1">
                놓칠 수 없는 최대 30% 페이백
              </p>
            </li>
          </ul>
        </ul>
      </nav>
    </Header>
  );
}
