import React, { useState } from 'react';
import './App.css';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <div className='container' style={{ padding: '10px' }}>
      <div className='header'>
        <div>
          <img src='https://th.bing.com/th/id/OIP.HSGUJ_6yiaHHIEIzJIuYjQHaEK?rs=1&pid=ImgDetMain' style={{ cursor: 'pointer', marginLeft: '20px' }} width='70px' alt='' />
        </div>
        <div className='head'>
          <h4 style={{ marginLeft: '20px', cursor: 'pointer', fontFamily: 'Arial', fontSize: '14px' }}>MEN</h4>
          <h4 style={{ marginLeft: '20px', cursor: 'pointer', fontFamily: 'Arial', fontSize: '14px' }}>WOMEN</h4>
          <h4 style={{ marginLeft: '20px', cursor: 'pointer', fontFamily: 'Arial', fontSize: '14px' }}>KIDS</h4>
          <h4 style={{ marginLeft: '20px', cursor: 'pointer', fontFamily: 'Arial', fontSize: '14px' }}>HOME & LIVING</h4>
          <h4 style={{ marginLeft: '20px', cursor: 'pointer', fontFamily: 'Arial', fontSize: '14px' }}>BEAUTY</h4>
          <div style={{ position: 'relative' }}>
            <h4 style={{ marginLeft: '70px', cursor: 'pointer', position: 'absolute', top: '1px', fontSize: '10px', color: ' rgb(231, 84, 128)' }}>
              NEW
            </h4>
            <h4 style={{ marginLeft: '20px', cursor: 'pointer', fontFamily: 'Arial', fontSize: '14px' }}>STUDIO</h4>
          </div>
        </div>

        <div style={{ position: 'absolute', marginTop: '-5px', display: 'flex', alignItems: 'center', marginLeft: '530px' }}>
          <input
            type="text"
            placeholder="Search for products, brands, and more"
            style={{
              padding: '8px',
              paddingLeft: '30px',
              width: '280px',
              height: '25px',
              marginLeft: '200px',
              border: 'none',
              background: '#f2f2f2',
              color: 'gray',
              outline: 'none', 
              borderRadius: '4px',
            }}
          />
          <img
            src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
            alt=''
            style={{
              position: 'absolute',
              left: '190px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '10px',
              height: '15px',
              marginLeft: '20px',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '90px' }}>
              <img src='https://icon-library.com/images/user-profile-icon/user-profile-icon-1.jpg' width='15px' alt='' />
              <h5 style={{ margin: '0', fontFamily: 'Arial', marginTop: '7px' }}>Profile</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px' , cursor: 'pointer'}}>
              <img src='https://cdn4.iconfinder.com/data/icons/e-commerce-ui-outline/64/ecommerce_-_love_favorite-512.png' width='15px' alt='' />
              <h5 style={{ margin: '0', fontFamily: 'Arial', marginTop: '7px', marginLeft: '5px' }}>Wishlist</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' , cursor: 'pointer'}}>
              <img src='https://th.bing.com/th/id/R.221f444e27f88309ea3c7bd60935276c?rik=BSlcpmNFk3TSgA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjTx%2f6zo%2fjTx6zoqpc.png&ehk=xwgI27%2fMVn3tPj0J6zMu4VNqPR5b022rVcmfmUNgv2U%3d&risl=&pid=ImgRaw&r=0' width='15px' alt='' />
              <h5 style={{ margin: '0', fontFamily: 'Arial', marginTop: '7px' }}>Bag</h5>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial', fontSize: '14px' }}>
        <p style={{ marginRight: '8px', cursor: 'pointer' }}>Home / </p>
        <p style={{ marginRight: '6px', cursor: 'pointer' }}>Clothing / </p>
        <h4>T-Shirts For Men & Women</h4>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' , fontSize: '15px'}}>
        <div>
          <h3 style={{ margin: '0', marginRight: '10px', fontFamily: 'Arial' }}>T-Shirts For Men & Women</h3>
        </div>
        <div>
          <p style={{ margin: '0', color: '#888' }}>-233930 items</p>
        </div>
      </div>

      <div className='filter'>
        <h4 style={{ display: 'flex', fontSize: '15px' }}>FILTERS</h4>

        <div className="dropdown" style={{ marginLeft: '140px' }}>
          <span onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontFamily: 'Arial', fontSize: '12px' }}>
            Bundles
          </span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`} id="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Bundles</label>

            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" style={{ width: '120px' }}>Single Styles</label>
          </div>
        </div>

        <div className="dropdown" style={{ marginRight: '50px', cursor: 'pointer' }}>
          <span onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', width: '200px', fontFamily: 'Arial', fontSize: '12px' }}>
            Country of Origin
          </span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`} id="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" style={{ width: '110px' }}>All Countries</label>

            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">India</label>
          </div>
        </div>

        <div className="dropdown" style={{ marginRight: '700px', cursor: 'pointer' }}>
          <span onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial', fontSize: '12px' }}>
            Size
          </span>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`} id="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">S</label>

            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">L</label>

            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">M</label>

            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">XL</label>
          </div>
        </div>
      </div>
      <hr style={{ color: '#888', marginTop: '10px' }}></hr>

      <div className='leftsidebar'>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', fontSize: '12px' }}>
          <label class="radio-option" style={{ margin: '5px 0', fontFamily: 'Arial' }}>
            <input type="radio" name="gender" value="men" /> Men
          </label>

          <label class="radio-option" style={{ margin: '5px 0', fontFamily: 'Arial' }}>
            <input type="radio" name="gender" value="women" /> Women
          </label>

          <label class="radio-option" style={{ margin: '5px 0', fontFamily: 'Arial' }}>
            <input type="radio" name="gender" value="boys" /> Boys
          </label>

          <label class="radio-option" style={{ margin: '5px 0', fontFamily: 'Arial' }}>
            <input type="radio" name="gender" value="girls" /> Girls
          </label>
          <div class="vertical-line"></div>
          <hr style={{ width: '200px', marginLeft: '1px', marginTop: '1px' , color: '#888'}}></hr>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', fontFamily: 'Arial', fontSize: '12px' }}>
          <h3 style={{ marginLeft: '5px' }}>CATEGORIES</h3>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center', fontFamily: 'Arial' }}>
            <input type="checkbox" name="category" value="tshirts" /> T-Shirts
            <span style={{ marginLeft: '10px', color: '#888' }}>(230244)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center', fontFamily: 'Arial' }}>
            <input type="checkbox" name="category" value="lounge-tshirts" /> Lounge T-Shirts
            <span style={{ marginLeft: '10px', color: '#888' }}>(3445)</span>
          </label>
          <div class="vertical-line"></div>
          <hr style={{ width: '200px', marginLeft: '1px', marginTop: '1px' , color: '#888'}}></hr>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', fontFamily: 'Arial', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ marginLeft: '5px' }}>BRANDS</h3>
            <img
              src='https://www.freeiconspng.com/uploads/search-icon-png-21.png'
              alt=''
              style={{
                cursor: 'pointer',
                width: '10px',
                height: '10px',
                marginRight: '10px',
              }}
            />
          </div>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center', fontFamily: 'Arial' }}>
            <input type="checkbox" name="category" value="baesd" /> BAESD
            <span style={{ marginLeft: '10px', color: '#888' }}>(7208)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center', fontFamily: 'Arial' }}>
            <input type="checkbox" name="category" value="road-star" /> Roadstar
            <span style={{ marginLeft: '10px', color: '#888' }}>(5820)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center', fontFamily: 'Arial' }}>
            <input type="checkbox" name="category" value="fab-flee" /> Fabflee
            <span style={{ marginLeft: '10px', color: '#888' }}>(4713)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center', fontFamily: 'Arial' }}>
            <input type="checkbox" name="category" value="max" /> max
            <span style={{ marginLeft: '10px', color: '#888' }}>(3513)</span>
          </label>
          <div class="brands"></div>
          <hr style={{ width: '200px', marginLeft: '1px', marginTop: '1px', color: '#888' }}></hr>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', fontFamily: 'Arial', fontSize: '12px' }}>
          <h3 style={{ marginLeft: '5px' }}>PRICE</h3>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" /> RS.74 to RS.10056
            <span style={{ marginLeft: '10px', color: '#888' }}>(233088)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" /> RS.10056 to Rs.20038
            <span style={{ marginLeft: '10px', color: '#888' }}>(563)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" /> RS.20038 to Rs.30020
            <span style={{ marginLeft: '10px', color: '#888' }}>(31)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" /> RS.30020 to Rs.40002
            <span style={{ marginLeft: '10px', color: '#888' }}>(6)</span>
          </label>
          <div class="brands"></div>
          <hr style={{ width: '200px', marginLeft: '1px', marginTop: '1px' , color: '#888'}}></hr>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', fontFamily: 'Arial', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ marginLeft: '5px' }}>COLORS</h3>
            <img
              src='https://www.freeiconspng.com/uploads/search-icon-png-21.png'
              alt=''
              style={{
                cursor: 'pointer',
                width: '10px',
                height: '10px',
                marginRight: '10px',
              }}
            />
          </div>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" />Black
            <span style={{ marginLeft: '10px', color: '#888' }}>(33307)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" />Blue
            <span style={{ marginLeft: '10px', color: '#888' }}>(28369)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" />White
            <span style={{ marginLeft: '10px', color: '#888' }}>(27862)</span>
          </label>
          <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="category" value="rs" /> Green
            <span style={{ marginLeft: '10px', color: '#888' }}>(15000)</span>
          </label>
          <div class="brands"></div>
          <hr style={{ width: '200px', marginLeft: '1px', marginTop: '1px', color: '#888' }}></hr>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', fontFamily: 'Arial', fontSize: '12px' }}>
          <h3 style={{ marginLeft: '5px' }}>DISCOUNT RANGE</h3>
          <label className="radio-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="discount" value="10" />10% and above
            <span style={{ marginLeft: '10px', color: '#888' }}>(33307)</span>
          </label>
          <hr style={{ width: '1100px', marginLeft: '200px', marginTop: '4px', color: '#888' }}></hr>

          <label className="radio-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="discount" value="20" />20% and above
            <span style={{ marginLeft: '10px', color: '#888' }}>(28369)</span>
          </label>
          <label className="radio-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="discount" value="40" />40% and above
            <span style={{ marginLeft: '10px', color: '#888' }}>(27862)</span>
          </label>
          <label className="radio-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="discount" value="50" />50% and above
            <span style={{ marginLeft: '10px', color: '#888' }}>(15000)</span>
          </label>
          <div class="brands"></div>
          <hr style={{ width: '200px', marginLeft: '1px', marginTop: '4px', color: '#888' }}></hr>
        </div>
        <div className='midlebody'>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-450px', marginLeft: '20px' }}>
            <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg '
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Urbano Fashion</h3>
            <span
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: '200px',
                marginTop: '1px',
                color: '#888',
                cursor: 'pointer'
              }}
            >
              Slim Fit Tropical Printed Pure Cotton T-shirt
            </span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.497</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.599</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(55%OFF)</span>
            </div>
          </div>

          <div style={{ marginRight: '10px', marginTop: '-450px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial', marginLeft: '40px' }}>
            <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24454624/2023/9/1/c98f9297-0518-4eab-8423-fb29c18c4e281693549946114-Allen-Solly-Men-Black-Polo-Collar-T-shirt-3211693549945619-1.jpg'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Allen Solly</h3>
            <span style={{ marginTop: '1px', color: '#888', cursor: 'pointer' }}>Polo Coller T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.1019</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.1199</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(15%OFF)</span>
            </div>
          </div>

          <div style={{ marginRight: '50px', marginLeft: '40px', marginTop: '-450px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial' }}>
            <img src='https://lowpricesaree.in/wp-content/uploads/2022/04/roadster-men-navy-solid-round-neck-t-shirt.jpg'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Roadster</h3>
            <span style={{ marginTop: '1px', color: '#888', cursor: 'pointer' }}>Solid Round Neck T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.299</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.499</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(40%OFF)</span>
            </div>
          </div>

          <div style={{ marginLeft: '10px  ', marginTop: '-450px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial' }}>
            <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25744596/2023/11/3/bc8d5a97-38ef-4ee1-b14b-5b479836a0c01699005447177ElibolzMenBlackPrintedV-NeckPocketsT-shirt1.jpg'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Elibolz</h3>
            <span style={{ marginTop: '1px', color: '#888', cursor: 'pointer' }}>Cotton Oversized T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.499</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.799</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(RS.300 OFF)</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ marginLeft: '250px', marginTop: '-500px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial', fontSize: '12px' }}>
            <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/1/q/s-fbm396-41-fbar-original-imagtg3dsvkqskdn.jpeg?q=70'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>FBAR</h3>
            <span style={{ marginTop: '-5px', color: '#888', cursor: 'pointer' }}>V-Neck Pure Cotton T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.597</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.949</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(37% OFF)</span>
            </div>
          </div>

          <div style={{ marginLeft: '80px', marginTop: '-500px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial', fontSize: '12px' }}>
            <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/u/8/m-105-bewakoof-original-imagvzyqehxtjmgy.jpeg?q=70'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Bewakoof</h3>
            <span style={{ marginTop: '1px', color: '#888' }}>Pure Cotton T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.349</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.999</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(Rs.650 OFF)</span>
            </div>
          </div>

          <div style={{ marginLeft: '90px', marginTop: '-500px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial', fontSize: '12px' }}>
            <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25072178/2023/9/20/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.jpg'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Stormborn</h3>
            <span style={{ marginTop: '1px', color: '#888', cursor: 'pointer' }}>Pure Cotton Oversized T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.539</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.999</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(46% OFF)</span>
            </div>
          </div>

          <div style={{ marginLeft: '95px', marginTop: '-500px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial', fontSize: '12px' }}>
            <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11443762/2023/10/20/2410dd35-b393-41ed-a299-202feb71b3841697799334963JockeyMenWhiteSuperCombedCottonT-shirt1.jpg'
              style={{ cursor: 'pointer', display: 'block' }} width='200px' alt='' />
            <h3>Jockey</h3>
            <span style={{ marginTop: '1px', color: '#888', cursor: 'pointer' }}>Super Combed Cotton T-shirt</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4 style={{ margin: '' }}>RS.579</h4>
              <del style={{ color: '#888', marginLeft: '5px' }}>RS.1159</del>
              <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>(66% OFF)</span>
            </div>
          </div>
        </div>
      </div>
      <div className='page'>
        <label style={{ marginRight: '120px', color: '#888', fontFamily: 'Arial', fontSize: '14px' }}>Page 1 of 4693</label>
        <ul class="pagination">
          <li><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
          <li><button class="active">5</button></li>
          <li><button>6</button></li>
          <li><button>7</button></li>
          <li><button>8</button></li>
          <li><button>9</button></li>
          <li><button>10</button></li>
          <li><button style={{ marginLeft: '30px', border: '1px solid', width: '80px', fontWeight: 'bold' }}>NEXT</button></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
