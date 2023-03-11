// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'
import TableBoards from 'src/views/table/mui/CoursesTABLE'
// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'
import Select from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/invoice/list/TableHeader'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
import LiveClassesTable from 'src/views/table/mui/LiveClassesTable'

/* eslint-enable */
const LiveClassesList = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Total Live Classes'
            title='8'
            icon={<Icon icon="material-symbols:video-camera-front" />}
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Pending live classes'
            title='0'
            icon={<Icon icon='ph:eye-bold' />}
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsHorizontal
            stats='Inprogress live classes'
            title='3'
            icon={<Icon icon="ic:sharp-access-time" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='List of Live Classes approved' />
            <LiveClassesTable />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default LiveClassesList
