/**
 * Created by jasontll on 3/22/17.
 */
'use strict';
class EfcCalculator {
    constructor() {
        this._efcDependent = EfcCalculator.loadEfcDependent();
        this._efcIndWithoutChildren = EfcCalculator.loadEfcIndWithoutChildren();
        this._efcIndWithChildren = EfcCalculator.loadEfcIndWithChildren();
    }

    /**
     * Load EFC Dependent preset
     * Update this when new data is available
     * @returns {Array}
     */
    static loadEfcDependent() {
        let efcDependent = [];
        efcDependent[0] = {};
        efcDependent[0].numberInCollege = 1;
        efcDependent[0].numberInFamily = 2;
        efcDependent[0].incomeRanges = [];
        efcDependent[0].incomeRanges[0] = 0;
        efcDependent[0].incomeRanges[1] = 1320;
        efcDependent[0].incomeRanges[2] = 3154;
        efcDependent[0].incomeRanges[3] = 5229;
        efcDependent[0].incomeRanges[4] = 7662;
        efcDependent[0].incomeRanges[5] = 10812;
        efcDependent[0].incomeRanges[6] = 14171;
        efcDependent[0].incomeRanges[7] = 17485;
        efcDependent[0].incomeRanges[8] = 30825;
        efcDependent[1] = {};
        efcDependent[1].numberInCollege = 1;
        efcDependent[1].numberInFamily = 3;
        efcDependent[1].incomeRanges = [];
        efcDependent[1].incomeRanges[0] = 0;
        efcDependent[1].incomeRanges[1] = 689;
        efcDependent[1].incomeRanges[2] = 2616;
        efcDependent[1].incomeRanges[3] = 4625;
        efcDependent[1].incomeRanges[4] = 6961;
        efcDependent[1].incomeRanges[5] = 10003;
        efcDependent[1].incomeRanges[6] = 13482;
        efcDependent[1].incomeRanges[7] = 17061;
        efcDependent[1].incomeRanges[8] = 34809;
        efcDependent[2] = {};
        efcDependent[2].numberInCollege = 1;
        efcDependent[2].numberInFamily = 4;
        efcDependent[2].incomeRanges = [];
        efcDependent[2].incomeRanges[0] = 0;
        efcDependent[2].incomeRanges[1] = 1;
        efcDependent[2].incomeRanges[2] = 1655;
        efcDependent[2].incomeRanges[3] = 3607;
        efcDependent[2].incomeRanges[4] = 5739;
        efcDependent[2].incomeRanges[5] = 8285;
        efcDependent[2].incomeRanges[6] = 11608;
        efcDependent[2].incomeRanges[7] = 15170;
        efcDependent[2].incomeRanges[8] = 33976;
        efcDependent[3] = {};
        efcDependent[3].numberInCollege = 1;
        efcDependent[3].numberInFamily = 5;
        efcDependent[3].incomeRanges = [];
        efcDependent[3].incomeRanges[0] = 0;
        efcDependent[3].incomeRanges[1] = 0;
        efcDependent[3].incomeRanges[2] = 634;
        efcDependent[3].incomeRanges[3] = 2656;
        efcDependent[3].incomeRanges[4] = 4605;
        efcDependent[3].incomeRanges[5] = 6888;
        efcDependent[3].incomeRanges[6] = 9866;
        efcDependent[3].incomeRanges[7] = 13387;
        efcDependent[3].incomeRanges[8] = 31730;
        efcDependent[4] = {};
        efcDependent[4].numberInCollege = 1;
        efcDependent[4].numberInFamily = 6;
        efcDependent[4].incomeRanges = [];
        efcDependent[4].incomeRanges[0] = 0;
        efcDependent[4].incomeRanges[1] = 0;
        efcDependent[4].incomeRanges[2] = 0;
        efcDependent[4].incomeRanges[3] = 1072;
        efcDependent[4].incomeRanges[4] = 3041;
        efcDependent[4].incomeRanges[5] = 5141;
        efcDependent[4].incomeRanges[6] = 7572;
        efcDependent[4].incomeRanges[7] = 10780;
        efcDependent[4].incomeRanges[8] = 27384;
        efcDependent[5] = {};
        efcDependent[5].numberInCollege = 2;
        efcDependent[5].numberInFamily = 2;
        efcDependent[5].incomeRanges = [];
        efcDependent[5].incomeRanges[0] = 0;
        efcDependent[5].incomeRanges[1] = 1255;
        efcDependent[5].incomeRanges[2] = 2051.5;
        efcDependent[5].incomeRanges[3] = 3373.5;
        efcDependent[5].incomeRanges[4] = 4548;
        efcDependent[5].incomeRanges[5] = 0;
        efcDependent[5].incomeRanges[6] = 7419;
        efcDependent[5].incomeRanges[7] = 8582;
        efcDependent[5].incomeRanges[8] = 11461;
        efcDependent[6] = {};
        efcDependent[6].numberInCollege = 2;
        efcDependent[6].numberInFamily = 3;
        efcDependent[6].incomeRanges = [];
        efcDependent[6].incomeRanges[0] = 0;
        efcDependent[6].incomeRanges[1] = 630;
        efcDependent[6].incomeRanges[2] = 1631;
        efcDependent[6].incomeRanges[3] = 2703;
        efcDependent[6].incomeRanges[4] = 4078;
        efcDependent[6].incomeRanges[5] = 5826;
        efcDependent[6].incomeRanges[6] = 7516;
        efcDependent[6].incomeRanges[7] = 9092;
        efcDependent[6].incomeRanges[8] = 16754.5;
        efcDependent[7] = {};
        efcDependent[7].numberInCollege = 2;
        efcDependent[7].numberInFamily = 4;
        efcDependent[7].incomeRanges = [];
        efcDependent[7].incomeRanges[0] = 0;
        efcDependent[7].incomeRanges[1] = 227.5;
        efcDependent[7].incomeRanges[2] = 1284;
        efcDependent[7].incomeRanges[3] = 2333;
        efcDependent[7].incomeRanges[4] = 3556;
        efcDependent[7].incomeRanges[5] = 5198;
        efcDependent[7].incomeRanges[6] = 6850;
        efcDependent[7].incomeRanges[7] = 8636;
        efcDependent[7].incomeRanges[8] = 19523;
        efcDependent[8] = {};
        efcDependent[8].numberInCollege = 2;
        efcDependent[8].numberInFamily = 5;
        efcDependent[8].incomeRanges = [];
        efcDependent[8].incomeRanges[0] = 0;
        efcDependent[8].incomeRanges[1] = 0;
        efcDependent[8].incomeRanges[2] = 732;
        efcDependent[8].incomeRanges[3] = 1786;
        efcDependent[8].incomeRanges[4] = 2870;
        efcDependent[8].incomeRanges[5] = 4249;
        efcDependent[8].incomeRanges[6] = 5976;
        efcDependent[8].incomeRanges[7] = 7692;
        efcDependent[8].incomeRanges[8] = 18526;
        efcDependent[9] = {};
        efcDependent[9].numberInCollege = 2;
        efcDependent[9].numberInFamily = 6;
        efcDependent[9].incomeRanges = [];
        efcDependent[9].incomeRanges[0] = 0;
        efcDependent[9].incomeRanges[1] = 0;
        efcDependent[9].incomeRanges[2] = 1;
        efcDependent[9].incomeRanges[3] = 975;
        efcDependent[9].incomeRanges[4] = 2008;
        efcDependent[9].incomeRanges[5] = 3154;
        efcDependent[9].incomeRanges[6] = 4689;
        efcDependent[9].incomeRanges[7] = 6446;
        efcDependent[9].incomeRanges[8] = 16140;
        efcDependent[10] = {};
        efcDependent[10].numberInCollege = 3;
        efcDependent[10].numberInFamily = 3;
        efcDependent[10].incomeRanges = [];
        efcDependent[10].incomeRanges[0] = 2.5;
        efcDependent[10].incomeRanges[1] = 703;
        efcDependent[10].incomeRanges[2] = 1345;
        efcDependent[10].incomeRanges[3] = 2848;
        efcDependent[10].incomeRanges[4] = 3206;
        efcDependent[10].incomeRanges[5] = 9228;
        efcDependent[10].incomeRanges[6] = 5636;
        efcDependent[10].incomeRanges[7] = 7010;
        efcDependent[10].incomeRanges[8] = 7695;
        efcDependent[11] = {};
        efcDependent[11].numberInCollege = 3;
        efcDependent[11].numberInFamily = 4;
        efcDependent[11].incomeRanges = [];
        efcDependent[11].incomeRanges[0] = 0;
        efcDependent[11].incomeRanges[1] = 241;
        efcDependent[11].incomeRanges[2] = 993;
        efcDependent[11].incomeRanges[3] = 1731;
        efcDependent[11].incomeRanges[4] = 2622;
        efcDependent[11].incomeRanges[5] = 3682;
        efcDependent[11].incomeRanges[6] = 4966;
        efcDependent[11].incomeRanges[7] = 6133;
        efcDependent[11].incomeRanges[8] = 11248;
        efcDependent[12] = {};
        efcDependent[12].numberInCollege = 3;
        efcDependent[12].numberInFamily = 5;
        efcDependent[12].incomeRanges = [];
        efcDependent[12].incomeRanges[0] = 0;
        efcDependent[12].incomeRanges[1] = 71;
        efcDependent[12].incomeRanges[2] = 751;
        efcDependent[12].incomeRanges[3] = 1458;
        efcDependent[12].incomeRanges[4] = 2296;
        efcDependent[12].incomeRanges[5] = 3311;
        efcDependent[12].incomeRanges[6] = 4560;
        efcDependent[12].incomeRanges[7] = 5783;
        efcDependent[12].incomeRanges[8] = 13577;
        efcDependent[13] = {};
        efcDependent[13].numberInCollege = 3;
        efcDependent[13].numberInFamily = 6;
        efcDependent[13].incomeRanges = [];
        efcDependent[13].incomeRanges[0] = 0;
        efcDependent[13].incomeRanges[1] = 0;
        efcDependent[13].incomeRanges[2] = 120;
        efcDependent[13].incomeRanges[3] = 855;
        efcDependent[13].incomeRanges[4] = 1535.5;
        efcDependent[13].incomeRanges[5] = 2352;
        efcDependent[13].incomeRanges[6] = 3396;
        efcDependent[13].incomeRanges[7] = 4678.5;
        efcDependent[13].incomeRanges[8] = 11549;

        return efcDependent;
    }

