import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import {userData} from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="Back Testing" grid dataKey="uv"/>
      <div className="homeWidgets">
        
      </div>
    </div>
  )
}
