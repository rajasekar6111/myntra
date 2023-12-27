
import { useState } from 'react';
import './App.css';
import { ImageWithName, CheckboxWithName, Brandbox, Discountbox, Pricebox, ProductsImg } from './Page/Component/Components';

const TYPE = {
  Bundles: 'Bundles',
  Country: 'Country',
  Size: 'Size'
};
function App() {
  const [Bundles, setFilter] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className='header'>
        <div className='header-text'>
          <img src='https://cdn.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png' width='70px' alt='' />
          <h4>MEN</h4>
          <h4>WOMEN</h4>
          <h4>KIDS</h4>
          <h4>HOME & LIVING</h4>
          <h4>BEAUTY</h4>
          <div style={{ position: 'relative' }}>
            <h4 style={{ marginLeft: '60px', cursor: 'pointer', position: 'absolute', top: '1px', fontSize: '10px', color: ' rgb(231, 84, 128)' }}>
              NEW
            </h4>
            <h4>STUDIO</h4>
          </div>
        </div>

        <div className='flex' style={{ columnGap: '25px' }}>
          <ImageWithName name="Profile" img="https://icon-library.com/images/user-profile-icon/user-profile-icon-1.jpg" />
          <ImageWithName name="Wishlis" img="https://cdn4.iconfinder.com/data/icons/e-commerce-ui-outline/64/ecommerce_-_love_favorite-512.png" />
          <ImageWithName name="Bag" img="https://th.bing.com/th/id/R.221f444e27f88309ea3c7bd60935276c?rik=BSlcpmNFk3TSgA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjTx%2f6zo%2fjTx6zoqpc.png&ehk=xwgI27%2fMVn3tPj0J6zMu4VNqPR5b022rVcmfmUNgv2U%3d&risl=&pid=ImgRaw&r=0" />
        </div>
      </div>

      <div className='flex'>
        <div className='filters'>
          <div style={{ width: '200px', marginLeft: '20px' }}>
            <h3>Filters</h3>
          </div>

          <div className='flex' style={{ columnGap: '25px', cursor: 'pointer' }}>
            <label class="">
              <h4 onClick={() => handleFilterClick(TYPE.Bundles)}>Bundles</h4>
              {Bundles === TYPE.Bundles && <div> <input type="checkbox" name="category" value="tshirts" />Bundles</div>}
              {Bundles === TYPE.Bundles && <div> <input type="checkbox" name="category" value="tshirts" />Style Singles</div>}
              <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
            </label>

            <label class="">
              <h4 onClick={() => handleFilterClick(TYPE.Country)}>Country</h4>
              {Bundles === TYPE.Country && <div> <input type="checkbox" name="category" value="tshirts" />All Countries</div>}
              {Bundles === TYPE.Country && <div> <input type="checkbox" name="category" value="tshirts" />India</div>}
              <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
            </label>

            <label class="">
              <h4 onClick={() => handleFilterClick(TYPE.Size)}>Size</h4>
              {Bundles === TYPE.Size && <div> <input type="checkbox" name="category" value="L" />L</div>}
              {Bundles === TYPE.Size && <div> <input type="checkbox" name="category" value="M" />M</div>}
              {Bundles === TYPE.Size && <div> <input type="checkbox" name="category" value="S" />S</div>}
              {Bundles === TYPE.Size && <div> <input type="checkbox" name="category" value="XL" />XL</div>}
              {Bundles === TYPE.Size && <div> <input type="checkbox" name="category" value="XXL" />XXL</div>}
              <span class="atsa-downArrow sprites-arrowDownBold myntraweb-sprite"></span>
            </label>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* filter */}
      <div className='flex'>
        <div className='flex-column'>
          <CheckboxWithName title="Categories" />
          <Brandbox title="Brands" />
          <Pricebox title="Price" />
          <Discountbox title="Discount Range" />
        </div>

        <div className='products'>
          <div style={{ justifyContent: 'center', display: 'flex', columnGap: '85px', flexWrap: 'wrap', height: 'fit-content' }}>
            <ProductsImg img="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24454624/2023/9/1/c98f9297-0518-4eab-8423-fb29c18c4e281693549946114-Allen-Solly-Men-Black-Polo-Collar-T-shirt-3211693549945619-1.jpg"
              brand="Allen Solly" name="Polo Coller T-shirt" price="RS.1019" cprice="RS.1199" discount="(15%OFF)" />
          </div>
        </div>
      </div>

    </>
  );

  function handleFilterClick(type) {
    setFilter((prevFilter) => (prevFilter === type ? null : type));
  }
}

export default App;