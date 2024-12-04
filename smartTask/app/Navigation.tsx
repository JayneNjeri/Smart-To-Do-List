import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HomePage from './screens/HomePage';
import Status from './screens/Status';
import { Task } from './types/Task';


export const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'status'>('home');
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <View style={styles.container}>
      {/* Screen Content */}
      <View style={styles.screenContent}>
        {activeTab === 'home' ? <HomePage /> : <Status tasks={tasks} />}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          onPress={() => setActiveTab('home')}
          style={[
            styles.tabButton, 
            activeTab === 'home' && styles.activeTab
          ]}
        >
          <Text style={activeTab === 'home' ? styles.activeTabText : styles.inactiveTabText}>
            Home
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setActiveTab('status')}
          style={[
            styles.tabButton, 
            activeTab === 'status' && styles.activeTab
          ]}
        >
          <Text style={activeTab === 'status' ? styles.activeTabText : styles.inactiveTabText}>
            Status
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  tabButton: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#dbeafe',
  },
  activeTabText: {
    color: '#1d4ed8',
  },
  inactiveTabText: {
    color: '#6b7280',
  },
});

export default Navigation;