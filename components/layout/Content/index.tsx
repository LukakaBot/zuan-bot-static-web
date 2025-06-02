import React from 'react';

function Content({ children }: React.PropsWithChildren) {
	return (
		<main className='flex-1 flex w-full h-full '>
			<div className='container-wrapper mx-auto flex-1 gap-0'>{children}</div>
		</main>
	);
}

export default Content;
