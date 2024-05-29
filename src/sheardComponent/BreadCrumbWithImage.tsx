import React from 'react';
import Link from 'next/link';
import { serviceDataTwo } from "@/data/service-data-two";

interface propsType {
	pageTitle: string,
	pageSmallTitle: string,
    backgroundImage: string
}

const BreadcrumbWithImage = ({ pageTitle, pageSmallTitle , backgroundImage}: propsType) => {

	return (
		<div className="breadcrumb-area pt-150 pb-150" style={{ background: `${backgroundImage? `url(${backgroundImage})` : "url(assets/img/bg/breadcrumb.png)"}`, backgroundAttachment: "fixed", backgroundPosition: 'center', backgroundSize: 'cover' }}>
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




