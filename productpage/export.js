//to set non - veg and veg image
function customize() {
    return `   <!-- div for customization -->
            <div class="custom-parent">
              <div class="custom">
                <div class="custom-top">
                  <div id="custom-close"><i class="fas fa-times"></i></div>
                  <div>Customization</div>
                </div>
                <div class="custom-middle">
                       
                </div>
                <div class="custom-bottom">
                  <p>Apply</p>
                </div>
              </div>
            </div>
            <!-- end of customization div -->`;
}
function product_type(prod) {
     if (prod.type === 'veg') {
              
        
         return "https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png";
          } else {
         return  "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png";
          }
}


export {product_type,customize};