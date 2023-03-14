// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatsForDashboard from 'src/@core/components/card-statistics/card-stats-for-dashboard'

const CardStatisticsForDashboard = ({ data }) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4} >
          <CardStatsForDashboard data={data[0]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardStatsForDashboard data={data[1]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardStatsForDashboard data={data[2]} />
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatisticsForDashboard
