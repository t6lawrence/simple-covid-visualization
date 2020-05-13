/*  Constants File
 *
 *  Taylor Lawrence
 *  May 12, 2020
 */

// Number each state
const AL = 0;
const AK = 1;
const AZ = 2;
const AR = 3;
const CA = 4;
const CO = 5;
const CT = 6;
const DE = 7;
const FL = 8;
const GA = 9;
const HI = 10;
const ID = 11;
const IL = 12;
const IN = 13;
const IA = 14;
const KS = 15;
const KY = 16;
const LA = 17;
const ME = 18;
const MD = 19;
const MA = 20;
const MI = 21;
const MN = 22;
const MS = 23;
const MO = 24;
const MT = 25;
const NE = 26;
const NV = 27;
const NH = 28;
const NJ = 29;
const NM = 30;
const NY = 31;
const NC = 32;
const ND = 33;
const OH = 34;
const OK = 35;
const OR = 36;
const PA = 37;
const RI = 38;
const SC = 39;
const SD = 40;
const TN = 41;
const TX = 42;
const UT = 43;
const VT = 44;
const VA = 45;
const WA = 46;
const WV = 47;
const WI = 48;
const WY = 49;

// Region names for filters
const NEW_ENGLAND_TEXT = 'New England';
const GREAT_LAKES_TEXT = 'Great Lakes';
const EAST_COAST_TEXT = 'East Coast';
const SOUTHEAST_TEXT = 'Southeast';
const GULF_COAST_TEXT = 'Gulf Coast';
const MIDWEST_TEXT = 'Midwest';
const TORNADO_ALLEY_TEXT = 'Tornado Alley';
const ROCKY_MOUNTAINS_TEXT = 'Rocky Mountains';
const PACIFIC_NORTHWEST_TEXT = 'Pacific Northwest';
const WEST_COAST_TEXT = 'West Coast';
const SOUTHWEST_TEXT = 'Southwest';
const NONCONTIGUOUS_TEXT = 'Noncontiguous States';

export const REGION_TEXT = [
  NEW_ENGLAND_TEXT,
  GREAT_LAKES_TEXT,
  EAST_COAST_TEXT,
  SOUTHEAST_TEXT,
  GULF_COAST_TEXT,
  MIDWEST_TEXT,
  TORNADO_ALLEY_TEXT,
  ROCKY_MOUNTAINS_TEXT,
  PACIFIC_NORTHWEST_TEXT,
  WEST_COAST_TEXT,
  SOUTHWEST_TEXT,
  NONCONTIGUOUS_TEXT,
];

// Which state is in which region (states can be in more than one)
const NEW_ENGLAND = [ME, NH, VT, MA, CT, NH];
const GREAT_LAKES = [NY, PA, OH, MI, IN, IL, WI];
const EAST_COAST = [ME, NH, MA, RI, CT, NY, NJ, DE, MD, VA, NC, SC, GA, FL];
const SOUTHEAST = [VA, WV, KY, TN, AR, LA, MS, AL, GA, NC, SC, FL];
const GULF_COAST = [FL, AL, MS, LA, TX];
const MIDWEST = [OH, WV, MI, IN, IL, WI, MN, IA, MO];
const TORNADO_ALLEY = [TX, OK, KS, NE, SD, ND];
const ROCKY_MOUNTAINS = [MT, ID, WY, CO, UT, NV];
const PACIFIC_NORTHWEST = [WA, OR, ID];
const WEST_COAST = [CA, OR, WA, AK];
const SOUTHWEST = [CA, AZ, NM, TX];
const NONCONTIGUOUS = [AK, HI];

export const ALL_REGIONS = {
  [NEW_ENGLAND_TEXT]: NEW_ENGLAND,
  [GREAT_LAKES_TEXT]: GREAT_LAKES,
  [EAST_COAST_TEXT]: EAST_COAST,
  [SOUTHEAST_TEXT]: SOUTHEAST,
  [GULF_COAST_TEXT]: GULF_COAST,
  [MIDWEST_TEXT]: MIDWEST,
  [TORNADO_ALLEY_TEXT]: TORNADO_ALLEY,
  [ROCKY_MOUNTAINS_TEXT]: ROCKY_MOUNTAINS,
  [PACIFIC_NORTHWEST_TEXT]: PACIFIC_NORTHWEST,
  [WEST_COAST_TEXT]: WEST_COAST,
  [SOUTHWEST_TEXT]:SOUTHWEST,
  [NONCONTIGUOUS_TEXT]: NONCONTIGUOUS,
};