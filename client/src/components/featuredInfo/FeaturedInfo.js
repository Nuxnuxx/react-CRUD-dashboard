import React from 'react'
import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Total Portfolio</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2M</span>
                <span className="featuredMoneyRate">
                    -11,4 <ArrowDownward  className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Portfolio Action</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">1,5M</span>
                <span className="featuredMoneyRate">
                    +8,4 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Portfolio Immobillier</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">500 000</span>
                <span className="featuredMoneyRate">
                    -0,4 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
