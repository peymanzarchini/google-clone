import SearchHeader from "@/components/header/SearchHeader";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
