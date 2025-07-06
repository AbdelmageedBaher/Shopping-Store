// templates/component/Blog.js
import React from 'react';
import './Blog.css';
import bottleImage from '../../assets/images/bottles.png';
import chocoImage from '../../assets/images/chocolate.png';
import iceCream from '../../assets/images/ice-cream.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import reddit from '../../assets/images/reddit.png';
import pinterest from '../../assets/images/pinterest.png';
import happyHour from '../../assets/images/happyHour.png';
import { Helmet } from 'react-helmet';





export default function Blog() {
  const blogs = [
    {
      id: 1,
      path: bottleImage,
      title: "But I must explain to you how all this mistaken idea"
    },
    {
      id: 2,
      path: chocoImage,
      title: "The Problem With Typefaces on the Web"
    }
  ];
  const posts = [
    {
      id: 1,
      path: bottleImage,
      content: "But I must explain toyou how all this mistaken idea"
    },
    {
      id: 2,
      path: chocoImage,
      content: "The Problem With Typefaces on the Web"
    },
    {
      id: 3,
      path: iceCream,
      content: "English Breakfast Tea With Tasty Donut Desserts"
    },

  ];
  const socials = [
    {
      name: "facebook",
      color: "#3B5998",
      path: facebook,
    },
    {
      name: "instagram",
      color: "#CC2366",
      path: instagram,
    },
    {
      name: "twitter",
      color: "#1DA1F2",
      path: twitter,
    },
    {
      name: "reddit",
      color: "#FF4500",
      path: reddit,
    },
    {
      name: "pinterest",
      color: "#E60023",
      path: pinterest,
    }
  ];

  const tags = ["ecommerce", "food", "grocery", "klbtheme", "organic", "shop", "shopify", "store"];

  return (
    <section className='Blog box-container py-5'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      <div className="row">
        <div className="col-md-9">
          {blogs ? (blogs.map((blog) => (
            <>
              <div className="blog-image h-auto w-auto">
                <img className="h-100 w-100 rounded-3" src={blog.path} alt="Blog Picture" />
              </div>
              <div>
                <p className="text-muted text-uppercase py-4">grocery</p>
                <h1 className="fw-bold h-100">{blog.title}</h1>
                <p className="date text-muted">
                  Jan 13 2025 <span className="text-dark"> Sinan ISIK</span>
                </p>
                <p>Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
                  vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
                </p>
              </div>
            </>
          ))) : (<p>No blogs Found!</p>)}

        </div>
        <div className="col-md-3">
          <div className="recenetPosts">
            <h6 className="text-uppercase mb-4">Recent Posts</h6>
            <div className="postsContainer border h-auto" style={{ border: "1px solid #EDEEF5", borderRadius: "2px" }}>
              {posts ? (posts.map((post) => (
                <div className="post-1 p-4">
                  <div className="row">
                    <div className="post-img img-fluid position-relative col-md-4" style={{ height: '75px', width: '90px' }}>
                      <img className="rounded-circle w-100 h-100" src={post.path} alt="Bottle" />
                      <div className="notification-mark position-absolute top-0 end-0 rounded-circle p-1" style={{background:"white"}}>
                        <div style={{ width: '25px', height: '25px', background: "#35AFA0" }} className="rounded-circle text-light text-center fs-6">
                          {post.id}
                        </div>
                      </div>

                    </div>
                    <div className="post-content col-md-7">
                      <p className='m-auto'>{post.content}</p>
                    </div>
                  </div>
                </div>
              ))) : (<p>No posts Found!</p>)}

            </div>
          </div>
          <div className="socialMedia my-5">
            <h6 className="text-uppercase mb-4">social media</h6>
            <div className="socialsContainer border h-auto" style={{ border: "1px solid #e0e0e0", borderRadius: "2px" }}>
              {socials ? (socials.map((social) => (
                <div className="socialContianer w-auto h-auto d-flex text-light p-3 mb-1" style={{ background: social.color, borderRadius: '4px' }}>
                  <div className="icon mx-1">
                    <img src={social.path} />
                  </div>
                  <div className="social-name ms-4 text-uppercase fs-6">
                    {social.name}
                  </div>
                </div>
              ))) : (<p>No social media Found!</p>)}
            </div>
          </div>

          <div className="widgetBanner">
            <h6 className="text-uppercase mb-4">widget banner</h6>
            <div className="widgetPic" style={{ height: '400px', width: '300px' }}>
              <img className="h-100 w-100" src={happyHour} />
            </div>
          </div>
          <div className="tags">
            <h6 className="text-uppercase mt-4 mb-3">tags</h6>
            <div className="tagsContainer d-flex flex-wrap">
              {tags ? (tags.map((tag) => (
                <div className="tagContainer w-auto h-auto m-1 p-2" style={{ border: "1px solid #EDEEF5", borderRadius: '2px' }} >
                  {tag}
                </div>
              ))) : (<p>No tags Found!</p>)}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
};

