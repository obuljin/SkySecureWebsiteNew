
export interface serviceManageDataType{
    id:number;
    title:string;
    class:string;
    icon: string;
    details:string;
}

export const serviceManageData: serviceManageDataType[] = [
    {
        id: 1,
        title: "Commercial Marketplace",
        class: "single-services text-center",
        icon: 'fal fa-cart-arrow-down',
        details: "facilitiates the purchase of IT solutions from top OEMs, streamlining tech acquisition for businesses worldwide, with innovation at its core."
    },
    {
        id: 2,
        title: "Professional Services",
        class: "single-services active text-center",
        icon: 'fal fa-users',
        details: "offers comprehensive consulting, seamless implementation, and meticulous managed services to optimize and secure your business operations."
    },
    {
        id: 3,
        title: "Value Added Services",
        class: "single-services text-center",
        icon: 'fal fa-diamond',
        details: "transcends traditional services by offering automation and cyber insurance, adding unparalleled value and protection in today’s digital risk landscape."
    },
];
