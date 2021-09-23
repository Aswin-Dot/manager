import React from "react";
import { View, StyleSheet } from 'react-native';

const Spacer = (props) => {
    return (
        <View style={styles.space}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    space: {
        marginVertical: 15,
        marginHorizontal: 10
    }
});

export default Spacer;