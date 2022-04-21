
import React from 'react';
import { Chart } from "react-google-charts";

export const options = {
  title: "Total de casos nos países",
  titleTextStyle: { fontSize: 20, bold: true },
  is3D: true,
  chartArea: {left:20, top:40, width:'100%', height:'75%'},
  backgroundColor: 'white'
};

export function ChartP(allData) {   
  return (   
    <Chart       
      chartType="PieChart"      
      data={allData.data}
      options={options}
      width={"100%"}
      height={"275px"}       
      style={{border: '1px solid white', borderRadius: '5px'}}  
    />
  );
}

