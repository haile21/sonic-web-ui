 
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';

const VlanConfiguration = ({ onSubmit, selectedDevice }) => {
  const [vlanId, setVlanId] = useState('');
  const [vlanName, setVlanName] = useState('');
  const [vlanStatus, setVlanStatus] = useState('active');

  const handleSubmit = () => {
    onSubmit({
      device: selectedDevice,
      vlanId,
      vlanName,
      vlanStatus,
    });
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', marginTop: '1rem' }}>
      <Typography variant="h6">Configure VLAN</Typography>
      <TextField
        label="VLAN ID"
        fullWidth
        margin="normal"
        value={vlanId}
        onChange={(e) => setVlanId(e.target.value)}
      />
      <TextField
        label="VLAN Name"
        fullWidth
        margin="normal"
        value={vlanName}
        onChange={(e) => setVlanName(e.target.value)}
      />
      <Select
        label="Status"
        fullWidth
        value={vlanStatus}
        onChange={(e) => setVlanStatus(e.target.value)}
        margin="normal"
      >
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: '1rem' }}
        disabled={!selectedDevice}
      >
        Submit VLAN Configuration
      </Button>
    </Paper>
  );
};

export default VlanConfiguration;
