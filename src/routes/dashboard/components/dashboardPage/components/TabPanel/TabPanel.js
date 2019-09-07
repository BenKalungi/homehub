import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const TabPanel = props => {
    const { 
        index, 
        value, 
        children, 
        ...other 
    } = props

    return (
       <Typography
       component="div"
       role="tabpanel"
       hidden={value !== index}
       id={`simple-tabpanel-${index}`}
       aria-labelledby={`simple-tab-${index}`}
       {...other}
       >
           <div>{children}</div>

       </Typography>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default TabPanel