
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const DeviceList = ({ devices, onSelectDevice, selectedDevice }) => (
  <Paper elevation={3} style={{ padding: '1rem' }}>
    <Typography variant="h6">Available Devices</Typography>
    <List>
      {devices.map((device) => (
        <ListItem
          button
          key={device.id}
          onClick={() => onSelectDevice(device.id)}
          selected={selectedDevice === device.id}
        >
          <ListItemText primary={device.name} secondary={device.status} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default DeviceList;
