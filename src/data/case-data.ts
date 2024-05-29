import { caseDataType } from "@/interFace/interFace"
import ImgOne from "../../public/assets/img/project/ca-1.jpg"
import ImgTwo from "../../public/assets/img/project/ca-2.jpg"
import ImgThree from "../../public/assets/img/project/ca-3.jpg"
import ImgFour from "../../public/assets/img/project/ca-4.jpg"
import imgFive from "../../public/assets/img/project/ga-01.jpg";
import imgSix from "../../public/assets/img/project/ga-02.jpg";
import imgSeven from "../../public/assets/img/project/ga-03.jpg";
import imgEight from "../../public/assets/img/project/ga-04.jpg";
import imgNine from "../../public/assets/img/project/ga-05.jpg";
import imgTen from "../../public/assets/img/project/ga-06.jpg";
import thumbOne from "../../public/assets/img/project/01.jpg";
import thumbTwo from "../../public/assets/img/project/02.jpg";

export const casesData = [
  {
    id: 1,
    title: "Threat Protection with Microsoft Azure Sentinel",
    titleTwo: "Software Development",
    subText: "IT Management",
    img: thumbOne,
    data: [
      {
        id: 1,
        data: [
          {
            id: 1,
            desc: "Introduction With the rise of cybersecurity threats, organizations need a reliable and efficient way to detect and respond to potential security breaches. Microsoft Azure Sentinel is a cloud-native security information and event management (SIEM) system that provides advanced threat protection by collecting and analyzing data from various sources. This white paper will provide an overview.",
          }
        ]
      }
    ],
  },
  {
    id: 2,
    title: "A Guide to IT Security Transformation in Manufacturing",
    titleTwo: "A Guide to IT Security Transformation in Manufacturing",
    subText: "Database System",
    img: thumbTwo,
    data: [
      {
        id: 1,
        title: 'Skyscure Technologies',
        data: [
          {
            id: 1,
            desc: "The manufacturing industry in India has been experiencing significant growth and transformation in recent years. India has emerged as a global manufacturing hub, attracting both domestic and foreign investments. Several factors contribute to the growth of the manufacturing sector in India, including favorable government policies, advancements in technology, a skilledlabour force, and a large consumer market.",
          },
          {
            id: 2,
            desc:'The ‘Make in India’ initiative launched by the Indian government has played a pivotal role in promoting manufacturing and encouraging investments in various sectors such as automobiles, electronics, pharmaceuticals, textiles, and more. This initiative aims to boost domestic manufacturing, create employment opportunities, and position India as a preferred destination for global manufacturing.',
          },
          {
            id: 3,
            desc:'In addition to the government’s initiatives, the adoption of advanced technologies like automation, robotics, artificial intelligence, and the Internet of Things (IoT) has propelled the growth of the manufacturing industry in India. These technologies enhance productivity, improve operational efficiency, enable predictive maintenance, and streamline the supply chain management.',
          },
          {
            id: 4,
            desc:'However, with the increasing digitization and connectivity of manufacturing processes, there arises a critical need for robust cybersecurity measures. The manufacturing industry is becoming more vulnerable to cyber threats, including data breaches, intellectual property theft, ransomware attacks, and disruption of critical infrastructure. As manufacturers rely on interconnected systems, cloud services, and industrial control systems (ICS), the risk of cyberattacks increases.'
          },
          {
            id: 5,
            desc:'Implementing cybersecurity measures in the manufacturing sector is crucial to protect sensitive data, intellectual property, and operational continuity. It helps safeguard against cyber threats, prevent unauthorized access, and mitigate the potential impact of cyber incidents. Cybersecurity measures in the manufacturing industry should include:'
          },
          {
            id: 6,
            sub_heading:'Network Security:',
            desc:'Implementing firewalls, intrusion detection and prevention systems, and secure network segmentation to protect critical assets and data.'
          },
          {
            id: 7,
            sub_heading:'Endpoint Security:',
            desc:'Employing endpoint protection solutions such as endpoint defence and response (EDR), antivirus software, and encryption to secure endpoints, including industrial machines, workstations, and IoT devices.'
          },
          {
            id: 8,
            sub_heading:'Information Protection:',
            desc:'Implementing robust data discovery, data classification, data encryption, access controls, and backup solutions to safeguard sensitive data and ensure its availability in case of a cyber incident.',
          },
          {
            id: 9,
            sub_heading:'Employee Awareness Training:',
            desc:'Conducting cybersecurity awareness programs and training sessions to educate employees about cyber threats, safe practices, and the importance of maintaining security protocols.',
          },
          {
            id: 10,
            sub_heading:'Threat Detection & Response:',
            desc:'Implementing a Threat detection solution that provides a single dashboard view to visualize and mitigate exploits on targeted vectors such as email, user identity, network, endpoint, and more.',
          },
          {
            id: 11,
            sub_heading:'Supply Chain Security:',
            desc:'Assessing and monitoring the cybersecurity posture of suppliers and partners to ensure the integrity and security of the supply chain.',
          },
          {
            id: 12,
            sub_heading:'Regulatory Compliance:',
            desc:'Adhering to industry-specific cybersecurity standards and regulations to maintain compliance and ensure the implementation of best practices.',
          },
        ]
      },
      {
        id: 2,
        title: 'Key Considerations for Cybersecurity Investment',
        data: [
          {
            id: 1,
            desc: "In the rapidly evolving landscape of manufacturing, there are several critical investments that manufacturers should focus on from a cybersecurity standpoint. These systems bring advanced technologies and connectivity, but they also introduce new cybersecurity risks. Here are some key considerations:",
          },
          {
            id: 2,
            sub_heading:'Cloud Security:',
            desc:'Invest in cloud-based security monitoring tools, including security information and event management (SIEM) systems, to continuously monitor network traffic, detect anomalies, and identify potential security incidents. Consider leveraging threat intelligence services to stay informed about emerging threats and vulnerabilities relevant to the manufacturing industry.'
          },
          {
            id: 3,
            sub_heading:'Artificial Intelligence (AI) and Machine Learning (ML):',
            desc:'AI and ML technologies are being utilized for various applications in manufacturing, such as predictive maintenance and quality control. These technologies introduce new attack vectors, such as adversarial attacks or data poisoning. Ensure the security of AI/ML algorithms, validate data inputs, and monitor for malicious activities targeting AI/ML systems.'
          },
          {
            id: 3,
            sub_heading:'Augmented Reality (AR) and Virtual Reality (VR):',
            desc:'AR and VR technologies are being leveraged for training, maintenance, and remote collaboration in manufacturing. Implement strong access controls for AR/VR systems, secure network connections, and protect user privacy and data confidentiality.',
          },
          {
            id: 4,
            sub_heading:'Edge Computing:',
            desc:'Edge computing brings data processing and analysis closer to the source, enabling real-time decision-making and reducing latency. From a cybersecurity perspective, securing edge computing devices and gateways is critical. Implement strong authentication, secure configurations, and regular patching to mitigate vulnerabilities.',
          },
          {
            id: 5,
            sub_heading:'Robotics and Automation:',
            desc:'Robotics and automation systems play a significant role in modern manufacturing. These systems often integrate with other IT and operational technology (OT) systems, creating potential security gaps. Implement security controls for robot controllers, securely configure automation systems, and segment OT networks from IT networks to limit the impact of cyberattacks.',
          },
          {
            id: 6,
            sub_heading:'Big Data Analytics:',
            desc:'Manufacturers are increasingly utilizing big data analytics for actionable insights and optimization. Protecting the confidentiality and integrity of large datasets becomes critical. Employ encryption for data at rest and in transit, implement strong access controls, and conduct regular vulnerability assessments of big data platforms.',
          }
        ]
      }
    ],
  },
]