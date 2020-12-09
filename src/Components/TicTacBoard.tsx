import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TicTacBoard() {
  return (
    <>
      <View style= {styles.row}>
        <View style= {styles.borderAll}></View>
        <View style= {styles.borderAll}></View>
        <View style= {styles.borderAll}></View>
      </View>
      <View style= {styles.row}>
        <View style= {styles.borderAll}></View>
        <View style= {styles.borderAll}></View>
        <View style= {styles.borderAll}></View>
      </View>
      <View style= {styles.row}>
        <View style= {styles.borderAll}></View>
        <View style= {styles.borderAll}></View>
        <View style= {styles.borderAll}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    borderAll: {
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        height: 100,
    }
});
