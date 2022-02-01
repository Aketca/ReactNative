import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const ScanScreen = observer(() => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log('test');
    store.scan.sendScan(type, data);
    setScanned(true);
  };

  const handleResetScanner = () => {
    store.scan.resetResult();
    setScanned(false);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={[
      styles.container,
      store.scan.result === 'success' ? styles.success : null,
      store.scan.result === 'error' ? styles.error : null
    ]}>
      {/*<BarCodeScanner*/}
      {/*  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}*/}
      {/*  style={styles.camera}*/}
      {/*/>*/}
      <Camera
        style={styles.camera}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={handleResetScanner} />}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  success: {
    borderWidth: 3,
    borderColor: 'green'
  },
  error: {
    borderWidth: 3,
    borderColor: 'red'
  },
  camera: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default ScanScreen;