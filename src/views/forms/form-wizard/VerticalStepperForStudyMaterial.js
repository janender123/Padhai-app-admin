// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'

// ** Third Party Imports

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'


//*Extras
import { Fragment, useState } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/NewCourseThumbnail'
// ** Icon Imports
// ** Custom Components Imports
// ** Third Party Imports
import toast from 'react-hot-toast'
// ** Styled Component
import Chip from '@mui/material/Chip'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import CardSnippet from 'src/@core/components/card-snippet'
import AddIconMenu from 'src/views/components/menu/AddIconInCourseMenu'
import IconButton from '@mui/material/IconButton'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Collapse from '@mui/material/Collapse'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import clsx from 'clsx'
import Icon from 'src/@core/components/icon'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'

const Input = () => {
  return (<Card sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
  <CardHeader
    title='sample'
    action={
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AddIconMenu />
        <IconButton
          size='small'
          aria-label='edit'
          sx={{ mr: 2, color: 'text.secondary' }}
          onClick={handleClickEditSection}
        >
          <Icon icon="material-symbols:edit" />
        </IconButton>
        <Dialog open={EditSection} fullWidth onClose={handleCloseEditSection}>
          <DialogContent>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={12}>
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
                <TextField id='name' value={title} onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
              </Grid>
              <Grid item sm={12} xs={12}>
                <SwitchesCustomized />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <IconButton
          size='small'
          aria-label='delete'
          sx={{ mr: 2, color: 'text.secondary' }}
        // onClick={() => setCollapsed(!collapsed)}
        >
          <Icon icon="material-symbols:delete-sharp" />
        </IconButton>
        <IconButton
          size='small'
          aria-label='cursor'
          sx={{ mr: 2, color: 'text.secondary' }}
        // onClick={() => setCollapsed(!collapsed)}
        >
          <Icon icon="mdi:cursor-move" />
        </IconButton>
        <IconButton
          size='small'
          aria-label='collapse'
          sx={{ mr: 2, color: 'text.secondary' }}
          onClick={() => setCollapsed(!collapsed)}
        >
          <Icon fontSize={20} icon={!collapsed ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
        </IconButton>
      </Box>
    }
  />
  <Collapse in={collapsed}>
    <CardContent>
      <div>

      </div>
    </CardContent>
  </Collapse>
</Card>)
};

const AddSection = () => {
  const handleNewSectionDialog = () => setOpenDialog(true)
  const handleCloseNewSectionDialog = () => setOpenDialog(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [language, setLanguage] = useState('')
  const onAddSectionClick = event => {
    setSectionList(sectionList.concat(<Input key={sectionList.length} />));
    setOpenDialog(false)
  };
  const handleClickEditSection = () => setEditSection(true)
  const handleCloseEditSection = () => setEditSection(false)
  const [sectionList, setSectionList] = useState([<Card sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
    <CardHeader
      title='sample'
      action={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AddIconMenu />
          <IconButton
            size='small'
            aria-label='edit'
            sx={{ mr: 2, color: 'text.secondary' }}
            onClick={handleClickEditSection}
          >
            <Icon icon="material-symbols:edit" />
          </IconButton>
          <Dialog open={EditSection} fullWidth onClose={handleCloseEditSection}>
            <DialogContent>
              <Grid container spacing={6}>
                <Grid item sm={12} xs={12}>
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
                  <TextField id='name' value={title} onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <SwitchesCustomized />
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
          <IconButton
            size='small'
            aria-label='delete'
            sx={{ mr: 2, color: 'text.secondary' }}
          // onClick={() => setCollapsed(!collapsed)}
          >
            <Icon icon="material-symbols:delete-sharp" />
          </IconButton>
          <IconButton
            size='small'
            aria-label='cursor'
            sx={{ mr: 2, color: 'text.secondary' }}
          // onClick={() => setCollapsed(!collapsed)}
          >
            <Icon icon="mdi:cursor-move" />
          </IconButton>
          <IconButton
            size='small'
            aria-label='collapse'
            sx={{ mr: 2, color: 'text.secondary' }}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon fontSize={20} icon={!collapsed ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
          </IconButton>
        </Box>
      }
    />
    <Collapse in={collapsed}>
      <CardContent>
        <div>

        </div>
      </CardContent>
    </Collapse>
  </Card>,
  ]);
  
  return (
  <Grid container spacing={5}>
    <Grid item xs={12}>
      <Fragment>
        <Button variant='contained' onClick={handleNewSectionDialog}>
          Add New Section
        </Button>
        <Dialog open={openDialog} fullWidth onClose={handleCloseNewSectionDialog} aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-title'>
            New Section
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={6}>
              <Grid item sm={12} xs={12}>
                <FormControl fullWidth style={{ marginTop: '5px' }}>
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
                <TextField id='name' value={title} onChange={e => setTitle(e.target.value)} autoFocus fullWidth label='Section Title' />
              </Grid>
              <Grid item sm={12} xs={12}>
                <SwitchesCustomized />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button onClick={onAddSectionClick} variant='contained'>Save</Button>
            <Button color='error' variant='contained' onClick={handleCloseNewSectionDialog}>Discard</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </Grid>
    <Grid item xs={12} >
      {sectionList}
    </Grid>
  </Grid>)
}

const BasicInfo = () => {
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [title, setTitle] = useState('')
  const [Slug, setSlug] = useState('')
  const [Description, setDescription] = useState('')
  const [childCategory, setChildCategory] = useState('')
  const [language, setLanguage] = useState('')
  const [chapter, setChapter] = useState('')
  const [exercise, setExercise] = useState('')
  const [book, setBook] = useState('')
  return (<Fragment>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
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
        {/* <TextField
      fullWidth
      label='Sub-Category'
      value={subCategory}
      placeholder='Class'
      onChange={e => setSubCategory(e.target.value)}
    /> */}
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
        {/* <TextField
      fullWidth
      label='Child-Category'
      value={childCategory}
      placeholder='Stream'
      onChange={e => setChildCategory(e.target.value)}
    /> */}
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
            {/* <MenuItem value={30}>12th</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-outlined-label'>Book</InputLabel>
          <Select
            value={book}
            label='book'
            id='demo-simple-select-outlined'
            labelId='demo-simple-select-outlined-label'
            onChange={e => setBook(e.target.value)}
          >

            <MenuItem value={10}>RD Sharma</MenuItem>
            <MenuItem value={20}>IE Irodov</MenuItem>
            <MenuItem value={30}>HC Verma</MenuItem>
            {/* <MenuItem value={30}>12th</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth >
          <InputLabel id='demo-simple-select-outlined-label'>Chapter</InputLabel>
          <Select
            value={chapter}
            onChange={e => setChapter(e.target.value)}
            label='Chapter'
            id='demo-simple-select-outlined'
            labelId='demo-simple-select-outlined-label'
          >
            <MenuItem value={10}>Optics</MenuItem>
            <MenuItem value={20}>Light</MenuItem>
            <MenuItem value={30}>Semiconductors</MenuItem>
            {/* <MenuItem value={30}>12th</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth >
          <InputLabel id='demo-simple-select-outlined-label'>Exercise</InputLabel>
          <Select
            value={exercise}
            onChange={e => setExercise(e.target.value)}
            label='Exercise'
            id='demo-simple-select-outlined'
            labelId='demo-simple-select-outlined-label'
          >
            <MenuItem value={10}>Q.1 </MenuItem>
            <MenuItem value={20}>Q.2 </MenuItem>
            <MenuItem value={30}>Q.3 </MenuItem>
            {/* <MenuItem value={30}>12th</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  </Fragment>)
}

const steps = [
  {
    title: 'Basic information',
    subtitle: 'Enter basic details of the study material',
    component: <BasicInfo />
  },
  {
    title: 'Add Section',
    subtitle: 'Add Study Material',
    // component: <AddSection />
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links',
    description:
      'Jelly lollipop halvah bear claw jujubes macaroon candy canes. Soufflé halvah lollipop liquorice macaroon powder. Cookie topping pastry oat cake caramels bonbon. Sesame snaps sweet cookie macaroon soufflé pudding. Chocolate donut macaroon muffin donut biscuit marzipan halvah. Bear claw biscuit chocolate cake chupa chups oat cake bear claw cupcake tiramisu apple pie. Carrot cake bear claw marshmallow sweet pudding toffee.'
  }
]

const VerticalStepperForStudyMaterial = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0)

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Card>
      <CardHeader title='Vertical Stepper with Numbers' />
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step key={index} className={clsx({ active: activeStep === index })}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.component}</Typography>
                    <div className='button-wrapper'>
                      <Button
                        size='small'
                        color='secondary'
                        variant='outlined'
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        Back
                      </Button>
                      <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
        {activeStep === steps.length && (
          <Box sx={{ mt: 2 }}>
            <Typography>All steps are completed!</Typography>
            <Button size='small' sx={{ mt: 2 }} variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default VerticalStepperForStudyMaterial
