import React from 'react'
import "./WidgetLg.css"
import { Grid } from 'gridjs-react';

export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Screener</span>
      <div className="table">
        <Grid
          data={[
            ["1", "AAPL","10","25","57","3,4","03/2022"],
            ["2", "BAPL","9","28","52","7,4","00/2022"],
          ]}
          columns={["Rank","Symbol", "EarningYield","ROCE","ROIC","Debt to equity Ratio","Date"]}
          search={true}
          sort={ true }
          pagination={{
            enabled: true,
            limit: 5,
          }}
        />
      </div>
    </div>
  );
}
