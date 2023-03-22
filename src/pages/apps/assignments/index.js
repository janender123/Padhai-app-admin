
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LanguageTable from 'src/views/table/mui/LanguageTable'
import QuestionsTable from 'src/views/table/mui/QuestionsTable'
import AssignmentsTable from 'src/views/table/mui/AssignmentsTable'

/* eslint-enable */
const QuestionsList = () => {
    return (
        <DatePickerWrapper>
            <Grid container spacing={6}>
                <Grid item xs={6} >
                    <CardStatisticsHorizontal
                        stats='Total Assignments'
                        title='250'
                        icon={<Icon icon="mdi:file-document" />}
                    />
                </Grid>
                <Grid item xs={6} >
                    <CardStatisticsHorizontal
                        stats='Pending Assignments'
                        title='0'
                        icon={<Icon icon='ph:eye-bold' />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title='List of assignments approved' />
                        <AssignmentsTable />
                    </Card>
                </Grid>
            </Grid>
        </DatePickerWrapper>
    )
}

export default QuestionsList
