// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import CourseBundleTable from 'src/views/table/mui/courseBundleTable'
import SessionsTable from 'src/views/table/mui/SessionsTable'
import ForumsTable from 'src/views/table/mui/ForumsTable'
import TicketsTable from 'src/views/table/mui/TicketsTable'

/* eslint-enable */
const SessionsList = () => {
    // ** State
    const [dates, setDates] = useState([])
    const [value, setValue] = useState('')
    const [pageSize, setPageSize] = useState(10)
    const [statusValue, setStatusValue] = useState('')
    const [endDateRange, setEndDateRange] = useState(null)
    const [selectedRows, setSelectedRows] = useState([])
    const [startDateRange, setStartDateRange] = useState(null)

    // ** Hooks
    const dispatch = useDispatch()
    const store = useSelector(state => state.invoice)
    useEffect(() => {
        dispatch(
            fetchData({
                dates,
                q: value,
                status: statusValue
            })
        )
    }, [dispatch, statusValue, value, dates])

    const handleFilter = val => {
        setValue(val)
    }

    const handleStatusValue = e => {
        setStatusValue(e.target.value)
    }

    const handleOnChangeRange = dates => {
        const [start, end] = dates
        if (start !== null && end !== null) {
            setDates(dates)
        }
        setStartDateRange(start)
        setEndDateRange(end)
    }

    return (
        <DatePickerWrapper>
            <Grid container spacing={6}>
                <Grid item xs={6}  lg={3} sm={6}>
                    <CardStatisticsHorizontal
                        stats='Total Conversations'
                        title='8'
                        icon={<Icon icon="material-symbols:mail-outline-sharp" />}
                    />
                </Grid>
                <Grid item xs={6}  lg={3} sm={6}>
                    <CardStatisticsHorizontal
                        stats='Pending Reply'
                        title='30'
                        icon={<Icon icon='ic:baseline-access-time' />}
                    />
                </Grid>
                <Grid item xs={6}  lg={3} sm={6}>
                    <CardStatisticsHorizontal
                        stats='Open Conversations'
                        title='19'
                        icon={<Icon icon="ri:mail-open-line" />}
                    />
                </Grid>
                <Grid item xs={6}  lg={3} sm={6}>
                    <CardStatisticsHorizontal
                        stats='Closed Conversations'
                        title='13'
                        icon={<Icon icon="material-symbols:mail-outline-sharp" />}
                    />
                </Grid>

                <Grid item xs={12} >
                    <Card>
                        <TicketsTable />
                    </Card>
                </Grid>
            </Grid>
        </DatePickerWrapper>
    )
}

export default SessionsList
