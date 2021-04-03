import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (
        <Layout>
            <div className="container-fluid"
             style={{
                backgroundImage:
                'url(' +
                'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg' +
                ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width:'100%',
                height:'500px',
            }}>
                <h2 className="text-center pt-4 pb-4">SignUp</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">      
                        <SignupComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;