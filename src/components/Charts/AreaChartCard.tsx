import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface Props {
  data: any[];
}

const AreaChartCard = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <AreaChart data={data}>
        <Area type="monotone" dataKey="value" stroke="#100371" fill="#081173" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartCard;