    /**
     * Load EFC Independent Without Children preset
     * Update this when new data is available
     * @returns {Array}
     */
    static loadEfcIndWithoutChildren() {
        let efcIndWithoutDep = [];
        efcIndWithoutDep[0] = {};
        efcIndWithoutDep[0].numberInCollege = 1;
        efcIndWithoutDep[0].numberInFamily = 1;
        efcIndWithoutDep[0].incomeRanges = [];
        efcIndWithoutDep[0].incomeRanges[0] = 0;
        efcIndWithoutDep[0].incomeRanges[1] = 9183;
        efcIndWithoutDep[0].incomeRanges[2] = 13066;
        efcIndWithoutDep[0].incomeRanges[3] = 16885;
        efcIndWithoutDep[0].incomeRanges[4] = 20534.5;
        efcIndWithoutDep[0].incomeRanges[5] = 24189;
        efcIndWithoutDep[0].incomeRanges[6] = 27843.5;
        efcIndWithoutDep[0].incomeRanges[7] = 31784.5;
        efcIndWithoutDep[0].incomeRanges[8] = 46450;
        efcIndWithoutDep[1] = {};
        efcIndWithoutDep[1].numberInCollege = 1;
        efcIndWithoutDep[1].numberInFamily = 2;
        efcIndWithoutDep[1].incomeRanges = [];
        efcIndWithoutDep[1].incomeRanges[0] = 0;
        efcIndWithoutDep[1].incomeRanges[1] = 6158.5;
        efcIndWithoutDep[1].incomeRanges[2] = 9857;
        efcIndWithoutDep[1].incomeRanges[3] = 13706;
        efcIndWithoutDep[1].incomeRanges[4] = 17418;
        efcIndWithoutDep[1].incomeRanges[5] = 21187;
        efcIndWithoutDep[1].incomeRanges[6] = 25037;
        efcIndWithoutDep[1].incomeRanges[7] = 28831;
        efcIndWithoutDep[1].incomeRanges[8] = 42253;
        efcIndWithoutDep[2] = {};
        efcIndWithoutDep[2].numberInCollege = 2;
        efcIndWithoutDep[2].numberInFamily = 2;
        efcIndWithoutDep[2].incomeRanges = [];
        efcIndWithoutDep[2].incomeRanges[0] = 618;
        efcIndWithoutDep[2].incomeRanges[1] = 4505;
        efcIndWithoutDep[2].incomeRanges[2] = 6358;
        efcIndWithoutDep[2].incomeRanges[3] = 8292;
        efcIndWithoutDep[2].incomeRanges[4] = 10179.5;
        efcIndWithoutDep[2].incomeRanges[5] = 12073;
        efcIndWithoutDep[2].incomeRanges[6] = 13985;
        efcIndWithoutDep[2].incomeRanges[7] = 15865;
        efcIndWithoutDep[2].incomeRanges[8] = 21608;
        return efcIndWithoutDep;
    }

