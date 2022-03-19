import React from "react";
import "./sidebar.css";
import {
  AccountBalance,
  AccountBalanceWallet,
  AccountBalanceWalletTwoTone,
  EventSeat,
  LineStyle,
  PieChart,
  TrendingDown,
  TrendingUp,
} from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList active">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            <li className="sidebarListItem">
              <AccountBalance className="sidebarIcon" />
              Portfolio
            </li>
            <li className="sidebarListItem">
              <AccountBalanceWallet className="sidebarIcon" />
              Portfolio Action
            </li>
            <li className="sidebarListItem">
              <AccountBalanceWalletTwoTone className="sidebarIcon" />
              Portfolio Immobillier
            </li>
            <li className="sidebarListItem">
              <TrendingDown className="sidebarIcon" />
              Forex Trading
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Forex Algo
            </li>
            <li className="sidebarListItem">
              <PieChart className="sidebarIcon" />
              Screener
            </li>
            <li className="sidebarListItem">
              <EventSeat className="sidebarIcon" />
              Back Testing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
