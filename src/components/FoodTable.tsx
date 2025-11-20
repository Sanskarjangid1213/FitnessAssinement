import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Column = {
  key: keyof FoodRow;
  label: string;
};

type FoodRow = {
  food: string;
  meal: string;
  calories: string;
  priorities: string;
  carbs: string;
  icon: string;
};

const columns: Column[] = [
  { key: "food",       label: "Food" },
  { key: "meal",       label: "Meal" },
  { key: "calories",   label: "Calories" },
  { key: "priorities", label: "Priorities" },
  { key: "carbs",      label: "Carbs" },
];

const rows: FoodRow[] = [
  {
    food: "Burrito",
    meal: "Pizza Burger",
    calories: "Receiving",
    priorities: "01:00 AM",
    carbs: "20 gm",
    icon: "🌯",
  },
  {
    food: "Burger",
    meal: "Pizza Burger",
    calories: "Receiving",
    priorities: "01:00 AM",
    carbs: "20 gm",
    icon: "🍔",
  },
];

export function FoodTable() {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <div className="w-full overflow-x-auto">
        <Table className="w-full border-separate border-spacing-y-3 [border-spacing-x:0]">
          <TableHeader>
            <TableRow className="bg-none">
              {columns.map((col, idx) => (
                <TableHead
                  key={col.key}
                  className={cn(
                    "text-sm font-semibold text-slate-500",
                    idx === 0 && "pl-6",
                    idx === columns.length - 1 && "pr-6"
                  )}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="bg-white"
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={col.key}
                    className={cn(
                      "py-3 text-sm text-slate-600",
                      colIndex === 0 && "pl-6 rounded-l-md",
                      colIndex === columns.length - 1 && "pr-6 rounded-r-md"
                    )}
                  >
                    {col.key === "food" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-50 border border-orange-200">
                          <span className="text-xl">{row.icon}</span>
                        </div>
                        <span className="font-semibold text-slate-700">
                          {row.food}
                        </span>
                      </div>
                    ) : (
                      row[col.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
