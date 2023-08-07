import React from 'react'


const NavBar = () => {
  return (
    <header>
      <div class="navbar">
        <div class="nav-logo border">
         <a href="/"><div class="logo"></div></a> 
        </div>
        <div class="nav-address border">
          <p class="add-first">Deliver to</p>
          <div class="add-icon">
            <i class="fa-solid fa-location-dot"></i>
            <p class="add-sec">India</p>
          </div>
        </div>
        <div class="nav-search">
          <select class="search-select">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" class="search-input" />
          <div class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class="nav-signin border">
          <p><span>Hello, Sign in</span></p>
          <p class="nav-sec">Account & Lists</p>
        </div>
        <div class="nav-return border">
          <p><span>Returns</span></p>
          <p class="nav-sec">& Orders</p>
        </div>

        <div class="nav-cart border">
          <i class="fa-solid fa-cart-shopping"></i>
          Cart
        </div>
      </div>

      <div class="panel">
        <div class="panel-all">
          <i class="fa-solid fa-bars"></i>
          All
        </div>
        <div class="panel-ops">
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>Gift Cards</p>
          <p>Sell</p>
        </div>
        <div class="panel-deals">Shop deals in Electronics</div>
      </div>
    </header>
  )
}

export default NavBar
