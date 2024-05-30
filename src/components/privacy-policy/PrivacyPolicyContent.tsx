import React from 'react';

const PrivacyPolicyContent = () => {
    const privacyPolicyData = [
        {
            id: 1,
            title: "Privacy Policy",
            data: [
                {
                    id: 1,
                    desc: 'Skysecure Technologies Private Limited is a company registered and incorporated in India. We are committed to protecting and respecting your privacy. For the purposes of data protection legislation, we are the data controller and we will process your Personal Data in accordance with the IT Act, 2000(21 of 2000) and other national and state laws which relate to the processing of personal data.Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.'
                },
                {
                    id: 2,
                    desc: ' We collect your personal information in order to provide and continually improve our products and services.'
                },
                {
                    id: 3,
                    desc: 'All partner firms and any third-party working with or for Skysecure, and who have access to personal information, will be expected to read and comply with this policy. No third party may access or process personal information held by the Skysecure without having first entered into a confidentiality agreement.'
                },
                {
                    id: 4,
                    desc: 'This shall include Terms of Use in addition to the above.'
                }
            ]
        },
        {
            id: 2,
            title: "How we collect information",
            data: [
                {
                    id: 1,
                    desc: 'From you directly and through this site: Skysecure may collect information through the website when you visit. The data we collect depends on the context of your interactions with our website.'
                },
                {
                    id: 2,
                    desc: 'Through business interaction: We may collect information through your or your employer’s business interaction with our employees or offices.'
                },
                {
                    id: 3,
                    desc: 'From other sources: We may receive information from other sources, such as public databases; joint marketing partners; social media platforms; or other third parties. Such as :',
                    sub_data: [
                        {
                            id: 1,
                            sub_desc: ' Updated delivery and address information from our carriers or other third parties, which we use to correct our records and deliver your next purchase or communication more easily.'
                        },
                        {
                            id: 2,
                            sub_desc: 'Account information, purchase or redemption information and page-view information from some merchants with which we operate co-branded businesses or for which we provide technical, fulfilment, advertising or other services.'
                        },
                        {
                            id: 3,
                            sub_desc: 'Information about your interactions with products and services offered by our subsidiaries'
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Information We collect",
            data: [
                {
                    id: 1,
                    desc: 'We collect information primarily to provide better services to all of our customers. We collect the information you provide to us on our Sites such as your name, email address, postal address, phone number, company name, payment information and demographics. We may also obtain information from other sources and combine that with information we collect on our Site.'
                },
                {
                    id: 2,
                    desc: 'When you visit our Site, some information is automatically collected. This may include information such as the Operating System (OS) running on your device, Internet Protocol (IP) address, access times, browser type, and language, and the website you visited before our Site. We also collect information about how you use Skysecure product(s).'
                },
                {
                    id: 3,
                    desc: 'We automatically collect purchase and content use history, which we sometimes aggregate with similar information from other customers to create features such as Best Seller.'
                },
                {
                    id: 4,
                    desc: 'The full Uniform Resource Locators (URL) clickstream to, through and from our website (including date and time); cookie number; products and/ or content you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs).'
                },
                {
                    id: 5,
                    desc: 'We automatically collect information using “cookies” and Web beacons. Cookies are small /data files stored on your hard drive by a website and web beacons are electronic images that may be used on our Site or in our emails. Among other things, cookies help us improve our Site, our marketing activities, and your experience. We use cookies to see which areas and features are popular and to count visits to our Site.'
                },
                {
                    id: 6,
                    desc: 'Most Web browsers are set to accept cookies by default. If you prefer, you can choose to set your browser to remove cookies and to reject cookies. If you set your browser to reject cookies, some features will be unavailable. For more information on how to reject cookies, see your browser’s instructions on changing your cookie settings.'
                },
                {
                    id: 7,
                    desc: 'By using this website, you are agreeing that Skysecure may advertise your feedback on our website and marketing materials.'
                },
                {
                    id: 8,
                    desc: 'We will retain your information as long as we require this to provide you with the goods or services ordered from us and for a period which required under the concerned laws.'
                },
                {
                    id: 9,
                    desc: 'Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide the data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example to provide you with our goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time. where you indicate you would like to receive marketing correspondence from us, subscribe to our mailing lists or newsletters, enter into any of our competitions or provide us with your details at networking events, we may use your personal data for our legitimate interests in order to provide you with details about our goods, services, business updates and events, which we think may be of interest.'
                }
            ]
        },
        {
            id: 4,
            title: "How we use information",
            data: [
                {
                    id: 1,
                    desc: 'We use the information we collect primarily to provide, maintain, protect and improve our current products and services. We use personal information collected through our Site as described in this Policy or on our Site. For example, we may use your information to:',
                    sub_data: [
                        {
                            id: 1,
                            sub_desc: 'Improve our services, Site and how we operate our business;'
                        },
                        {
                            id: 2,
                            sub_desc: 'Understand and enhance your experience using our Site, products and services;'
                        },
                        {
                            id: 3,
                            sub_desc: 'Personalize our products and make recommendations;'
                        },
                        {
                            id: 4,
                            sub_desc: 'Provide and deliver products and services you request;'
                        },
                        {
                            id: 5,
                            sub_desc: 'Process, manage, complete, and account for transactions;'
                        },
                        {
                            id: 6,
                            sub_desc: 'Provide customer support and respond to your requests, comments and inquiries;'
                        },
                        {
                            id: 7,
                            sub_desc: 'Invite you to participate in customer research;'
                        },
                        {
                            id: 8,
                            sub_desc: 'Create and manage online accounts you establish;'
                        },
                        {
                            id: 9,
                            sub_desc: 'Send you related information, including confirmations, invoices, technical notices, updates, security alerts and support and administrative messages;'
                        },
                        {
                            id: 10,
                            sub_desc: 'Communicate with you about promotions, upcoming events and news about products and services offered by Skysecure and our selected partners;'
                        },
                        {
                            id: 11,
                            sub_desc: 'We may process your personal without your knowledge or consent where required by applicable law or regulation.'
                        },
                        {
                            id: 12,
                            sub_desc: 'Comply with and enforce applicable legal requirements, industry standards, our policies, and our terms of use; and'
                        },
                        {
                            id: 13,
                            sub_desc: 'Protect, investigate and deter against fraudulent, unauthorized or illegal activity.'
                        },
                    ]
                },
                {
                    id: 2,
                    desc: 'We use your personal information to provide functionality, analyse performance, fix errors, and improve the usability and effectiveness of the Skysecure Services.'
                },
                {
                    id: 3,
                    desc: 'We may also ask for your consent to process your personal information for a specific purpose that we communicate to you. When you consent to our processing your personal information for a specified purpose, you may withdraw your consent at any time and we will stop the processing of your data for that purpose.'
                }
            ]
        },
        {
            id: 5,
            title: 'Data Transfer',
            data: [
                {
                    id: 1,
                    desc: 'Information about our customers is an important part of our business and we are not in the business of selling our customers’ personal information to others.'
                },
                {
                    id: 2,
                    desc: 'We share your personal data with your consent or to complete any transaction r provide any product or service you have requested or authorized. We also share data with our affiliates and subsidiaries; with vendors working on our behalf.'
                },
                {
                    id: 3,
                    desc: 'We employ other companies and individuals to perform functions on our behalf. Examples include fulfilling orders for products or services, delivering packages, sending postal mail and e-mail, removing repetitive information from customer lists, analyzing data, providing marketing assistance, providing search results and links (including paid listings and links), processing payments, transmitting content, scoring credit risk, and providing customer service.'
                },
                {
                    id: 4,
                    desc: 'These third-party service providers have access to personal information needed to perform their functions but may not use it for other purposes. Further, they must process the personal information in accordance with this Privacy Notice and as permitted by applicable data protection laws.'
                },
                {
                    id: 5,
                    desc: 'We release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Conditions of Use and other agreements; or protect the rights, property or safety of Skysecure, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.'
                }
            ]
        },
        {
            id: 6,
            title: 'Cookies & Tracking',
            data: [
                {
                    id: 1,
                    desc: 'To optimize our web presence, we use cookies. These are small text files stored on your computer’s main memory. These cookies are deleted after you close the browser. Other cookies remain on your computer (long-term cookies) and permit its recognition on your next visit. This allows us to improve your access to our site. This helps us to learn more about your interests, and provide you with essential features and services and for additional purposes, including;',
                    sub_data: [
                        {
                            id: 1,
                            sub_desc: 'Keeping track of items stored in your shopping basket.'
                        },
                        {
                            id: 2,
                            sub_desc: 'Conducting research and diagnostics to improve Skysecure’s content, products, and services.'
                        },
                        {
                            id: 3,
                            sub_desc: 'Preventing fraudulent activity.'
                        },
                        {
                            id: 4,
                            sub_desc: 'Improving security.'
                        }
                    ]
                },
                {
                    id: 2,
                    desc: 'Skysecure cookies allow you to take advantage of some of Skysecure’s essential features. For instance, if you block or otherwise reject our cookies, you will not be able to add items to your Shopping Basket, proceed to Checkout, or use any Skysecure products and services that require you to sign in.'
                },
                {
                    id: 3,
                    desc: 'Approved third parties also may set cookies when you interact with Skysecure services.'
                },
                {
                    id: 4,
                    desc: 'Third parties include search engines, providers of measurement and analytics services, social media networks, and advertising companies.'
                },
                {
                    id: 5,
                    desc: 'Third parties use cookies in the process of delivering content, including ads relevant to your interests, to measure the effectiveness of their ads, and to perform services on behalf of Skysecure.'
                },
                {
                    id: 6,
                    desc: 'You can prevent the storage of cookies by choosing a “disable cookies” option in your browser settings. But this can limit the functionality of our Internet offers as a result.'
                },
                {
                    id: 7,
                    desc: 'For disabling cookies:',
                    sub_data: [
                        {
                            id: 1,
                            sub_desc: 'For Microsoft Internet Explorer:',
                            sub_sub_data: [
                                {
                                    id: 1,
                                    super_sub_desc: 'Choose the menu “tools” then “Internet Options”'
                                },
                                {
                                    id: 2,
                                    super_sub_desc: 'Click on the “privacy” tab'
                                },
                                {
                                    id: 3,
                                    super_sub_desc: 'Select the setting the appropriate setting'
                                }
                            ]
                        },
                        {
                            id: 2,
                            sub_desc: 'For Google Chrome:',
                            sub_sub_data: [
                                {
                                    id: 1,
                                    super_sub_desc: 'Choose Settings > Advanced'
                                },
                                {
                                    id: 2,
                                    super_sub_desc: 'Under “Privacy and security,” click “Content settings”.'
                                },
                                {
                                    id: 3,
                                    super_sub_desc: 'Click “Cookies”'
                                }
                            ]
                        },
                        {
                            id: 3,
                            sub_desc: 'For Safari:',
                            sub_sub_data: [
                                {
                                    id: 1,
                                    super_sub_desc: 'Choose Preferences > Privacy'
                                },
                                {
                                    id: 2,
                                    super_sub_desc: 'Click on “Remove all Website Data”'
                                }
                            ]
                        },
                        {
                            id: 4,
                            sub_desc: 'For Mozilla Firefox:',
                            sub_sub_data: [
                                {
                                    id: 1,
                                    super_sub_desc: 'Choose the menu “tools” then “Options”'
                                },
                                {
                                    id: 2,
                                    super_sub_desc: 'Click on the icon “privacy”'
                                },
                                {
                                    id: 3,
                                    super_sub_desc: 'Find the menu “cookie” and select the relevant options'
                                }
                            ]
                        },
                        {
                            id: 5,
                            sub_desc: 'For Opera 6.0 and further:',
                            sub_sub_data: [
                                {
                                    id: 1,
                                    super_sub_desc: 'Choose the menu “Files” > “Preferences” Privacy'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "Legal basis for processing personal data",
            data: [
                {
                    id: 1,
                    desc: 'For the performance of the contract we enter into with you; where necessary for compliance with a legal or regulatory obligation we are subject to; where necessary to protect your vital interests; and for our legitimate interests (as described within this policy) and your interests and fundamental rights do not override those interests.'
                }
            ]
        },
        {
            id: 8,
            title: "Data Security",
            data: [
                {
                    id: 1,
                    desc: 'Skysecure takes due care to protect customer data. Technical measures are in place to prevent unauthorized or unlawful access to data and against accidental loss or destruction of, or damage to, data. The employees who are dealing with the data have been trained to protect the data from any illegal or unauthorized usage.'
                },
                {
                    id: 2,
                    desc: 'We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input.'
                },
                {
                    id: 3,
                    desc: 'We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling Debit and Credit card data.'
                },
                {
                    id: 4,
                    desc: 'We maintain physical, electronic and procedural safeguards in connection with the collection, storage and disclosure of personal customer information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you.'
                },
                {
                    id: 5,
                    desc: 'Skysecure takes reasonable steps to help protect your personal information in an effort to prevent the loss, misuse, and unauthorized access, disclosure, alteration and destruction. It is your responsibility to protect your user names and passwords to help prevent anyone from accessing or abusing your accounts and services. You should not use or reuse the same passwords you use with other accounts as your password for our services.'
                },
                {
                    id: 6,
                    desc: 'It is important for you to protect against unauthorized access to your password and to your computers, devices, and applications. Be sure to sign off when you finish using a shared computer.'
                },
                {
                    id: 7,
                    desc: "Information you provide to us is shared on our secure servers. We have implemented appropriate physical, technical and organizational measures designed to secure your information against accidental loss and unauthorized access, use, alteration or disclosure. In addition, we limit access to personal data to those employees, agents, contractors and other third parties that have a legitimate business need for such access."
                },
                {
                    id: 8,
                    desc: 'Our Site may, from time to time, contain links to and from the websites of third parties. Please note that if you follow a link to any of these websites, such websites will apply different terms to the collection and privacy of your personal data and we do not accept any responsibility or liability for these policies. When you leave our Site, we encourage you to read the privacy notice/policy of every website you visit.'
                }
            ]
        },
        {
            id: 9,
            title: "Sharing of personal data",
            data: [
                {
                    id: 1,
                    desc: 'We do not share your personal data with third parties without your prior consent other than:',
                    sub_data: [
                        {
                            id: 1,
                            sub_desc: 'With third parties who work on our behalf provided such third parties adhere to the data protection principles set out in the IT act,2000 (21 of 2000) and other applicable legislation, or enter into a written agreement with Skysecure requiring that the third party provide at least the same level of privacy protection as is required by such Principles;'
                        },
                        {
                            id: 2,
                            sub_desc: ' To comply with laws or to respond to lawful requests and legal process;'
                        },
                        {
                            id: 3,
                            sub_desc: 'To protect the rights and property of Skysecure, our agents, customers and others including to enforce our agreements, policies and terms of use;'
                        },
                        {
                            id: 4,
                            sub_desc: 'In an emergency, including to protect the personal safety of any person; and'
                        },
                        {
                            id: 5,
                            sub_desc: 'For the purposes of a business deal (or negotiation of a business deal) involving sale or transfer of all or a part of our business or assets (business deals may include, for example, any merger, financing, acquisition, divestiture or bankruptcy transaction or proceeding).'
                        }
                    ]
                }
            ]
        },
        {
            id: 10,
            title: "Children",
            data: [
                {
                    id: 1,
                    desc: 'If you are under 18, or the age of majority in the jurisdiction in which you reside, you may only use the Skysecure website and Skysecure Services with the consent of your parent or legal guardian. In any case, Skysecure will not be liable for any cause of action arose due to non-compliance with this section.'
                }
            ]
        },
        {
            id: 11,
            title: "Your information choices and changes",
            data: [
                {
                    id: 1,
                    desc: 'You can also make choices about the collection and processing of your data by Skysecure. You can access your personal data and opt-out of certain services provided by the Skysecure. In some cases, your ability to control and access to your date will be subject to applicable laws.'
                },
                {
                    id: 2,
                    desc: 'You may opt-out of receiving promotional emails from Skysecure by following the instructions in those emails. If you opt-out, we may still send you non-promotional emails, such as emails about our ongoing business relationship. You may also send requests about your contact preferences, changes and deletions to your information including requests to opt-out of sharing your personal information with third parties by emailing support@skysecure.com'
                }
            ]
        },
        {
            id: 12,
            title: "Changes to this policy",
            data: [
                {
                    id: 1,
                    desc: 'Skysecure may change this Policy from time to time. If we make any changes to this Policy, we will change the “Last Updated” date above. You agree that your continued use of our Services after such changes have been published to our Services will constitute your acceptance of such revised Policy.'
                }
            ]
        },
        {
            id: 13,
            title: "Newsletter",
            data: [
                {
                    id: 1,
                    desc: 'Following subscription to the newsletter, your e-mail address is used for our own advertising purposes until you cancel the newsletter again. Cancellation is possible at any time. The following consent has been expressly granted by you separately, or possibly in the course of an ordering process: (I am accepting to receive newsletter from this website) you may revoke your consent at any time with future effect. If you no longer want to receive the newsletter, then unsubscribe by clicking on unsubscribe option given in E-mail footer.'
                },
                {
                    id: 2,
                    desc: 'If you no longer want to receive the newsletter, then unsubscribe by clicking on unsubscribe option given in E-mail footer'
                }
            ],
        }
    ]
    return (
        <>
            <div className="about-area pt-30 pb-30 privacy">
                <div className="container ">
                    <div className="case-details-text pl-40 pr-40">
                        <ul>
                            {privacyPolicyData?.map((e, i) => (
                                <React.Fragment key={i}>
                                    <li className="mb-0 text-black pt-10 pb-10" style={{ fontWeight: "900", fontSize: "28px", listStyleType: "decimal" }}>{e.title}</li>
                                    <ul>
                                        {e.data.map((item, j) => (
                                            <li key={j} className="mb-1" style={{ listStyleType: "decimal" }}>
                                                {item.desc}
                                                {item.sub_data && (
                                                    <ul className="mb-2" style={{ marginLeft: "20px" }}>
                                                        {item.sub_data?.map((sub, k) => (
                                                            <li key={k} className="mb-8" style={{ listStyleType: "decimal" }}>
                                                                {sub.sub_desc}
                                                                {('sub_sub_data' in sub) && sub.sub_sub_data && (
                                                                    <ul className="mb-2" style={{ marginLeft: "20px" }}>
                                                                        {sub.sub_sub_data.map((super_sub, l) => (
                                                                            <li key={l} className="mb-8" style={{ listStyleType: "decimal" }}>
                                                                                {super_sub.super_sub_desc}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <p>If you have any concern about privacy or grievances at Skysecure, please contact us with a thorough description and we will try to resolve the issue for you: support@skysecure.com</p>
                    <h4>Our contact details</h4>
                    <h5>Skysecure Technologies Private Limited</h5>
                    <span style={{ fontFamily: 'cerebri_sanssemibold' }}>AGR Plaza, 6/1,<br />
                        3rd floor, Bellandur,<br />
                        Bengaluru, Karnataka-560103.<br />
                        Phone Number: 73533 55526<br />
                        E-mail: sales@skysecuretech.com</span>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicyContent;