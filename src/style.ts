import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container_todo: {
    padding: 16,
  },
  mt_16: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    color: '#539cd9',
    fontWeight: '500',
    marginBottom: 10,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(210, 214, 215, 1)',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})
