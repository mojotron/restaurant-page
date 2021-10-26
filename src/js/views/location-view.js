class LocationView {
  createMarkup() {
    return `
      <main class="location">
        <h2>Location</h2>
        <p>
          We are located inside the mall in the food court. Order our awesome bowl and
          be inspired for greatness!
        </p>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="500"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=arena%20centar%20zagreb&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            ><a href="https://fmovies-online.net">fmovies</a><br /><style>
              .mapouter {
                position: relative;
                text-align: right;
                height: 300px;
                width: 500px;
              }</style
            ><a href="https://www.embedgooglemap.net">inserting google maps</a
            ><style>
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 300px;
                width: 500px;
              }
            </style>
          </div>
        </div>

        <p>Soon we will open on new locations!</p>
      </main>
    `;
  }
}

export default new LocationView();
