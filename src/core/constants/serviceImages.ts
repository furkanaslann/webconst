import guclendirmeCalismalar from '../../assets/main/guclendirme-calismalar.png';
import suYalitimHizmetler from '../../assets/main/su-yalitim-hizmetler.png';
import zeminKaplamaSistem from '../../assets/main/zemin-kaplama-sistem.png';
import yapiKimyasallari from '../../assets/main/yapi-kimyasallari.png';

import guclendirmeHiz from '../../assets/hizmetler/yapıveteknik/guclendirmehiz.jpeg';
import suyalitimHiz from '../../assets/hizmetler/yapıveteknik/suyalitimhiz.jpeg';
import zeminHiz from '../../assets/hizmetler/yapıveteknik/zeminhiz.jpeg';
import cepheMantolamaHiz from '../../assets/hizmetler/yapıveteknik/cephemantolamahiz.jpeg';
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
