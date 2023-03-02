// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import CardSnippet from 'src/@core/components/card-snippet'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'

const FormLayoutsBasic = () => {
  const [language, setLanguage] = useState('')
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [attempts, setAttempts] = useState('')
  const [passMarks, setPassMarks] = useState('')
  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardHeader title='New Quiz Form' />
      <Divider sx={{ m: '0 !important' }} />
      <Grid container spacing={5}>
        <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-outlined-label'>Language</InputLabel>
            <Select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              label='Language'
              id='demo-simple-select-outlined'
              labelId='demo-simple-select-outlined-label'
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Hindi</MenuItem>
              <MenuItem value={30}>Gujarati</MenuItem>
              {/* <MenuItem value={30}>12th</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField id='name' autoFocus value={title} onChange={e => setTitle(e.target.value)} fullWidth label='Quiz Title' required />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField type='number' id='time' autoFocus value={time} onChange={e => setTime(e.target.value)} fullWidth label='Time (in minutes)' placeholder='leave it blank for unlimited' />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField id='Attempts' type='number' value={attempts} onChange={e => setAttempts(e.target.value)} autoFocus fullWidth label='Number of attempts' placeholder='leave it blank for unlimited' />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField id='pass' type='number' value={passMarks} onChange={e => setPassMarks(e.target.value)} autoFocus fullWidth label='Pass mark' required />
        </Grid>
        <Grid item sm={12} xs={12}>
          <SwitchesCustomized />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              gap: 5,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button type='submit' variant='contained' size='large'>
              Save
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Button color='error' variant='contained' size='large'>
            Discard
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default FormLayoutsBasic
