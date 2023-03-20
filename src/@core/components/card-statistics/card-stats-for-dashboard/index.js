// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const CardStatsForDashboard = ({ data }) => {
  // ** Vars
  const { title, chipText, src, stats, trendNumber, trend = 'positive', chipColor } = data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' ,height: '250px', padding: '32px 0.5px 15px 1px'}}>
      <CardContent sx={{ pb: '0 !important' }}>
        <Grid container >
          <Grid item xs={6} >
            <Typography sx={{ mb: 1.5, fontSize: '1.6rem', fontWeight: 300, whiteSpace: 'nowrap' }}>{title}</Typography>
            {chipColor && (
              <CustomChip
                skin='light'
                size='small'
                label={chipText}
                color={chipColor}
                sx={{ mb: 5.5, height: 20, fontWeight: 500, fontSize: '0.75rem' }}
              />
            )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant='h5' sx={{ mr: 1.5 }}>
                {stats}
              </Typography>
              <Typography variant='caption' sx={{ color: trend === 'negative' ? 'error.main' : 'success.main' }}>
                {trendNumber}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <img src={src} alt={title} height={134} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}


const CardStatsForAdmin = ({ data }) => {
  // ** Vars
  const { title, chipText, src, stats, trendNumber, trend = 'positive', chipColor } = data

  return (
    <Card sx={{  overflow: 'visible', height: '250px', width: '810px', padding: '32px', backgroundColor: '#3c65c4' }}>
      <CardContent sx={{ pb: '0 !important'}}>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1.5, fontSize: '2.5rem', fontWeight: 400, whiteSpace: 'nowrap', color:'white' }}>Welcome Admin!</Typography>
            {chipColor && (
              <CustomChip
                skin='light'
                size='small'
                label={chipText}
                color={chipColor}
                sx={{ mb: 5.5, height: 20, fontWeight: 500, fontSize: '0.75rem' }}
              />
            )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* <Typography variant='h5' sx={{ mr: 1.5, color:'white' }}>
                {stats}
              </Typography> */}
              <Typography variant='caption' sx={{ color: trend === 'negative' ? 'error.main' : 'success.main' }}>
                {trendNumber}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <img src={src} alt={title} height={134} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardStatsForDashboard

export { CardStatsForAdmin };