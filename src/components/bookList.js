import React from 'react';
import {connect} from 'react-redux';
import bookAction from './../actions/bookListAction';

var bookList = React.createClass({

	_loadBooks: function(event) {
		event.preventDefault();
		this.props.dispatch(bookAction());
	},

	_listbook: function() {
		var listBook = this.props.books.map(function(book, key) {
			return <li className="list-group-item" key={key}>{book.title}</li>
		});

		if(listBook.length <=0) {
			return <li><a onClick={this._loadBooks}>Load Books</a></li>
		}

		return listBook;
	},

	render: function() {
		return (
			<ul className="list-group">
				{this._listbook()}
			</ul>
		);
	}

});

function mapStateToProps(state) {
	return {
		books: state.books
	}
};

export default connect(mapStateToProps)(bookList);