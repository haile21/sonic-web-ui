
import React, { useState, useEffect } from 'react';
import { Container, Grid2, Typography } from '@mui/material';
import DeviceList from './components/DeviceList';
import VlanConfiguration from './components/VlanConfiguration';
import { getDevices, configureVlan } from './services/sonicApi';

function App() {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');

  useEffect(() => {
    const fetchDevices = async () => {
      const data = await getDevices();
      setDevices(data);
    };
    fetchDevices();
  }, []);

  const handleVlanSubmit = async (vlanData) => {
    await configureVlan(vlanData);
    alert('VLAN configuration submitted!');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        VLAN Configuration
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} md={4}>
          <DeviceList
            devices={devices}
            onSelectDevice={setSelectedDevice}
            selectedDevice={selectedDevice}
          />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          <VlanConfiguration
            selectedDevice={selectedDevice}
            onSubmit={handleVlanSubmit}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
