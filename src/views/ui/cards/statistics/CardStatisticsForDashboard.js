// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatsForDashboard, { CardStatsForAdmin } from 'src/@core/components/card-statistics/card-stats-for-dashboard'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { WelcomeAdmin } from 'src/views/dashboards/crm/CrmAward'

const CardStatisticsForDashboard = ({ data }) => {
  if (data) {
    return (
      <Grid container spacing={6}  >
        <Grid item xs={12} md={7}>
          <WelcomeAdmin/>
        </Grid>
        <Grid item xs={12} sm={2.5} >
          <CardStatsForDashboard data={data[0]} />
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <CardStatsForDashboard data={data[1]} />
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatisticsForDashboard
