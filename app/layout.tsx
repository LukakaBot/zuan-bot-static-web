import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header/Header';
import Content from '@/components/layout/Content';
import Footer from '@/components/layout/Footer/Footer';
import Provider from './provider';

export const metadata: Metadata = {
	title: '祖安宝典',
	description: '键盘战场的优雅利刃',
	// description: '真正的祖安大师，骂人如写诗，举报也成赞美',
	// description: '这不是脏话字典，是语言博弈的量子计算机',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang='zh' suppressHydrationWarning>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body className='min-h-screen'>
				<Provider>
					<div className='flex min-h-screen w-full flex-col'>
						<Header />
						<Content>{children}</Content>
						<Footer />
					</div>
				</Provider>
			</body>
		</html>
	);
}
