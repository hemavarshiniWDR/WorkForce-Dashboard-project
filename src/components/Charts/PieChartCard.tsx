import { PieChart, Pie,Cell ,ResponsiveContainer } from "recharts";

interface Props {
  data: any[];
}

const COLORS = ["#04246a", "#026343", "#865704", "#5c0303"];

const PieChartCard = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={40} >
  {data.map((_, index) => (
    <Cell
      key={index}
      fill={
        COLORS[
          index % COLORS.length
        ]
      }
    />
  ))}
</Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartCard;
