import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", Workout: 65, Calories: 45, Steps: 80 },
  { name: "Tue", Workout: 45, Calories: 55, Steps: 70 },
  { name: "Wed", Workout: 70, Calories: 85, Steps: 65 },
  { name: "Thu", Workout: 85, Calories: 75, Steps: 90 },
  { name: "Fri", Workout: 55, Calories: 60, Steps: 75 },
  { name: "Sat", Workout: 70, Calories: 80, Steps: 85 },
  { name: "Sun", Workout: 80, Calories: 70, Steps: 95 },
];

export function GoalProgressChart() {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">Goal Progress</CardTitle>
        <Select defaultValue="weekly">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#888', fontSize: 12 }}
              axisLine={{ stroke: '#e0e0e0' }}
            />
            <YAxis 
              tick={{ fill: '#888', fontSize: 12 }}
              axisLine={{ stroke: '#e0e0e0' }}
              ticks={[0, 20, 40, 60, 80, 100]}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            />
            <Legend 
              iconType="circle" 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar dataKey="Workout" fill="hsla(188, 86%, 53%, 1)" radius={[8, 8, 0, 0]} barSize={8}/>
            <Bar dataKey="Calories" fill="hsla(27, 96%, 61%, 1)" radius={[8, 8, 0, 0]} barSize={8} />
            <Bar dataKey="Steps" fill="hsla(255, 92%, 76%, 1)" radius={[8, 8, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}