// ** React Imports
import { Fragment, useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/NewCourseThumbnail'
// ** Icon Imports
// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
// ** Third Party Imports
import toast from 'react-hot-toast'
// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'
import Chip from '@mui/material/Chip'
import EditorControlled from 'src/views/forms/form-elements/editor/new-course-form-description-editor'
import CardSnippet from 'src/@core/components/card-snippet'
import CardHeader from '@mui/material/CardHeader'
import AddIconMenu from 'src/views/components/menu/AddIconInCourseMenu'
import IconButton from '@mui/material/IconButton'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import Collapse from '@mui/material/Collapse'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import AddNewCourseDialog from 'src/views/components/dialogs/AddNewCourseSectionDialog'
import AddNewQuizDialog from 'src/views/components/dialogs/AddNewQuizDialog'
import CardActionAll from 'src/views/ui/cards/actions//CardActionNewCourseSection'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FormLayoutsBasic from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import Icon from 'src/@core/components/icon'
import EditQuiz from 'src/views/components/dialogs/EditQuiz'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import SwitchesCustomized from 'src/views/forms/form-elements/switch/SwitchesCustomized'
import Menu from '@mui/material/Menu'
import NewLesson from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'
import NewText from 'src/views/forms/form-layouts/NewTextLessonInCourseSection'
import NewQuiz from 'src/views/forms/form-layouts/NewQuizInCourseSection'
import NewAssignment from 'src/views/forms/form-layouts/NewAssignmentInCourseSection'
import { LessonList } from 'src/views/forms/form-layouts/NewLessonFormInNewCourseSection'

const steps = [
  {
    title: 'Basic Information',
    subtitle: 'Add Basic Details of the course'
  },
  {
    title: 'Additional info',
    subtitle: 'Add Additional Details of the course'
  },
  {
    title: 'Content',
    subtitle: 'Add Chapters of the course'
  },
  {
    title: 'Quiz and Certification',
    subtitle: 'Add Quiz for the course'
  }
]

const AddSection = () => {
  const handleNewSectionDialog = () => setOpenDialog(true)
  const handleCloseNewSectionDialog = () => setOpenDialog(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [sectionList, setSectionList] = useState([]);
  const [EditSection, setEditSection] = useState(false);
  const handleClickEditSection = () => setEditSection(true)
  const handleCloseEditSection = () => setEditSection(false)
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const Input = () => {
    const [anchorEl, setAnchorEl] = useState('')
    const [openText, setOpenText] = useState(false)
    const [openQuiz, setOpenQuiz] = useState(false)
    const [openAssignment, setOpenAssignment] = useState(false)
    const [NewLessonList, setNewLessonList] = useState([]);
    const handleClickNewFile = () => {
      setNewLessonList(NewLessonList.concat(
        <Grid item xs={12} sm={12} margin={3}>
          <Accordion sx={{ borderStyle: 'groove' }}>
            <AccordionDetails>
              <NewLesson key={NewLessonList.length} />
            </AccordionDetails>
          </Accordion>
        </Grid>));
      setCollapsed(!collapsed)
    };
    const handleClickNewText = () => setOpenText(true)
    const handleCloseNewText = () => setOpenText(false)
    const handleClickNewQuiz = () => setOpenQuiz(true)
    const handleCloseNewQuiz = () => setOpenQuiz(false)
    const handleClickNewAssignment = () => setOpenAssignment(true)
    const handleCloseNewAssignment = () => setOpenAssignment(false)
    const handleCloseAddButton = () => {
      setAnchorEl(null)
    }
    const [collapsed, setCollapsed] = useState(false)
    const handleClickMenuAddButton = event => {
      setAnchorEl(event.currentTarget)
    }
    return (<Card sx={{ position: 'relative', marginBottom: '10px', borderStyle: 'groove' }}>
      <CardHeader
        title={title}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <IconButton
                size='small'
                aria-label='edit'
                sx={{ mr: 2, color: 'text.secondary' }}
                onClick={handleClickMenuAddButton}
              >
                <Icon icon="material-symbols:add-circle" />
              </IconButton>
              <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleCloseAddButton} open={Boolean(anchorEl)}>
                <MenuItem onClick={handleClickNewFile}>New Lesson</MenuItem>
                <MenuItem onClick={handleClickNewText}>New Text</MenuItem>
                <Dialog open={openText} fullWidth onClose={handleCloseNewText}>
                  <DialogContent>
                    <NewText />
                  </DialogContent>
                </Dialog>
                <MenuItem onClick={handleClickNewQuiz}>New Quiz</MenuItem>
                <Dialog open={openQuiz} fullWidth onClose={handleCloseNewQuiz}>
                  <DialogContent>
                    <NewQuiz />
                  </DialogContent>
                </Dialog>
                <MenuItem onClick={handleClickNewAssignment}>New Assignment </MenuItem>
                <Dialog open={openAssignment} fullWidth onClose={handleCloseNewAssignment}>
                  <DialogContent>
                    <NewAssignment />
                  </DialogContent>
                </Dialog>
              </Menu>
            </div>
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
            {NewLessonList}
          </div>
        </CardContent>
      </Collapse>
    </Card>)
  };
  const onAddSectionClick = () => {
    setSectionList(sectionList.concat(<Input key={sectionList.length} />));
    setOpenDialog(false)
  };

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
const NewCourseForm = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0)
  const [childCategory, setChildCategory] = useState('')
  const [instructor, setInstructor] = useState('')
  const [alsoIn, setAlsoIn] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [title, setTitle] = useState('')
  const [Slug, setSlug] = useState('')
  const [Description, setDescription] = useState('')
  const [courseTag, setCourseTag] = useState([])
  const [Status, setStatus] = useState([])
  const [duration, setDuration] = useState([])
  const [thumbnail, setThumbnail] = useState([])
  const [language, setLanguage] = useState('')
  const [assignment, setAssignment] = useState([])
  const [drip, setDrip] = useState([])
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }
  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <Fragment>
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
              {/* <TextField
                fullWidth
                label='Instructor'
                value={instructor}
                placeholder='Instructor'
                onChange={e => setInstructor(e.target.value)}
              /> */}
              <FormControl fullWidth >
                <InputLabel id='demo-simple-select-outlined-label'>Instructor</InputLabel>
                <Select
                  value={instructor}
                  onChange={e => setInstructor(e.target.value)}
                  label='Instructor'
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >

                  <MenuItem value={10}>Mr. Pradeep Sharma</MenuItem>
                  <MenuItem value={20}>Mr. Deepak Kumar</MenuItem>
                  <MenuItem value={30}>Mr. Yogesh</MenuItem>
                  {/* <MenuItem value={30}>12th</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                fullWidth
                label='Also in which category'
                value={alsoIn}
                placeholder='Other categories where the course is in...'
                onChange={e => setAlsoIn(e.target.value)}
              /> */}
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Also in which category</InputLabel>
                <Select
                  value={alsoIn}
                  onChange={e => setAlsoIn(e.target.value)}
                  label='Also in which category'
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value={10}>Science CBSE 6th</MenuItem>
                  <MenuItem value={20}>Science ICSE 6th</MenuItem>
                  <MenuItem value={30}>Maths CBSE 6th</MenuItem>
                  {/* <MenuItem value={30}>12th</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                fullWidth
                label='Language'
                value={language}
                placeholder='Language'
                onChange={e => setLanguage(e.target.value)}
              /> */}
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Title'
                value={title}
                placeholder='Title'
                onChange={e => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Slug'
                value={Slug}
                placeholder='Slug'
                onChange={e => setSlug(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CardSnippet
                sx={{ overflow: 'visible' }}
                title='Description of the course'
                code={{
                  tsx: null,
                  jsx: source.EditorControlledJSXCode
                }}
              >
                <EditorControlled value={Description} onChange={e => setDescription(e.target.value)} />
              </CardSnippet>
            </Grid>
          </Fragment>
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Course Tags</InputLabel>
                <Select
                  value={courseTag}
                  label='Course Tags'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                  onChange={e => setCourseTag(e.target.value)}
                >

                  <MenuItem value={10}>Science</MenuItem>
                  <MenuItem value={20}>Maths</MenuItem>
                  <MenuItem value={30}>Chemistry</MenuItem>
                  <MenuItem value={30}>Physics</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='number'
                label='Duration of the course (in minutes) '
                // placeholder='Duration of the course'
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Drip Content '
                // placeholder='Duration of the course'
                value={drip}
                onChange={e => setDrip(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} >
              Image/Thumbnail for the course
              <TextField
                fullWidth
                type='file'
                // label='Assignment'
                // placeholder='Submit Assignment for the course'
                value={thumbnail}
                onChange={e => setThumbnail(e.target.value)}
              />
            </Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12}><AddSection />
            </Grid>
          </Fragment>
        )
      case 3:
        return (
          <Fragment key={step}>
            <Grid item xs={12}>
              <AddNewQuizDialog></AddNewQuizDialog>
            </Grid>
            <Grid item xs={12} >
              <Accordion style={{ borderStyle: 'groove' }}>
                <AccordionSummary
                  id='panel-header-1'
                  aria-controls='panel-content-1'
                  expandIcon={<Icon icon='mdi:chevron-down' />}
                >
                  <Typography>Optics Quiz</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <EditQuiz />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Fragment>
        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                size='large'
                variant='outlined'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Fragment>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card sx={{ mt: 4 }}>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </Fragment>
  )
}

export default NewCourseForm
