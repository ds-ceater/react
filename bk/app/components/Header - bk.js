import Link from 'next/link'
import Image from 'next/image'
import '../styles/index.css'
import '../styles/style.scss'


export const Header = () => {
    return (
      <>
        <header>
          <div className="header">
            <div className="header_wrap">
              <h1>
                <Image
                  src="/images/logo_ds.svg"
                  width={54}
                  height={59}
                  alt="DaichiSasaki_logo"
                />
              </h1>
              <div className='opneBtn' id='onBtn'>
                <span></span>
                <span></span>
                <span></span>
              </div>

              
              <nav id='g-nav'>
                <ul className="nav_list" id='menu' >
                  <li className="nav_item">
                    <Link href="#about" className="nav_link">
                        About                   
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#skills" className="nav_link">
                        Skills
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link href="#works" className="nav_link">
                        Works
                    </Link>
                  </li>
                </ul>
              </nav>
         
            </div>
          </div>
        </header>
      </>
    );
  }