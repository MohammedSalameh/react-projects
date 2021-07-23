import React, { useMemo } from 'react';

const DemoList = (props) => {
    const {items} = props;


    // only rebuild if items change.
	const sortedList = useMemo(() => {
		return items.sort((a, b) => a - b);
	}, [items]);

	return (
		<div>
			<h2>{props.title}</h2>
			<ul>
				{sortedList.map((item) => {
					<li key={item}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default React.memo(DemoList);
