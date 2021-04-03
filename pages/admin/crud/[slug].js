import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';

const Blog = () => {                        //this will use the BlogUpdate component (we need to make it so that when we click the update botton we should be redirected to our blog writing page)
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogUpdate />          
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;