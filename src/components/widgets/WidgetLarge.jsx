export default function WidgetLarge() {
  const StatusButton = ({ type }) => {
    return <button className={"widget-large-table-btn " + type}>{type}</button>;
  };

  return (
    <div className="widget-large">
      <span className="widget-large-title">Transactions</span>
      <table className="widget-large-table">
        <thead>
          <tr className="widget-large-table-row">
            <th className="widget-large-table-header">Customer</th>
            <th className="widget-large-table-header">Date</th>
            <th className="widget-large-table-header">Amount</th>
            <th className="widget-large-table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widget-large-table-row">
            <td className="widget-large-user">
              <img
                src="https://images.unsplash.com/photo-1537996372242-2bc8f3ff3a2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
                className="widget-large-image"
              />
              <span className="widget-large-table-username">Aiony Haust</span>
            </td>
            <td className="widget-large-date">20 Jun, 2021</td>
            <td className="widget-large-amount">$520</td>
            <td>
              <StatusButton type="approved" />
            </td>
          </tr>
          <tr className="widget-large-table-row">
            <td className="widget-large-user">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
                className="widget-large-image"
              />
              <span className="widget-large-table-username">Luis Reynoso</span>
            </td>
            <td className="widget-large-date">2 Jun, 2021</td>
            <td className="widget-large-amount">$722</td>
            <td>
              <StatusButton type="pending" />
            </td>
          </tr>
          <tr className="widget-large-table-row">
            <td className="widget-large-user">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=296&q=80"
                alt=""
                className="widget-large-image"
              />
              <span className="widget-large-table-username">
                Daniel Monteiro
              </span>
            </td>
            <td className="widget-large-date">24 Jun, 2021</td>
            <td className="widget-large-amount">$300</td>
            <td>
              <StatusButton type="approved" />
            </td>
          </tr>
          <tr className="widget-large-table-row">
            <td className="widget-large-user">
              <img
                src="https://images.unsplash.com/photo-1528234591865-8c4f372b3f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
                className="widget-large-image"
              />
              <span className="widget-large-table-username">Aldair Vagas</span>
            </td>
            <td className="widget-large-date">14 Oct, 2021</td>
            <td className="widget-large-amount">$610</td>
            <td>
              <StatusButton type="declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
