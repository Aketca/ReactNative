import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const DetailScreen = observer(() => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanning, setScanning] = useState(false);

    const handleBarCodeScanned = ({ type, data }) => {
        if (scanning){
            store.scan.sendScan(type, data);
            setScanning(false);
            console.log('test', type, data);
        } else return undefined
    };

    const handleStartScanning = () => {
        setScanning(true);
        store.scan.resetResult();
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        return handleStartScanning();
    }, []);

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

            {scanning ? (
                <Camera
                  style={styles.camera}
                  onBarCodeScanned={handleBarCodeScanned}
                />
            ) : (
                <Button title={'Сканировать код'} color="#006363" onPress={handleStartScanning} />
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        padding: 15,
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: '#ffffff',
    },
    success: {
        backgroundColor: '#17cd71',
    },
    error: {
        backgroundColor: '#d53a3a',
    },
    camera: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});

export default DetailScreen;