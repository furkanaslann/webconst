import guclendirmeref1 from '../../assets/referanslar/guclendirme/guclendirmeref1.jpeg';
import guclendirmeref2 from '../../assets/referanslar/guclendirme/guclendirmeref2.jpeg';
import zeminref1 from '../../assets/referanslar/zeminkaplama/zeminref1.jpeg';
import zeminref2 from '../../assets/referanslar/zeminkaplama/zeminref2.jpeg';
import zeminref3 from '../../assets/referanslar/zeminkaplama/zeminref3.jpeg';
import nigdeborref from '../../assets/referanslar/nigdeborref.jpeg';
import suyalitimhiz from '../../assets/hizmetler/yapıveteknik/suyalitimhiz.jpeg';
import catiyenilemehiz from '../../assets/hizmetler/yapıveteknik/catiyenilemehiz.jpeg';
import alcialcipanhiz from '../../assets/hizmetler/mimarivedekoratif/alcialcipanhiz.jpeg';
import anahtarteslimhiz from '../../assets/hizmetler/mimarivedekoratif/anahtarteslimhiz.jpeg';

/** Referans kartları ve kategori görselleri */
export const referenceImageUrls = {
  guclendirme: [guclendirmeref1.src, guclendirmeref2.src],
  suYalitim: suyalitimhiz.src,
  zeminKaplama: [zeminref1.src, zeminref2.src, zeminref3.src],
  cati: catiyenilemehiz.src,
  icMekan: alcialcipanhiz.src,
  anahtarTeslim: anahtarteslimhiz.src,
  nigdeBorFerbis: nigdeborref.src,
} as const;
