"use client";

// TODO: import blog data, filter it , display it

import { usePathname } from "next/navigation";

export default function Page(title: any) {
   const pathname = usePathname();
   console.log(title.params.title);
   return <div>page</div>;
}
