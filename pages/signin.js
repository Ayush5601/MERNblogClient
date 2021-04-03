import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <Layout>
            <div className="container-fluid"
             style={{
                backgroundImage:
                'url(' +
                'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg' +
                ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width:'100%',
                height:'500px',
            }}>
                <h2 className="text-center pt-4 pb-4">SignIn</h2>

                <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SigninComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withRouter(Signin);