    /**
     * Load EFC Independent With Children preset
     * Update this when new data is available
     * @returns {Array}
     */
    static loadEfcIndWithChildren() {
        let efcIndWithDep = [];
        efcIndWithDep[0] = {};
        efcIndWithDep[0].numberInCollege = 1;
        efcIndWithDep[0].numberInFamily = 2;
        efcIndWithDep[0].incomeRanges = [];
        efcIndWithDep[0].incomeRanges[0] = 0;
        efcIndWithDep[0].incomeRanges[1] = 40;
        efcIndWithDep[0].incomeRanges[2] = 1747;
        efcIndWithDep[0].incomeRanges[3] = 3428;
        efcIndWithDep[0].incomeRanges[4] = 5473.5;
        efcIndWithDep[0].incomeRanges[5] = 7922;
        efcIndWithDep[0].incomeRanges[6] = 11054;
        efcIndWithDep[0].incomeRanges[7] = 14294.5;
        efcIndWithDep[0].incomeRanges[8] = 24174;
        efcIndWithDep[1] = {};
        efcIndWithDep[1].numberInCollege = 1;
        efcIndWithDep[1].numberInFamily = 3;
        efcIndWithDep[1].incomeRanges = [];
        efcIndWithDep[1].incomeRanges[0] = 0;
        efcIndWithDep[1].incomeRanges[1] = 0;
        efcIndWithDep[1].incomeRanges[2] = 908;
        efcIndWithDep[1].incomeRanges[3] = 2639;
        efcIndWithDep[1].incomeRanges[4] = 4409;
        efcIndWithDep[1].incomeRanges[5] = 6708.5;
        efcIndWithDep[1].incomeRanges[6] = 9828;
        efcIndWithDep[1].incomeRanges[7] = 13366;
        efcIndWithDep[1].incomeRanges[8] = 23115;
        efcIndWithDep[2] = {};
        efcIndWithDep[2].numberInCollege = 1;
        efcIndWithDep[2].numberInFamily = 4;
        efcIndWithDep[2].incomeRanges = [];
        efcIndWithDep[2].incomeRanges[0] = 0;
        efcIndWithDep[2].incomeRanges[1] = 0;
        efcIndWithDep[2].incomeRanges[2] = 0;
        efcIndWithDep[2].incomeRanges[3] = 1451;
        efcIndWithDep[2].incomeRanges[4] = 3112;
        efcIndWithDep[2].incomeRanges[5] = 5039;
        efcIndWithDep[2].incomeRanges[6] = 7496;
        efcIndWithDep[2].incomeRanges[7] = 10885;
        efcIndWithDep[2].incomeRanges[8] = 20833.5;
        efcIndWithDep[3] = {};
        efcIndWithDep[3].numberInCollege = 1;
        efcIndWithDep[3].numberInFamily = 5;
        efcIndWithDep[3].incomeRanges = [];
        efcIndWithDep[3].incomeRanges[0] = 0;
        efcIndWithDep[3].incomeRanges[1] = 0;
        efcIndWithDep[3].incomeRanges[2] = 0;
        efcIndWithDep[3].incomeRanges[3] = 119;
        efcIndWithDep[3].incomeRanges[4] = 1874;
        efcIndWithDep[3].incomeRanges[5] = 3574;
        efcIndWithDep[3].incomeRanges[6] = 5658;
        efcIndWithDep[3].incomeRanges[7] = 8341;
        efcIndWithDep[3].incomeRanges[8] = 18146;
        efcIndWithDep[4] = {};
        efcIndWithDep[4].numberInCollege = 1;
        efcIndWithDep[4].numberInFamily = 6;
        efcIndWithDep[4].incomeRanges = [];
        efcIndWithDep[4].incomeRanges[0] = 0;
        efcIndWithDep[4].incomeRanges[1] = 0;
        efcIndWithDep[4].incomeRanges[2] = 0;
        efcIndWithDep[4].incomeRanges[3] = 0;
        efcIndWithDep[4].incomeRanges[4] = 0;
        efcIndWithDep[4].incomeRanges[5] = 1751;
        efcIndWithDep[4].incomeRanges[6] = 3481;
        efcIndWithDep[4].incomeRanges[7] = 5582;
        efcIndWithDep[4].incomeRanges[8] = 14188;
        efcIndWithDep[5] = {};
        efcIndWithDep[5].numberInCollege = 2;
        efcIndWithDep[5].numberInFamily = 2;
        efcIndWithDep[5].incomeRanges = [];
        efcIndWithDep[5].incomeRanges[0] = 0;
        efcIndWithDep[5].incomeRanges[1] = 497;
        efcIndWithDep[5].incomeRanges[2] = 1354;
        efcIndWithDep[5].incomeRanges[3] = 2255;
        efcIndWithDep[5].incomeRanges[4] = 3411.5;
        efcIndWithDep[5].incomeRanges[5] = 4969;
        efcIndWithDep[5].incomeRanges[6] = 6476.5;
        efcIndWithDep[5].incomeRanges[7] = 8139;
        efcIndWithDep[5].incomeRanges[8] = 12783;
        efcIndWithDep[6] = {};
        efcIndWithDep[6].numberInCollege = 2;
        efcIndWithDep[6].numberInFamily = 3;
        efcIndWithDep[6].incomeRanges = [];
        efcIndWithDep[6].incomeRanges[0] = 0;
        efcIndWithDep[6].incomeRanges[1] = 97;
        efcIndWithDep[6].incomeRanges[2] = 941;
        efcIndWithDep[6].incomeRanges[3] = 1778;
        efcIndWithDep[6].incomeRanges[4] = 2791;
        efcIndWithDep[6].incomeRanges[5] = 4167;
        efcIndWithDep[6].incomeRanges[6] = 5912;
        efcIndWithDep[6].incomeRanges[7] = 7616;
        efcIndWithDep[6].incomeRanges[8] = 12567;
        efcIndWithDep[7] = {};
        efcIndWithDep[7].numberInCollege = 2;
        efcIndWithDep[7].numberInFamily = 4;
        efcIndWithDep[7].incomeRanges = [];
        efcIndWithDep[7].incomeRanges[0] = 0;
        efcIndWithDep[7].incomeRanges[1] = 0;
        efcIndWithDep[7].incomeRanges[2] = 329;
        efcIndWithDep[7].incomeRanges[3] = 1149;
        efcIndWithDep[7].incomeRanges[4] = 1995;
        efcIndWithDep[7].incomeRanges[5] = 3055;
        efcIndWithDep[7].incomeRanges[6] = 4490;
        efcIndWithDep[7].incomeRanges[7] = 6181;
        efcIndWithDep[7].incomeRanges[8] = 10767;
        efcIndWithDep[8] = {};
        efcIndWithDep[8].numberInCollege = 2;
        efcIndWithDep[8].numberInFamily = 5;
        efcIndWithDep[8].incomeRanges = [];
        efcIndWithDep[8].incomeRanges[0] = 0;
        efcIndWithDep[8].incomeRanges[1] = 0;
        efcIndWithDep[8].incomeRanges[2] = 0;
        efcIndWithDep[8].incomeRanges[3] = 545;
        efcIndWithDep[8].incomeRanges[4] = 1328;
        efcIndWithDep[8].incomeRanges[5] = 2195;
        efcIndWithDep[8].incomeRanges[6] = 3308;
        efcIndWithDep[8].incomeRanges[7] = 4847;
        efcIndWithDep[8].incomeRanges[8] = 9345.5;
        efcIndWithDep[9] = {};
        efcIndWithDep[9].numberInCollege = 2;
        efcIndWithDep[9].numberInFamily = 6;
        efcIndWithDep[9].incomeRanges = [];
        efcIndWithDep[9].incomeRanges[0] = 0;
        efcIndWithDep[9].incomeRanges[1] = 0;
        efcIndWithDep[9].incomeRanges[2] = 0;
        efcIndWithDep[9].incomeRanges[3] = 0;
        efcIndWithDep[9].incomeRanges[4] = 450;
        efcIndWithDep[9].incomeRanges[5] = 1189;
        efcIndWithDep[9].incomeRanges[6] = 1994;
        efcIndWithDep[9].incomeRanges[7] = 3034;
        efcIndWithDep[9].incomeRanges[8] = 7224.5;
        return efcIndWithDep;
    }

