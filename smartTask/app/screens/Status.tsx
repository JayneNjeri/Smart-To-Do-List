import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

export const StatusScreen: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Status</Text>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text 
              style={[
                styles.taskStatus, 
                item.status === 'completed' ? styles.completedStatus : styles.pendingStatus
              ]}
            >
              {item.status.toUpperCase()}
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tasks to show</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    fontSize: 18,
  },
  taskStatus: {
    fontWeight: 'bold',
  },
  completedStatus: {
    color: 'green',
  },
  pendingStatus: {
    color: 'orange',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#6b7280',
  },
});

export default StatusScreen;