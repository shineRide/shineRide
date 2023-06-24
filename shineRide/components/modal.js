import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Button, Container, Content, Form, H1, Item, Label, Picker, Text } from 'native-base';

const BookingModal = ({ isVisible, onClose }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const days = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
  ];

  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  const handleBooking = () => {
    // Handle the booking logic here
    // You can access the selectedDay and selectedMonth values
    // and perform any necessary actions (e.g., API calls, state updates)
    // based on the user's booking selection
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.modalHeader}>
            <H1>Select Booking Date</H1>
          </View>
          <Form style={styles.form}>
            <Item stackedLabel>
              <Label>Day</Label>
              <Picker
                mode="dropdown"
                iosHeader="Select Day"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select Day"
                selectedValue={selectedDay}
                onValueChange={setSelectedDay}
              >
                {days.map((day, index) => (
                  <Picker.Item key={index} label={day.label} value={day.value} />
                ))}
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>Month</Label>
              <Picker
                mode="dropdown"
                iosHeader="Select Month"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select Month"
                selectedValue={selectedMonth}
                onValueChange={setSelectedMonth}
              >
                {months.map((month, index) => (
                  <Picker.Item key={index} label={month.label} value={month.value} />
                ))}
              </Picker>
            </Item>
          </Form>
          <Button block onPress={handleBooking}>
            <Text>Book Now</Text>
          </Button>
        </Content>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  form: {
    marginBottom: 20,
  },
});

export default BookingModal;
