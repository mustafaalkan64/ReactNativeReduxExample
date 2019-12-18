import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import * as actions from './../actions'

class BookItem extends Component {

 onPressed() {
    const { book, selected } = this.props;

    selected ? this.props.deselectBook()
            : this.props.selectBook(book);
  }

  render() {
    const { book, selected } = this.props;

    const descriptionField = selected ? (
        <Text style={styles.descriptionStyle}>{book.description} </Text>
      ) : null;

    return (
    <TouchableOpacity onPress={this.onPressed.bind(this)}>

      <View style={styles.item}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.subTitle}>{book.author}</Text>
      </View>
      {descriptionField}
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

    item: {
      backgroundColor: 'lightgray',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 16,
      alignItems: "center"
    },
    subTitle: {
        fontSize: 13,
    },
    descriptionStyle: {
        marginLeft: 12,
        marginRight: 10,
        fontSize: 13,
        color: 'gray'
    }
});


const mapStateToProps = (state, props) => {
    const selected = state.selectedBook
            && state.selectedBook.isbn === props.book.isbn;
    return {
      selected
    }
  }
  
  export default connect(mapStateToProps, actions)(BookItem);