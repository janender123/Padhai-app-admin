import { useState } from 'react'

import Typography from '@mui/material/Typography'

// ** React Imports
import { Fragment } from 'react'

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

  return (
    <EditorWrapper>
      <Card sx={{ mt: 4 }}>
        <CardHeader title='Add New Question' />
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item sm={6} xs={12} mt={3}>
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
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} mt={3}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Board</InputLabel>
                <Select
                  value={category}
                  label='Board'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                  onChange={e => setCategory(e.target.value)}
                >
                  <MenuItem value={10}>CBSE</MenuItem>
                  <MenuItem value={20}>ICSE</MenuItem>
                  <MenuItem value={30}>UP Board</MenuItem>
                  <MenuItem value={30}>MP Board</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Class</InputLabel>
                <Select
                  value={subCategory}
                  label='Class'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                  onChange={e => setSubCategory(e.target.value)}
                >
                  <MenuItem value={10}>6th</MenuItem>
                  <MenuItem value={20}>7th</MenuItem>
                  <MenuItem value={30}>8th</MenuItem>
                  <MenuItem value={30}>12th</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Stream</InputLabel>
                <Select
                  value={childCategory}
                  label='Stream'
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                  onChange={e => setChildCategory(e.target.value)}
                >
                  <MenuItem value={10}>Science</MenuItem>
                  <MenuItem value={20}>Arts</MenuItem>
                  <MenuItem value={30}>Commerce</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={6}>
              <TextField id='name' fullWidth label='Write your question here...' required />
            </Grid>
            <Grid item sm={6} xs={12}>
              Image (Optional)
              <TextField type='file' id='image' fullWidth />
            </Grid>
            <Grid item sm={6} xs={12} mt={5.5}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Difficulty</InputLabel>
                <Select label='Language' id='demo-simple-select-outlined' labelId='demo-simple-select-outlined-label'>
                  <MenuItem value={10}>Easy</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Hard</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField label='Default Marks' type={number} id='default_marks' fullWidth />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField label='Default time to solve' type={number} id='default_time' fullWidth />
            </Grid>
            <Grid item sm={12} xs={12}>
              <Divider textAlign='left'>Answers</Divider>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Button variant='contained' onClick={onAddBtnClick}>
                Add Answer
              </Button>
            </Grid>
            <Grid item sm={12} xs={12}>
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
            </Grid>
            <Grid item sm={12} xs={12}>
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
            </Grid>
            <Grid item sm={12} xs={12}>
              {answerOptionList}
            </Grid>
            <Grid item sm={12} xs={12}>
              <Divider textAlign='left'>Solution</Divider>
            </Grid>
            <Grid item xs={12}>
              <CardSnippet
                sx={{ overflow: 'visible' }}
                title='Write Solution'
                code={{
                  tsx: null,
                  jsx: source.EditorControlledJSXCode
                }}
              >
                <EditorControlled />
              </CardSnippet>
            </Grid>
            <Grid display='inherit' item xs={12} sm={12}>
              <Typography variant='h5'>Video Solution</Typography>
              <FormControlLabel
                control={
                  <Switch
                    color='primary'
                    sx={{ float: 'right', ml: '50%' }}
                    checked={!invisible}
                    onChange={handleVideoSol}
                  />
                }
              />
            </Grid>
            {!invisible && (
              <Grid item mt={3} sm={12} xs={12}>
                Upload Video
                <TextField id='video' type='file' fullWidth />
              </Grid>
            )}
            <Grid item sm={12} xs={12}>
              <Divider textAlign='left'>Hint</Divider>
            </Grid>
            <Grid item xs={12} sm={12}>
              <EditorWrapper>
                <CardSnippet
                  sx={{ overflow: 'visible' }}
                  title='Hint'
                  code={{
                    tsx: null,
                    jsx: source.EditorControlledJSXCode
                  }}
                >
                  <EditorControlled value={Description} onChange={e => setDescription(e.target.value)} />
                </CardSnippet>
              </EditorWrapper>
            </Grid>
            <CardActions>
              <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                Save
              </Button>
              <Button type='reset' size='large' color='secondary' variant='outlined'>
                Discard
              </Button>
            </CardActions>
          </Grid>
        </CardContent>
      </Card>
    </EditorWrapper>
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
