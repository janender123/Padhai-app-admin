// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

const ScheduleSession = ({ popperPlacement }) => {
  // ** States
  const [time, setTime] = useState(new Date())

  return (
    <Box sx={{ width:'500px',display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          style={{ width: '500px' }}
          timeIntervals='60'
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 0), 21)}
          customInput={<CustomInput label='Schedule a 1 hour session' />}
        />
      </div>
    </Box>
  )
}

export default ScheduleSession
