// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

import CardStatisticsForDashboard from 'src/views/ui/cards/statistics/CardStatisticsForDashboard'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import ChartjsBarChart from 'src/views/charts/chartjs/ChartjsBarChart'
import Icon from 'src/@core/components/icon'
import { useTheme } from '@mui/material/styles'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import MonthlyRegisteredUsers from 'src/views/charts/chartjs/MonthlyRegisteredUsers'
import ChartjsAreaChart from 'src/views/charts/chartjs/ChartjsAreaChart'
import TotalSubscribersChart from 'src/views/charts/chartjs/TotalSubscribersChart'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import UserDistributionChart from 'src/views/dashboards/crm/UserDistributionChart'

const CardStatistics = ({ apiData }) => {
  const theme = useTheme()
  const whiteColor = '#fff'
  const yellowColor = '#ffe802'
  const primaryColor = '#836af9'
  const areaChartBlue = '#2c9aff'
  const barChartYellow = '#ffcf5c'
  const polarChartGrey = '#4f5d70'
  const polarChartInfo = '#299aff'
  const lineChartYellow = '#d4e157'
  const polarChartGreen = '#28dac6'
  const lineChartPrimary = '#787EFF'
  const lineChartWarning = '#ff9800'
  const horizontalBarInfo = '#26c6da'
  const polarChartWarning = '#ff8131'
  const scatterChartGreen = '#28c76f'
  const warningColorShade = '#ffbd1f'
  const areaChartBlueLight = '#84d0ff'
  const areaChartGreyLight = '#edf1f4'
  const scatterChartWarning = '#ff9f43'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CardStatisticsForDashboard data={apiData.statsDashboard} />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Boards'
              title='8'
              icon={<Icon icon='cil:education' />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Classes'
              title='23'
              icon={<Icon icon='fluent:class-24-regular' />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Streams'
              title='9'
              icon={<Icon icon='cil:stream' />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Languages'
              title='4'
              icon={<Icon icon='material-symbols:keyboard-previous-language-outline-sharp' />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Courses'
              title='16'
              icon={<Icon icon='fluent-mdl2:publish-course' />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Course Bundles'
              title='8'
              icon={<Icon icon='academicons:coursera' />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Total Live Classes'
              title='118'
              icon={<Icon icon='material-symbols:video-camera-back-outline-sharp' />}
            />
          </Grid>

          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Total Contests'
              title='68'
              icon={<Icon icon="ic:outline-share-arrival-time" />}
            />
          </Grid>
          <Grid item xs={6}>
            <CardStatsHorizontal
              stats='Total Study Materials'
              title='23'
              icon={<Icon icon='arcticons:kanji-study' />}
            />
          </Grid>
          <Grid item xs={12}>
            <MonthlyRegisteredUsers
              yellow={barChartYellow}
              labelColor={labelColor}
              borderColor={borderColor}
            />
          </Grid>
          <Grid item xs={12}>
            <TotalSubscribersChart
              white={whiteColor}
              blue={areaChartBlue}
              labelColor={labelColor}
              borderColor={borderColor}
              legendColor={legendColor}
              blueLight={areaChartBlueLight}
              greyLight={areaChartGreyLight}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <UserDistributionChart />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

export default CardStatistics
