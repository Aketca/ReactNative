import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import store from '../store/store';
import { observer } from 'mobx-react-lite';
import { primaryColor, successColor, errorColor } from '../constants';

const DetailScreen = observer(({ route, navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanning, setScanning] = useState(false);

    const handleBarCodeScanned = ({ data }) => {
        if (scanning){
            store.scan.sendScan(route.params.item.id, data);
            setScanning(false);
        } else return undefined
    };
    useEffect(() => {
      navigation.setOptions({ title: route.params.item.name })
    }, [navigation])


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
        return (
          <View style={styles.container}>
            <Text>Запрашиваем разрешение на использование камеры</Text>
          </View>
        );
    }
    if (hasPermission === false) {
        return (
          <View style={styles.container}>
            <Text>Нет доступа к камере</Text>
          </View>
        ) ;
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
              <View style={styles.resultWrap}>
                <View style={styles.messageWrap}>
                  <Text>{store.scan.message}</Text>
                </View>
                <Button title={'Сканировать код'} color={primaryColor} onPress={handleStartScanning} />
              </ View>
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    resultWrap: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    messageWrap: {
      borderRadius: 5,
      padding: 12,
      backgroundColor: '#ffffff',
      marginBottom: 'auto'
    },
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
        backgroundColor: successColor,
    },
    error: {
        backgroundColor: errorColor,
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