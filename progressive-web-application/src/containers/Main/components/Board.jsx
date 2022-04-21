import React, { memo } from 'react'
//import PropTypes from 'prop-types'
import { Grid } from '../../../components'
//import { Grid, Skeleton } from '../../../components'
import Card from './Card'
import { options } from './ChartP';
import { ChartP } from './ChartP';

 

function Board({ data, allData }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  //const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
  const getValue = (value) => value ? value : "not info"

  function formatarNumero(n) {
    //n = 999999999;
    if (n === "not info") {
      return "not info";
    }
    
    n = n.toString();
    var r = "";
    var x = 0;
    for (var i = n.length; i > 0; i--) {
      r += n.substr(i - 1, 1) + (x === 2 && i !== 1 ? '.' : '');
      x = x === 2 ? 0 : x + 1;
    }
    return r.split('').reverse().join('');
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={formatarNumero(getValue(cases))} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={formatarNumero(getValue(todayDeaths))} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={formatarNumero(getValue(todayCases))} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={formatarNumero(getValue(deaths))} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={formatarNumero(getValue(recovered))} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={9}>
        <ChartP data={allData} options={options} />
      </Grid>
    </Grid>
  )
}

export default memo(Board)