import { Fragment } from "react";
import type React from "react";

interface ListProps<T> {
	items: T[];
	renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
	return (
		<>
			{items.map((item, index) => (
				<Fragment key={index}>{renderItem(item)}</Fragment>
			))}
		</>
	);
}

export default List;
