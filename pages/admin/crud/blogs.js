import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container"
                style={{
                    backgroundImage:
                    'url(' +
                    'https://images.pexels.com/photos/1320724/pexels-photo-1320724.jpeg' +
                    ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width:'100%',
                    height:'100%',
                    // backgroundColor: '#e6ffe6',
                }}>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage blogs</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogRead />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;