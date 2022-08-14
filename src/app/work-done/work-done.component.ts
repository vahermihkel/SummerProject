import { Component, OnInit } from '@angular/core';
import { AccessibilityConfig, Image, ImageEvent } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-work-done',
  templateUrl: './work-done.component.html',
  styleUrls: ['./work-done.component.css']
})
export class WorkDoneComponent implements OnInit {

  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = true;
  showDots = true;

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: '../../assets/tark_maja_pic.png',
        description: 'Arendasime projekti targa maja jaoks suvepraktika raames. Tarkvara eesmärk on tekitada inimestele võimalus oma elektriseadmete tarbimist paremini reguleerida. Kasutajal on võimalus valida oma elektriseadmetel teatud tingimused, näiteks mis kellaaegadel peab elektriseade kindlasti töötama, millise võimsuse juures lülitab seade end välja. Meie rakendus loob vastavalt kasutajate seatud tingimustele töögraafiku, millal seade töötab.',
        title: 'Tark-maja',
        alt: 'Tark-maja',
        ariaLabel: 'Tark-maja projekti pilt' 
      },
      { 
        img: '../../assets/tark_maja_pic.png',
        // description: 'Tark-maja',
        // title: 'Tark-maja',
        alt: 'Tark-maja pisipilt',
        ariaLabel: 'Tark-maja projekti pisipilt' 
      }
    ),
    new Image(
      1, 
      { 
        img: '../../assets/game_design_img.gif',
        description:"Mängu eesmärk on lahendada TLÜ Astra maja 4. korrusel DTI õppejõudude poolt antavaid ülesandeid ja teenida ainepunkte (EAP). Lõppeesmärk on lõpetada semester, ehk teenida 30EAPd. Mängu raskendamiseks on ka erinevad takistused (minigame'id), mis kaotavad EAPsid vastavalt sellele, kui hästi või halvasti minigame'i läbimine õnnestus.",
        title: 'Mängudisaini projekt',
        alt: 'Mängudisaini projekt',
        ariaLabel: 'Mängudisaini projekti pilt' 
      }, 
      {
        img: '../../assets/game_design_img.gif',
        // description: 'Mängudisaini projekt',
        // title: 'Mängudisaini projekt',
        alt: 'Mängudisaini projekt',
        ariaLabel: 'Tark-maja projekti pisipilt' 
      }
    ),
    new Image(
      2,
      {
        img: '../../assets/tantsumeka_pic.png',
        description: 'Lõime Tantsumekale uue ja tänapäevase veebilehe, mis toimiks ka nutiseadmetes. Klient soovis lehele uut disaini, poodi, foorumit ning registreerimisvormi.',
        title: 'Tantsumeka veebileht',
        alt: 'Tantsumeka veebileht',
        ariaLabel: 'Tantsumeka veebilehe pilt'
      },
      {
        img: '../../assets/tantsumeka_pic.png',
        // description: 'Tantsumeka veebileht',
        // title: 'Tantsumeka veebileht',
        alt: 'Tantsumeka veebileht',
        ariaLabel: 'Tantsumeka veebilehe pisipilt' 
      }
    ),
    new Image(
      3,
      {
        img: '../../assets/Stressikaart_pic.jpg',
        description: 'Eesmärk oli luua kliendile ajulainete ja GPSi andmete põhjal kaardirakendus, mis kuvab suhtelist stressitaset kohtades, kus on läbi viidud eksperiment. Eksperimendiks kasutatakse nutitelefoni (GPS andmete kogumiseks) ja Muse peavõru (ajulainete andmete kogumiseks). Selleks, et stressitaset kaardil kuvada, tuleb sisestada CSV failidena Muse andmed, GPX failidena Endomondo andmed ja need omavahel ühendada. Projekt on loodud Tallinna Ülikooli Digitehnoloogiate instituudis tarkvaraarenduse praktika kursuse raames.',
        title: 'Stressikaart',
        alt: 'Stressikaart',
        ariaLabel: 'Stressikaardi projekti pilt'
      },
      { 
        img: '../../assets/Stressikaart_pic.jpg',
        // description: 'Stressikaart',
        // title: 'Stressikaart',
        alt: 'Stressikaart',
        ariaLabel: 'Stressikaardi projekti pisipilt' }
    ),
    new Image(
      4,
      {
        img: '../../assets/tookeskkond_pic.jpg',
        description: 'Projekti eesmärgiks oli luua töötav lahendus töökeskkonna monitoorimiseks. Seade tegeleb temperatuuri, niiskuse ja valgustiheduse mõõtmisega. Peale seda saadab andmed andmebaasi ning veebilehel kuvatakse näidud juba tabeli- ja graafikukujul. Graafikul on ka näha alampiire. Üle/alla mille näitavad peavad olema. Projekt on loodud Digitehnoloogia Instituudi informaatika eriala esimese aasta Tarkvaraarenduse Praktika aine suvepraktika raames.',
        title: 'Töökeskkonna Monitoorimise Seade',
        alt: 'Töökeskkonna Monitoorimise Seade',
        ariaLabel: 'Töökeskkonna Monitoorimise Seade projekti pilt' 
      }, 
      { 
        img: '../../assets/tookeskkond_pic.jpg',
        // description: 'Töökeskkonna Monitoorimise Seade',
        // title: 'Töökeskkonna Monitoorimise Seade',
        alt: 'Töökeskkonna Monitoorimise Seade',
        ariaLabel: 'Töökeskkonna Monitoorimise Seade projekti pisipilt' 
      }
    ),
    new Image(
      5, 
      { 
        img: '../../assets/maatriks_pic.png',
        description:'Kliendi soov oli saada mugav ja lihtne maatriksite kalkulaator, mida saaks meiesugused tudengid kasutada. Valida on praegu võimalik kolme erineva maatriksi kalkulaatori vahel: tavaline maatriksite korrutamine, determinantide arvutamine ja pöördmaatriks. Lisaks lahendusele, on võimalik ka näha, kuidas arvutusprotsess käib. See projekt on loodud Tallinna Ülikoolis Digitehnoloogiate instituutis kursuse IFI6213.DT Tarkvaraarenduse praktika raames.',
        title: 'Maatriksi kalkulator',
        alt: 'Maatriksi kalkulator projekt',
        ariaLabel: 'Maatriksi kalkulator projekti pilt' 
      }, 
      {
        img: '../../assets/maatriks_pic.png',
        // description: 'Maatriksi kalkulator',
        // title: 'Maatriksi kalkulator',
        alt: 'Maatriksi kalkulator',
        ariaLabel: 'Maatriksi kalkulator projekti pisipilt' 
      }
    ),
    
  ];

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  addRandomImage() {
    const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImage];
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }

  // output evets
  onShow(event: ImageEvent) {
    console.log('show', event);
  }

  onFirstImage(event: ImageEvent) {
    console.log('firstImage', event);
  }

  onLastImage(event: ImageEvent) {
    console.log('lastImage', event);
  }

  ngOnInit(): void {
  }

}
