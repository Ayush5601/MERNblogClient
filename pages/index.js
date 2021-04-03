//this is the landing page (react deals with dom while next deals with pages)
//this is also a pre renderred page (static page, does not make any request to the server)

import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                Visit Any Category You Like.........
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead" style = {{fontStyle : 'italic'}}>
                                Subtly Express Yourselves
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        'url(' +
                                        'https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg' +
                                        ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">NotePad Stories</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/notepad-stories">
                                        <a>
                                            <h3 className="h1">NotePad Stories</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Your way of writing</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Alternate Endings</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/alternate-endings">
                                        <a>
                                            <h3 className="h1">Alternate Endings</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Your take at some of the variations in famous plots. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Tech Skool</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/tech-skool">
                                        <a>
                                            <h3 className="h1">Tech Skool</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Great facts about booming techs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;