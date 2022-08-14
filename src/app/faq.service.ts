import { Injectable } from '@angular/core';
import { FaqItem } from '@angular-material-extensions/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor() { }

  list: FaqItem[] = [
    {
          question: 'Mis õppeaine see on?',
          answer: 'Tegu on Tallinna ülikooli õppeainega Tarkvaraarenduse projekt (IFI6231.DT), mis on kohustuslik kõigile informaatikat õppivatele tudengitele.'
        },
        {
          question: 'Mis on selle õppeaine eesmärk?',
          answer: 'Üliõpilased moodustavad tarkvaraarenduse meeskonnad, kelle ülesandeks on toimiva tarkvara või selle osa arendamine alates nõuete väljaselgitamisest kuni testimiseni ning loovad tarkvaraarenduse tehiseid. Iga üliõpilane täidab arendusprotsessis rohkem kui ühte rolli. Üliõpilane reflekteerib oma kogemust ning õpib läbi tegevuse.'
        },
        {
          question: 'Kas iga projekt leiab teostaja?',
          answer: 'Kahjuks me seda garanteerida ei saa. Aine vastutatav õppejõud kontollib kõik ideed üle ning valib sellised, mis oleksid kooskõlas tudengite võimekuse ja aine mahuga.'
        },
        {
          question: 'Kas ka firmana võib projekti esitada?',
          answer: 'Võib, kuid siinkohal on tähtis meeles pidada, et tudengid ei ole vaid odav tööjõud. Kuna tegu on õppeprotsessiga peab olema valmis neid õppeaasta vältel toetama.'
        },
        {
          question: 'Kuidas ma tudengit toetama pean?',
          answer: 'Tudengitel on poolaasta vältel erinevad aineid, kus tuleb testida prototüüpe, teha persoonasid, koostada infosüsteeme ning selle kooskõlastamisel Sinu ideega vajavad nad abi- suunamise, suhtluse ja toetuse näol.'
        },
        {
          question: 'Kas ma peaksin kartma, et minu idee ära varastatakse?',
          answer: 'Ei, Tallinna Ülikool on hariduslik asutus ning õppeaine eesmärk on pakkuda õpilastele praktikat, mitte kasutada ideid ärilistel eesmärkidel.'
        }
  ];

  newFaqItem(faqItem: FaqItem) {
    this.list.push(faqItem);
  }

  getFaqItems(): FaqItem[] {
      return this.list.slice();
  }
}
