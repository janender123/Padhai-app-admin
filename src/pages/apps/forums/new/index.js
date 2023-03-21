import { useState } from 'react'

import Typography from '@mui/material/Typography'

// ** React Imports
import { Fragment } from 'react'
import { useTheme } from '@mui/material/styles'

// ** MUI Imports
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import { Card, Divider, FormControlLabel, Switch } from '@mui/material'
import CardSnippet from 'src/@core/components/card-snippet'
import Icon from 'src/@core/components/icon'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/CorrectAnswer'
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import { number } from 'yup/lib/locale'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import PickersSpecificRange from 'src/views/forms/form-elements/pickers/PickersSpecificRange'

// ** Source code imports
import * as source1 from 'src/views/forms/form-elements/pickers/PickersSourceCode'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import ScheduleSession from 'src/views/forms/form-elements/pickers/ScheduleSession'

const AnswerOption = () => {
  const [visible, setVisible] = useState(true)

  const removeElement = () => {
    setVisible(prev => !prev)
  }

  return (
    <>
      {visible && (
        <Grid item sm={12} xs={12}>
          <CardHeader action={<Icon icon='mdi:close' fontSize={20} onClick={removeElement} />} />
          <CardSnippet
            title=''
            code={{
              tsx: null
            }}
          >
            <Grid item sm={12} xs={12} mt={3}>
              <TextField id='name' required fullWidth label='Write your answer here...' />
            </Grid>
            <Grid item mt={3} sm={12} xs={12}>
              Answer Image (optional)
              <TextField id='name' type='file' fullWidth />
            </Grid>
            <Grid item mt={3} sm={12} xs={12}>
              <SwitchesCustomized />
            </Grid>
          </CardSnippet>
        </Grid>
      )}
    </>
  )
}

const AddNewQuestionInStudyMaterial = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [language, setLanguage] = useState([])
  const [answerOptionList, setAnswerOptionList] = useState([])
  const [instructor, setInstructor] = useState([])

  const onAddBtnClick = () => {
    setAnswerOptionList(answerOptionList.concat(<AnswerOption key={answerOptionList.length} />))
  }
  const [childCategory, setChildCategory] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [Description, setDescription] = useState('')
  const [invisible, setInvisible] = useState(false)

  const handleVideoSol = () => {
    setInvisible(!invisible)
  }
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  return (
    <DatePickerWrapper>
      <EditorWrapper>
        <Card sx={{ mt: 4 }}>
          <CardHeader title='New Forum' />
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <TextField type='text' label='Title' placeholder='Title' fullWidth />
              </Grid>
              <Grid item xs={12}>
                Icon
                <TextField type='file' fullWidth />
              </Grid>
              <Grid item sm={12}>
                <EditorWrapper>
                  <CardSnippet
                    sx={{ overflow: 'visible' }}
                    title='Description'
                    code={{
                      tsx: null,
                      jsx: source.EditorControlledJSXCode
                    }}
                  >
                    <EditorControlled />
                  </CardSnippet>
                </EditorWrapper>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='role-select'>Select Role</InputLabel>
                  <Select
                    fullWidth
                    id='select-role'
                    label='Select Role'
                    labelId='role-select'
                    inputProps={{ placeholder: 'Select Role' }}
                  >
                    <MenuItem value=''>Select Role</MenuItem>
                    <MenuItem value='admin'>Admin</MenuItem>
                    <MenuItem value='user'>User</MenuItem>
                    <MenuItem value='instructor'>Instructor</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Switch defaultChecked />} label='Active' />
              </Grid>
              <CardActions>
                <Button size='large' type='submit' sx={{ marginTop: '20px' }} variant='contained'>
                  Save
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </Card>
      </EditorWrapper>
    </DatePickerWrapper>
  )
}

const index = () => {
  return (
    <div>
      <AddNewQuestionInStudyMaterial />
    </div>
  )
}

export default index
