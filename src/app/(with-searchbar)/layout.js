// src/app/(with-searchbar)/layout.js
import { SearchLayout } from "@/components/layouts/SearchLayout";

export default function Layout({ children }) {
  return <SearchLayout>{children}</SearchLayout>;
}
