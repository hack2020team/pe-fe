import React from 'react';
import { Box } from '@material-ui/core';
import React from 'react'

export default function SimpleTable() {  
  return (
	<div>
        <Box p={1} bgcolor="grey.300">
            <img src="https://user-images.githubusercontent.com/11544667/39666382-820a9132-50c0-11e8-9166-005e5a0ed2aa.png" />
            <div>
                No auth. Refresh the page
            </div>
        </Box>
    </div>
  );
}

