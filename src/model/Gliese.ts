
/**
 * Gliese Catalog (1991 update)
 *
 * name - name (not necessarily unique)(natural id)
 * rab1950 - Right Ascension (B1950)
 * deb1950 - Declination (B1950)
 * pm - proper motion
 * pmPa - direction of proper motion
 * rv - radial velocity
 * sp - spectral type
 * vMag - apparent (visual) magnitude
 * bvMag - color
 * plx - resulting parallax
 * raIcrs - Right Ascension (ICRS)
 * deIcrs - Declination (ICRS)
 */
export interface IGliese {

    name: string;
    rab1950: number;
    deb1950: number;
    pm : number;
    pmPa: number;
    rv : number | null;
    sp: string | null;
    vMag: string;
    bvMag : string | null;
    plx: number;
    raIcrs : string;
    deIcrs : string;

}