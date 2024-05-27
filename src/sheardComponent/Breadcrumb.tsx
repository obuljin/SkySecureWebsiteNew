import React from 'react';
import Link from 'next/link';

interface propsType{
    pageTitle:string,
	pageSmallTitle:string
}

const Breadcrumb = ({pageTitle, pageSmallTitle}:propsType) => {

  return (
      <div className="breadcrumb-area pt-150 pb-150" style={{ background: "url(assets/img/bg/breadcrumb.png)", backgroundAttachment:"fixed" , backgroundPosition:'center', backgroundSize:'cover'}}>
	    <div className="container">
	        <div className="row">
	            <div className="col-xl-12">
	                <div className="breadcrumb-text text-center">
						<h1>{ pageTitle ? pageTitle : 'Blog'}</h1>
	                    <ul className="breadcrumb-menu">
	                        <li><Link href="/" className='text-white'>Home</Link></li>
	                        <li><span>{ pageSmallTitle ? pageSmallTitle : 'N/A'}</span></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
  );
}

export default Breadcrumb;




