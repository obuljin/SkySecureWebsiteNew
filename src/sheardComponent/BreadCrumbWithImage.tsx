import React from 'react';
import Link from 'next/link';
import { serviceDataTwo } from "@/data/service-data-two";

interface propsType {
	pageTitle: string,
	pageSmallTitle: string,
    backgroundImage: string,
	backgroundcolor:string
}

const BreadcrumbWithImage = ({ pageTitle, pageSmallTitle , backgroundImage,backgroundcolor=''}: propsType) => {

	return (
		// <div className="breadcrumb-area pt-150 pb-150" style={{ 
		// 	background: `${backgroundImage ? `url(${backgroundImage})` : "url(assets/img/bg/breadcrumb.png)"} `, 
		// 	backgroundColor:`${backgroundcolor}`,
		// 	backgroundAttachment: "fixed", 
		// 	backgroundPosition: 'center', 
		// 	backgroundSize: 'cover' 
		// }}>
		
		
		// 	<div className="container">
		// 		<div className="row">
		// 			<div className="col-xl-12">
		// 				<div className="breadcrumb-text text-center">
		// 					<h1>{pageTitle ? pageTitle : 'N/A'}</h1>
		// 					<ul className="breadcrumb-menu">
		// 						<li><Link href="/" className='text-white'>Home</Link></li>
		// 						{serviceDataTwo.some(service => service.title === pageSmallTitle) && (
		// 							<>
		// 								<li><Link href="/services" className='text-white'>Services</Link></li>
		// 							</>
		// 						)}
		// 						<li><span>{pageSmallTitle ? pageSmallTitle : 'N/A'}</span></li>
		// 					</ul>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div 
		className="breadcrumb-area pt-150 pb-150" 
		style={{ 
			position: 'relative', 
			background: `url(${backgroundImage ? backgroundImage : "assets/img/bg/breadcrumb.png"})`, 
			backgroundAttachment: "fixed", 
			backgroundPosition: 'center', 
			backgroundSize: 'cover' 
		}}
	>
		<div 
			className="overlay" 
			style={{ 
				position: 'absolute', 
				top: 0, 
				left: 0, 
				width: '100%', 
				height: '100%', 
				backgroundColor: backgroundcolor, 
				opacity: 0.8 // Adjust the opacity as needed
			}}
		></div>
		
		<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="breadcrumb-text text-center">
							<h1>{pageTitle ? pageTitle : 'N/A'}</h1>
							<ul className="breadcrumb-menu">
								<li><Link href="/" className='text-white'>Home</Link></li>
								{serviceDataTwo.some(service => service.title === pageSmallTitle) && (
									<>
										<li><Link href="/services" className='text-white'>Services</Link></li>
									</>
								)}
								<li><span>{pageSmallTitle ? pageSmallTitle : 'N/A'}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
	</div>
	
	);
}

export default BreadcrumbWithImage;




