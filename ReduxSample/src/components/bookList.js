
import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import BookItem from './bookItem';
import { connect} from 'react-redux';

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <SafeAreaView style={styles.container1}>
        <FlatList
          data={books}
          renderItem={({ item }) => <BookItem book={item} />}
          keyExtractor={item => item.isbn}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
    }
});

const mapStateToProps = (state) => {
    return {
      books: state.books
    }
}
  
export default connect(mapStateToProps)(BookList);
