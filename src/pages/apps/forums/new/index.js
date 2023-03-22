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
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// ** Source code imports
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const index = () => {
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

export default index
