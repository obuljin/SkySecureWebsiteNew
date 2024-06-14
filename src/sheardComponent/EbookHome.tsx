import React from 'react';
import Link from 'next/link';
import ebookBaner from "../../public/assets/img/banner/banner1.png"
import Image from 'next/image';

interface propsType {
	pageTitle: string
}

const EbookHome = ({ pageTitle }: propsType) => {

	return (


		<div className="container-fluid">

			<Image src={ebookBaner} className="" alt="..." style={{ width: "100%", height: "auto", backgroundSize: "cover" }} />
		</div>
	);
}

export default EbookHome;




