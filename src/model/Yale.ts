
/**
 * Yale Bright Star catalog
 *
 * HR - Harvard Revised Number/Bright Star Number (natural id)
 * Name -  name
 * HD - HD catalog number
 * ADS - Aitken's Double Star Catalog id
 * varId - Variable star ID
 * raj2000 - Right Ascension (J2000)
 * dej2000 - Declination (J2000)
 * vMag - Visual magnitude
 * bvMag - b-v color
 * spType - Spectral type
 */
export interface IYale {

    hr: number;
    name: string;
    hd: number;
    ads: number | null;
    varId: string | null;
    raj2000: string;
    dej2000: string;
    vMag: number;
    bvMag: number;
    spType: string;
}