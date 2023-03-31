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
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import { Typography } from '@mui/material'

const NewTextLessonInCourseSection = () => {
  const [language, setLanguage] = useState('')
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [attachment, setAttachment] = useState('')
  const [Description, setDescription] = useState('')

  return (
    <form onSubmit={e => e.preventDefault()}>
      <CardHeader title='New Text Form' />
      <Divider sx={{ m: '0 !important' }} />
      <Grid container spacing={5}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={title}
            label='Title'
            placeholder='Add title of the lesson'
            onChange={e => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          Study Time (Min)
          <TextField
            fullWidth
            type='number'
            value={time}
            placeholder='Minimum time to read'
            onChange={e => setTime(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          Attachments
          <TextField
            type='file'
            fullWidth
            InputProps={{
              inputProps: { accept: '.pdf,.doc,.html,.txt,.xls,.xlsx,.docx' }
            }}
          />
          <Typography variant='body2'>Accepted file formats - pdf,doc,html,text,excel</Typography>
        </Grid>
        <Grid item xs={12}>
          <EditorWrapper>
            <CardSnippet
              sx={{ overflow: 'visible' }}
              title='Description of the Text Lesson'
              code={{
                tsx: null,
                jsx: source.EditorControlledJSXCode
              }}
            >
              <EditorControlled value={Description} onChange={e => setDescription(e.target.value)} />
            </CardSnippet>
          </EditorWrapper>
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

export default NewTextLessonInCourseSection
