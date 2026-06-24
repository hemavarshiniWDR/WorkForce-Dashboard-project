import "./KPICard.css";

interface KPICardProps {
  title: string;
  value: string;
}

const KPICard = ({ title, value }: KPICardProps) => {
  return (
    <div className="kpi-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default KPICard;
