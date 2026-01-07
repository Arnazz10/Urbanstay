import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { CATEGORIES } from "@/lib/constants";

export default function SearchBar() {
  return (
    <form className="card flex flex-col gap-3 p-4 shadow-card md:flex-row md:items-center">
      <div className="flex-1">
        <label className="text-xs font-semibold text-slate-500">Location</label>
        <Input placeholder="City, Area or Landmark" name="location" />
      </div>
      <div className="md:w-44">
        <label className="text-xs font-semibold text-slate-500">Type</label>
        <Select name="type" defaultValue="">
          <option value="">Any</option>
          {CATEGORIES.map(cat => (
            <option key={cat.key} value={cat.key}>
              {cat.label}
            </option>
          ))}
        </Select>
      </div>
      <div className="md:w-40">
        <label className="text-xs font-semibold text-slate-500">Budget</label>
        <Input placeholder="₹15,000" name="budget" type="number" />
      </div>
      <Button type="submit" className="w-full md:w-auto">
        Search
      </Button>
    </form>
  );
}

