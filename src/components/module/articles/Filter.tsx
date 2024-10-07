"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Select from "react-dropdown-select";

const sortOptions = [
  {
    value: "date",
    label: "Sort by date",
  },
  {
    value: "vote",
    label: "Sort by votes",
  },
];
export const tagOptions = [
  {
    value: "regular",
    label: "Regular",
  },
  {
    value: "premium",
    label: "Premium",
  },
];
export const categoryOptions = [
  { value: "adventure", label: "Adventure" },
  { value: "eco-tourism", label: "Eco-tourism" },
  { value: "luxury", label: "Luxury" },
  { value: "wellness", label: "Wellness" },
  { value: "cultural", label: "Cultural" },
  { value: "culinary", label: "Culinary" },
  { value: "historical", label: "Historical" },
  { value: "beach", label: "Beach" },
  { value: "mountain", label: "Mountain" },
  { value: "road trip", label: "Road Trip" },
  { value: "travel", label: "Travel" },
];

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSort = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="pb-10 mt-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5 place-items-stretch">
        <Select
          closeOnScroll
          className=" react-dropdown-select-custom-style"
          placeholder="Sort"
          options={sortOptions}
          onChange={(values) => handleSort("sort", values[0].value)}
          values={[]}
        />
        <Select
          closeOnScroll
          className=" react-dropdown-select-custom-style"
          placeholder="Select category"
          options={categoryOptions}
          onChange={(values) => handleSort("category", values[0].value)}
          values={[]}
        />
        <Select
          closeOnScroll
          className=" react-dropdown-select-custom-style"
          placeholder="Select tag"
          options={tagOptions}
          onChange={(values) => handleSort("tag", values[0].value)}
          values={[]}
        />
      </div>
      <input
        onChange={(e) => handleSort("searchTerm", e.target.value)}
        type="text"
        placeholder="Search here..."
        className="h-[35px] px-3 w-full border focus-visible:outline-none"
      />
    </div>
  );
};

export default Filter;
