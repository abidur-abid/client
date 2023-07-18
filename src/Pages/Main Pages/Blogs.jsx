import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import html from '../../Images/html-5.png';
import css from '../../Images/css-3.png';
import js from '../../Images/js.png';
import react from '../../Images/react.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  console.log(blogs);

  return (
    <div >
      <Helmet>
        <title>Abid | Blogs</title>
      </Helmet>
      <SectionTitle title={'My Blogs About Web Development'}></SectionTitle>
      <section >
        <div className="custom-container">
          <div className="custom-row">
            <table className="table w-full mx-auto rounded border-2">
              {/* head */}
              <thead className='custom-background p-4 m-4'>
                <tr>
                  <td className='lg:text-lg font-bold  p-2 m-2'>#</td>
                  <th className='lg:text-lg font-bold  p-2 m-2'>Article Picture</th>
                  <th className='lg:text-lg font-bold  p-2 m-2'>Article Name</th>
                  <th className='lg:text-lg font-bold  p-2 m-2'>Action</th>
                </tr>
              </thead>
              <tbody className="p-4 m-4">
                {blogs && blogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td className='lg:text-lg font-bold  p-2 m-2'>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={blog.image} alt="image" className='custom-logo' />
                      </div>
                    </td>
                    <td className='lg:text-lg font-bold p-2 m-2'>
                      {blog.blogName}
                    </td>
                    <td className='lg:text-lg font-bold p-2 m-2'>
                      <Link to={`/blogs/${blog._id}`}>
                        <a href="https://www.jagonews24.com/en/opinion/news/21175">Details</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
