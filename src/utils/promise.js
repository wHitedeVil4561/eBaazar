function getAddress(item,i) {
    // this.mapApiLoader.load().then(async() => {

    // this.response.forEach((item: any, index: number) => {
    //     const startlatlng = item.startLocation;
    //     let startgeoCoder = new google.maps.Geocoder();
    //     startgeoCoder.geocode({ location: startlatlng }, (res: any) => {
    //       item.startLocation = res[0]?.formatted_address;
    //       console.log(item.startLocation, 'start');
    //     });
    //     const endlatlng = item.endLocation;
    //     let endgeoCoder = new google.maps.Geocoder();
    //     endgeoCoder.geocode({ location: endlatlng }, (res: any) => {
    //       item.endLocation = res[0]?.formatted_address;
    //       console.log(item.endLocation, 'end');
    //     });
    // });
    // let result = this.response.map((item: any, index: number) => {
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        const startlatlng = item.startLocation;
      let startgeoCoder = new google.maps.Geocoder();
      startgeoCoder.geocode(
        { location: startlatlng },
        (res, status) => {
          console.log(res, status,'start');
          if (status == google.maps.GeocoderStatus.OK) {
            item.startLocation = res[0]?.formatted_address;
            const endlatlng = item.endLocation;
            startgeoCoder.geocode(
              { location: endlatlng },
              (res, status) => {
          console.log(res, status,'end');

                if (status == google.maps.GeocoderStatus.OK) {
                  console.log(endlatlng, res[0]?.formatted_address);
                  item.endLocation = res[0]?.formatted_address;
                  console.log(item.startLocation, 'start');
                  console.log(item.endLocation, 'end');
                  return resolve(item);
                } else {
                  return resolve(item);
                }
              }
            );
          } else {
            resolve(item);
          }
        }
      );
      }, 1001*i);
      // const startlatlng = item.startLocation;
      // let startgeoCoder = new google.maps.Geocoder();
      // startgeoCoder.geocode(
      //   { location: startlatlng },
      //   (res: any, status: string) => {
      //     console.log(res, status,'start');
      //     if (status == google.maps.GeocoderStatus.OK) {
      //       item.startLocation = res[0]?.formatted_address;
      //       const endlatlng = item.endLocation;
      //       startgeoCoder.geocode(
      //         { location: endlatlng },
      //         (res: any, status: string) => {
      //     console.log(res, status,'end');

      //           if (status == google.maps.GeocoderStatus.OK) {
      //             console.log(endlatlng, res[0]?.formatted_address);
      //             item.endLocation = res[0]?.formatted_address;
      //             console.log(item.startLocation, 'start');
      //             console.log(item.endLocation, 'end');
      //             return resolve(item);
      //           } else {
      //             return resolve(item);
      //           }
      //         }
      //       );
      //     } else {
      //       resolve(item);
      //     }
      //   }
      // );
    });
    // });
    // console.log(typeof result);
    // console.log(result);

    // Promise.all(result)
    // });
    // this.response.forEach((item:any)=>{
    //   item.startLocation = JSON.stringify(item.startLocation)
    //   item.endLocation = JSON.stringify(item.endLocation)
    // })
    this.datasource.data = this.response;
  }
   // console.log(JSON.parse(JSON.stringify(res?.result?.data)));
        // await this.mapApiLoader.load();
        // console.log(res.result?.vehicleNo);
        // this.response = res?.result?.data;
        // const result = this.a.map((listItem: any, i: number) => {
        //   console.log(i);
        //   let promise = this.getAddress(listItem,i);
        //   return promise;
        // });
        // const response: any = Promise.allSettled(result);
        // console.log(response, ':::::::RESPONSe');
        // response.then((res: any) => {
        //   console.log(res, '::::::::::::::::::::');
        //   const finalresponse = res.map((item: any) => item.value);
        //   this.datasource.data = finalresponse;
        // });
        //  console.log(response.h,"-------------");
        // a = [
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 27.95186, lng: 79.20196 },
  //     startLocation: { lat: 28.08097, lng: 79.28848 },
  //   },
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 27.94186, lng: 79.22196 },
  //     startLocation: { lat: 28.08197, lng: 79.18848 },
  //   },
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 24.95186, lng: 79.20196 },
  //     startLocation: { lat: 21.08097, lng: 79.28848 },
  //   },
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 29.95186, lng: 79.21196 },
  //     startLocation: { lat: 28.08097, lng: 73.28848 },
  //   },
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 29.95186, lng: 79.21196 },
  //     startLocation: { lat: 28.08097, lng: 73.28848 },
  //   },

  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 29.95186, lng: 79.21196 },
  //     startLocation: { lat: 28.08097, lng: 73.28848 },
  //   },
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 29.95186, lng: 79.21196 },
  //     startLocation: { lat: 28.08097, lng: 73.28848 },
  //   },
  //   {
  //     distance: '26.70',
  //     duration: '0.50',
  //     endLocation: { lat: 29.95186, lng: 79.21196 },
  //     startLocation: { lat: 28.08097, lng: 73.28848 },
  //   },
  // ];