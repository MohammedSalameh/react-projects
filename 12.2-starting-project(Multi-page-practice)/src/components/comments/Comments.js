import { useState } from 'react';
import { useParams } from 'react-router-dom';
import React, { useEffect, useCallback } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const params = useParams();
	const { quoteId } = params;

	const {
		sendRequest,
		data: loadedComments,
		status,
		error,
	} = useHttp(getAllComments);

	useEffect(() => {
		sendRequest(quoteId);
	}, [quoteId, sendRequest]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedcommentHandler = useCallback(() => {
    //dont recreate a infinite loop, sicne the child uses this
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

	let comments;
	if (status === 'pending') {
		comments = (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (
		status === 'completed' &&
		(!loadedComments || loadedComments.length > 0)
	) {
		comments = <CommentsList comments={loadedComments} />;
	}

	if (
		status === 'completed' &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <p className='centered'>No comments were added yet!</p>;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm
					quoteId={quoteId}
					onAddedComment={addedcommentHandler}
				/>
			)}
			{comments}
		</section>
	);
};

export default Comments;
