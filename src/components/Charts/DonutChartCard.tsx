import { PieChart, Pie,Cell, ResponsiveContainer } from "recharts";

interface Props {
  data: any[];
}

const COLORS = ["#4f46e5", "#06b6d4", "#22c55e", "#f97316"];

const DonutChartCard = ({ data }: Props) => {

  return (
    <ResponsiveContainer width="100%" height={120}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={25}
          outerRadius={40}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChartCard;
