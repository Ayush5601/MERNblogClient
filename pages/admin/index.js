import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid"
                style={{
                    backgroundImage:
                    'url(' +
                    'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg' +
                    ')',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width:'100%',
                    height:'500px',
                }}
                >
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;

//in the create blog we used href without Link to forces page reload beacuse at times the rich text editor was not loading