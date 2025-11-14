import type{ Metadata } from "next";



export const metadata: Metadata = {
 title: 'SEO About',
 description: 'SEO description',
 keywords: ['about Page','información','...']
};

const AboutPage = () => {
    return (
        <span className="text text-5xl text-center">About Page</span>
    )
}

export default AboutPage