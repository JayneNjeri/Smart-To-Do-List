import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleStatus, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text 
          style={[
            styles.title, 
            task.status === 'completed' && styles.completedTitle
          ]}
        >
          {task.title}
        </Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          onPress={() => onToggleStatus(task.id)}
          style={[
            styles.button, 
            task.status === 'completed' ? styles.undoButton : styles.completeButton
          ]}
        >
          <Text style={[
            task.status === 'completed' ? styles.undoButtonText : styles.completeButtonText
          ]}>
            {task.status === 'completed' ? 'Undo' : 'Complete'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => onDelete(task.id)}
          style={[styles.button, styles.deleteButton]}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  description: {
    color: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'row',
    // spaceBetween: 8,
  },
  button: {
    padding: 8,
    borderRadius: 4,
  },
  completeButton: {
    backgroundColor: 'lightgreen',
  },
  undoButton: {
    backgroundColor: 'lightgray',
  },
  completeButtonText: {
    color: 'green',
  },
  undoButtonText: {
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: 'lightcoral',
  },
  deleteButtonText: {
    color: 'red',
  },
});

export default React.memo(TaskItem);