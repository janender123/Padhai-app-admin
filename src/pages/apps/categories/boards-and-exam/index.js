
import TableBoards from 'src/views/table/mui/BoardTable'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

const BoardsList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='No. of Boards'
            title='8'
            icon={<Icon icon='mdi:account-outline' />}

          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Total Exams'
            title='4'
            icon={<Icon icon='mdi:account-outline' />}

          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Boards approved' />
            <TableBoards />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default BoardsList
