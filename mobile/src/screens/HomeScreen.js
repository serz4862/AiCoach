import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import apiClient from '../config/api';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState(null);

  const checkAPIHealth = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get('/health');
      setApiStatus(response.data);
    } catch (error) {
      setApiStatus({ status: 'error', message: 'Cannot connect to API' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAPIHealth();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Welcome to AiCoach</Text>
      <Text style={styles.subtitle}>Mobile App</Text>
      
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Backend API Status:</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#007AFF" />
        ) : (
          <Text style={[
            styles.statusText,
            { color: apiStatus?.status === 'healthy' ? '#34C759' : '#FF3B30' }
          ]}>
            {apiStatus?.status || 'Unknown'}
          </Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={checkAPIHealth}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Refresh API Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  statusContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
