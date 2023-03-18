<template>
    <div></div>
</template>

<script>

  import admob from 'cordova-admob/www/admob'
  // import admob from '@awesome-cordova-plugins/admob/ngx'

  export default  {
    created(){
      //if(Window.cordova) // se cordova definido dispara banner
        return this.fireBanner()
    },
    methods : {
      fireBanner() {
        admob.setOptions({
          publisherId:           "ca-app-pub-6515701583756658~3507694388",  // Required id aplicativo
          //publisherId:           "ca-app-pub-6515701583756658/5948604012",  // Required banner id
          // publisherId:           "ca-app-pub-3940256099942544/6300978111",  // Required Chave de Teste
          //interstitialAdId:      "ca-app-pub-3940256099942544/1033173712",  // Optional
          autoShowBanner:        true,                                      // Optional
          // autoShowRInterstitial: false,                                     // Optional
          //autoShowRewarded:      false,                                     // Optional
          //tappxIdiOS:            "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
          //tappxIdAndroid:        "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
          //tappxShare:            0.5                                        // Optional
        });

        admob.createBannerView();

      }
    }

  }
</script>
