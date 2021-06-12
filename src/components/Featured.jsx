import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,751</span>
          <span className="featured-money-change negative">
            -26.4%{" "}
            <ArrowDownwardRounded className="material-icon-featured negative" />
          </span>
        </div>
        <div className="featured-sub">Since last month</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$3,787</span>
          <span className="featured-money-change negative">
            -13.4%{" "}
            <ArrowDownwardRounded className="material-icon-featured negative" />
          </span>
        </div>
        <div className="featured-sub">Since last month</div>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$1,652</span>
          <span className="featured-money-change">
            +6.4% <ArrowUpwardRounded className="material-icon-featured" />
          </span>
        </div>
        <div className="featured-sub">Since last month</div>
      </div>
    </div>
  );
}