    calculateEfcDependent(numberInCollege, numberInFamily, householdIncome) {
        let efc = 0;
        for (let efcDependent of this._efcDependent) {
            if (efcDependent.numberInCollege === parseInt(numberInCollege) && efcDependent.numberInFamily === parseInt(numberInFamily)) {
                efc = efcDependent.incomeRanges[parseInt(householdIncome)];
                console.info('NIC:', numberInCollege, 'NIF:', numberInFamily, 'HI:', householdIncome);
                // console.info(efcDependent);
                console.info('Dependent EFC Score:', efc);
                break;
            }
        }
        return efc;
    }

    calculateEfcIndWithoutChildren(numberInCollege, numberInFamily, householdIncome) {

        let efc = 0;
        for (let efcIndWithoutChildren of this._efcIndWithoutChildren) {
            console.log(efcIndWithoutChildren);
            if (efcIndWithoutChildren.numberInCollege === parseInt(numberInCollege) && efcIndWithoutChildren.numberInFamily === parseInt(numberInFamily)) {
                efc = efcIndWithoutChildren.incomeRanges[parseInt(householdIncome)];
                console.info('NIC:', numberInCollege, 'NIF:', numberInFamily, 'HI:', householdIncome);
                console.info(efcIndWithoutChildren);
                console.info('Independent Without Children EFC Score:', efc);
                break;
            }
        }
        return efc;
    }

    calculateEfcIndWithChildren(numberInCollege, numberInFamily, householdIncome) {
        let efc = 0;
        console.info('NIC:', numberInCollege, 'NIF:', numberInFamily, 'HI:', householdIncome);
        for (let efcIndWithChildren of this._efcIndWithChildren) {
            if (efcIndWithChildren.numberInCollege === parseInt(numberInCollege) && efcIndWithChildren.numberInFamily === parseInt(numberInFamily)) {
                efc = efcIndWithChildren.incomeRanges[parseInt(householdIncome)];
                console.info(efcIndWithChildren);
                console.info('Independent with Children EFC Score:', efc);
                break;
            }
        }
        return efc;
    }
}

export default EfcCalculator;