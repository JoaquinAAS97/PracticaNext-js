import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'SEO description',
 keywords: ['Contacto', 'numeros de contactos','emails de contactos']
};


const ContactPage = () => {
    return(
        <>
            <span className="text-5xl text text-center">Contact Page</span>
        </>
    )
}

export default ContactPage