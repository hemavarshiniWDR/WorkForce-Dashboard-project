import "./KPICard.css";

interface KPICardProps {
  title: string;
  value: string;
  children?:React.ReactNode;
}

const KPICard = ({ title, value, children, }: KPICardProps) => {
  return (
    <div className="kpi-card">
      <h4>{title}</h4>
      <h2>{value}</h2>

      {children}
    </div>
  );
};

export default KPICard;
