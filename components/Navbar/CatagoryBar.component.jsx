import CatagoryContent from "./CatagoryContent.component";
import Link from "next/link";
const CatagoryBar = (props) => {
  return (
    <>
      <div className='bg-danger position-relative w-100 '>
        <div className='container-space d-flex justify-content-center'>
          <ul>
            <li>
              <Link href='/form'>
                <a className='active'>Form</a>
              </Link>
            </li>

            <li>
              <a href='#news'>News</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className='container-space'>
        <CatagoryContent />
      </div> */}
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        li {
          float: left;
        }

        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 5px 15px;
          text-decoration: none;
        }

        li a:hover {
          background-color: #111;
        }
      `}</style>
    </>
  );
};

export default CatagoryBar;
