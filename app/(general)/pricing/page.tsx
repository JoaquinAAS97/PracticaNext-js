import { Metadata } from "next";


export const metadata:Metadata= {
 title: 'SEO Pricing',
 description: 'SEO Pricing description',
 keywords: ['pricing page']
};

const PricingPage = () => {
    return(
        <>
            <span className="text-5xl text-center">Pricing Page</span>
        </>
    )
}

export default PricingPage