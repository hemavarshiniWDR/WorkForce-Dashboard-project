import { LineChart, Line, ResponsiveContainer } from "recharts";

interface Props {
  data: any[];
}

const LineChartCard = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#05266b" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartCard;
