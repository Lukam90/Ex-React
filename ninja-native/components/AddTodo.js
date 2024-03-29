import { useState } from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState("");

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo'
                onChangeText={changeHandler}
            />

            <Button onPress={submitHandler(text)} title="Add Todo" color="coral" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
});