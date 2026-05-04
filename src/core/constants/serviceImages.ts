import guclendirmeCalismalar from '../../assets/main/anasayfaguclendirme.jpeg';
import suYalitimHizmetler from '../../assets/main/ankarasuyalitimi.jpeg';
import zeminKaplamaSistem from '../../assets/main/anasayfazeminkaplama.jpeg';
import yapiKimyasallari from '../../assets/hizmetler/yapıveteknik/yapi-kimyasallari.png';
import anaSayfaAnahtarTeslim from '../../assets/main/anasayfaanahtarteslim.jpeg';

import guclendirmeHiz from '../../assets/hizmetler/yapıveteknik/guclendirmehiz.jpeg';
import suyalitimHiz from '../../assets/main/ankarasuyalitimi.jpeg';
import zeminHiz from '../../assets/hizmetler/yapıveteknik/zeminkaplamahiz.jpeg';
import cepheMantolamaHiz from '../../assets/hizmetler/yapıveteknik/dıscephemantolamahiz.png';
import catiYenilemeHiz from '../../assets/hizmetler/yapıveteknik/catiyenilemehiz.jpeg';
import tadilatYenilemeHiz from '../../assets/hizmetler/mimarivedekoratif/tadilatyenilemehiz.jpeg';
import cepheBoyamaHiz from '../../assets/hizmetler/mimarivedekoratif/cepheboyamahiz.jpeg';
import alciAlcipanHiz from '../../assets/hizmetler/mimarivedekoratif/alcialcipanhiz.jpeg';
import anahtarTeslimHiz from '../../assets/hizmetler/mimarivedekoratif/anahtarteslimhiz.jpeg';

/** Ana hero ve özet kartları (`src/assets/main/`) */
export const serviceImageUrls = {
  guclendirmeCalismalar,
  suYalitimHizmetler,
  zeminKaplamaSistem,
  yapiKimyasallari,
  anaSayfaAnahtarTeslim,
} as const;

/** Hizmet detay sayfası fotoğrafları (`src/assets/hizmetler/`) */
export const hizmetPhotoUrls = {
  guclendirme: guclendirmeHiz,
  suYalitim: suyalitimHiz,
  zeminKaplama: zeminHiz,
  cepheMantolama: cepheMantolamaHiz,
  catiYenileme: catiYenilemeHiz,
  tadilatYenileme: tadilatYenilemeHiz,
  cepheBoyama: cepheBoyamaHiz,
  alciAlcipan: alciAlcipanHiz,
  anahtarTeslim: anahtarTeslimHiz,
} as const;
