import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        <Layout>
            <div className="container-fluid"
            style={{
                backgroundImage:
                'url(' +
                'https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg' +
                ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width:'100%',
                height:'100%',
            }}>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Contact form</h2>
                        <hr />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;